// shop.js - Enhanced Shop page functionality with cart management
class ShopManager {
  constructor() {
    this.products = [];
    this.filteredProducts = [];
    this.currentPage = 1;
    this.productsPerPage = 12;
    this.currentView = "grid";
    this.filters = {
      category: "all",
      price: "all",
      search: "",
      sort: "featured"
    };

    this.cart = this.loadCartFromStorage();
    this.init();
  }

  init() {
    this.loadProducts();
    this.setupEventListeners();
    this.handleURLParams();
    this.updateTranslations();
    this.updateCartDisplay();
    this.setupCartSync();
  }

  // Enhanced Cart Management Methods
  setupCartSync() {
    // Listen for cart updates from header or other components
    window.addEventListener("cartUpdated", () => {
      this.refreshCartFromStorage();
    });

    // Listen for storage events from other tabs
    window.addEventListener("storage", (e) => {
      if (e.key === "souvenir-cart") {
        this.refreshCartFromStorage();
      }
    });
  }

  refreshCartFromStorage() {
    const previousCartCount = this.getCartItemCount();
    this.cart = this.loadCartFromStorage();
    const newCartCount = this.getCartItemCount();

    // Only update if cart actually changed
    if (previousCartCount !== newCartCount) {
      this.updateCartDisplay();
      this.renderProducts(); // Re-render to update cart badges and buttons
    }
  }

  loadCartFromStorage() {
    try {
      const cartData = localStorage.getItem("souvenir-cart");
      return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
      console.error("Error loading cart from storage:", error);
      return [];
    }
  }

  saveCartToStorage() {
    try {
      localStorage.setItem("souvenir-cart", JSON.stringify(this.cart));

      // Trigger events for other components
      window.dispatchEvent(new CustomEvent("cartUpdated"));
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: "souvenir-cart",
          newValue: JSON.stringify(this.cart)
        })
      );
    } catch (error) {
      console.error("Error saving cart to storage:", error);
      this.showToast("Error saving cart data", "error");
    }
  }

  updateCartDisplay() {
    const totalItems = this.getCartItemCount();
    const cartCount = document.querySelector(".cart-count");

    if (cartCount) {
      cartCount.textContent = totalItems;
      // Add animation for count changes
      if (parseInt(cartCount.textContent) !== totalItems) {
        cartCount.classList.add("pulse");
        setTimeout(() => cartCount.classList.remove("pulse"), 300);
      }
    }

    // Update header cart if headerManager exists
    if (window.headerManager) {
      window.headerManager.refreshCartFromStorage();
    }
  }

  // Enhanced Add to Cart with Quantity Management
  addToCart(productId, quantity = 1) {
    const product = this.products.find((p) => p.id === productId);
    if (!product) {
      console.error("Product not found:", productId);
      this.showToast("Product not found", "error");
      return false;
    }

    if (!product.inStock) {
      this.showToast("This product is out of stock", "error");
      return false;
    }

    const existingItem = this.cart.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: quantity,
        inStock: product.inStock
      });
    }

    this.saveCartToStorage();
    this.updateCartDisplay();
    this.showCartNotification(product.name, "added");

    // Update the specific product card
    this.updateProductCardCartState(productId);

    return true;
  }

  removeFromCart(productId) {
    const item = this.cart.find((item) => item.id === productId);
    if (item) {
      this.cart = this.cart.filter((item) => item.id !== productId);
      this.saveCartToStorage();
      this.updateCartDisplay();
      this.showCartNotification(item.name, "removed");

      // Update the product card
      this.updateProductCardCartState(productId);
    }
  }

  increaseQuantity(productId) {
    const item = this.cart.find((item) => item.id === productId);
    if (item) {
      item.quantity += 1;
      this.saveCartToStorage();
      this.updateCartDisplay();
      this.showCartNotification(item.name, "updated");

      // Update the product card
      this.updateProductCardCartState(productId);
    }
  }

  decreaseQuantity(productId) {
    const item = this.cart.find((item) => item.id === productId);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        this.saveCartToStorage();
        this.updateCartDisplay();
        this.showCartNotification(item.name, "updated");
      } else {
        this.removeFromCart(productId);
      }

      // Update the product card
      this.updateProductCardCartState(productId);
    }
  }

  updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    const item = this.cart.find((item) => item.id === productId);
    if (item) {
      item.quantity = newQuantity;
      this.saveCartToStorage();
      this.updateCartDisplay();
      this.showCartNotification(item.name, "updated");

      // Update the product card
      this.updateProductCardCartState(productId);
    }
  }

  getCartItem(productId) {
    return this.cart.find((item) => item.id === productId);
  }

  getCartTotal() {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  getCartItemCount() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  clearCart() {
    this.cart = [];
    this.saveCartToStorage();
    this.updateCartDisplay();
    this.renderProducts(); // Re-render to remove all cart badges
    this.showToast("Cart cleared successfully", "info");
  }

  // Enhanced Product Card with Cart Controls
  createProductCard(product) {
    const discount = product.originalPrice
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )
      : 0;

    const isListView = this.currentView === "list";
    const cardClass = isListView ? "product-card list-view" : "product-card";

    // Check cart status
    const cartItem = this.cart.find((item) => item.id === product.id);
    const inCart = cartItem ? true : false;
    const cartQuantity = cartItem ? cartItem.quantity : 0;

    // Format price in EGP
    const formatPrice = (price) => {
      return `EGP ${price.toFixed(2)}`;
    };

    return `
            <div class="${cardClass}" data-product-id="${product.id}">
                ${product.featured ? `<span class="product-badge">${this.getTranslatedText("shop.badge.featured")}</span>` : ""}
                ${!product.inStock ? `<span class="product-badge out-of-stock">${this.getTranslatedText("shop.badge.outOfStock")}</span>` : ""}
                ${inCart ? `<span class="product-badge in-cart">${cartQuantity} in Cart</span>` : ""}
                
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                    ${
                      inCart
                        ? `
                        <div class="cart-controls-overlay">
                            <div class="cart-controls">
                                <button class="cart-control-btn decrease-qty" data-product-id="${product.id}" title="Decrease Quantity">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="cart-quantity-display">${cartQuantity}</span>
                                <button class="cart-control-btn increase-qty" data-product-id="${product.id}" title="Increase Quantity">
                                    <i class="fas fa-plus"></i>
                                </button>
                                <button class="cart-control-btn remove-from-cart" data-product-id="${product.id}" title="Remove from Cart">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    `
                        : ""
                    }
                </div>
                
                <div class="product-info">
                    <span class="product-category">${this.getTranslatedText(`categories.${product.category}`)}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    
                    <div class="product-price">
                        <span class="current-price">${formatPrice(product.price)}</span>
                        ${
                          product.originalPrice
                            ? `
                            <span class="original-price">${formatPrice(product.originalPrice)}</span>
                            <span class="discount">-${discount}%</span>
                        `
                            : ""
                        }
                    </div>
                    
                    <div class="product-actions">
                        <button class="btn-add-cart ${inCart ? "in-cart" : ""}" 
                                data-product-id="${product.id}" 
                                ${!product.inStock ? "disabled" : ""}>
                            <i class="fas ${inCart ? "fa-shopping-bag" : "fa-cart-plus"}"></i>
                            ${
                              inCart
                                ? this.getTranslatedText("shop.button.viewCart")
                                : product.inStock
                                  ? this.getTranslatedText(
                                      "shop.button.addToCart"
                                    )
                                  : this.getTranslatedText(
                                      "shop.badge.outOfStock"
                                    )
                            }
                        </button>
                        <button class="btn-quick-view" data-product-id="${product.id}">
                            <i class="fas fa-eye"></i>
                            ${this.getTranslatedText("shop.button.quickView")}
                        </button>
                    </div>
                </div>
            </div>
        `;
  }

  // Enhanced Event Listeners for Cart Controls
  addProductCardEventListeners() {
    // Add to cart / View cart functionality
    document.querySelectorAll(".btn-add-cart").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const productId = parseInt(e.currentTarget.dataset.productId);
        const inCart = this.cart.find((item) => item.id === productId);

        if (inCart) {
          // If already in cart, navigate to cart page or show cart
          this.showToast(
            "Item already in cart. Use quantity controls to adjust.",
            "info"
          );
          // Alternatively, you could scroll to cart or open cart preview
          if (window.headerManager) {
            document.getElementById("cartToggle")?.click();
          }
        } else {
          this.addToCart(productId);
        }
      });
    });

    // Quick view functionality
    document.querySelectorAll(".btn-quick-view").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const productId = parseInt(e.currentTarget.dataset.productId);
        this.showQuickView(productId);
      });
    });

    // Cart quantity controls (for products already in cart)
    document.querySelectorAll(".increase-qty").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const productId = parseInt(e.currentTarget.dataset.productId);
        this.increaseQuantity(productId);
        e.stopPropagation();
      });
    });

    document.querySelectorAll(".decrease-qty").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const productId = parseInt(e.currentTarget.dataset.productId);
        this.decreaseQuantity(productId);
        e.stopPropagation();
      });
    });

    document.querySelectorAll(".remove-from-cart").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const productId = parseInt(e.currentTarget.dataset.productId);
        this.removeFromCart(productId);
        e.stopPropagation();
      });
    });

    // Product image click - show cart controls if item is in cart
    document
      .querySelectorAll(".product-image-container")
      .forEach((container) => {
        container.addEventListener("click", (e) => {
          if (e.target.classList.contains("product-image")) {
            const productCard = e.target.closest(".product-card");
            const productId = parseInt(productCard.dataset.productId);
            const inCart = this.cart.find((item) => item.id === productId);

            if (inCart) {
              // Toggle cart controls visibility
              const overlay = container.querySelector(".cart-controls-overlay");
              if (overlay) {
                overlay.classList.toggle("active");
              }
            }
          }
        });
      });
  }

  // Update specific product card when cart state changes
  updateProductCardCartState(productId) {
    const productCard = document.querySelector(
      `.product-card[data-product-id="${productId}"]`
    );
    if (productCard) {
      const product = this.products.find((p) => p.id === productId);
      if (product) {
        // Re-render just this product card
        const newCardHTML = this.createProductCard(product);
        productCard.outerHTML = newCardHTML;

        // Re-attach event listeners to the new card
        const newCard = document.querySelector(
          `.product-card[data-product-id="${productId}"]`
        );
        if (newCard) {
          this.addEventListenersToCard(newCard);
        }
      }
    }
  }

  addEventListenersToCard(card) {
    const productId = parseInt(card.dataset.productId);

    // Add to cart button
    const addCartBtn = card.querySelector(".btn-add-cart");
    if (addCartBtn) {
      addCartBtn.addEventListener("click", (e) => {
        const inCart = this.cart.find((item) => item.id === productId);
        if (inCart) {
          this.showToast(
            "Item already in cart. Use quantity controls to adjust.",
            "info"
          );
        } else {
          this.addToCart(productId);
        }
      });
    }

    // Quick view button
    const quickViewBtn = card.querySelector(".btn-quick-view");
    if (quickViewBtn) {
      quickViewBtn.addEventListener("click", () => {
        this.showQuickView(productId);
      });
    }

    // Cart controls
    const increaseBtn = card.querySelector(".increase-qty");
    const decreaseBtn = card.querySelector(".decrease-qty");
    const removeBtn = card.querySelector(".remove-from-cart");

    if (increaseBtn) {
      increaseBtn.addEventListener("click", (e) => {
        this.increaseQuantity(productId);
        e.stopPropagation();
      });
    }

    if (decreaseBtn) {
      decreaseBtn.addEventListener("click", (e) => {
        this.decreaseQuantity(productId);
        e.stopPropagation();
      });
    }

    if (removeBtn) {
      removeBtn.addEventListener("click", (e) => {
        this.removeFromCart(productId);
        e.stopPropagation();
      });
    }
  }

  // Enhanced Quick View with Cart Controls
  createQuickViewContent(product) {
    const discount = product.originalPrice
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )
      : 0;

    const cartItem = this.cart.find((item) => item.id === product.id);
    const inCart = cartItem ? true : false;
    const cartQuantity = cartItem ? cartItem.quantity : 0;

    // Format price in EGP
    const formatPrice = (price) => {
      return `EGP ${price.toFixed(2)}`;
    };

    return `
            <div class="quick-view-grid">
                <div class="quick-view-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${
                      inCart
                        ? `
                        <div class="quick-view-cart-controls">
                            <h4>Cart Controls</h4>
                            <div class="quantity-controls">
                                <button class="qty-btn decrease" data-product-id="${product.id}">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="quantity-display">${cartQuantity}</span>
                                <button class="qty-btn increase" data-product-id="${product.id}">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <button class="btn btn-danger remove-item" data-product-id="${product.id}">
                                <i class="fas fa-trash"></i> Remove from Cart
                            </button>
                        </div>
                    `
                        : ""
                    }
                </div>
                <div class="quick-view-details">
                    <h2>${product.name}</h2>
                    <span class="product-category">${this.getCategoryName(product.category)}</span>
                    
                    <div class="product-price large">
                        <span class="current-price">${formatPrice(product.price)}</span>
                        ${
                          product.originalPrice
                            ? `
                            <span class="original-price">${formatPrice(product.originalPrice)}</span>
                            <span class="discount">-${discount}%</span>
                        `
                            : ""
                        }
                    </div>
                    
                    <p class="product-description">${product.description}</p>
                    
                    <div class="product-meta">
                        <div class="meta-item">
                            <strong>${this.getTranslatedText("shop.quickView.artisan")}:</strong> ${product.artisan}
                        </div>
                        <div class="meta-item">
                            <strong>${this.getTranslatedText("shop.quickView.availability")}:</strong> 
                            <span class="${product.inStock ? "in-stock" : "out-of-stock"}">
                                ${product.inStock ? this.getTranslatedText("shop.quickView.inStock") : this.getTranslatedText("shop.quickView.outOfStock")}
                            </span>
                        </div>
                        ${
                          inCart
                            ? `
                            <div class="meta-item">
                                <strong>In Cart:</strong> 
                                <span class="cart-quantity-badge">${cartQuantity} ${cartQuantity === 1 ? "item" : "items"}</span>
                            </div>
                        `
                            : ""
                        }
                    </div>
                    
                    <div class="quick-view-actions">
                        ${
                          !inCart
                            ? `
                            <button class="btn btn-primary btn-large add-to-cart-quickview" data-product-id="${product.id}" ${!product.inStock ? "disabled" : ""}>
                                <i class="fas fa-cart-plus"></i>
                                ${this.getTranslatedText("shop.button.addToCart")}
                            </button>
                        `
                            : `
                            <button class="btn btn-success btn-large" onclick="window.location.href='/cart'">
                                <i class="fas fa-shopping-cart"></i>
                                View Cart
                            </button>
                        `
                        }
                        <button class="btn btn-secondary">
                            <i class="fas fa-heart"></i>
                            ${this.getTranslatedText("shop.button.wishlist")}
                        </button>
                    </div>
                </div>
            </div>
        `;
  }

  // Enhanced Quick View Event Listeners
  setupQuickViewEventListeners() {
    // Add to cart from quick view
    document.querySelectorAll(".add-to-cart-quickview").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const productId = parseInt(e.currentTarget.dataset.productId);
        this.addToCart(productId);
        document.getElementById("quickViewModal").style.display = "none";
      });
    });

    // Quantity controls in quick view
    document
      .querySelectorAll(".quick-view-cart-controls .increase")
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const productId = parseInt(e.currentTarget.dataset.productId);
          this.increaseQuantity(productId);
          this.updateQuickViewContent(productId);
        });
      });

    document
      .querySelectorAll(".quick-view-cart-controls .decrease")
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const productId = parseInt(e.currentTarget.dataset.productId);
          this.decreaseQuantity(productId);
          this.updateQuickViewContent(productId);
        });
      });

    document
      .querySelectorAll(".quick-view-cart-controls .remove-item")
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const productId = parseInt(e.currentTarget.dataset.productId);
          this.removeFromCart(productId);
          document.getElementById("quickViewModal").style.display = "none";
        });
      });
  }

  updateQuickViewContent(productId) {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      const content = document.getElementById("quickViewContent");
      content.innerHTML = this.createQuickViewContent(product);
      this.setupQuickViewEventListeners();
    }
  }

  showCartNotification(productName, action = "added") {
    const messages = {
      added: `${productName} added to cart!`,
      removed: `${productName} removed from cart`,
      updated: `Cart updated successfully`
    };

    const notification = document.createElement("div");
    notification.className = `cart-notification ${action}`;
    notification.innerHTML = `
            <i class="fas ${
              action === "added"
                ? "fa-check-circle"
                : action === "removed"
                  ? "fa-trash-alt"
                  : "fa-sync-alt"
            }"></i>
            <span>${messages[action]}</span>
        `;

    const toastStyle = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${
              action === "added"
                ? "var(--deep-teal)"
                : action === "removed"
                  ? "#dc3545"
                  : "#ffc107"
            };
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
            font-weight: 500;
        `;

    notification.style.cssText = toastStyle;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease forwards";
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  // Product Loading and Management
  async loadProducts() {
    try {
      this.showLoadingState();

      // In a real application, this would be an API call
      // For demo purposes, we'll use mock data
      this.products = await this.fetchMockProducts();
      this.applyFilters();
    } catch (error) {
      console.error("Error loading products:", error);
      this.showErrorState();
    }
  }

  async fetchMockProducts() {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // ============================================================
    // ALL PRODUCTS ARE LEATHER WITH PRICES IN EGYPTIAN POUNDS (EGP)
    // ============================================================

    return [
      // ============ AZURA - Leather Jewelry & Accessories ============
      {
        id: 1,
        name: "AZURA Handmade Leather Earrings - Gold",
        category: "leather",
        price: 850,
        originalPrice: 1200,
        image: "./assets/img/AZURA/AZURA 01.png",
        description: "Elegant handmade leather earrings with gold accents. Lightweight and perfect for daily wear. Each piece is uniquely crafted by skilled artisans.",
        featured: true,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "leather", "handmade", "jewelry", "gold", "azura"]
      },
      {
        id: 2,
        name: "AZURA Bohemian Leather Earrings - Silver",
        category: "leather",
        price: 850,
        originalPrice: 1200,
        image: "./assets/img/AZURA/AZURA 02.png",
        description: "Beautiful silver-toned bohemian style leather earrings featuring traditional Egyptian motifs.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "leather", "bohemian", "jewelry", "silver", "azura"]
      },
      {
        id: 3,
        name: "AZURA Colorful Tassel Leather Earrings",
        category: "leather",
        price: 750,
        originalPrice: 1000,
        image: "./assets/img/AZURA/AZURA 03.png",
        description: "Vibrant colorful tassel leather earrings that add a pop of color to any outfit. Handcrafted with attention to detail.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "tassel", "colorful", "jewelry", "leather", "azura"]
      },
      {
        id: 4,
        name: "AZURA Geometric Leather Earrings",
        category: "leather",
        price: 950,
        originalPrice: 1350,
        image: "./assets/img/AZURA/AZURA 04.png",
        description: "Modern geometric leather earrings combining contemporary design with traditional craftsmanship.",
        featured: true,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "geometric", "leather", "modern", "azura"]
      },
      {
        id: 5,
        name: "AZURA Floral Design Leather Earrings",
        category: "leather",
        price: 800,
        originalPrice: 1100,
        image: "./assets/img/AZURA/AZURA 05.png",
        description: "Delicate floral pattern leather earrings inspired by Egyptian flowers and nature.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "floral", "leather", "nature", "azura"]
      },
      {
        id: 6,
        name: "AZURA Statement Leather Earrings",
        category: "leather",
        price: 1100,
        originalPrice: 1500,
        image: "./assets/img/AZURA/AZURA 06.png",
        description: "Bold statement leather earrings that make a lasting impression. Perfect for special occasions.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "statement", "leather", "bold", "azura"]
      },
      {
        id: 7,
        name: "AZURA Elegance Leather Earrings",
        category: "leather",
        price: 900,
        originalPrice: 1250,
        image: "./assets/img/AZURA/AZURA 07.png",
        description: "Elegant design leather earrings suitable for both casual and formal events.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "elegant", "leather", "versatile", "azura"]
      },
      {
        id: 8,
        name: "AZURA Premium Collection Leather Earrings",
        category: "leather",
        price: 1200,
        originalPrice: 1600,
        image: "./assets/img/AZURA/AZURA 08.png",
        description: "Premium quality leather earrings from the exclusive AZURA collection.",
        featured: true,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "premium", "leather", "luxury", "azura"]
      },
      {
        id: 9,
        name: "AZURA Delicate Chain Leather Earrings",
        category: "leather",
        price: 780,
        originalPrice: 1050,
        image: "./assets/img/AZURA/AZURA 09.png",
        description: "Delicate chain detail leather earrings that combine leather with elegant chain elements.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "chain", "leather", "delicate", "azura"]
      },
      {
        id: 10,
        name: "AZURA Modern Art Leather Earrings",
        category: "leather",
        price: 980,
        originalPrice: 1300,
        image: "./assets/img/AZURA/AZURA 10.png",
        description: "Modern art inspired leather earrings for the contemporary fashion lover.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "modern", "art", "leather", "azura"]
      },
      {
        id: 11,
        name: "AZURA Traditional Egyptian Leather Earrings",
        category: "leather",
        price: 880,
        originalPrice: 1150,
        image: "./assets/img/AZURA/AZURA 11.png",
        description: "Traditional Egyptian design leather earrings celebrating ancient heritage.",
        featured: true,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "traditional", "egyptian", "heritage", "leather", "azura"]
      },
      {
        id: 12,
        name: "AZURA Minimalist Leather Earrings",
        category: "leather",
        price: 700,
        originalPrice: 950,
        image: "./assets/img/AZURA/AZURA 12.png",
        description: "Minimalist design leather earrings for those who appreciate simple elegance.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "minimalist", "simple", "leather", "azura"]
      },
      {
        id: 13,
        name: "AZURA Vintage Style Leather Earrings",
        category: "leather",
        price: 820,
        originalPrice: 1080,
        image: "./assets/img/AZURA/AZURA 13.png",
        description: "Vintage-inspired leather earrings with a timeless appeal.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "vintage", "timeless", "leather", "azura"]
      },
      {
        id: 14,
        name: "AZURA Festival Collection Leather Earrings",
        category: "leather",
        price: 890,
        originalPrice: 1180,
        image: "./assets/img/AZURA/AZURA 14.png",
        description: "Perfect for festivals and celebrations, these leather earrings are sure to turn heads.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "festival", "colorful", "celebration", "leather", "azura"]
      },
      {
        id: 15,
        name: "AZURA Artisan Signature Leather Earrings",
        category: "leather",
        price: 1300,
        originalPrice: 1700,
        image: "./assets/img/AZURA/AZURA 15.png",
        description: "Signature piece from AZURA's master artisans. Each pair is uniquely crafted from premium leather.",
        featured: true,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "signature", "artisan", "premium", "leather", "azura"]
      },
      {
        id: 16,
        name: "AZURA Etsy Special Edition Leather Earrings",
        category: "leather",
        price: 950,
        originalPrice: 1250,
        image: "./assets/img/AZURA/freepik__-etsy-__91115.png",
        description: "Special edition leather earrings created exclusively for Etsy collectors.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "etsy", "special-edition", "collector", "leather", "azura"]
      },
      {
        id: 17,
        name: "AZURA Limited Edition Leather Earrings",
        category: "leather",
        price: 1400,
        originalPrice: 1850,
        image: "./assets/img/AZURA/freepik__-etsy-__91116.png",
        description: "Limited edition piece - only a few available. Premium leather craftsmanship.",
        featured: true,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "limited-edition", "premium", "exclusive", "leather", "azura"]
      },
      {
        id: 18,
        name: "AZURA Summer Collection Leather Earrings",
        category: "leather",
        price: 780,
        originalPrice: 1020,
        image: "./assets/img/AZURA/freepik__-etsy-__91117.png",
        description: "Bright and cheerful leather earrings perfect for summer days.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "summer", "bright", "cheerful", "leather", "azura"]
      },
      {
        id: 19,
        name: "AZURA Winter Elegance Leather Earrings",
        category: "leather",
        price: 850,
        originalPrice: 1120,
        image: "./assets/img/AZURA/freepik__-etsy-__91118.png",
        description: "Elegant winter-themed leather earrings that add warmth to any outfit.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "winter", "elegant", "warm", "leather", "azura"]
      },
      {
        id: 20,
        name: "AZURA Pearl Accent Leather Earrings",
        category: "leather",
        price: 1050,
        originalPrice: 1400,
        image: "./assets/img/AZURA/freepik__-etsy-__91119.png",
        description: "Luxurious leather earrings with pearl accents.",
        featured: true,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "pearl", "luxury", "leather", "azura"]
      },
      {
        id: 21,
        name: "AZURA Crystal Embellished Leather Earrings",
        category: "leather",
        price: 1150,
        originalPrice: 1550,
        image: "./assets/img/AZURA/freepik__-etsy-__91120.png",
        description: "Sparkling crystal embellishments on premium leather.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "crystal", "sparkling", "premium", "leather", "azura"]
      },
      {
        id: 22,
        name: "AZURA Nature Inspired Leather Earrings",
        category: "leather",
        price: 820,
        originalPrice: 1080,
        image: "./assets/img/AZURA/frepik__-etsy-__91121.png",
        description: "Nature-inspired designs featuring leaf and floral motifs on leather.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "nature", "floral", "leaf", "leather", "azura"]
      },
      {
        id: 23,
        name: "AZURA Abstract Art Leather Earrings",
        category: "leather",
        price: 920,
        originalPrice: 1220,
        image: "./assets/img/AZURA/freepik__-etsy-__91122.png",
        description: "Abstract art inspired leather earrings for the creative soul.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "abstract", "art", "creative", "leather", "azura"]
      },
      {
        id: 24,
        name: "AZURA Glamour Collection Leather Earrings",
        category: "leather",
        price: 1250,
        originalPrice: 1650,
        image: "./assets/img/AZURA/freepik__-etsy-__91123.png",
        description: "Glamorous leather earrings for special occasions and red carpet events.",
        featured: true,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "glamour", "special-occasion", "red-carpet", "leather", "azura"]
      },
      {
        id: 25,
        name: "AZURA Everyday Essentials Leather Earrings",
        category: "leather",
        price: 680,
        originalPrice: 900,
        image: "./assets/img/AZURA/freepik__-etsy-__91124.png",
        description: "Perfect for everyday wear - comfortable and stylish leather earrings.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "everyday", "essential", "comfortable", "leather", "azura"]
      },
      {
        id: 26,
        name: "AZURA Travel Collection Leather Earrings",
        category: "leather",
        price: 790,
        originalPrice: 1050,
        image: "./assets/img/AZURA/freepik__-etsy-__91125.png",
        description: "Lightweight and durable leather earrings perfect for travelers.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "travel", "lightweight", "durable", "leather", "azura"]
      },
      {
        id: 27,
        name: "AZURA Boho Chic Leather Earrings",
        category: "leather",
        price: 870,
        originalPrice: 1150,
        image: "./assets/img/AZURA/freepik__-etsy-__91126.png",
        description: "Bohemian chic style leather earrings for the free-spirited fashionista.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "boho", "chic", "bohemian", "leather", "azura"]
      },
      {
        id: 28,
        name: "AZURA Royal Collection Leather Earrings",
        category: "leather",
        price: 1450,
        originalPrice: 1900,
        image: "./assets/img/AZURA/freepik__-etsy-__91127.png",
        description: "Royal-inspired design fit for a queen. Truly majestic leather earrings.",
        featured: true,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "royal", "majestic", "luxury", "leather", "azura"]
      },
      {
        id: 29,
        name: "AZURA Celestial Leather Earrings",
        category: "leather",
        price: 980,
        originalPrice: 1280,
        image: "./assets/img/AZURA/freepik__-etsy-__91128.png",
        description: "Celestial themed leather earrings featuring stars and moon motifs.",
        featured: false,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "celestial", "stars", "moon", "leather", "azura"]
      },
      {
        id: 30,
        name: "AZURA Heritage Collection Leather Earrings",
        category: "leather",
        price: 1100,
        originalPrice: 1450,
        image: "./assets/img/AZURA/freepik__-etsy-__91129.png",
        description: "Celebrating Egyptian heritage through contemporary leather design.",
        featured: true,
        inStock: true,
        artisan: "AZURA Atelier",
        tags: ["earrings", "heritage", "egyptian", "contemporary", "leather", "azura"]
      },

      // ============ LAILA - Premium Leather Goods ============
      {
        id: 50,
        name: "LAILA Premium Leather Tote Bag",
        category: "leather",
        price: 3750,
        originalPrice: 4500,
        image: "./assets/img/LAILA/LAILA 01 1.png",
        description: "Spacious premium leather tote bag perfect for daily use. Made from high-quality genuine leather.",
        featured: true,
        inStock: true,
        artisan: "LAILA Design",
        tags: ["bag", "leather", "tote", "premium", "laila"]
      },
      {
        id: 51,
        name: "LAILA Leather Crossbody Bag",
        category: "leather",
        price: 2250,
        originalPrice: 2800,
        image: "./assets/img/LAILA/LAILA 02.png",
        description: "Elegant leather crossbody bag with adjustable strap. Crafted from premium leather.",
        featured: false,
        inStock: true,
        artisan: "LAILA Design",
        tags: ["crossbody", "leather", "bag", "adjustable", "laila"]
      },
      {
        id: 52,
        name: "LAILA Leather Wallet - Bifold",
        category: "leather",
        price: 1250,
        originalPrice: 1600,
        image: "./assets/img/LAILA/LAILA 03.png",
        description: "Slim bifold leather wallet with multiple card slots. Made from genuine leather.",
        featured: false,
        inStock: true,
        artisan: "LAILA Design",
        tags: ["wallet", "bifold", "leather", "card-holder", "laila"]
      },
      {
        id: 53,
        name: "LAILA Leather Backpack",
        category: "leather",
        price: 4200,
        originalPrice: 5200,
        image: "./assets/img/LAILA/LAILA 04.png",
        description: "Stylish leather backpack combining fashion and functionality. Premium leather construction.",
        featured: true,
        inStock: true,
        artisan: "LAILA Design",
        tags: ["backpack", "leather", "stylish", "functional", "laila"]
      },
      {
        id: 54,
        name: "LAILA Leather Belt",
        category: "leather",
        price: 800,
        originalPrice: 1050,
        image: "./assets/img/LAILA/LAILA 05.png",
        description: "Premium leather belt with brass buckle. Made from high-quality leather.",
        featured: false,
        inStock: true,
        artisan: "LAILA Design",
        tags: ["belt", "leather", "accessory", "brass-buckle", "laila"]
      },
      {
        id: 55,
        name: "LAILA Leather Clutch Bag",
        category: "leather",
        price: 1950,
        originalPrice: 2500,
        image: "./assets/img/LAILA/LAILA 06.png",
        description: "Elegant leather clutch for evening events and special occasions. Genuine leather.",
        featured: true,
        inStock: true,
        artisan: "LAILA Design",
        tags: ["clutch", "leather", "evening", "elegant", "laila"]
      },
      {
        id: 56,
        name: "LAILA Leather Card Holder",
        category: "leather",
        price: 650,
        originalPrice: 850,
        image: "./assets/img/LAILA/LAILA 07.png",
        description: "Minimalist leather card holder for essential cards. Premium leather construction.",
        featured: false,
        inStock: true,
        artisan: "LAILA Design",
        tags: ["card-holder", "minimalist", "leather", "essential", "laila"]
      },

      // ============ RANO - Natural Leather Goods ============
      {
        id: 57,
        name: "RANO Natural Leather Messenger Bag",
        category: "leather",
        price: 3000,
        originalPrice: 3800,
        image: "./assets/img/Rano/RANO 01 1.png",
        description: "Classic messenger bag crafted from natural leather. Durable and stylish.",
        featured: true,
        inStock: true,
        artisan: "RANO Atelier",
        tags: ["messenger-bag", "leather", "natural", "classic", "rano"]
      },
      {
        id: 58,
        name: "RANO Leather Journal Cover",
        category: "leather",
        price: 550,
        originalPrice: 720,
        image: "./assets/img/Rano/RANO 02 1.jpeg",
        description: "Handcrafted leather journal cover for standard notebooks. Genuine leather.",
        featured: false,
        inStock: true,
        artisan: "RANO Atelier",
        tags: ["journal-cover", "leather", "notebook", "handcrafted", "rano"]
      },
      {
        id: 59,
        name: "RANO Leather Keychain",
        category: "leather",
        price: 350,
        originalPrice: 450,
        image: "./assets/img/Rano/RANO 03 1.jpeg",
        description: "Simple yet elegant leather keychain. Made from premium leather.",
        featured: false,
        inStock: true,
        artisan: "RANO Atelier",
        tags: ["keychain", "leather", "accessory", "simple", "rano"]
      },

      // ============ ROSE - Leather Accessories ============
      {
        id: 60,
        name: "ROSE Leather Handbag - Classic",
        category: "leather",
        price: 3300,
        originalPrice: 4000,
        image: "./assets/img/Rose/ROSE 01.png",
        description: "Classic leather handbag from ROSE collection. Premium quality leather.",
        featured: true,
        inStock: true,
        artisan: "ROSE Collection",
        tags: ["handbag", "leather", "classic", "rose"]
      },
      {
        id: 61,
        name: "ROSE Leather Bracelet",
        category: "leather",
        price: 400,
        originalPrice: 550,
        image: "./assets/img/Rose/ROSE 02 1.png",
        description: "Delicate leather bracelet with rose gold accents. Genuine leather.",
        featured: false,
        inStock: true,
        artisan: "ROSE Collection",
        tags: ["bracelet", "leather", "rose-gold", "jewelry", "rose"]
      },
      {
        id: 62,
        name: "ROSE Glasses Case",
        category: "leather",
        price: 600,
        originalPrice: 800,
        image: "./assets/img/Rose/ROSE 03 1.png",
        description: "Protective leather case for glasses or sunglasses. Premium leather.",
        featured: false,
        inStock: true,
        artisan: "ROSE Collection",
        tags: ["glasses-case", "leather", "protective", "rose"]
      },
      {
        id: 63,
        name: "ROSE Key Holder",
        category: "leather",
        price: 400,
        originalPrice: 550,
        image: "./assets/img/Rose/ROSE 04.jpeg",
        description: "Compact leather key holder with multiple rings. Genuine leather.",
        featured: false,
        inStock: true,
        artisan: "ROSE Collection",
        tags: ["key-holder", "leather", "compact", "rose"]
      },
      {
        id: 64,
        name: "ROSE Large Tote Bag",
        category: "leather",
        price: 3750,
        originalPrice: 4600,
        image: "./assets/img/Rose/ROSE 05.jpeg",
        description: "Spacious leather tote bag perfect for shopping or daily use. Premium leather.",
        featured: true,
        inStock: true,
        artisan: "ROSE Collection",
        tags: ["tote-bag", "leather", "large", "shopping", "rose"]
      },
      {
        id: 65,
        name: "ROSE Passport Holder",
        category: "leather",
        price: 550,
        originalPrice: 750,
        image: "./assets/img/Rose/ROSE 06.jpeg",
        description: "Elegant leather passport holder for travelers. Made from genuine leather.",
        featured: false,
        inStock: true,
        artisan: "ROSE Collection",
        tags: ["passport-holder", "leather", "travel", "rose"]
      },
      {
        id: 66,
        name: "ROSE Small Crossbody Bag",
        category: "leather",
        price: 1950,
        originalPrice: 2500,
        image: "./assets/img/Rose/ROSE 07.jpeg",
        description: "Compact crossbody bag for essentials. Premium leather construction.",
        featured: false,
        inStock: true,
        artisan: "ROSE Collection",
        tags: ["crossbody", "small", "leather", "compact", "rose"]
      },
      {
        id: 67,
        name: "ROSE Leather Pouch",
        category: "leather",
        price: 450,
        originalPrice: 600,
        image: "./assets/img/Rose/ROSE 08.jpeg",
        description: "Versatile leather pouch for cosmetics or small items. Genuine leather.",
        featured: false,
        inStock: true,
        artisan: "ROSE Collection",
        tags: ["pouch", "leather", "cosmetics", "versatile", "rose"]
      },
      {
        id: 68,
        name: "ROSE Phone Case",
        category: "leather",
        price: 500,
        originalPrice: 680,
        image: "./assets/img/Rose/ROSE 09.jpeg",
        description: "Leather phone case with card holder slot. Premium leather protection.",
        featured: false,
        inStock: true,
        artisan: "ROSE Collection",
        tags: ["phone-case", "leather", "card-holder", "rose"]
      },
      {
        id: 69,
        name: "ROSE Makeup Bag",
        category: "leather",
        price: 580,
        originalPrice: 780,
        image: "./assets/img/Rose/ROSE 10.jpeg",
        description: "Stylish leather makeup bag for organizing cosmetics. Genuine leather.",
        featured: false,
        inStock: true,
        artisan: "ROSE Collection",
        tags: ["makeup-bag", "leather", "cosmetics", "organizer", "rose"]
      },

      // ============ Additional Leather Products from Other Collections ============
      {
        id: 70,
        name: "BAST Leather-Trimmed Ceramic Vase",
        category: "leather",
        price: 1600,
        originalPrice: 2000,
        image: "./assets/img/Bast/Bast 01.jpeg",
        description: "Beautiful ceramic vase with elegant leather trim details. A unique blend of materials.",
        featured: false,
        inStock: true,
        artisan: "BAST Ceramics",
        tags: ["vase", "ceramic", "leather-trim", "home-decor", "bast"]
      },
      {
        id: 71,
        name: "MERAKY Leather-Embellished Textile Art",
        category: "leather",
        price: 2200,
        originalPrice: 2800,
        image: "./assets/img/MERAKY/ERAKY 01.jpeg",
        description: "Beautiful textile art piece with premium leather embellishments.",
        featured: false,
        inStock: true,
        artisan: "MERAKY Textiles",
        tags: ["textile-art", "leather-embellished", "wall-art", "meraky"]
      },
      {
        id: 72,
        name: "MERAKY Leather-Trimmed Cushion Cover",
        category: "leather",
        price: 750,
        originalPrice: 950,
        image: "./assets/img/MERAKY/freepik__-etsy-__91136.png",
        description: "Luxurious cushion cover with elegant leather trim detailing.",
        featured: false,
        inStock: true,
        artisan: "MERAKY Textiles",
        tags: ["cushion-cover", "leather-trim", "luxury", "meraky"]
      }
    ];
  }

  // Rest of the class methods remain the same...
  setupEventListeners() {
    // Search functionality
    document
      .getElementById("mainSearchInput")
      .addEventListener("input", (e) => {
        this.filters.search = e.target.value;
        this.applyFilters();
      });

    document.querySelector(".search-btn").addEventListener("click", () => {
      this.applyFilters();
    });

    // Filter functionality
    document
      .getElementById("categoryFilter")
      .addEventListener("change", (e) => {
        this.filters.category = e.target.value;
        this.applyFilters();
        this.updateActiveFilters();
      });

    document.getElementById("priceFilter").addEventListener("change", (e) => {
      this.filters.price = e.target.value;
      this.applyFilters();
      this.updateActiveFilters();
    });

    // Sort functionality
    document.getElementById("sortOptions").addEventListener("change", (e) => {
      this.filters.sort = e.target.value;
      this.applyFilters();
    });

    // View toggle
    document.querySelectorAll(".view-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.setView(e.target.closest(".view-btn").dataset.view);
      });
    });

    // Reset filters
    document.getElementById("resetFilters").addEventListener("click", () => {
      this.resetFilters();
    });

    // Modal functionality
    this.setupModal();
  }

  applyFilters() {
    let filtered = [...this.products];

    // Apply search filter
    if (this.filters.search) {
      const searchTerm = this.filters.search.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
      );
    }

    // Apply category filter
    if (this.filters.category !== "all") {
      filtered = filtered.filter(
        (product) => product.category === this.filters.category
      );
    }

    // Apply price filter (in EGP)
    if (this.filters.price !== "all") {
      filtered = filtered.filter((product) => {
        const price = product.price;
        switch (this.filters.price) {
          case "0-500":
            return price <= 500;
          case "500-1000":
            return price > 500 && price <= 1000;
          case "1000-2000":
            return price > 1000 && price <= 2000;
          case "2000-5000":
            return price > 2000 && price <= 5000;
          case "5000+":
            return price > 5000;
          default:
            return true;
        }
      });
    }

    // Apply sorting
    filtered = this.sortProducts(filtered, this.filters.sort);

    this.filteredProducts = filtered;
    this.currentPage = 1;
    this.renderProducts();
    this.updatePagination();
    this.updateProductCount();
  }

  sortProducts(products, sortBy) {
    switch (sortBy) {
      case "newest":
        return [...products].sort((a, b) => b.id - a.id);
      case "price-low":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...products].sort((a, b) => b.price - a.price);
      case "name":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "featured":
      default:
        return [...products].sort((a, b) =>
          b.featured === a.featured ? 0 : b.featured ? -1 : 1
        );
    }
  }

  renderProducts() {
    const grid = document.getElementById("productsGrid");
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    const productsToShow = this.filteredProducts.slice(startIndex, endIndex);

    if (productsToShow.length === 0) {
      this.showNoResultsState();
      return;
    }

    this.hideLoadingState();
    this.hideNoResultsState();

    grid.innerHTML = productsToShow
      .map((product) => this.createProductCard(product))
      .join("");

    // Add event listeners to new product cards
    this.addProductCardEventListeners();
  }

  getCategoryName(categoryKey) {
    const categoryMap = {
      jewelry: "Jewelry",
      pottery: "Pottery",
      leather: "Leather Products",
      rugs: "Rugs & Kilims",
      cotton: "Egyptian Cotton"
    };
    return categoryMap[categoryKey] || categoryKey;
  }

  setView(view) {
    this.currentView = view;

    // Update active view button
    document.querySelectorAll(".view-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.view === view);
    });

    // Update products grid class
    const grid = document.getElementById("productsGrid");
    grid.className =
      view === "list" ? "products-grid list-view" : "products-grid";

    // Re-render products with new view
    this.renderProducts();
  }

  updatePagination() {
    const totalPages = Math.ceil(
      this.filteredProducts.length / this.productsPerPage
    );
    const pagination = document.getElementById("pagination");

    if (totalPages <= 1) {
      pagination.innerHTML = "";
      return;
    }

    let paginationHTML = "";

    // Previous button
    paginationHTML += `
            <button class="pagination-btn ${this.currentPage === 1 ? "disabled" : ""}" 
                    onclick="shopManager.previousPage()" ${this.currentPage === 1 ? "disabled" : ""}>
                <i class="fas fa-chevron-left"></i>
            </button>
        `;

    // Page numbers
    paginationHTML += '<div class="pagination-numbers">';

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= this.currentPage - 1 && i <= this.currentPage + 1)
      ) {
        paginationHTML += `
                    <button class="pagination-number ${i === this.currentPage ? "active" : ""}" 
                            onclick="shopManager.goToPage(${i})">
                        ${i}
                    </button>
                `;
      } else if (i === this.currentPage - 2 || i === this.currentPage + 2) {
        paginationHTML += '<span class="pagination-ellipsis">...</span>';
      }
    }

    paginationHTML += "</div>";

    // Next button
    paginationHTML += `
            <button class="pagination-btn ${this.currentPage === totalPages ? "disabled" : ""}" 
                    onclick="shopManager.nextPage()" ${this.currentPage === totalPages ? "disabled" : ""}>
                <i class="fas fa-chevron-right"></i>
            </button>
        `;

    pagination.innerHTML = paginationHTML;
  }

  goToPage(page) {
    this.currentPage = page;
    this.renderProducts();
    this.updatePagination();

    // Scroll to top of products
    document.querySelector(".products-section").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage() {
    const totalPages = Math.ceil(
      this.filteredProducts.length / this.productsPerPage
    );
    if (this.currentPage < totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  updateActiveFilters() {
    const activeFilters = document.getElementById("activeFilters");
    let filtersHTML = "";

    if (this.filters.category !== "all") {
      filtersHTML += `
                <div class="filter-tag">
                    Category: ${this.getCategoryName(this.filters.category)}
                    <button class="remove" onclick="shopManager.removeFilter('category')">&times;</button>
                </div>
            `;
    }

    if (this.filters.price !== "all") {
      filtersHTML += `
                <div class="filter-tag">
                    Price: ${this.filters.price} EGP
                    <button class="remove" onclick="shopManager.removeFilter('price')">&times;</button>
                </div>
            `;
    }

    activeFilters.innerHTML = filtersHTML;
  }

  removeFilter(filterType) {
    this.filters[filterType] = "all";

    // Update select elements
    document.getElementById(`${filterType}Filter`).value = "all";

    this.applyFilters();
    this.updateActiveFilters();
  }

  getTranslatedText(key) {
    if (
      window.translations &&
      window.translations[window.currentLang] &&
      window.translations[window.currentLang][key]
    ) {
      return window.translations[window.currentLang][key];
    }
    return key; // Fallback to key if translation not found
  }

  resetFilters() {
    this.filters = {
      category: "all",
      price: "all",
      search: "",
      sort: "featured"
    };

    // Update UI elements
    document.getElementById("categoryFilter").value = "all";
    document.getElementById("priceFilter").value = "all";
    document.getElementById("sortOptions").value = "featured";
    document.getElementById("mainSearchInput").value = "";

    this.applyFilters();
    this.updateActiveFilters();
  }

  setupModal() {
    const modal = document.getElementById("quickViewModal");
    const closeBtn = document.querySelector(".close-modal");

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  showQuickView(productId) {
    const product = this.products.find((p) => p.id === productId);
    if (!product) return;

    // Create external modal and add to body
    this.createExternalModal(product);
  }

  createExternalModal(product) {
    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    // Create modal element
    const modal = document.createElement("div");
    modal.className = "external-modal";
    modal.id = "externalQuickViewModal";
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        backdrop-filter: blur(10px);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        animation: modalFadeIn 0.3s ease forwards;
    `;

    // Create modal content
    modal.innerHTML = this.createModalContent(product);

    // Add modal to body
    document.body.appendChild(modal);

    // Setup event listeners
    this.setupExternalModalEvents(modal);
  }

  createModalContent(product) {
    const discount = product.originalPrice
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )
      : 0;

    const cartItem = this.cart.find((item) => item.id === product.id);
    const inCart = cartItem ? true : false;
    const cartQuantity = cartItem ? cartItem.quantity : 0;

    return `
        <div class="external-modal-content" style="
            background: white;
            border-radius: 16px;
            max-width: 900px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            transform: scale(0.9);
            animation: modalScaleIn 0.3s ease 0.1s forwards;
        ">
            <button class="external-close-btn" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: white;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-size: 1.5rem;
                color: #6c757d;
                z-index: 10;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                transition: all 0.3s ease;
            ">&times;</button>
            
            <div class="external-modal-body" style="padding: 2rem;">
                ${this.createQuickViewContent(product)}
            </div>
        </div>
    `;
  }

  setupExternalModalEvents(modal) {
    // Close button
    const closeBtn = modal.querySelector(".external-close-btn");
    closeBtn.addEventListener("click", () => {
      this.closeExternalModal();
    });

    // Close when clicking outside content
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        this.closeExternalModal();
      }
    });

    // Close with Escape key
    document.addEventListener("keydown", this.handleEscapeKey.bind(this));

    // Setup cart control event listeners inside modal
    this.setupQuickViewEventListeners();
  }

  handleEscapeKey(e) {
    if (e.key === "Escape") {
      this.closeExternalModal();
    }
  }

  closeExternalModal() {
    const modal = document.getElementById("externalQuickViewModal");
    if (modal) {
      // Add exit animation
      modal.style.animation = "modalFadeOut 0.3s ease forwards";
      modal.querySelector(".external-modal-content").style.animation =
        "modalScaleOut 0.3s ease forwards";

      setTimeout(() => {
        if (document.body.contains(modal)) {
          document.body.removeChild(modal);
        }
        // Re-enable scrolling
        document.body.style.overflow = "";
        document.body.classList.remove("modal-open");

        // Remove event listener
        document.removeEventListener("keydown", this.handleEscapeKey);
      }, 300);
    }
  }

  updateExternalQuickViewContent(productId) {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      const modalBody = document.querySelector(".external-modal-body");
      if (modalBody) {
        modalBody.innerHTML = this.createQuickViewContent(product);
        this.setupQuickViewEventListeners();
      }
    }
  }

  showLoadingState() {
    const loadingState = document.getElementById("loadingState");
    const noResults = document.getElementById("noResults");
    const productsGrid = document.getElementById("productsGrid");

    if (loadingState) loadingState.style.display = "block";
    if (noResults) noResults.style.display = "none";
    if (productsGrid) productsGrid.innerHTML = "";
  }

  hideLoadingState() {
    const loadingState = document.getElementById("loadingState");
    if (loadingState) loadingState.style.display = "none";
  }

  showNoResultsState() {
    const noResults = document.getElementById("noResults");
    const productsGrid = document.getElementById("productsGrid");
    const pagination = document.getElementById("pagination");

    if (noResults) noResults.style.display = "block";
    if (productsGrid) productsGrid.innerHTML = "";
    if (pagination) pagination.innerHTML = "";
    this.hideLoadingState();
  }

  hideNoResultsState() {
    const noResults = document.getElementById("noResults");
    if (noResults) noResults.style.display = "none";
  }

  showErrorState() {
    console.error("Failed to load products");
    this.showToast("Error loading products. Please try again.", "error");
  }

  showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast-notification ${type}`;
    toast.innerHTML = `
            <i class="fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}"></i>
            <span>${message}</span>
        `;

    const toastStyle = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${type === "success" ? "var(--deep-teal)" : type === "error" ? "#dc3545" : "#ffc107"};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
        `;

    toast.style.cssText = toastStyle;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = "slideOutRight 0.3s ease forwards";
      setTimeout(() => {
        if (document.body.contains(toast)) {
          document.body.removeChild(toast);
        }
      }, 300);
    }, 3000);
  }

  updateProductCount() {
    const count = this.filteredProducts.length;
    console.log(`Showing ${count} products`);
  }

  handleURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");

    if (category && this.isValidCategory(category)) {
      this.filters.category = category;
      const categoryFilter = document.getElementById("categoryFilter");
      if (categoryFilter) {
        categoryFilter.value = category;
      }
      this.applyFilters();
      this.updateActiveFilters();
    }
  }

  isValidCategory(category) {
    return ["jewelry", "pottery", "leather", "rugs", "cotton"].includes(
      category
    );
  }

  updateTranslations() {
    window.addEventListener("languageChanged", () => {
      this.renderProducts();
      this.updateActiveFilters();
    });
  }
}

// Initialize shop manager when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.shopManager = new ShopManager();
});

// Enhanced global cart functions
window.addToCart = (product) => {
  if (window.shopManager) {
    return window.shopManager.addToCart(product.id || product);
  }
  return false;
};

window.getCart = () => {
  return window.shopManager ? window.shopManager.cart : [];
};

window.clearCart = () => {
  if (window.shopManager) {
    window.shopManager.clearCart();
  }
};

window.refreshCart = () => {
  if (window.shopManager) {
    window.shopManager.refreshCartFromStorage();
  }
};

// New global functions for cart management
window.increaseQuantity = (productId) => {
  if (window.shopManager) {
    window.shopManager.increaseQuantity(productId);
  }
};

window.decreaseQuantity = (productId) => {
  if (window.shopManager) {
    window.shopManager.decreaseQuantity(productId);
  }
};

window.removeFromCart = (productId) => {
  if (window.shopManager) {
    window.shopManager.removeFromCart(productId);
  }
};

// Export for module use
if (typeof module !== "undefined" && module.exports) {
  module.exports = ShopManager;
}