/**
 * StudentMart - Auth helpers (users + login session)
 * Shared by index.html and login.html.
 *
 * Note: this is a front-end only project, so accounts live in localStorage.
 * Passwords are salted and hashed (never stored as plain text), but a real
 * production app would need a backend server for proper security.
 */

const Auth = (function () {
  'use strict';

  const USERS_KEY = 'sm_users_v1';
  const SESSION_KEY = 'sm_session_v1';

  function getUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    } catch (err) {
      return [];
    }
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function makeRandomId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  async function hashPassword(password, salt) {
    const bytes = new TextEncoder().encode(salt + password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', bytes);
    return Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
  }

  // Returns the logged-in user (without password data), or null
  function getCurrentUser() {
    const userId = localStorage.getItem(SESSION_KEY);
    if (!userId) return null;

    const user = getUsers().find((u) => u.id === userId);
    if (!user) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }
    return { id: user.id, name: user.name, email: user.email };
  }

  async function register(name, email, password) {
    const cleanEmail = email.trim().toLowerCase();
    const users = getUsers();

    if (users.some((u) => u.email === cleanEmail)) {
      return { ok: false, error: 'An account with this email already exists. Try logging in instead.' };
    }

    const salt = makeRandomId();
    const newUser = {
      id: 'u-' + makeRandomId(),
      name: name.trim(),
      email: cleanEmail,
      salt: salt,
      passwordHash: await hashPassword(password, salt),
      createdAt: Date.now()
    };

    users.push(newUser);
    saveUsers(users);
    localStorage.setItem(SESSION_KEY, newUser.id);

    return { ok: true };
  }

  async function login(email, password) {
    const cleanEmail = email.trim().toLowerCase();
    const user = getUsers().find((u) => u.email === cleanEmail);

    // Same message for unknown email and wrong password
    const wrongDetails = { ok: false, error: 'Incorrect email or password. Please try again.' };
    if (!user) return wrongDetails;

    const hash = await hashPassword(password, user.salt);
    if (hash !== user.passwordHash) return wrongDetails;

    localStorage.setItem(SESSION_KEY, user.id);
    return { ok: true };
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
  }

  return { getCurrentUser, register, login, logout };
})();
