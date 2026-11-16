/**
 * StudentMart - Login / Register page
 */

(function () {
  'use strict';

  // Use the same saved theme as the marketplace
  const savedTheme = localStorage.getItem('sm_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Already logged in? Go straight to the marketplace
  if (Auth.getCurrentUser()) {
    window.location.href = 'index.html';
    return;
  }

  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const loginTab = document.getElementById('showLoginTab');
  const registerTab = document.getElementById('showRegisterTab');
  const authNotice = document.getElementById('authNotice');

  // -------------------------------------------------------------
  // Helpers
  // -------------------------------------------------------------
  function showForm(formName) {
    const showLogin = formName === 'login';
    loginForm.classList.toggle('hidden', !showLogin);
    registerForm.classList.toggle('hidden', showLogin);
    loginTab.classList.toggle('active', showLogin);
    registerTab.classList.toggle('active', !showLogin);
    clearErrors(loginForm);
    clearErrors(registerForm);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFieldError(input, message) {
    input.classList.add('has-error');
    input.parentElement.querySelector('.field-error').textContent = message;
  }

  function showFormMessage(form, message) {
    const box = form.querySelector('.form-message');
    box.textContent = message;
    box.classList.remove('hidden');
  }

  function clearErrors(form) {
    form.querySelectorAll('input').forEach((input) => input.classList.remove('has-error'));
    form.querySelectorAll('.field-error').forEach((error) => (error.textContent = ''));
    form.querySelector('.form-message').classList.add('hidden');
  }

  function goToMarketplace() {
    window.location.href = 'index.html';
  }

  // -------------------------------------------------------------
  // Login
  // -------------------------------------------------------------
  async function handleLogin(e) {
    e.preventDefault();
    clearErrors(loginForm);

    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    let isValid = true;

    if (!isValidEmail(emailInput.value.trim())) {
      showFieldError(emailInput, 'Enter a valid email address.');
      isValid = false;
    }
    if (!passwordInput.value) {
      showFieldError(passwordInput, 'Enter your password.');
      isValid = false;
    }
    if (!isValid) return;

    try {
      const result = await Auth.login(emailInput.value, passwordInput.value);
      if (!result.ok) {
        showFormMessage(loginForm, result.error);
        return;
      }
      goToMarketplace();
    } catch (err) {
      console.error(err);
      showFormMessage(loginForm, 'Something went wrong. Please try again.');
    }
  }

  // -------------------------------------------------------------
  // Registration
  // -------------------------------------------------------------
  async function handleRegister(e) {
    e.preventDefault();
    clearErrors(registerForm);

    const nameInput = document.getElementById('registerName');
    const emailInput = document.getElementById('registerEmail');
    const passwordInput = document.getElementById('registerPassword');
    const confirmInput = document.getElementById('registerConfirm');
    let isValid = true;

    if (nameInput.value.trim().length < 2) {
      showFieldError(nameInput, 'Enter your full name (at least 2 characters).');
      isValid = false;
    }
    if (!isValidEmail(emailInput.value.trim())) {
      showFieldError(emailInput, 'Enter a valid email address.');
      isValid = false;
    }
    if (passwordInput.value.length < 6) {
      showFieldError(passwordInput, 'Password must be at least 6 characters.');
      isValid = false;
    }
    if (confirmInput.value !== passwordInput.value) {
      showFieldError(confirmInput, 'Passwords do not match.');
      isValid = false;
    }
    if (!isValid) return;

    try {
      const result = await Auth.register(nameInput.value, emailInput.value, passwordInput.value);
      if (!result.ok) {
        showFormMessage(registerForm, result.error);
        return;
      }
      goToMarketplace();
    } catch (err) {
      console.error(err);
      showFormMessage(registerForm, 'Could not create your account. Please try again.');
    }
  }

  // -------------------------------------------------------------
  // Events
  // -------------------------------------------------------------
  loginTab.addEventListener('click', () => showForm('login'));
  registerTab.addEventListener('click', () => showForm('register'));
  document.getElementById('goToLogin').addEventListener('click', () => showForm('login'));
  document.getElementById('goToRegister').addEventListener('click', () => showForm('register'));
  loginForm.addEventListener('submit', handleLogin);
  registerForm.addEventListener('submit', handleRegister);

  // Explain why the user was sent here (e.g. clicked "Sell Item" while logged out)
  const reason = new URLSearchParams(window.location.search).get('reason');
  const notices = {
    sell: 'Please log in or create an account to sell items.',
    listings: 'Please log in to see your listings.'
  };
  if (notices[reason]) {
    authNotice.textContent = notices[reason];
    authNotice.classList.remove('hidden');
  }
})();
