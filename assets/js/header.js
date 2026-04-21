// header.js - Enhanced header functionality for all pages with real-time cart sync
class HeaderManager {
    constructor() {
        this.cart = [];
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupDropdowns();
        this.setupCart();
        this.setupUserSession();
        this.setupActiveNavigation();
        this.setupScrollEffect();
        this.setupCartSync();
        this.setupClickOutsideHandler();
    }

    setupMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        const navMenu = document.querySelector('.nav-menu');

        if (mobileMenu && navMenu) {
            mobileMenu.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileMenu.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
            });

            // Close menu when clicking on links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }
    }

    setupDropdowns() {
        // Language dropdown
        const languageToggle = document.getElementById('languageToggle');
        const languageDropdown = document.getElementById('languageDropdown');

        if (languageToggle && languageDropdown) {
            languageToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                languageDropdown.classList.toggle('show');
            });

            // Language selection
            document.querySelectorAll('.lang-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const lang = option.dataset.lang;
                    this.switchLanguage(lang);
                    languageDropdown.classList.remove('show');
                });
            });
        }

        // User dropdown
        const userToggle = document.getElementById('userToggle');
        const userMenu = document.getElementById('userMenu');

        if (userToggle && userMenu) {
            userToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                userMenu.classList.toggle('show');
            });
        }

        // Cart dropdown
        const cartToggle = document.getElementById('cartToggle');
        const cartPreview = document.getElementById('cartPreview');

        if (cartToggle && cartPreview) {
            cartToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                cartPreview.classList.toggle('show');
                
                // Always refresh cart data when dropdown opens
                if (cartPreview.classList.contains('show')) {
                    this.refreshCartFromStorage();
                }
            });
        }
    }

    setupClickOutsideHandler() {
        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-switcher-dropdown')) {
                const languageDropdown = document.getElementById('languageDropdown');
                if (languageDropdown) languageDropdown.classList.remove('show');
            }
            
            if (!e.target.closest('.user-dropdown')) {
                const userMenu = document.getElementById('userMenu');
                if (userMenu) userMenu.classList.remove('show');
            }
            
            if (!e.target.closest('.cart-dropdown')) {
                const cartPreview = document.getElementById('cartPreview');
                if (cartPreview) cartPreview.classList.remove('show');
            }
            
            // Close mobile menu if open
            const mobileMenu = document.querySelector('.mobile-menu');
            const navMenu = document.querySelector('.nav-menu');
            if (mobileMenu && navMenu && navMenu.classList.contains('active') && !e.target.closest('.main-nav')) {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close dropdowns on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.language-dropdown, .user-menu, .cart-preview').forEach(dropdown => {
                    dropdown.classList.remove('show');
                });
                
                const mobileMenu = document.querySelector('.mobile-menu');
                const navMenu = document.querySelector('.nav-menu');
                if (mobileMenu && navMenu && navMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    }

    switchLanguage(lang) {
        // Update current language display
        const currentLangElement = document.querySelector('.current-lang');
        if (currentLangElement) {
            currentLangElement.textContent = lang.toUpperCase();
        }

        // Update active language option
        document.querySelectorAll('.lang-option').forEach(option => {
            if (option.dataset.lang === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Save language preference
        localStorage.setItem('preferred-language', lang);
        
        // Update page language attribute
        document.documentElement.lang = lang;
        
        // RTL support for Arabic
        if (lang === 'ar') {
            document.body.classList.add('rtl');
            document.body.setAttribute('dir', 'rtl');
        } else {
            document.body.classList.remove('rtl');
            document.body.setAttribute('dir', 'ltr');
        }

        // Trigger language switch event
        const event = new CustomEvent('languageChanged', { detail: { language: lang } });
        document.dispatchEvent(event);
        
        // Update all translatable elements
        this.updatePageTranslations(lang);
    }

    updatePageTranslations(lang) {
        // Comprehensive translations for all pages
        const translations = {
            en: {
                "nav.home": "Home",
                "nav.collections": "Collections",
                "nav.artisans": "Artisans",
                "nav.about": "About",
                "nav.contact": "Contact",
                "nav.cart": "Shopping Cart",
                "nav.emptyCart": "Your cart is empty",
                "nav.total": "Total",
                "nav.viewCart": "View Cart",
                "nav.checkout": "Checkout",
                "nav.login": "Login",
                "nav.register": "Register",
                "nav.profile": "My Profile",
                "nav.orders": "My Orders",
                "nav.logout": "Logout",
                "hero.subtitle": "SHOP AUTHENTIC",
                "hero.title": "Egyptian Handcrafts",
                "hero.tagline": "SOUVENIR, AUTHENTIC Egyptian Handcraft",
                "hero.description": "Bring a piece of authentic Egyptian Handcraft to your home. Handmade with love by Egyptian artisans.",
                "hero.shop": "SHOP NOW",
                "hero.artisans": "MEET THE ARTISANS",
                "categories.title": "Our Collections",
                "categories.jewelry": "Jewelry",
                "categories.pottery": "Pottery",
                "categories.leather": "Leather Products",
                "categories.rugs": "Rugs & Kilims",
                "categories.cotton": "Egyptian Cotton",
                "delivery.title": "WILL BE DELIVERED TO YOUR HOTEL OF YOUR STAY IN EGYPT OR SHIPPED HOME • CAN BE ORDERED AS A GIFT",
                "delivery.link": "VIEW SHIPPING OPTIONS & DETAILS →",
                "featured.title": "Featured Products",
                "featured.product1.name": "Silver Ankh Necklace",
                "featured.product2.name": "Hand-painted Pottery Vase",
                "featured.product3.name": "Leather Handbag",
                "featured.product4.name": "Traditional Kilim Rug",
                "testimonials.title": "What Our Customers Say",
                "testimonials.text1": "The silver cartouche I bought is absolutely stunning! The craftsmanship is exceptional and it arrived beautifully packaged. Will definitely order again!",
                "testimonials.text2": "I ordered the Egyptian cotton towels as gifts for my family. The quality is outstanding and everyone loved them. The shipping was faster than expected!",
                "testimonials.text3": "The pottery vase I purchased is even more beautiful in person. It's the centerpiece of my living room now. Thank you for such a unique and high-quality product!",
                "artisans.title": "MEET THE ARTISANS",
                "artisans.subtitle": "Handcrafted with Heart",
                "artisans.bio1": "Master jeweler with 25 years of experience creating intricate gold and silver pieces inspired by ancient Egyptian designs.",
                "artisans.bio2": "Textile artist specializing in handwoven Egyptian cotton and traditional embroidery techniques passed down through generations.",
                "artisans.bio3": "Pottery master creating beautiful clay vessels using techniques dating back to ancient Egyptian civilizations.",
                "artisans.button": "Read Their Stories",
                "guarantee.title": "SOUVENIR EGYPT STORE GUARANTEE",
                "guarantee.quality": "Quality Handmade",
                "guarantee.quality.desc": "Authentic crafts made with centuries-old techniques.",
                "guarantee.shipping": "International Shipping",
                "guarantee.shipping.desc": "We deliver our treasures worldwide.",
                "guarantee.gift": "Perfect Gift Idea",
                "guarantee.gift.desc": "A unique and memorable present for loved ones.",
                "newsletter.title": "Stay Connected",
                "newsletter.subtitle": "Subscribe to our newsletter for exclusive offers, new arrivals, and stories from our artisans.",
                "newsletter.placeholder": "Your email address",
                "newsletter.button": "SUBSCRIBE",
                "footer.description": "Bringing authentic Egyptian handcrafts to the world. Each piece tells a story of heritage, craftsmanship, and timeless beauty.",
                "footer.shop": "SHOP",
                "footer.help": "HELP",
                "footer.shipping": "Shipping Information",
                "footer.returns": "Returns & Exchanges",
                "footer.size": "Size Guide",
                "footer.faq": "FAQs",
                "footer.contact": "Contact Us",
                "footer.payment": "PAYMENT METHODS"
            },
            it: {
                "nav.home": "Home",
                "nav.collections": "Collezioni",
                "nav.artisans": "Artigiani",
                "nav.about": "Chi Siamo",
                "nav.contact": "Contatto",
                "nav.cart": "Carrello",
                "nav.emptyCart": "Il tuo carrello è vuoto",
                "nav.total": "Totale",
                "nav.viewCart": "Vedi Carrello",
                "nav.checkout": "Checkout",
                "nav.login": "Accedi",
                "nav.register": "Registrati",
                "nav.profile": "Mio Profilo",
                "nav.orders": "I Miei Ordini",
                "nav.logout": "Esci",
                "hero.subtitle": "ACQUISTA AUTENTICO",
                "hero.title": "Artigianato Egiziano",
                "hero.tagline": "SOUVENIR, AUTENTICO ARTIGIANATO EGIZIANO",
                "hero.description": "Porta un pezzo di autentico artigianato egiziano nella tua casa. Fatto a mano con amore da artigiani egiziani.",
                "hero.shop": "ACQUISTA ORA",
                "hero.artisans": "INCONTRA GLI ARTIGIANI",
                "categories.title": "Le Nostre Collezioni",
                "categories.jewelry": "Gioielli",
                "categories.pottery": "Ceramica",
                "categories.leather": "Prodotti in Pelle",
                "categories.rugs": "Tappeti e Kilim",
                "categories.cotton": "Cotone Egiziano",
                "delivery.title": "SARÀ CONSEGNATO AL TUO HOTEL DURANTE IL SOGGIORNO IN EGITTO O SPEDITO A CASA • PUÒ ESSERE ORDINATO COME REGALO",
                "delivery.link": "VISUALIZZA OPZIONI DI SPEDIZIONE →",
                "featured.title": "Prodotti in Evidenza",
                "testimonials.title": "Cosa Dicono i Nostri Clienti",
                "artisans.title": "INCONTRA GLI ARTIGIANI",
                "artisans.subtitle": "Fatto a mano con il cuore",
                "artisans.button": "Leggi le Loro Storie",
                "guarantee.title": "GARANZIA SOUVENIR EGYPT STORE",
                "guarantee.quality": "Qualità Artigianale",
                "guarantee.shipping": "Spedizione Internazionale",
                "guarantee.gift": "Idea Regalo Perfetta",
                "newsletter.title": "Rimani Connesso",
                "newsletter.subtitle": "Iscriviti alla nostra newsletter per offerte esclusive, nuovi arrivi e storie dei nostri artigiani.",
                "newsletter.placeholder": "Il tuo indirizzo email",
                "newsletter.button": "ISCRIVITI",
                "footer.description": "Portiamo autentici oggetti artigianali egiziani nel mondo. Ogni pezzo racconta una storia di patrimonio, artigianato e bellezza senza tempo.",
                "footer.shop": "NEGOZIO",
                "footer.help": "AIUTO",
                "footer.shipping": "Informazioni Spedizioni",
                "footer.returns": "Resi e Cambi",
                "footer.size": "Guida alle Taglie",
                "footer.faq": "FAQ",
                "footer.contact": "Contattaci",
                "footer.payment": "METODI DI PAGAMENTO"
            },
            fr: {
                "nav.home": "Accueil",
                "nav.collections": "Collections",
                "nav.artisans": "Artisans",
                "nav.about": "À Propos",
                "nav.contact": "Contact",
                "nav.cart": "Panier",
                "nav.emptyCart": "Votre panier est vide",
                "nav.total": "Total",
                "nav.viewCart": "Voir le Panier",
                "nav.checkout": "Paiement",
                "nav.login": "Connexion",
                "nav.register": "S'inscrire",
                "nav.profile": "Mon Profil",
                "nav.orders": "Mes Commandes",
                "nav.logout": "Déconnexion",
                "hero.subtitle": "ACHETEZ AUTHENTIQUE",
                "hero.title": "Artisanat Égyptien",
                "hero.tagline": "SOUVENIR, ARTISANAT ÉGYPTIEN AUTHENTIQUE",
                "hero.description": "Apportez un morceau d'artisanat égyptien authentique chez vous. Fabriqué à la main avec amour par des artisans égyptiens.",
                "hero.shop": "ACHETER MAINTENANT",
                "hero.artisans": "RENCONTREZ LES ARTISANS",
                "categories.title": "Nos Collections",
                "categories.jewelry": "Bijoux",
                "categories.pottery": "Poterie",
                "categories.leather": "Articles en Cuir",
                "categories.rugs": "Tapis & Kilims",
                "categories.cotton": "Coton Égyptien",
                "delivery.title": "SERA LIVRÉ À VOTRE HÔTEL LORS DE VOTRE SÉJOUR EN ÉGYPTE OU EXPÉDIÉ À DOMICILE • PEUT ÊTRE COMMANDÉ COMME CADEAU",
                "delivery.link": "VOIR LES OPTIONS D'EXPÉDITION →",
                "featured.title": "Produits Vedettes",
                "testimonials.title": "Ce Que Disent Nos Clients",
                "artisans.title": "RENCONTREZ LES ARTISANS",
                "artisans.subtitle": "Fait main avec cœur",
                "artisans.button": "Lire Leurs Histoires",
                "guarantee.title": "GARANTIE SOUVENIR EGYPT STORE",
                "guarantee.quality": "Qualité Artisanale",
                "guarantee.shipping": "Livraison Internationale",
                "guarantee.gift": "Idée Cadeau Parfaite",
                "newsletter.title": "Restez Connecté",
                "newsletter.subtitle": "Abonnez-vous à notre newsletter pour les offres exclusives, les nouveautés et les histoires de nos artisans.",
                "newsletter.placeholder": "Votre adresse email",
                "newsletter.button": "S'ABONNER",
                "footer.description": "Apportons l'artisanat égyptien authentique au monde. Chaque pièce raconte une histoire de patrimoine, d'artisanat et de beauté intemporelle.",
                "footer.shop": "BOUTIQUE",
                "footer.help": "AIDE",
                "footer.shipping": "Informations Livraison",
                "footer.returns": "Retours & Échanges",
                "footer.size": "Guide des Tailles",
                "footer.faq": "FAQ",
                "footer.contact": "Contactez-nous",
                "footer.payment": "MODES DE PAIEMENT"
            }
        };

        const t = translations[lang] || translations.en;
        
        // Update all elements with data-key attribute
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (t[key]) {
                // Handle different element types
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.placeholder) {
                        element.placeholder = t[key];
                    }
                } else {
                    element.textContent = t[key];
                }
            }
        });
    }

    setupCart() {
        // Load initial cart from localStorage
        this.refreshCartFromStorage();
        
        // Setup cart auto-refresh
        this.setupCartAutoRefresh();
    }

    setupCartSync() {
        // Listen for cart updates from other components
        window.addEventListener('cartUpdated', () => {
            this.refreshCartFromStorage();
        });

        // Listen for storage events (updates from other tabs)
        window.addEventListener('storage', (e) => {
            if (e.key === 'souvenir-cart') {
                this.refreshCartFromStorage();
            }
        });
    }

    setupCartAutoRefresh() {
        // Refresh cart every 3 seconds to catch external updates
        setInterval(() => {
            this.refreshCartFromStorage();
        }, 3000);
    }

    refreshCartFromStorage() {
        this.loadCartFromStorage();
        this.updateCartDisplay();
    }

    loadCartFromStorage() {
        try {
            const cartData = localStorage.getItem('souvenir-cart');
            this.cart = cartData ? JSON.parse(cartData) : [];
        } catch (error) {
            console.error('Error loading cart from storage:', error);
            this.cart = [];
        }
    }

    saveCartToStorage() {
        try {
            localStorage.setItem('souvenir-cart', JSON.stringify(this.cart));
            
            // Trigger storage event for other tabs
            window.dispatchEvent(new StorageEvent('storage', {
                key: 'souvenir-cart',
                newValue: JSON.stringify(this.cart)
            }));
            
            // Trigger custom event for other components
            window.dispatchEvent(new CustomEvent('cartUpdated'));
            
        } catch (error) {
            console.error('Error saving cart to storage:', error);
        }
    }

    updateCartDisplay() {
        const cartCount = document.querySelector('.cart-count');
        const cartItemsCount = document.querySelector('.cart-items-count');
        const totalAmount = document.querySelector('.total-amount');
        const cartItems = document.getElementById('cartItems');

        const totalItems = this.getCartItemCount();
        const totalPrice = this.getCartTotal();

        // Update cart count badge
        if (cartCount) {
            const oldCount = parseInt(cartCount.textContent);
            cartCount.textContent = totalItems;
            // Add animation for count changes
            if (oldCount !== totalItems) {
                cartCount.classList.add('pulse');
                setTimeout(() => cartCount.classList.remove('pulse'), 300);
            }
        }

        // Update cart items count text
        if (cartItemsCount) {
            cartItemsCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
        }

        // Update total amount
        if (totalAmount) {
            totalAmount.textContent = `$${totalPrice.toFixed(2)}`;
        }

        // Update cart items list
        if (cartItems) {
            this.renderCartItems(cartItems);
        }

        // Update cart buttons state
        this.updateCartButtonsState();
    }

    renderCartItems(container) {
        if (this.cart.length === 0) {
            container.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-bag"></i>
                    <p data-key="nav.emptyCart">Your cart is empty</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.cart.map(item => `
            <div class="cart-item" data-product-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='./assets/img/placeholder-product.jpg'">
                <div class="cart-item-details">
                    <div class="cart-item-name">${this.escapeHtml(item.name)}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-product-id="${item.id}">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn plus" data-product-id="${item.id}">+</button>
                    </div>
                    <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <button class="cart-item-remove" data-product-id="${item.id}" title="Remove item">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');

        // Add event listeners
        this.addCartItemEventListeners(container);
    }

    addCartItemEventListeners(container) {
        // Remove buttons
        container.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(btn.dataset.productId);
                this.removeFromCart(productId);
            });
        });

        // Quantity controls
        container.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(btn.dataset.productId);
                this.decreaseQuantity(productId);
            });
        });

        container.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(btn.dataset.productId);
                this.increaseQuantity(productId);
            });
        });
    }

    updateCartButtonsState() {
        const checkoutBtn = document.querySelector('.cart-actions .btn-primary');
        const viewCartBtn = document.querySelector('.cart-actions .btn-secondary');
        
        const isEmpty = this.cart.length === 0;
        
        if (checkoutBtn) {
            if (isEmpty) {
                checkoutBtn.style.opacity = '0.5';
                checkoutBtn.style.pointerEvents = 'none';
            } else {
                checkoutBtn.style.opacity = '1';
                checkoutBtn.style.pointerEvents = 'auto';
            }
        }
        
        if (viewCartBtn) {
            if (isEmpty) {
                viewCartBtn.style.opacity = '0.5';
                viewCartBtn.style.pointerEvents = 'none';
            } else {
                viewCartBtn.style.opacity = '1';
                viewCartBtn.style.pointerEvents = 'auto';
            }
        }
    }

    getCartItem(productId) {
        return this.cart.find(item => item.id === productId);
    }

    addToCart(product) {
        if (!product || !product.id) {
            console.error('Invalid product data:', product);
            return false;
        }

        const existingItem = this.getCartItem(product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name || 'Unknown Product',
                price: product.price || 0,
                image: product.image || './assets/img/placeholder-product.jpg',
                category: product.category || 'general',
                quantity: 1,
                inStock: product.inStock !== false
            });
        }

        this.saveCartToStorage();
        this.updateCartDisplay();
        this.showCartNotification(product.name || 'Product', 'added');
        
        return true;
    }

    removeFromCart(productId) {
        const item = this.getCartItem(productId);
        if (item) {
            this.cart = this.cart.filter(item => item.id !== productId);
            this.saveCartToStorage();
            this.updateCartDisplay();
            this.showCartNotification(item.name, 'removed');
        }
    }

    increaseQuantity(productId) {
        const item = this.getCartItem(productId);
        if (item) {
            item.quantity += 1;
            this.saveCartToStorage();
            this.updateCartDisplay();
        }
    }

    decreaseQuantity(productId) {
        const item = this.getCartItem(productId);
        if (item) {
            if (item.quantity > 1) {
                item.quantity -= 1;
                this.saveCartToStorage();
                this.updateCartDisplay();
            } else {
                this.removeFromCart(productId);
            }
        }
    }

    clearCart() {
        this.cart = [];
        this.saveCartToStorage();
        this.updateCartDisplay();
        this.showNotification('Cart cleared successfully', 'info');
    }

    getCartTotal() {
        return this.cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    getCartItemCount() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    showCartNotification(productName, action = 'added') {
        const messages = {
            added: `${productName} added to cart!`,
            removed: `${productName} removed from cart`,
            updated: `Cart updated`
        };

        const notification = document.createElement('div');
        notification.className = `cart-notification ${action}`;
        notification.innerHTML = `
            <i class="fas ${action === 'added' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${messages[action] || messages.added}</span>
        `;

        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${action === 'added' ? '#0D6B75' : '#ffc107'};
            color: ${action === 'added' ? 'white' : '#333'};
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
            font-weight: 500;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    setupUserSession() {
        // Check if user is logged in
        const isLoggedIn = localStorage.getItem('souvenir-user-loggedin') === 'true';
        
        if (isLoggedIn) {
            this.showLoggedInState();
        } else {
            this.showLoggedOutState();
        }

        // Setup logout functionality
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.logout();
            });
        }
    }

    showLoggedInState() {
        const loginLinks = document.querySelectorAll('[href="login.html"], [href="register.html"]');
        const userLinks = document.querySelectorAll('#profileLink, #ordersLink, #logoutBtn');
        
        loginLinks.forEach(link => {
            if (link.style) link.style.display = 'none';
        });
        userLinks.forEach(link => {
            if (link.style) link.style.display = 'flex';
        });

        const userName = document.querySelector('.user-name');
        const userStatus = document.querySelector('.user-status');
        
        if (userName) userName.textContent = 'Welcome Back!';
        if (userStatus) userStatus.textContent = 'View your profile and orders';
    }

    showLoggedOutState() {
        const loginLinks = document.querySelectorAll('[href="login.html"], [href="register.html"]');
        const userLinks = document.querySelectorAll('#profileLink, #ordersLink, #logoutBtn');
        
        loginLinks.forEach(link => {
            if (link.style) link.style.display = 'flex';
        });
        userLinks.forEach(link => {
            if (link.style) link.style.display = 'none';
        });

        const userName = document.querySelector('.user-name');
        const userStatus = document.querySelector('.user-status');
        
        if (userName) userName.textContent = 'Welcome Guest';
        if (userStatus) userStatus.textContent = 'Sign in to your account';
    }

    logout() {
        localStorage.setItem('souvenir-user-loggedin', 'false');
        this.showLoggedOutState();
        this.showNotification('Logged out successfully', 'success');
    }

    setupActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || 
                (currentPage === 'index.html' && linkHref === 'index.html') ||
                (currentPage.includes('shop') && linkHref.includes('shop'))) {
                link.classList.add('active');
            }
        });
    }

    setupScrollEffect() {
        let lastScrollY = window.scrollY;
        const header = document.querySelector('header');
        
        if (!header) return;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Background effect
            if (currentScrollY > 100) {
                header.style.background = 'rgba(10, 62, 99, 0.95)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.background = '#0A3E63';
                header.style.backdropFilter = 'blur(10px)';
            }
            
            // Hide header on scroll down, show on scroll up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                header.style.transform = 'translateY(-100%)';
                header.style.transition = 'transform 0.3s ease';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showNotification(message, type = 'info') {
        console.log(`${type}: ${message}`);
    }

    // Public method to force cart refresh
    refreshCart() {
        this.refreshCartFromStorage();
    }

    // Public method to get current cart
    getCart() {
        return [...this.cart];
    }
}

// Initialize header manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.headerManager = new HeaderManager();
});

// Global cart functions
window.addToCart = (product) => {
    if (window.headerManager) {
        return window.headerManager.addToCart(product);
    }
    return false;
};

window.getCart = () => {
    return window.headerManager ? window.headerManager.getCart() : [];
};

window.clearCart = () => {
    if (window.headerManager) {
        window.headerManager.clearCart();
    }
};

window.refreshCart = () => {
    if (window.headerManager) {
        window.headerManager.refreshCart();
    }
};

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HeaderManager;
}