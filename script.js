/**
 * QuickCart MVP - Commercial Online Marketplace
 * Pure Vanilla JavaScript (ES6+)
 */

'use strict';

/* ==========================================================================
   1. Product Catalog Data (Realistic Pakistani Marketplace Products)
   ========================================================================== */
const PRODUCTS_DATA = [
  // --- Category: Electronics ---
  {
    id: 'prod-el-01',
    name: 'AeroSound Pro True Wireless Earbuds',
    category: 'Electronics',
    price: 4499,
    originalPrice: 5999,
    rating: 4.8,
    reviewsCount: 184,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80',
    description: 'Active Noise Cancellation, 32-hour playback, IPX5 water resistance with ultra-low latency gaming mode.',
    trending: true,
  },
  {
    id: 'prod-el-02',
    name: 'UltraPulse AMOLED Fitness Smartwatch',
    category: 'Electronics',
    price: 6999,
    originalPrice: 8999,
    rating: 4.7,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
    description: '1.43-inch HD AMOLED screen, continuous SpO2 & heart-rate monitor, Bluetooth calling, 7-day battery life.',
    trending: true,
  },
  {
    id: 'prod-el-03',
    name: 'HyperCharge 20,000mAh 22.5W Fast Power Bank',
    category: 'Electronics',
    price: 3850,
    originalPrice: 4800,
    rating: 4.9,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&auto=format&fit=crop&q=80',
    description: 'Dual USB-A and Type-C PD ports, high-density polymer cells, airline approved with digital LED display.',
    trending: false,
  },

  // --- Category: Fashion ---
  {
    id: 'prod-fa-01',
    name: 'Classic Oxford Button-Down Cotton Shirt',
    category: 'Fashion',
    price: 2899,
    originalPrice: 3600,
    rating: 4.6,
    reviewsCount: 96,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80',
    description: '100% premium breathable combed cotton, tailored slim-fit design suitable for formal and casual occasions.',
    trending: false,
  },
  {
    id: 'prod-fa-02',
    name: 'Urban Minimalist Water-Resistant Laptop Backpack',
    category: 'Fashion',
    price: 3450,
    originalPrice: 4500,
    rating: 4.8,
    reviewsCount: 130,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80',
    description: 'Fits up to 15.6-inch laptops, concealed anti-theft pockets, USB charging pass-through, ergonomic padded straps.',
    trending: true,
  },
  {
    id: 'prod-fa-03',
    name: 'BreezeFit Lightweight Mesh Running Sneakers',
    category: 'Fashion',
    price: 5200,
    originalPrice: 6500,
    rating: 4.7,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
    description: 'Ultra-cushioned EVA bounce sole, engineered breathable honeycomb knit upper for daily running and training.',
    trending: false,
  },

  // --- Category: Beauty ---
  {
    id: 'prod-be-01',
    name: 'HydraGlow Vitamin C & Hyaluronic Radiance Serum (30ml)',
    category: 'Beauty',
    price: 1950,
    originalPrice: 2500,
    rating: 4.9,
    reviewsCount: 274,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80',
    description: 'Dermatologically tested brightening formula with 10% pure Vitamin C, Ferulic acid, and deep hydration botanicals.',
    trending: true,
  },
  {
    id: 'prod-be-02',
    name: 'Botanical Gentle Amino Daily Face Cleanser (150ml)',
    category: 'Beauty',
    price: 1450,
    originalPrice: 1850,
    rating: 4.8,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80',
    description: 'Soap-free, pH 5.5 balanced mild foaming gel infused with green tea extract and soothing chamomile.',
    trending: false,
  },
  {
    id: 'prod-be-03',
    name: 'SilkCare Moroccan Argan Hair Treatment Elixir (100ml)',
    category: 'Beauty',
    price: 2200,
    originalPrice: 2800,
    rating: 4.7,
    reviewsCount: 95,
    image: 'https://images.unsplash.com/photo-1608248597359-5484548dbbb3?w=600&auto=format&fit=crop&q=80',
    description: 'Non-greasy nourishing hair oil that repairs split ends, restores shine, and shields against heat damage.',
    trending: false,
  },

  // --- Category: Home ---
  {
    id: 'prod-ho-01',
    name: 'Nordic Minimalist Matte Ceramic Pour-Over Set',
    category: 'Home',
    price: 3250,
    originalPrice: 4200,
    rating: 4.8,
    reviewsCount: 83,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
    description: 'Handcrafted heat-resistant stoneware with 600ml glass carafe for artisan coffee brewing at home.',
    trending: false,
  },
  {
    id: 'prod-ho-02',
    name: 'AromaMist Ultrasonic 500ml Essential Oil Diffuser',
    category: 'Home',
    price: 2750,
    originalPrice: 3500,
    rating: 4.9,
    reviewsCount: 167,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&auto=format&fit=crop&q=80',
    description: 'Whisper-quiet ultrasonic misting, 7 soothing ambient LED night colors, auto-shutoff timer for bedroom or office.',
    trending: true,
  },
  {
    id: 'prod-ho-03',
    name: 'ErgoComfort High-Density Memory Foam Lumbar Cushion',
    category: 'Home',
    price: 2400,
    originalPrice: 3100,
    rating: 4.6,
    reviewsCount: 119,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80',
    description: 'Ergonomic spine alignment support for work chairs and cars, complete with 3D breathable washable mesh cover.',
    trending: false,
  }
];

// Category Definitions with Visuals
const CATEGORIES_DATA = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&auto=format&fit=crop&q=80',
    count: '3 Products',
  },
  {
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=80',
    count: '3 Products',
  },
  {
    name: 'Beauty',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=80',
    count: '3 Products',
  },
  {
    name: 'Home',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&auto=format&fit=crop&q=80',
    count: '3 Products',
  }
];

/* ==========================================================================
   2. App State & Configuration
   ========================================================================== */
const STORAGE_KEY = 'quickcart_saved_cart_v1';
const FREE_SHIPPING_THRESHOLD = 2500;
const STANDARD_SHIPPING_FEE = 150;

const state = {
  products: [...PRODUCTS_DATA],
  cart: [],
  activeCategory: 'All',
  searchQuery: '',
  sortBy: 'featured',
};

/* ==========================================================================
   3. DOM Elements Cache
   ========================================================================== */
const elements = {
  // Navigation & Badges
  cartBtn: document.getElementById('cart-toggle-btn'),
  cartCountBadge: document.getElementById('cart-count'),
  mobileToggleBtn: document.getElementById('mobile-menu-toggle'),
  mobileNavMenu: document.getElementById('mobile-nav-menu'),

  // Product Grid & Filtering
  productGrid: document.getElementById('product-grid'),
  emptyState: document.getElementById('empty-state'),
  emptyResetBtn: document.getElementById('empty-reset-btn'),
  searchInput: document.getElementById('search-input'),
  clearSearchBtn: document.getElementById('clear-search-btn'),
  filterTabsContainer: document.getElementById('filter-tabs-container'),
  sortSelect: document.getElementById('sort-select'),
  categoryCardsContainer: document.getElementById('category-cards-container'),
  resultsCountText: document.getElementById('results-count-text'),
  resetAllFiltersBtn: document.getElementById('reset-all-filters-btn'),

  // Cart Drawer
  cartDrawer: document.getElementById('cart-drawer'),
  cartBackdrop: document.getElementById('cart-backdrop'),
  closeCartBtn: document.getElementById('close-cart-btn'),
  cartItemsContainer: document.getElementById('cart-items-container'),
  emptyCartView: document.getElementById('empty-cart-view'),
  cartFooter: document.getElementById('cart-footer'),
  cartTotalBadge: document.getElementById('cart-total-badge'),
  cartSubtotalVal: document.getElementById('cart-subtotal-val'),
  cartShippingVal: document.getElementById('cart-shipping-val'),
  cartGrandtotalVal: document.getElementById('cart-grandtotal-val'),
  clearCartBtn: document.getElementById('clear-cart-btn'),
  proceedCheckoutBtn: document.getElementById('proceed-checkout-btn'),
  startShoppingBtn: document.getElementById('start-shopping-btn'),
  meterText: document.getElementById('meter-text'),
  meterFill: document.getElementById('meter-fill'),

  // Checkout Modal
  checkoutBackdrop: document.getElementById('checkout-backdrop'),
  closeCheckoutBtn: document.getElementById('close-checkout-btn'),
  checkoutForm: document.getElementById('checkout-form'),
  backToCartBtn: document.getElementById('back-to-cart-btn'),
  checkoutItemsList: document.getElementById('checkout-items-list'),
  checkoutSubtotal: document.getElementById('checkout-subtotal'),
  checkoutShipping: document.getElementById('checkout-shipping'),
  checkoutTotal: document.getElementById('checkout-total'),

  // Order Confirmation Modal
  confirmationBackdrop: document.getElementById('confirmation-backdrop'),
  orderReceipt: document.getElementById('order-receipt'),
  confContinueShoppingBtn: document.getElementById('conf-continue-shopping-btn'),

  // Toast Container
  toastContainer: document.getElementById('toast-container'),
};

/* ==========================================================================
   4. Helper Utilities
   ========================================================================== */
/**
 * Format numeric value to Pakistani Rupee string (e.g., "Rs. 2,499")
 */
function formatPKR(num) {
  const rounded = Math.round(num);
  return 'Rs. ' + rounded.toLocaleString('en-PK');
}

/**
 * Fallback image handler for products
 */
function handleImageFallback(imgElement, category) {
  const fallbacks = {
    Electronics: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=80',
    Fashion: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80',
    Beauty: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&auto=format&fit=crop&q=80',
    Home: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80',
  };
  imgElement.onerror = null; // Prevent loop
  imgElement.src = fallbacks[category] || fallbacks.Electronics;
}

/**
 * Non-intrusive Toast Notifications
 */
function showToast(message, type = 'success') {
  if (!elements.toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'error' ? 'toast-error' : 'toast-success'}`;
  
  const icon = type === 'error' ? '⚠️' : '✓';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;

  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 2800);
}

/* ==========================================================================
   5. LocalStorage Management
   ========================================================================== */
function loadCartFromStorage() {
  try {
    const rawData = localStorage.getItem(STORAGE_KEY);
    if (!rawData) return [];

    const parsed = JSON.parse(rawData);
    if (!Array.isArray(parsed)) return [];

    // Verify each stored item matches a current product
    const validItems = [];
    for (const item of parsed) {
      const product = state.products.find(p => p.id === item.productId);
      if (product && item.quantity > 0) {
        validItems.push({
          product,
          quantity: parseInt(item.quantity, 10) || 1,
        });
      }
    }
    return validItems;
  } catch (err) {
    console.warn('Failed to load cart from localStorage:', err);
    return [];
  }
}

function saveCartToStorage() {
  try {
    const serialized = state.cart.map(item => ({
      productId: item.product.id,
      quantity: item.quantity,
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serialized));
  } catch (err) {
    console.warn('Failed to save cart to localStorage:', err);
  }
}

/* ==========================================================================
   6. Cart Business Logic
   ========================================================================== */
function addToCart(productId, qtyToAdd = 1) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = state.cart.findIndex(item => item.product.id === productId);

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += qtyToAdd;
  } else {
    state.cart.push({
      product,
      quantity: qtyToAdd,
    });
  }

  saveCartToStorage();
  updateCartUI();
  triggerBadgeAnimation();
  showToast(`Added "${product.name}" to cart!`);
}

function updateItemQuantity(productId, delta) {
  const itemIndex = state.cart.findIndex(item => item.product.id === productId);
  if (itemIndex === -1) return;

  const newQty = state.cart[itemIndex].quantity + delta;

  if (newQty <= 0) {
    removeFromCart(productId);
  } else {
    state.cart[itemIndex].quantity = newQty;
    saveCartToStorage();
    updateCartUI();
  }
}

function removeFromCart(productId) {
  const itemIndex = state.cart.findIndex(item => item.product.id === productId);
  if (itemIndex === -1) return;

  const itemName = state.cart[itemIndex].product.name;
  state.cart.splice(itemIndex, 1);

  saveCartToStorage();
  updateCartUI();
  showToast(`Removed "${itemName}" from cart.`);
}

function clearCart() {
  if (state.cart.length === 0) return;
  state.cart = [];
  saveCartToStorage();
  updateCartUI();
  showToast('Your shopping cart was cleared.');
}

function getCartCalculations() {
  const totalItems = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = state.cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0;
  const shippingFee = (subtotal === 0 || isFreeShipping) ? 0 : STANDARD_SHIPPING_FEE;
  const grandTotal = subtotal + shippingFee;

  return {
    totalItems,
    subtotal,
    shippingFee,
    grandTotal,
    isFreeShipping,
  };
}

function triggerBadgeAnimation() {
  if (!elements.cartCountBadge) return;
  elements.cartCountBadge.classList.remove('bump');
  // force reflow
  void elements.cartCountBadge.offsetWidth;
  elements.cartCountBadge.classList.add('bump');
}

/* ==========================================================================
   7. UI Rendering Functions
   ========================================================================== */

/**
 * Render Category Overview Cards
 */
function renderCategoryCards() {
  if (!elements.categoryCardsContainer) return;

  elements.categoryCardsContainer.innerHTML = CATEGORIES_DATA.map(cat => `
    <div class="category-card" onclick="window.filterByCategory('${cat.name}')" role="button" tabindex="0" aria-label="Explore ${cat.name} department">
      <div class="category-card-img-wrap">
        <img src="${cat.image}" alt="${cat.name} Collection" loading="lazy">
        <div class="category-card-overlay"></div>
      </div>
      <div class="category-card-info">
        <div>
          <span class="category-eyebrow">Department</span>
          <h3 class="category-title">${cat.name}</h3>
        </div>
        <div class="category-action-pill">
          <span class="category-count">${cat.count}</span>
          <svg class="category-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Filter & Sort Products
 */
function getFilteredProducts() {
  let list = [...state.products];

  // 1. Filter by category
  if (state.activeCategory && state.activeCategory !== 'All') {
    list = list.filter(p => p.category.toLowerCase() === state.activeCategory.toLowerCase());
  }

  // 2. Filter by search query (name match)
  if (state.searchQuery.trim() !== '') {
    const query = state.searchQuery.trim().toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
  }

  // 3. Sort
  if (state.sortBy === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  return list;
}

/**
 * Render Product Grid
 */
function renderProductGrid() {
  if (!elements.productGrid) return;

  const filtered = getFilteredProducts();

  // Update Meta text
  let statusText = `Showing ${filtered.length} product${filtered.length === 1 ? '' : 's'}`;
  if (state.activeCategory !== 'All') {
    statusText += ` in "${state.activeCategory}"`;
  }
  if (state.searchQuery.trim() !== '') {
    statusText += ` matching "${state.searchQuery.trim()}"`;
  }
  elements.resultsCountText.textContent = statusText;

  // Show / hide reset all link
  const hasActiveFilters = state.activeCategory !== 'All' || state.searchQuery.trim() !== '';
  elements.resetAllFiltersBtn.style.display = hasActiveFilters ? 'inline-block' : 'none';

  // Empty state handling
  if (filtered.length === 0) {
    elements.productGrid.style.display = 'none';
    elements.emptyState.style.display = 'block';
    return;
  }

  elements.productGrid.style.display = 'grid';
  elements.emptyState.style.display = 'none';

  elements.productGrid.innerHTML = filtered.map(product => {
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-image-container">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="product-image" 
            loading="lazy"
            onerror="window.handleProductImgError(this, '${product.category}')"
          >
          <div class="product-badge-group">
            ${product.trending ? '<span class="badge-trending"><span class="badge-fire">🔥</span> Popular</span>' : ''}
            <span class="badge-discount">-${discountPercent}%</span>
          </div>
        </div>

        <div class="product-details">
          <div class="product-meta-row">
            <span class="product-category-tag">${product.category}</span>
            <div class="product-rating">
              <svg class="star-icon" width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span class="rating-score">${product.rating.toFixed(1)}</span>
              <span class="reviews-count">(${product.reviewsCount})</span>
            </div>
          </div>

          <h3 class="product-title" title="${product.name}">${product.name}</h3>

          <div class="product-pricing-row">
            <div class="price-stack">
              <span class="current-price">${formatPKR(product.price)}</span>
              <span class="original-price">${formatPKR(product.originalPrice)}</span>
            </div>
          </div>

          <button 
            class="btn-add-cart" 
            onclick="window.handleProductAdd('${product.id}', this)"
            aria-label="Add ${product.name} to cart"
          >
            <svg class="cart-btn-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span class="btn-text">Add to Cart</span>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Render Cart Drawer & Badges
 */
function updateCartUI() {
  const { totalItems, subtotal, shippingFee, grandTotal, isFreeShipping } = getCartCalculations();

  // Update navigation count badge
  if (elements.cartCountBadge) {
    elements.cartCountBadge.textContent = totalItems;
  }

  // Update drawer total pill
  if (elements.cartTotalBadge) {
    elements.cartTotalBadge.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
  }

  // Update free shipping meter
  if (elements.meterText && elements.meterFill) {
    if (subtotal === 0) {
      elements.meterText.textContent = `Add ${formatPKR(FREE_SHIPPING_THRESHOLD)} more for Free Nationwide Delivery!`;
      elements.meterFill.style.width = '0%';
    } else if (isFreeShipping) {
      elements.meterText.textContent = '🎉 You unlocked Free Delivery nationwide!';
      elements.meterFill.style.width = '100%';
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      const pct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      elements.meterText.textContent = `Add ${formatPKR(remaining)} more for Free Delivery!`;
      elements.meterFill.style.width = `${pct}%`;
    }
  }

  // Toggle empty cart view vs item list
  if (state.cart.length === 0) {
    if (elements.cartItemsContainer) elements.cartItemsContainer.style.display = 'none';
    if (elements.emptyCartView) elements.emptyCartView.style.display = 'flex';
    if (elements.cartFooter) elements.cartFooter.style.display = 'none';
  } else {
    if (elements.cartItemsContainer) elements.cartItemsContainer.style.display = 'flex';
    if (elements.emptyCartView) elements.emptyCartView.style.display = 'none';
    if (elements.cartFooter) elements.cartFooter.style.display = 'block';

    // Render Cart Items
    elements.cartItemsContainer.innerHTML = state.cart.map(item => `
      <div class="cart-item" data-id="${item.product.id}">
        <img 
          src="${item.product.image}" 
          alt="${item.product.name}" 
          class="cart-item-thumb"
          onerror="window.handleProductImgError(this, '${item.product.category}')"
        >
        <div class="cart-item-details">
          <div class="cart-item-header">
            <h4 class="cart-item-title" title="${item.product.name}">${item.product.name}</h4>
            <button 
              class="cart-item-remove-btn" 
              onclick="window.deleteCartItem('${item.product.id}')"
              aria-label="Remove ${item.product.name} from cart"
              title="Remove item"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
          <span class="cart-item-category">${item.product.category}</span>
          
          <div class="cart-item-bottom">
            <span class="cart-item-price">${formatPKR(item.product.price)}</span>
            <div class="qty-control">
              <button 
                class="qty-btn" 
                onclick="window.changeItemQuantity('${item.product.id}', -1)"
                aria-label="Decrease quantity"
              >-</button>
              <span class="qty-display">${item.quantity}</span>
              <button 
                class="qty-btn" 
                onclick="window.changeItemQuantity('${item.product.id}', 1)"
                aria-label="Increase quantity"
              >+</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Summary calculations
    elements.cartSubtotalVal.textContent = formatPKR(subtotal);
    elements.cartShippingVal.textContent = isFreeShipping ? 'FREE' : formatPKR(shippingFee);
    elements.cartGrandtotalVal.textContent = formatPKR(grandTotal);
  }
}

/**
 * Render Mini Order Summary in Checkout Modal
 */
function renderCheckoutOverview() {
  const { subtotal, shippingFee, grandTotal, isFreeShipping } = getCartCalculations();

  if (elements.checkoutItemsList) {
    elements.checkoutItemsList.innerHTML = state.cart.map(item => `
      <div class="checkout-mini-item">
        <span class="checkout-mini-item-name">${item.quantity}x ${item.product.name}</span>
        <span class="checkout-mini-item-price">${formatPKR(item.product.price * item.quantity)}</span>
      </div>
    `).join('');
  }

  if (elements.checkoutSubtotal) elements.checkoutSubtotal.textContent = formatPKR(subtotal);
  if (elements.checkoutShipping) elements.checkoutShipping.textContent = isFreeShipping ? 'FREE' : formatPKR(shippingFee);
  if (elements.checkoutTotal) elements.checkoutTotal.textContent = formatPKR(grandTotal);
}

/* ==========================================================================
   8. Drawer & Modal Interactions
   ========================================================================== */
function openCartDrawer() {
  elements.cartDrawer.classList.add('open');
  elements.cartBackdrop.classList.add('active');
  elements.cartDrawer.setAttribute('aria-hidden', 'false');
  elements.cartBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  elements.cartDrawer.classList.remove('open');
  elements.cartBackdrop.classList.remove('active');
  elements.cartDrawer.setAttribute('aria-hidden', 'true');
  elements.cartBackdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty. Please add items before checking out.', 'error');
    return;
  }
  closeCartDrawer();
  renderCheckoutOverview();
  elements.checkoutBackdrop.classList.add('active');
  elements.checkoutBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Auto focus first field
  const firstInput = document.getElementById('customer-name');
  if (firstInput) setTimeout(() => firstInput.focus(), 100);
}

function closeCheckoutModal() {
  elements.checkoutBackdrop.classList.remove('active');
  elements.checkoutBackdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function openConfirmationModal(orderDetails) {
  closeCheckoutModal();

  const formattedDate = new Date().toLocaleDateString('en-PK', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  elements.orderReceipt.innerHTML = `
    <div class="receipt-header">
      <div>
        <span class="receipt-label">Order Reference</span>
        <span class="receipt-id">${orderDetails.orderId}</span>
      </div>
      <div>
        <span class="receipt-label">Order Date</span>
        <span class="receipt-val">${formattedDate}</span>
      </div>
    </div>

    <div class="receipt-meta-grid">
      <div>
        <span class="receipt-label">Customer Name</span>
        <span class="receipt-val">${orderDetails.name}</span>
      </div>
      <div>
        <span class="receipt-label">Contact Phone</span>
        <span class="receipt-val">${orderDetails.phone}</span>
      </div>
      <div>
        <span class="receipt-label">Delivery Address</span>
        <span class="receipt-val">${orderDetails.address}, ${orderDetails.city}</span>
      </div>
      <div>
        <span class="receipt-label">Payment Method</span>
        <span class="receipt-val">${orderDetails.paymentMethod}</span>
      </div>
    </div>

    <div class="receipt-items-list">
      ${orderDetails.items.map(item => `
        <div style="display: flex; justify-content: space-between;">
          <span>${item.quantity}x ${item.product.name}</span>
          <strong>${formatPKR(item.product.price * item.quantity)}</strong>
        </div>
      `).join('')}
    </div>

    <div class="receipt-total-row">
      <span>Total Paid / Payable on Delivery</span>
      <span style="color: var(--primary);">${formatPKR(orderDetails.grandTotal)}</span>
    </div>
  `;

  elements.confirmationBackdrop.classList.add('active');
  elements.confirmationBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeConfirmationModal() {
  elements.confirmationBackdrop.classList.remove('active');
  elements.confirmationBackdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ==========================================================================
   9. Form Validation & Checkout Submission
   ========================================================================== */
function validateCheckoutForm(form) {
  let isValid = true;

  // Name validation
  const nameInput = form.name;
  if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
    nameInput.classList.add('input-error');
    isValid = false;
  } else {
    nameInput.classList.remove('input-error');
  }

  // Email validation
  const emailInput = form.email;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailInput.classList.add('input-error');
    isValid = false;
  } else {
    emailInput.classList.remove('input-error');
  }

  // Phone validation (Pakistani phone format: 11 digits, starts with 03 or +923)
  const phoneInput = form.phone;
  const cleanPhone = phoneInput.value.replace(/[\s-]/g, '');
  if (cleanPhone.length < 10 || cleanPhone.length > 13) {
    phoneInput.classList.add('input-error');
    isValid = false;
  } else {
    phoneInput.classList.remove('input-error');
  }

  // Address validation
  const addressInput = form.address;
  if (!addressInput.value.trim() || addressInput.value.trim().length < 6) {
    addressInput.classList.add('input-error');
    isValid = false;
  } else {
    addressInput.classList.remove('input-error');
  }

  // City validation
  const cityInput = form.city;
  if (!cityInput.value) {
    cityInput.classList.add('input-error');
    isValid = false;
  } else {
    cityInput.classList.remove('input-error');
  }

  return isValid;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  if (state.cart.length === 0) {
    showToast('Your cart is empty!', 'error');
    closeCheckoutModal();
    return;
  }

  const form = elements.checkoutForm;
  if (!validateCheckoutForm(form)) {
    showToast('Please fix the highlighted fields in the form.', 'error');
    return;
  }

  // Gather order details
  const randomOrderNum = Math.floor(100000 + Math.random() * 900000);
  const calculations = getCartCalculations();

  const orderDetails = {
    orderId: `#QC-${randomOrderNum}`,
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    address: form.address.value.trim(),
    city: form.city.value,
    paymentMethod: form.paymentMethod.value || 'Cash on Delivery',
    items: [...state.cart],
    subtotal: calculations.subtotal,
    shippingFee: calculations.shippingFee,
    grandTotal: calculations.grandTotal,
  };

  // Clear cart and local storage
  state.cart = [];
  saveCartToStorage();
  updateCartUI();
  form.reset();

  // Show confirmation modal
  openConfirmationModal(orderDetails);
}

/* ==========================================================================
   10. Global Window Handlers for Inline HTML Elements
   ========================================================================== */
window.handleProductAdd = function(productId, btnElement) {
  addToCart(productId, 1);
  if (btnElement) {
    const originalText = btnElement.innerHTML;
    btnElement.classList.add('added');
    btnElement.innerHTML = `✓ Added!`;
    setTimeout(() => {
      btnElement.classList.remove('added');
      btnElement.innerHTML = originalText;
    }, 1200);
  }
};

window.changeItemQuantity = function(productId, delta) {
  updateItemQuantity(productId, delta);
};

window.deleteCartItem = function(productId) {
  removeFromCart(productId);
};

window.filterByCategory = function(categoryName) {
  state.activeCategory = categoryName;

  // Update tabs active state
  const tabs = elements.filterTabsContainer.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    if (tab.dataset.category.toLowerCase() === categoryName.toLowerCase()) {
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
    } else {
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
    }
  });

  renderProductGrid();

  // Scroll to products section smoothly
  const productsSection = document.getElementById('products');
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

window.handleProductImgError = function(imgElement, category) {
  handleImageFallback(imgElement, category);
};

/* ==========================================================================
   11. Event Listeners Setup
   ========================================================================== */
function setupEventListeners() {
  // Mobile Nav Toggle
  if (elements.mobileToggleBtn && elements.mobileNavMenu) {
    elements.mobileToggleBtn.addEventListener('click', () => {
      const isOpen = elements.mobileNavMenu.classList.toggle('open');
      elements.mobileToggleBtn.classList.toggle('active', isOpen);
      elements.mobileToggleBtn.setAttribute('aria-expanded', String(isOpen));
      elements.mobileNavMenu.setAttribute('aria-hidden', String(!isOpen));
    });

    // Close mobile nav on link click
    elements.mobileNavMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        elements.mobileNavMenu.classList.remove('open');
        elements.mobileToggleBtn.classList.remove('active');
        elements.mobileToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Cart Drawer open/close
  if (elements.cartBtn) elements.cartBtn.addEventListener('click', openCartDrawer);
  if (elements.closeCartBtn) elements.closeCartBtn.addEventListener('click', closeCartDrawer);
  if (elements.cartBackdrop) elements.cartBackdrop.addEventListener('click', closeCartDrawer);
  if (elements.startShoppingBtn) {
    elements.startShoppingBtn.addEventListener('click', () => {
      closeCartDrawer();
      const pSec = document.getElementById('products');
      if (pSec) pSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Clear Cart Button
  if (elements.clearCartBtn) {
    elements.clearCartBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to remove all items from your cart?')) {
        clearCart();
      }
    });
  }

  // Proceed to Checkout
  if (elements.proceedCheckoutBtn) {
    elements.proceedCheckoutBtn.addEventListener('click', openCheckoutModal);
  }

  // Checkout modal controls
  if (elements.closeCheckoutBtn) elements.closeCheckoutBtn.addEventListener('click', closeCheckoutModal);
  if (elements.backToCartBtn) {
    elements.backToCartBtn.addEventListener('click', () => {
      closeCheckoutModal();
      openCartDrawer();
    });
  }
  if (elements.checkoutBackdrop) {
    elements.checkoutBackdrop.addEventListener('click', (e) => {
      if (e.target === elements.checkoutBackdrop) closeCheckoutModal();
    });
  }

  // Payment Option selection visual styling
  const paymentCards = document.querySelectorAll('.payment-card');
  paymentCards.forEach(card => {
    const radio = card.querySelector('input[type="radio"]');
    if (radio) {
      radio.addEventListener('change', () => {
        paymentCards.forEach(c => c.classList.remove('selected'));
        if (radio.checked) {
          card.classList.add('selected');
        }
      });
    }
  });

  // Checkout form submit
  if (elements.checkoutForm) {
    elements.checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    // Live validation clearance on input
    elements.checkoutForm.querySelectorAll('input, select').forEach(input => {
      input.addEventListener('input', () => {
        if (input.classList.contains('input-error')) {
          input.classList.remove('input-error');
        }
      });
    });
  }

  // Confirmation modal continue shopping
  if (elements.confContinueShoppingBtn) {
    elements.confContinueShoppingBtn.addEventListener('click', () => {
      closeConfirmationModal();
      window.filterByCategory('All');
    });
  }

  // Search input handler
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (elements.clearSearchBtn) {
        elements.clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
      }
      renderProductGrid();
    });
  }

  // Clear search button
  if (elements.clearSearchBtn) {
    elements.clearSearchBtn.addEventListener('click', () => {
      elements.searchInput.value = '';
      state.searchQuery = '';
      elements.clearSearchBtn.style.display = 'none';
      renderProductGrid();
      elements.searchInput.focus();
    });
  }

  // Category filter tabs
  if (elements.filterTabsContainer) {
    elements.filterTabsContainer.addEventListener('click', (e) => {
      const tab = e.target.closest('.filter-tab');
      if (!tab) return;

      const category = tab.dataset.category;
      state.activeCategory = category;

      elements.filterTabsContainer.querySelectorAll('.filter-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      renderProductGrid();
    });
  }

  // Sort select handler
  if (elements.sortSelect) {
    elements.sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProductGrid();
    });
  }

  // Reset all filters button
  if (elements.resetAllFiltersBtn) {
    elements.resetAllFiltersBtn.addEventListener('click', () => {
      window.filterByCategory('All');
      if (elements.searchInput) {
        elements.searchInput.value = '';
        state.searchQuery = '';
        if (elements.clearSearchBtn) elements.clearSearchBtn.style.display = 'none';
      }
      renderProductGrid();
    });
  }

  // Empty state reset button
  if (elements.emptyResetBtn) {
    elements.emptyResetBtn.addEventListener('click', () => {
      window.filterByCategory('All');
      if (elements.searchInput) {
        elements.searchInput.value = '';
        state.searchQuery = '';
        if (elements.clearSearchBtn) elements.clearSearchBtn.style.display = 'none';
      }
      renderProductGrid();
    });
  }

  // Escape key to close open modals or drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (elements.checkoutBackdrop && elements.checkoutBackdrop.classList.contains('active')) {
        closeCheckoutModal();
      } else if (elements.confirmationBackdrop && elements.confirmationBackdrop.classList.contains('active')) {
        closeConfirmationModal();
      } else if (elements.cartDrawer && elements.cartDrawer.classList.contains('open')) {
        closeCartDrawer();
      }
    }
  });
}

/* ==========================================================================
   12. Application Initialization
   ========================================================================== */
function initQuickCart() {
  // 1. Render initial UI components
  renderCategoryCards();
  renderProductGrid();

  // 2. Load stored cart
  state.cart = loadCartFromStorage();
  updateCartUI();

  // 3. Attach listeners
  setupEventListeners();

  console.log('⚡ QuickCart MVP initialized successfully.');
}

// Kick off when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuickCart);
} else {
  initQuickCart();
}
