# StudentMart 🛒

A clean, responsive peer-to-peer campus marketplace frontend where students can **buy** and **sell** essentials (textbooks, electronics, bikes, dorm gear, and stationery).

Built strictly using vanilla **HTML5**, **CSS3**, and **JavaScript** (zero external frameworks or heavy libraries).

---

## 🌟 Key Features

1. **Accounts (Login & Registration)**:
   - Create an account (name, email, password) or log in from `login.html`.
   - Stays logged in after a page refresh; logout button and your name are shown in the navigation bar.
   - Clear error messages for invalid inputs, wrong login details, and duplicate emails.
   - Passwords are salted and hashed (SHA-256) before being saved.
   - Note: accounts are stored in the browser's `localStorage` (this is a front-end only project). A real production site would need a backend server for proper security.

2. **Buy Products**:
   - Interactive catalog with real-time search, category filters, condition filters, and sorting (Newest, Price: Low to High, Price: High to Low, Title: A-Z).
   - Detailed product view modal with seller notes, campus meeting location, and direct email/phone contact.
   - Slide-out **Shopping Cart Drawer** with live quantity controls, item removal, and subtotal calculation.
   - **Checkout flow** with meeting spot selector, payment options (Cash on meetup, Venmo/UPI, Campus Pay), and toast confirmation.

3. **Sell Products** (login required):
   - Clean "Sell Item" listing modal with instant validation.
   - Custom item inputs: title, category, price, condition, campus pickup location, seller info, and description.
   - **Rich Photo Options**:
     - Curated preset thumbnails for instant selection.
     - **Direct Device File Upload & Drag-and-Drop Dropzone** with real-time preview, automatic HTML5 canvas downscaling (preventing browser memory and storage bloat), and upload progress feedback.
     - Custom external image URL input with live preview.
   - Instant feed update: newly created listings appear immediately in the marketplace and under the **My Listings** tab.
   - Quota-safe `localStorage` persistence with graceful fallbacks.
   - Every listing stores the `ownerId` of the user who posted it.
   - Only the owner sees the **Delete Listing** button, and `deleteProduct()` double-checks ownership, so nobody can delete another user's listing. Other users' listings stay visible to everyone.
   - **My Listings** shows only the logged-in user's products.
   - Clicking **Sell Item** (or **My Listings**) while logged out sends you to the login page.

4. **Light / Dark Mode**:
   - Accessible theme toggle button in the navigation header.
   - Smooth CSS transitions using CSS custom properties (`data-theme="dark"`).
   - Automatically detects system preference (`prefers-color-scheme`) and persists the chosen theme across page refreshes via `localStorage`.

5. **Persistence & Offline Readiness**:
   - All users, listings and cart contents are stored in browser `localStorage`.
   - Crisp inline SVG icons—loads instantly with zero CDN dependencies.

---

## 🚀 How to Run

Simply open `index.html` in any modern web browser:

- Double-click `index.html` in your file explorer, or
- Start a quick local server:
  ```bash
  python -m http.server 3000
  ```
  Then navigate to `http://localhost:3000` in your browser.

---

## 📁 Project Structure

```
studentMart/
├── index.html    # Semantic markup, modals, cart drawer & layout
├── login.html    # Login & registration page
├── styles.css    # Clean responsive styles, theme variables, micro-animations
├── auth.js       # Users, password hashing & login session (shared by both pages)
├── login.js      # Login/registration form validation
├── app.js        # Catalog state, cart logic, listing engine & local storage
└── README.md     # Project documentation
```
