/**
 * StudentMart - Campus Marketplace
 * Pure Vanilla JavaScript (No frameworks or dependencies)
 */

(function () {
  'use strict';

  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // Seed Catalog (Realistic campus essentials in INR)
  // -------------------------------------------------------------
  // Illustration for the foldable bed study table (inline, always loads)
  const BED_TABLE_IMAGE = 'data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 450%22%3E%0A%3Cdefs%3E%3ClinearGradient id=%22bg%22 x1=%220%22 y1=%220%22 x2=%220%22 y2=%221%22%3E%3Cstop offset=%220%22 stop-color=%22%23eef2f7%22/%3E%3Cstop offset=%221%22 stop-color=%22%23dde4ee%22/%3E%3C/linearGradient%3E%0A%3ClinearGradient id=%22wood%22 x1=%220%22 y1=%220%22 x2=%220%22 y2=%221%22%3E%3Cstop offset=%220%22 stop-color=%22%23d9a566%22/%3E%3Cstop offset=%221%22 stop-color=%22%23b9824a%22/%3E%3C/linearGradient%3E%3C/defs%3E%0A%3Crect width=%22600%22 height=%22450%22 fill=%22url%28%23bg%29%22/%3E%0A%3Crect x=%220%22 y=%22360%22 width=%22600%22 height=%2290%22 fill=%22%23c9d3e0%22/%3E%0A%3Cellipse cx=%22300%22 cy=%22385%22 rx=%22210%22 ry=%2214%22 fill=%22%23000%22 opacity=%22.12%22/%3E%0A%3Cg stroke=%22%238a5a2b%22 stroke-width=%2210%22 stroke-linecap=%22round%22%3E%3Cline x1=%22170%22 y1=%22260%22 x2=%22140%22 y2=%22372%22/%3E%3Cline x1=%22430%22 y1=%22260%22 x2=%22460%22 y2=%22372%22/%3E%3Cline x1=%22200%22 y1=%22260%22 x2=%22250%22 y2=%22372%22 stroke-width=%228%22/%3E%3Cline x1=%22400%22 y1=%22260%22 x2=%22350%22 y2=%22372%22 stroke-width=%228%22/%3E%3C/g%3E%0A%3Cg stroke=%22%236e4620%22 stroke-width=%226%22 stroke-linecap=%22round%22%3E%3Cline x1=%22150%22 y1=%22335%22 x2=%22450%22 y2=%22335%22 opacity=%22.0%22/%3E%3Cline x1=%22140%22 y1=%22372%22 x2=%22170%22 y2=%22372%22/%3E%3Cline x1=%22430%22 y1=%22372%22 x2=%22460%22 y2=%22372%22/%3E%3Cline x1=%22250%22 y1=%22372%22 x2=%22270%22 y2=%22372%22/%3E%3Cline x1=%22330%22 y1=%22372%22 x2=%22350%22 y2=%22372%22/%3E%3C/g%3E%0A%3Cpolygon points=%22110,235 490,235 520,268 80,268%22 fill=%22url%28%23wood%29%22 stroke=%22%238a5a2b%22 stroke-width=%223%22/%3E%0A%3Crect x=%2280%22 y=%22268%22 width=%22440%22 height=%2212%22 rx=%223%22 fill=%22%23a06f3b%22/%3E%0A%3Crect x=%22215%22 y=%22241%22 width=%22170%22 height=%229%22 rx=%223%22 fill=%22%238a5a2b%22 opacity=%22.55%22/%3E%0A%3Cpolygon points=%22212,236 388,236 400,200 200,200%22 fill=%22%238a5a2b%22 opacity=%22.25%22/%3E%0A%3Cg%3E%3Cpolygon points=%22215,232 385,232 405,128 195,128%22 fill=%22%232f3542%22/%3E%3Cpolygon points=%22223,226 377,226 394,136 206,136%22 fill=%22%234aa3df%22/%3E%3Cpolygon points=%22223,226 377,226 394,136 206,136%22 fill=%22%23fff%22 opacity=%22.12%22/%3E%3Cpolygon points=%22200,232 400,232 412,246 188,246%22 fill=%22%23aeb6c2%22/%3E%3Crect x=%22278%22 y=%22236%22 width=%2244%22 height=%225%22 rx=%222%22 fill=%22%238b94a3%22/%3E%3C/g%3E%0A%3Cg%3E%3Crect x=%22430%22 y=%22196%22 width=%2240%22 height=%2238%22 rx=%225%22 fill=%22%23fff%22 stroke=%22%239aa5b5%22 stroke-width=%223%22/%3E%3Cpath d=%22M470 205 q16 0 16 14 q0 14 -16 14%22 fill=%22none%22 stroke=%22%239aa5b5%22 stroke-width=%224%22/%3E%3Crect x=%22434%22 y=%22200%22 width=%2232%22 height=%228%22 rx=%223%22 fill=%22%237b4a2a%22/%3E%3Cpath d=%22M440 190 q-6 -10 0 -18 M452 190 q-6 -10 0 -18%22 fill=%22none%22 stroke=%22%239aa5b5%22 stroke-width=%223%22 stroke-linecap=%22round%22 opacity=%22.7%22/%3E%3C/g%3E%0A%3Crect x=%22110%22 y=%22224%22 width=%2270%22 height=%2212%22 rx=%223%22 fill=%22%23e5eaf1%22 stroke=%22%239aa5b5%22 stroke-width=%222%22 transform=%22rotate%28-8 145 230%29%22/%3E%0A%3C/svg%3E';
  const OLD_BED_TABLE_IMAGE = 'https://images.unsplash.com/photo-1646953482850-901edd576c0e?w=600&auto=format&fit=crop&q=80';

  const INITIAL_PRODUCTS = [
    {
      id: 'p-1',
      title: 'Higher Engineering Mathematics (44th Ed) - B.S. Grewal',
      category: 'Books and Notes',
      price: 350,
      condition: 'Good',
      location: 'Central Library / North Quad',
      seller: 'Maya Patel (Math \'25)',
      contact: 'mpatel@campus.edu',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80',
      description: 'Used for Engineering Mathematics I & II. Few pencil markings, intact binding with zero missing pages. Formula cheat sheet included.',
      createdAt: Date.now() - 1000 * 60 * 60 * 4
    },
    {
      id: 'p-2',
      title: 'Data Structures & Algorithms Handwritten Revision Notes',
      category: 'Books and Notes',
      price: 120,
      condition: 'Like New',
      location: 'CS Department Block B',
      seller: 'Rohit Verma (BCA \'25)',
      contact: 'rohit.v@campus.edu',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80',
      description: 'Complete unit-wise syllabus coverage with code snippets, tree/graph diagrams, and previous year exam questions solved.',
      createdAt: Date.now() - 1000 * 60 * 60 * 8
    },
    {
      id: 'p-3',
      title: 'Sony Wireless Noise Cancelling Over-Ear Headphones',
      category: 'Electronics and Gadgets',
      price: 2499,
      condition: 'Like New',
      location: 'Boys Hostel 3 / Common Room',
      seller: 'David Chen (CS \'26)',
      contact: '9876543210',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
      description: 'Excellent battery life (30+ hours) and active noise cancellation for long study sessions. Auxiliary cable and protective pouch included.',
      createdAt: Date.now() - 1000 * 60 * 60 * 12
    },
    {
      id: 'p-4',
      title: 'Casio fx-991EX ClassWiz Scientific Calculator',
      category: 'Electronics and Gadgets',
      price: 850,
      condition: 'Like New',
      location: 'Student Center Lounge',
      seller: 'Aarav Sharma (Eng \'26)',
      contact: 'aarav.s@campus.edu',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80',
      description: 'Natural textbook display, 552 functions with matrix and vector calculations. Protective hard case included. Works perfectly.',
      createdAt: Date.now() - 1000 * 60 * 60 * 18
    },
    {
      id: 'p-5',
      title: 'Complete Engineering Mini Drafter & Geometry Drawing Set',
      category: 'Stationery',
      price: 280,
      condition: 'Good',
      location: 'Mechanical Workshop Gate',
      seller: 'Vikas Kumar (BTech \'26)',
      contact: 'vikas.k@campus.edu',
      image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=600&auto=format&fit=crop&q=80',
      description: 'Original drafting arm with stainless steel clamps and scale ruler. Includes compass box and protective carrying bag.',
      createdAt: Date.now() - 1000 * 60 * 60 * 24
    },
    {
      id: 'p-6',
      title: 'Waterproof College Laptop Backpack (28L with USB port)',
      category: 'Clothing and Bags',
      price: 650,
      condition: 'Like New',
      location: 'Student Union Cafeteria',
      seller: 'Zoe Campbell (Arts \'26)',
      contact: 'zoe.c@campus.edu',
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80',
      description: 'Padded compartment fits up to 15.6-inch laptop. Rain cover included, ergonomic shoulder straps, and anti-theft back pocket.',
      createdAt: Date.now() - 1000 * 60 * 60 * 36
    },
    {
      id: 'p-7',
      title: 'Official College Laboratory Apron / Lab Coat (Size M)',
      category: 'Clothing and Bags',
      price: 180,
      condition: 'Good',
      location: 'Chemistry Lab B1',
      seller: 'Neha Gupta (BSc \'25)',
      contact: '9845123456',
      image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=600&auto=format&fit=crop&q=80',
      description: 'Washed, ironed, 100% thick white cotton. Worn for practical sessions during 2nd year. No stains or tears.',
      createdAt: Date.now() - 1000 * 60 * 60 * 48
    },
    {
      id: 'p-8',
      title: 'Adjustable LED Study Table Lamp with Warm/Cool Modes',
      category: 'Hostel Items',
      price: 450,
      condition: 'Brand New',
      location: 'Girls Hostel 2 / East Wing',
      seller: 'Elena Rostova (Design \'27)',
      contact: 'elena.r@campus.edu',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80',
      description: 'Rechargeable LED desk lamp with 3 touch-dimmable light temperatures and pen holder base. Type-C cable included.',
      createdAt: Date.now() - 1000 * 60 * 60 * 60
    },
    {
      id: 'p-9',
      title: 'Foldable Bed Study Table & Laptop Stand with Cup Holder',
      category: 'Hostel Items',
      price: 320,
      condition: 'Good',
      location: 'Pine Hall 4th Floor',
      seller: 'Sarah Jenkins (Bio \'25)',
      contact: 'sarah.j@campus.edu',
      image: BED_TABLE_IMAGE,
      description: 'Compact foldable wooden bed desk with tablet slot and cup holder. Ideal for studying or working in hostel rooms.',
      createdAt: Date.now() - 1000 * 60 * 60 * 72
    },
    {
      id: 'p-10',
      title: 'Single-Speed Campus Commuter Bicycle with Basket & Lock',
      category: 'Others',
      price: 1800,
      condition: 'Good',
      location: 'South Bike Racks / Main Gate',
      seller: 'Liam Kelly (Eng \'24)',
      contact: 'lkelly@campus.edu',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&auto=format&fit=crop&q=80',
      description: 'Smooth riding campus cycle with sturdy frame, newly inflated tires, front basket, and heavy-duty combination lock.',
      createdAt: Date.now() - 1000 * 60 * 60 * 96
    }
  ];

  // -------------------------------------------------------------
  // Application State
  // -------------------------------------------------------------
  const state = {
    products: [],
    cart: [],
    filter: {
      category: 'all',
      search: '',
      condition: 'all',
      sort: 'newest',
      tab: 'browse' // 'browse' or 'my-listings'
    },
    activeDetailProduct: null,
    theme: 'light'
  };

  // -------------------------------------------------------------
  // DOM Element Selectors
  // -------------------------------------------------------------
  const elements = {
    // Theme
    themeToggle: document.getElementById('themeToggle'),

    // Login / account area
    loginLink: document.getElementById('loginLink'),
    userMenu: document.getElementById('userMenu'),
    userAvatar: document.getElementById('userAvatar'),
    userName: document.getElementById('userName'),
    logoutBtn: document.getElementById('logoutBtn'),

    // Search & Filters
    searchInput: document.getElementById('searchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    categoryPills: document.getElementById('categoryPills'),
    conditionFilter: document.getElementById('conditionFilter'),
    sortFilter: document.getElementById('sortFilter'),
    tabBrowse: document.getElementById('tabBrowse'),
    tabMyListings: document.getElementById('tabMyListings'),
    myListingsCount: document.getElementById('myListingsCount'),
    activeQueryBar: document.getElementById('activeQueryBar'),
    activeQueryText: document.getElementById('activeQueryText'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),

    // Grid & Empty
    productsGrid: document.getElementById('productsGrid'),
    emptyState: document.getElementById('emptyState'),
    emptyStateTitle: document.getElementById('emptyStateTitle'),
    emptyStateDesc: document.getElementById('emptyStateDesc'),
    emptyResetBtn: document.getElementById('emptyResetBtn'),
    statActiveListings: document.getElementById('statActiveListings'),

    // Cart Drawer
    cartTrigger: document.getElementById('cartTrigger'),
    cartCount: document.getElementById('cartCount'),
    cartDrawer: document.getElementById('cartDrawer'),
    cartDrawerBackdrop: document.getElementById('cartDrawerBackdrop'),
    closeCartBtn: document.getElementById('closeCartBtn'),
    cartDrawerCount: document.getElementById('cartDrawerCount'),
    cartItemsContainer: document.getElementById('cartItemsContainer'),
    cartEmptyState: document.getElementById('cartEmptyState'),
    cartFooter: document.getElementById('cartFooter'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    cartTotal: document.getElementById('cartTotal'),
    clearCartBtn: document.getElementById('clearCartBtn'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    cartBrowseBtn: document.getElementById('cartBrowseBtn'),

    // Sell Modal
    openSellModalBtn: document.getElementById('openSellModalBtn'),
    sellModal: document.getElementById('sellModal'),
    closeSellModalBtn: document.getElementById('closeSellModalBtn'),
    cancelSellBtn: document.getElementById('cancelSellBtn'),
    sellForm: document.getElementById('sellForm'),
    itemTitle: document.getElementById('itemTitle'),
    itemCategory: document.getElementById('itemCategory'),
    itemPrice: document.getElementById('itemPrice'),
    itemCondition: document.getElementById('itemCondition'),
    itemLocation: document.getElementById('itemLocation'),
    sellerName: document.getElementById('sellerName'),
    sellerContact: document.getElementById('sellerContact'),
    itemDesc: document.getElementById('itemDesc'),
    presetPicker: document.getElementById('presetPicker'),
    uploadWrapper: document.getElementById('uploadWrapper'),
    urlWrapper: document.getElementById('urlWrapper'),
    itemImageFile: document.getElementById('itemImageFile'),
    fileDropzone: document.getElementById('fileDropzone'),
    fileStatus: document.getElementById('fileStatus'),
    itemImageUrl: document.getElementById('itemImageUrl'),
    imagePreview: document.getElementById('imagePreview'),

    // Product Detail Modal
    detailModal: document.getElementById('detailModal'),
    closeDetailModalBtn: document.getElementById('closeDetailModalBtn'),
    detailCategory: document.getElementById('detailCategory'),
    detailImage: document.getElementById('detailImage'),
    detailTitle: document.getElementById('detailTitle'),
    detailPrice: document.getElementById('detailPrice'),
    detailCondition: document.getElementById('detailCondition'),
    detailDesc: document.getElementById('detailDesc'),
    detailSeller: document.getElementById('detailSeller'),
    detailLocation: document.getElementById('detailLocation'),
    detailContactLink: document.getElementById('detailContactLink'),
    detailAddToCartBtn: document.getElementById('detailAddToCartBtn'),

    // Checkout Modal
    checkoutModal: document.getElementById('checkoutModal'),
    closeCheckoutModalBtn: document.getElementById('closeCheckoutModalBtn'),
    cancelCheckoutBtn: document.getElementById('cancelCheckoutBtn'),
    checkoutForm: document.getElementById('checkoutForm'),
    checkoutItemCount: document.getElementById('checkoutItemCount'),
    checkoutSummaryTotal: document.getElementById('checkoutSummaryTotal'),
    checkoutMiniList: document.getElementById('checkoutMiniList'),

    // Toasts, Footer & Info Modal
    toastContainer: document.getElementById('toastContainer'),
    logoLink: document.getElementById('logoLink'),
    infoModal: document.getElementById('infoModal'),
    infoModalHeading: document.getElementById('infoModalHeading'),
    infoModalBody: document.getElementById('infoModalBody'),
    closeInfoModalBtn: document.getElementById('closeInfoModalBtn'),
    closeInfoModalOkBtn: document.getElementById('closeInfoModalOkBtn')
  };

  // -------------------------------------------------------------
  // Storage Helpers
  // -------------------------------------------------------------
  const STORAGE_KEYS = {
    PRODUCTS: 'sm_products_v2',
    CART: 'sm_cart_v2',
    THEME: 'sm_theme'
  };

  function loadSavedState() {
    // Theme
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme) {
      state.theme = savedTheme;
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      state.theme = prefersDark ? 'dark' : 'light';
    }

    // Products
    const savedProducts = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    if (savedProducts) {
      try {
        state.products = JSON.parse(savedProducts);
        // Update the stored image for the foldable bed table (this product only)
        let imageFixed = false;
        state.products.forEach((p) => {
          if (p.id === 'p-9' && p.image === OLD_BED_TABLE_IMAGE) {
            p.image = BED_TABLE_IMAGE;
            imageFixed = true;
          }
        });
        if (imageFixed) saveProducts();
      } catch (e) {
        state.products = [...INITIAL_PRODUCTS];
      }
    } else {
      // Check legacy storage and migrate user-created listings if present
      const legacyProducts = localStorage.getItem('sm_products');
      if (legacyProducts) {
        try {
          const parsed = JSON.parse(legacyProducts);
          const userListings = parsed.filter((p) => p.isMyListing);
          // Remap legacy category names to new 6 categories if needed
          const catMap = {
            Textbooks: 'Books and Notes',
            Books: 'Books and Notes',
            Notes: 'Books and Notes',
            Electronics: 'Electronics and Gadgets',
            'Dorm Essentials': 'Hostel Items',
            'Bikes & Travel': 'Others',
            Supplies: 'Stationery',
            Stationery: 'Stationery',
            Other: 'Others'
          };
          userListings.forEach((p) => {
            if (catMap[p.category]) p.category = catMap[p.category];
          });
          state.products = [...userListings, ...INITIAL_PRODUCTS];
        } catch (e) {
          state.products = [...INITIAL_PRODUCTS];
        }
      } else {
        state.products = [...INITIAL_PRODUCTS];
      }
      saveProducts();
    }

    // Cart
    const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
    if (savedCart) {
      try {
        state.cart = JSON.parse(savedCart);
      } catch (e) {
        state.cart = [];
      }
    }
  }

  function saveProducts() {
    try {
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(state.products));
    } catch (err) {
      console.warn('Storage quota exceeded when saving products. Pruning older custom images if needed.', err);
      // Attempt saving with compressed/truncated representation if quota exceeded
      try {
        const pruned = state.products.map((p, idx) => {
          if (idx > 20 && p.image && p.image.startsWith('data:image')) {
            return { ...p, image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80' };
          }
          return p;
        });
        localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(pruned));
      } catch (innerErr) {
        showToast('Storage limit reached on device; listing active for this session.', 'error');
      }
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
    } catch (err) {
      console.warn('Could not save cart to localStorage', err);
    }
  }

  function saveTheme() {
    localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
  }

  // -------------------------------------------------------------
  // Theme Management
  // -------------------------------------------------------------
  function applyTheme(theme) {
    state.theme = theme;
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    saveTheme();
  }

  function toggleTheme() {
    const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    showToast(`Switched to ${nextTheme} theme`);
  }

  // -------------------------------------------------------------
  // Toast Notifications
  // -------------------------------------------------------------
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : type === 'error' ? 'toast-error' : ''}`;

    let iconSvg = `
      <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    `;

    if (type === 'success') {
      iconSvg = `
        <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      `;
    } else if (type === 'error') {
      iconSvg = `
        <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      `;
    }

    toast.innerHTML = `
      ${iconSvg}
      <span>${escapeHtml(message)}</span>
    `;

    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 200);
    }, 3200);
  }

  // Helper: Escape HTML to avoid XSS
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatPrice(num) {
    const val = Number(num) || 0;
    // Format in INR format (e.g. ₹250 or ₹1,800)
    return '₹' + Math.round(val).toLocaleString('en-IN');
  }

  // -------------------------------------------------------------
  // Product Filtering & Rendering
  // -------------------------------------------------------------
  function getFilteredProducts() {
    let list = [...state.products];

    // Filter by Tab (Browse all or only the logged-in user's listings)
    if (state.filter.tab === 'my-listings') {
      const user = Auth.getCurrentUser();
      list = list.filter((p) => user && p.ownerId === user.id);
    }

    // Filter by Category
    if (state.filter.category !== 'all') {
      list = list.filter((p) => p.category === state.filter.category);
    }

    // Filter by Condition
    if (state.filter.condition !== 'all') {
      list = list.filter((p) => p.condition === state.filter.condition);
    }

    // Filter by Search query
    const query = state.filter.search.trim().toLowerCase();
    if (query) {
      list = list.filter((p) => {
        return (
          p.title.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.seller.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query)
        );
      });
    }

    // Sort
    switch (state.filter.sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'title-asc':
        list.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'newest':
      default:
        list.sort((a, b) => b.createdAt - a.createdAt);
        break;
    }

    return list;
  }

  function renderProducts() {
    const filtered = getFilteredProducts();
    const currentUser = Auth.getCurrentUser();
    const myListingsTotal = currentUser
      ? state.products.filter((p) => p.ownerId === currentUser.id).length
      : 0;

    // Update stats and counts
    elements.myListingsCount.textContent = myListingsTotal;
    elements.statActiveListings.textContent = state.products.length;

    // Active Query banner visibility
    const hasFilter =
      state.filter.category !== 'all' ||
      state.filter.condition !== 'all' ||
      state.filter.search.trim() !== '' ||
      state.filter.tab === 'my-listings';

    if (hasFilter) {
      elements.activeQueryBar.classList.remove('hidden');
      const parts = [];
      if (state.filter.tab === 'my-listings') parts.push('My Listings');
      if (state.filter.category !== 'all') parts.push(`Category: ${state.filter.category}`);
      if (state.filter.condition !== 'all') parts.push(`Condition: ${state.filter.condition}`);
      if (state.filter.search.trim()) parts.push(`"${state.filter.search}"`);
      elements.activeQueryText.textContent = `Filtered by: ${parts.join(' • ')} (${filtered.length} found)`;
    } else {
      elements.activeQueryBar.classList.add('hidden');
    }

    // Handle Empty State
    if (filtered.length === 0) {
      elements.productsGrid.innerHTML = '';
      elements.emptyState.classList.remove('hidden');
      if (state.filter.tab === 'my-listings' && myListingsTotal === 0) {
        elements.emptyStateTitle.textContent = "You haven't listed any items yet";
        elements.emptyStateDesc.textContent = 'Have textbooks, tech, or dorm stuff you do not need? Post your first item in seconds!';
        elements.emptyResetBtn.textContent = 'Sell an Item Now';
      } else {
        elements.emptyStateTitle.textContent = 'No matching items found';
        elements.emptyStateDesc.textContent = 'Try tweaking your search keywords or resetting active filters.';
        elements.emptyResetBtn.textContent = 'Clear All Filters';
      }
      return;
    }

    elements.emptyState.classList.add('hidden');

    // Render cards
    elements.productsGrid.innerHTML = filtered
      .map((item) => {
        const conditionClass = 'condition-' + item.condition.toLowerCase().replace(/\s+/g, '-');
        const isMine = currentUser && item.ownerId === currentUser.id;

        return `
          <article class="product-card" data-id="${item.id}">
            <div class="card-media" onclick="StudentMart.viewProduct('${item.id}')">
              <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" />
              <div class="card-badges">
                <span class="category-tag">${escapeHtml(item.category)}</span>
                <span class="condition-badge ${conditionClass}">${escapeHtml(item.condition)}</span>
              </div>
              ${isMine ? '<span class="my-listing-ribbon">Your Listing</span>' : ''}
            </div>

            <div class="card-content">
              <h3 class="card-title" onclick="StudentMart.viewProduct('${item.id}')" title="${escapeHtml(item.title)}">
                ${escapeHtml(item.title)}
              </h3>

              <div class="card-location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${escapeHtml(item.location)}</span>
              </div>

              <div class="card-price-row">
                <span class="card-price">${formatPrice(item.price)}</span>
                <span class="card-seller">${escapeHtml(item.seller.split(' ')[0])}</span>
              </div>

              <div class="card-actions">
                <button 
                  class="btn btn-add-cart" 
                  onclick="StudentMart.addToCart('${item.id}')"
                  aria-label="Add ${escapeHtml(item.title)} to cart"
                >
                  Add to Cart
                </button>
                <button 
                  class="btn-view-quick" 
                  onclick="StudentMart.viewProduct('${item.id}')"
                  title="View full details"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
                ${isMine ? `
                <button class="btn btn-danger-outline btn-delete-listing" onclick="StudentMart.deleteProduct('${item.id}')">
                  Delete Listing
                </button>` : ''}
              </div>
            </div>
          </article>
        `;
      })
      .join('');
  }

  // -------------------------------------------------------------
  // Product Detail Modal
  // -------------------------------------------------------------
  function openDetailModal(productId) {
    const product = state.products.find((p) => p.id === productId);
    if (!product) return;

    state.activeDetailProduct = product;

    elements.detailTitle.textContent = product.title;
    elements.detailCategory.textContent = product.category;
    elements.detailPrice.textContent = formatPrice(product.price);
    elements.detailImage.src = product.image;
    elements.detailImage.alt = product.title;
    elements.detailDesc.textContent = product.description;
    elements.detailSeller.textContent = product.seller;
    elements.detailLocation.textContent = product.location;

    // Condition badge
    elements.detailCondition.textContent = product.condition;
    elements.detailCondition.className =
      'condition-badge condition-' + product.condition.toLowerCase().replace(/\s+/g, '-');

    // Contact link
    const contactValue = product.contact;
    if (contactValue.includes('@')) {
      elements.detailContactLink.href = `mailto:${contactValue}?subject=${encodeURIComponent('Inquiry: ' + product.title)}`;
      elements.detailContactLink.textContent = `Email: ${contactValue}`;
    } else {
      elements.detailContactLink.href = `tel:${contactValue.replace(/\D/g, '')}`;
      elements.detailContactLink.textContent = `Call/Text: ${contactValue}`;
    }

    elements.detailModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeDetailModal() {
    elements.detailModal.classList.add('hidden');
    state.activeDetailProduct = null;
    document.body.style.overflow = '';
  }

  // -------------------------------------------------------------
  // Cart Management
  // -------------------------------------------------------------
  function addToCart(productId) {
    const product = state.products.find((p) => p.id === productId);
    if (!product) return;

    const existingIndex = state.cart.findIndex((item) => item.id === productId);
    if (existingIndex > -1) {
      state.cart[existingIndex].qty += 1;
    } else {
      state.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        qty: 1
      });
    }

    saveCart();
    updateCartUI();
    showToast(`Added "${product.title.slice(0, 24)}..." to cart`, 'success');
  }

  function updateCartQty(productId, delta) {
    const item = state.cart.find((i) => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      state.cart = state.cart.filter((i) => i.id !== productId);
    }

    saveCart();
    updateCartUI();
  }

  function removeFromCart(productId) {
    state.cart = state.cart.filter((i) => i.id !== productId);
    saveCart();
    updateCartUI();
    showToast('Item removed from cart');
  }

  function clearCart() {
    if (state.cart.length === 0) return;
    state.cart = [];
    saveCart();
    updateCartUI();
    showToast('Shopping cart cleared');
  }

  function updateCartUI() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    // Badges & Labels
    elements.cartCount.textContent = totalCount;
    elements.cartDrawerCount.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
    elements.cartSubtotal.textContent = formatPrice(subtotal);
    elements.cartTotal.textContent = formatPrice(subtotal);

    // Empty state or list
    if (state.cart.length === 0) {
      elements.cartItemsContainer.innerHTML = '';
      elements.cartEmptyState.classList.remove('hidden');
      elements.cartFooter.classList.add('hidden');
    } else {
      elements.cartEmptyState.classList.add('hidden');
      elements.cartFooter.classList.remove('hidden');

      elements.cartItemsContainer.innerHTML = state.cart
        .map((item) => `
          <div class="cart-item" data-id="${item.id}">
            <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" class="cart-item-img" />
            <div class="cart-item-info">
              <h4 class="cart-item-title" title="${escapeHtml(item.title)}">${escapeHtml(item.title)}</h4>
              <span class="cart-item-price">${formatPrice(item.price)}</span>
            </div>
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="StudentMart.updateQty('${item.id}', -1)" aria-label="Decrease">&minus;</button>
              <span class="qty-count">${item.qty}</span>
              <button class="qty-btn" onclick="StudentMart.updateQty('${item.id}', 1)" aria-label="Increase">&#43;</button>
              <button class="cart-item-remove" onclick="StudentMart.removeFromCart('${item.id}')" title="Remove">&times;</button>
            </div>
          </div>
        `)
        .join('');
    }
  }

  function openCartDrawer() {
    elements.cartDrawer.classList.add('open');
    elements.cartDrawerBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    elements.cartDrawer.classList.remove('open');
    elements.cartDrawerBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // -------------------------------------------------------------
  // Selling / Listing Form
  // -------------------------------------------------------------
  let selectedImageUrl = elements.presetPicker.querySelector('.preset-thumb.selected')?.dataset.url || '';

  function redirectToLogin(reason) {
    window.location.href = 'login.html?reason=' + reason;
  }

  function openSellModal() {
    const user = Auth.getCurrentUser();
    if (!user) {
      redirectToLogin('sell');
      return;
    }

    // Prefill seller details from the account (the user can still edit them)
    elements.sellerName.value = user.name;
    elements.sellerContact.value = user.email;

    elements.sellModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeSellModal() {
    elements.sellModal.classList.add('hidden');
    elements.sellForm.reset();
    resetSellImageSelector();
    document.body.style.overflow = '';
  }

  function resetSellImageSelector() {
    // Reset radio selection
    const defaultRadio = document.querySelector('input[name="imageSourceType"][value="preset"]');
    if (defaultRadio) defaultRadio.checked = true;

    elements.presetPicker.classList.remove('hidden');
    elements.uploadWrapper.classList.add('hidden');
    elements.urlWrapper.classList.add('hidden');

    if (elements.fileStatus) {
      elements.fileStatus.classList.add('hidden');
      elements.fileStatus.textContent = '';
    }
    if (elements.fileDropzone) {
      elements.fileDropzone.classList.remove('dragover');
    }

    const firstThumb = elements.presetPicker.querySelector('.preset-thumb');
    if (firstThumb) {
      elements.presetPicker.querySelectorAll('.preset-thumb').forEach((t) => t.classList.remove('selected'));
      firstThumb.classList.add('selected');
      selectedImageUrl = firstThumb.dataset.url;
      elements.imagePreview.src = selectedImageUrl;
    }
  }

  function handleSellSubmit(e) {
    e.preventDefault();

    const user = Auth.getCurrentUser();
    if (!user) {
      redirectToLogin('sell');
      return;
    }

    const title = elements.itemTitle.value.trim();
    const category = elements.itemCategory.value;
    const price = parseFloat(elements.itemPrice.value);
    const condition = elements.itemCondition.value;
    const location = elements.itemLocation.value.trim();
    const seller = elements.sellerName.value.trim();
    const contact = elements.sellerContact.value.trim();
    const description = elements.itemDesc.value.trim();

    if (!title || !category || isNaN(price) || price < 0 || !location || !seller || !contact || !description) {
      showToast('Please fill out all required fields properly.', 'error');
      return;
    }

    if (!selectedImageUrl) {
      selectedImageUrl = 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80';
    }

    const newProduct = {
      id: 'p-' + Date.now(),
      title,
      category,
      price,
      condition,
      location,
      seller,
      contact,
      image: selectedImageUrl,
      description,
      createdAt: Date.now(),
      ownerId: user.id
    };

    // Add to state and save
    state.products.unshift(newProduct);
    saveProducts();

    // Switch to My Listings tab so seller sees their post immediately
    setTab('my-listings');

    closeSellModal();
    showToast('Your item has been listed successfully!', 'success');
  }

  function deleteProduct(productId) {
    const user = Auth.getCurrentUser();
    const product = state.products.find((p) => p.id === productId);
    if (!product) return;

    if (!user) {
      redirectToLogin('sell');
      return;
    }
    if (product.ownerId !== user.id) {
      showToast('You can only delete your own listings.', 'error');
      return;
    }

    if (!confirm('Are you sure you want to delete this listing?')) return;

    state.products = state.products.filter((p) => p.id !== productId);
    // Also remove from cart if present
    state.cart = state.cart.filter((item) => item.id !== productId);

    saveProducts();
    saveCart();
    renderProducts();
    updateCartUI();
    showToast('Listing deleted.');
  }

  // -------------------------------------------------------------
  // Checkout Process
  // -------------------------------------------------------------
  function openCheckoutModal() {
    if (state.cart.length === 0) return;

    closeCartDrawer();
    const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const totalAmount = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    elements.checkoutItemCount.textContent = totalQty;
    elements.checkoutSummaryTotal.textContent = formatPrice(totalAmount);

    elements.checkoutMiniList.innerHTML = state.cart
      .map(
        (item) => `
        <div class="order-mini-row">
          <span>${item.qty}x ${escapeHtml(item.title.slice(0, 28))}...</span>
          <strong>${formatPrice(item.price * item.qty)}</strong>
        </div>
      `
      )
      .join('');

    elements.checkoutModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeCheckoutModal() {
    elements.checkoutModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function handleCheckoutSubmit(e) {
    e.preventDefault();

    const buyerName = document.getElementById('buyerName').value.trim();
    const buyerContact = document.getElementById('buyerContact').value.trim();

    if (!buyerName || !buyerContact) {
      showToast('Please provide your name and contact info.', 'error');
      return;
    }

    // Success flow
    closeCheckoutModal();
    const purchasedItemsCount = state.cart.reduce((sum, i) => sum + i.qty, 0);
    state.cart = [];
    saveCart();
    updateCartUI();

    showToast(`Order confirmed for ${purchasedItemsCount} item(s)! Seller contacted for pickup.`, 'success');
  }

  // -------------------------------------------------------------
  // Login State (navbar)
  // -------------------------------------------------------------
  function updateAuthUI() {
    const user = Auth.getCurrentUser();

    elements.loginLink.classList.toggle('hidden', !!user);
    elements.userMenu.classList.toggle('hidden', !user);

    if (user) {
      elements.userName.textContent = user.name;
      elements.userName.title = user.email;
      elements.userAvatar.textContent = user.name.charAt(0).toUpperCase();
    }
  }

  function handleLogout() {
    Auth.logout();
    setTab('browse'); // also re-renders so delete buttons disappear
    updateAuthUI();
    showToast('You have been logged out.');
  }

  // -------------------------------------------------------------
  // Filter & Search Controls
  // -------------------------------------------------------------
  function setTab(tabName) {
    if (tabName === 'my-listings' && !Auth.getCurrentUser()) {
      redirectToLogin('listings');
      return;
    }

    state.filter.tab = tabName;
    if (tabName === 'browse') {
      elements.tabBrowse.classList.add('active');
      elements.tabMyListings.classList.remove('active');
    } else {
      elements.tabMyListings.classList.add('active');
      elements.tabBrowse.classList.remove('active');
    }
    renderProducts();
  }

  function resetAllFilters() {
    state.filter.category = 'all';
    state.filter.search = '';
    state.filter.condition = 'all';
    state.filter.sort = 'newest';
    state.filter.tab = 'browse';

    elements.searchInput.value = '';
    elements.searchClearBtn.classList.add('hidden');
    elements.conditionFilter.value = 'all';
    elements.sortFilter.value = 'newest';

    elements.categoryPills.querySelectorAll('.pill-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.category === 'all');
    });

    elements.tabBrowse.classList.add('active');
    elements.tabMyListings.classList.remove('active');

    renderProducts();
  }

  // -------------------------------------------------------------
  // Attach Event Handlers
  // -------------------------------------------------------------
  function initEvents() {
    // Theme toggle
    elements.themeToggle.addEventListener('click', toggleTheme);

    // Logout
    elements.logoutBtn.addEventListener('click', handleLogout);

    // Search input
    let searchDebounceTimer;
    elements.searchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      elements.searchClearBtn.classList.toggle('hidden', val.length === 0);

      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        state.filter.search = val;
        renderProducts();
      }, 180);
    });

    elements.searchClearBtn.addEventListener('click', () => {
      elements.searchInput.value = '';
      elements.searchClearBtn.classList.add('hidden');
      state.filter.search = '';
      renderProducts();
      elements.searchInput.focus();
    });

    // Category pills
    elements.categoryPills.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-btn');
      if (!btn) return;

      elements.categoryPills.querySelectorAll('.pill-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      state.filter.category = btn.dataset.category;
      renderProducts();
    });

    // Footer category links
    document.querySelectorAll('[data-cat-link]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = link.getAttribute('data-cat-link');
        const pill = elements.categoryPills.querySelector(`[data-category="${cat}"]`);
        if (pill) pill.click();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    // Logo click returns to all
    elements.logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      resetAllFilters();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Dropdown filters
    elements.conditionFilter.addEventListener('change', (e) => {
      state.filter.condition = e.target.value;
      renderProducts();
    });

    elements.sortFilter.addEventListener('change', (e) => {
      state.filter.sort = e.target.value;
      renderProducts();
    });

    // Tab buttons
    elements.tabBrowse.addEventListener('click', () => setTab('browse'));
    elements.tabMyListings.addEventListener('click', () => setTab('my-listings'));

    // Filter reset buttons
    elements.resetFiltersBtn.addEventListener('click', resetAllFilters);
    elements.emptyResetBtn.addEventListener('click', () => {
      if (elements.emptyResetBtn.textContent.includes('Sell')) {
        openSellModal();
      } else {
        resetAllFilters();
      }
    });

    // Sell item modal open/close
    elements.openSellModalBtn.addEventListener('click', openSellModal);
    elements.closeSellModalBtn.addEventListener('click', closeSellModal);
    elements.cancelSellBtn.addEventListener('click', closeSellModal);
    elements.sellForm.addEventListener('submit', handleSellSubmit);

    // Image source selection in Sell Form
    document.querySelectorAll('input[name="imageSourceType"]').forEach((radio) => {
      radio.addEventListener('change', (e) => {
        const val = e.target.value;
        elements.presetPicker.classList.toggle('hidden', val !== 'preset');
        elements.uploadWrapper.classList.toggle('hidden', val !== 'upload');
        elements.urlWrapper.classList.toggle('hidden', val !== 'url');
      });
    });

    // Preset thumbnails
    elements.presetPicker.addEventListener('click', (e) => {
      const thumb = e.target.closest('.preset-thumb');
      if (!thumb) return;

      elements.presetPicker.querySelectorAll('.preset-thumb').forEach((t) => t.classList.remove('selected'));
      thumb.classList.add('selected');

      selectedImageUrl = thumb.dataset.url;
      elements.imagePreview.src = selectedImageUrl;
    });

    // Image file optimizer helper (resizes large camera/phone uploads safely to max 1000px)
    function processUploadedFile(file) {
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file (JPG, PNG, WebP)', 'error');
        return;
      }

      if (elements.fileStatus) {
        elements.fileStatus.classList.remove('hidden');
        elements.fileStatus.innerHTML = `<span>Processing image...</span>`;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          // Downscale high-res images to max 1000px dimension for performance & localStorage safety
          const MAX_SIZE = 1000;
          let width = img.width;
          let height = img.height;

          if (width > MAX_SIZE || height > MAX_SIZE) {
            if (width > height) {
              height = Math.round((height * MAX_SIZE) / width);
              width = MAX_SIZE;
            } else {
              width = Math.round((width * MAX_SIZE) / height);
              height = MAX_SIZE;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          // Convert to optimized JPEG dataURL
          selectedImageUrl = canvas.toDataURL('image/jpeg', 0.85);
          elements.imagePreview.src = selectedImageUrl;

          if (elements.fileStatus) {
            elements.fileStatus.classList.remove('hidden');
            elements.fileStatus.innerHTML = `
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${escapeHtml(file.name)} (${Math.round(file.size / 1024)} KB ready)</span>
            `;
          }
          showToast('Image uploaded and optimized for listing!', 'success');
        };

        img.onerror = () => {
          showToast('Failed to parse image file.', 'error');
          if (elements.fileStatus) elements.fileStatus.classList.add('hidden');
        };

        img.src = event.target.result;
      };

      reader.onerror = () => {
        showToast('Error reading image file.', 'error');
        if (elements.fileStatus) elements.fileStatus.classList.add('hidden');
      };

      reader.readAsDataURL(file);
    }

    // Local file input listener
    elements.itemImageFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      processUploadedFile(file);
    });

    // Drag-and-drop on fileDropzone
    if (elements.fileDropzone) {
      ['dragenter', 'dragover'].forEach((eventName) => {
        elements.fileDropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          elements.fileDropzone.classList.add('dragover');
        });
      });

      ['dragleave', 'drop'].forEach((eventName) => {
        elements.fileDropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          elements.fileDropzone.classList.remove('dragover');
        });
      });

      elements.fileDropzone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files && files.length > 0) {
          elements.itemImageFile.files = files;
          processUploadedFile(files[0]);
        }
      });
    }

    // Custom URL preview
    elements.itemImageUrl.addEventListener('input', (e) => {
      const url = e.target.value.trim();
      if (url.startsWith('http://') || url.startsWith('https://')) {
        selectedImageUrl = url;
        elements.imagePreview.src = url;
      }
    });

    // Detail modal actions
    elements.closeDetailModalBtn.addEventListener('click', closeDetailModal);
    elements.detailAddToCartBtn.addEventListener('click', () => {
      if (state.activeDetailProduct) {
        addToCart(state.activeDetailProduct.id);
        closeDetailModal();
      }
    });

    // Cart drawer interactions
    elements.cartTrigger.addEventListener('click', openCartDrawer);
    elements.closeCartBtn.addEventListener('click', closeCartDrawer);
    elements.cartDrawerBackdrop.addEventListener('click', closeCartDrawer);
    elements.clearCartBtn.addEventListener('click', clearCart);
    elements.cartBrowseBtn.addEventListener('click', closeCartDrawer);

    // Checkout modal interactions
    elements.checkoutBtn.addEventListener('click', openCheckoutModal);
    elements.closeCheckoutModalBtn.addEventListener('click', closeCheckoutModal);
    elements.cancelCheckoutBtn.addEventListener('click', closeCheckoutModal);
    elements.checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    // Footer Info Modal handler
    const INFO_CONTENT = {
      about: {
        title: 'About StudentMart',
        html: `
          <h4>What is StudentMart?</h4>
          <p>StudentMart is an open, hyper-local peer-to-peer campus marketplace designed specifically for university and college students across India.</p>
          <h4>Our Mission</h4>
          <p>Every semester, students spend thousands of rupees on expensive textbooks, calculators, stationery, and hostel gear that end up sitting idle months later. StudentMart lets you pass those essentials on to junior batches at affordable prices.</p>
          <h4>Why Choose StudentMart?</h4>
          <ul>
            <li><strong>Zero Platform Fees:</strong> No commission on listings or purchases.</li>
            <li><strong>Peer-to-Peer Safety:</strong> Direct meetup in public campus areas (libraries, cafeterias, hostels).</li>
            <li><strong>Instant Convenience:</strong> Pay directly via Cash or UPI upon inspecting the item in person.</li>
          </ul>
        `
      },
      contact: {
        title: 'Contact Us',
        html: `
          <h4>Need help or want to partner with your campus?</h4>
          <p>Our student support team is here to assist you with listing inquiries, dispute resolution, or campus onboarding.</p>
          <h4>Campus Support Desk</h4>
          <ul>
            <li><strong>Email:</strong> support@studentmart.campus.in</li>
            <li><strong>Helpline:</strong> +91 98765 43210 (Mon - Sat, 9 AM - 6 PM IST)</li>
            <li><strong>Campus Representative:</strong> Student Activity Center, Ground Floor, Room 12</li>
          </ul>
        `
      },
      help: {
        title: 'Help & Support',
        html: `
          <h4>How to Buy an Item</h4>
          <ol style="padding-left:1.25rem;color:var(--text-muted);margin-bottom:1rem;line-height:1.6">
            <li>Search or filter products by your required category or condition.</li>
            <li>Click <strong>Details</strong> to view seller notes and pickup spots.</li>
            <li>Add to your shopping cart and click <strong>Proceed to Checkout</strong> to arrange on-campus meetup.</li>
          </ol>
          <h4>How to Sell an Item</h4>
          <ol style="padding-left:1.25rem;color:var(--text-muted);margin-bottom:1rem;line-height:1.6">
            <li>Log in or create a free account, then click <strong>Sell Item</strong> in the header bar.</li>
            <li>Select the correct category, set your price in ₹, and upload clear item photos.</li>
            <li>Submit your listing. It will immediately show up in the marketplace!</li>
          </ol>
        `
      },
      faqs: {
        title: 'Frequently Asked Questions (FAQs)',
        html: `
          <h4>1. Are there any commissions or hidden fees?</h4>
          <p>No! StudentMart is 100% free for students. 0% commission is taken from buyers or sellers.</p>
          <h4>2. How do payments work?</h4>
          <p>All deals happen face-to-face on campus. You meet the seller at their designated pickup spot, check the item condition in person, and pay using Cash or UPI (Google Pay, PhonePe, Paytm).</p>
          <h4>3. Can I sell items across different departments?</h4>
          <p>Yes. You can sell books, notes, engineering tools, lab coats, gadgets, hostel appliances, and more to anyone on campus.</p>
          <h4>4. How do I delete my listing once sold?</h4>
          <p>Go to the <strong>My Listings</strong> tab and click the red <strong>Delete Listing</strong> button on your item card. Only you can delete your own listings.</p>
        `
      },
      terms: {
        title: 'Terms & Conditions',
        html: `
          <h4>1. Campus Community Guidelines</h4>
          <p>All users must represent accurate conditions and fair pricing for all listed study gear, electronics, and hostel supplies.</p>
          <h4>2. Prohibited Items</h4>
          <p>Only educational materials, campus-appropriate electronics, stationery, clothing, and hostel living essentials are permitted. Damaged or counterfeit goods are strictly prohibited.</p>
          <h4>3. In-Person Inspection</h4>
          <p>Buyers are strongly encouraged to inspect the item thoroughly before transferring money to the seller.</p>
        `
      },
      privacy: {
        title: 'Privacy Policy',
        html: `
          <h4>Your Data Privacy</h4>
          <p>StudentMart respects student privacy. Your account details, catalog preferences and active cart data are stored locally in your browser's private storage (localStorage).</p>
          <h4>Contact Sharing</h4>
          <p>Your contact handle or email is only visible on active item listings you choose to post so interested campus buyers can reach you for meetup arrangements.</p>
        `
      },
      safety: {
        title: 'Campus Safety Tips',
        html: `
          <h4>Stay Safe While Trading on Campus:</h4>
          <ul>
            <li><strong>Meet in public places:</strong> Choose well-lit, populated campus hubs like the Central Library, student cafeteria, department lobby, or hostel gates.</li>
            <li><strong>Inspect before paying:</strong> Check calculators, electronics, book pages, and lab gear before making payment.</li>
            <li><strong>Use instant UPI or cash:</strong> Avoid wire transfers or advance token payments before seeing the item.</li>
          </ul>
        `
      }
    };

    function openInfoModal(key) {
      const data = INFO_CONTENT[key];
      if (!data || !elements.infoModal) return;

      elements.infoModalHeading.textContent = data.title;
      elements.infoModalBody.innerHTML = data.html;
      elements.infoModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeInfoModal() {
      if (elements.infoModal) {
        elements.infoModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    if (elements.closeInfoModalBtn) elements.closeInfoModalBtn.addEventListener('click', closeInfoModal);
    if (elements.closeInfoModalOkBtn) elements.closeInfoModalOkBtn.addEventListener('click', closeInfoModal);

    const footerLinkMap = {
      footerAboutLink: 'about',
      footerContactLink: 'contact',
      footerHelpLink: 'help',
      footerFaqLink: 'faqs',
      footerTermsLink: 'terms',
      footerPrivacyLink: 'privacy',
      footerSafetyLink: 'safety'
    };

    Object.entries(footerLinkMap).forEach(([elemId, key]) => {
      const el = document.getElementById(elemId);
      if (el) {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          openInfoModal(key);
        });
      }
    });

    // Close modals on Escape key or backdrop click
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (!elements.detailModal.classList.contains('hidden')) closeDetailModal();
        if (!elements.sellModal.classList.contains('hidden')) closeSellModal();
        if (!elements.checkoutModal.classList.contains('hidden')) closeCheckoutModal();
        if (elements.infoModal && !elements.infoModal.classList.contains('hidden')) closeInfoModal();
        if (elements.cartDrawer.classList.contains('open')) closeCartDrawer();
      }
    });

    [elements.sellModal, elements.detailModal, elements.checkoutModal, elements.infoModal].filter(Boolean).forEach((modal) => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('hidden');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // -------------------------------------------------------------
  // Public API for HTML inline triggers
  // -------------------------------------------------------------
  window.StudentMart = {
    viewProduct: openDetailModal,
    addToCart: addToCart,
    updateQty: updateCartQty,
    removeFromCart: removeFromCart,
    deleteProduct: deleteProduct
  };

  // -------------------------------------------------------------
  // Initialize
  // -------------------------------------------------------------
  function init() {
    loadSavedState();
    applyTheme(state.theme);
    initEvents();
    updateAuthUI();
    renderProducts();
    updateCartUI();

    // Coming back with the browser Back button can show a cached page, so refresh the login state
    window.addEventListener('pageshow', (e) => {
      if (e.persisted) {
        updateAuthUI();
        renderProducts();
      }
    });
  }

  // Kick off when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
