// language-switcher-auth.js - Language switching for Auth pages

let currentLang = localStorage.getItem('preferred-language') || 'en';

const authTranslations = {
    en: {
        // Navigation
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
        
        // Login
        "auth.login.title": "Welcome Back",
        "auth.login.subtitle": "Sign in to your account to continue shopping",
        "auth.login.email": "Email Address",
        "auth.login.password": "Password",
        "auth.login.remember": "Remember me",
        "auth.login.forgot": "Forgot Password?",
        "auth.login.submit": "Sign In",
        "auth.login.or": "or",
        "auth.login.google": "Google",
        "auth.login.facebook": "Facebook",
        "auth.login.no-account": "Don't have an account?",
        "auth.login.register-link": "Create Account",
        
        // Login Sidebar
        "auth.login.sidebar.title": "Benefits of Your Account",
        "auth.login.benefits.orders": "Track your orders easily",
        "auth.login.benefits.wishlist": "Save your favorite items",
        "auth.login.benefits.shipping": "Faster checkout with saved addresses",
        "auth.login.benefits.offers": "Exclusive offers and rewards",
        "auth.login.benefits.returns": "Easy returns and exchanges",
        "auth.login.sidebar.cta-text": "New to Souvenir Egypt?",
        "auth.login.sidebar.cta-btn": "Create Account",
        
        // Register
        "auth.register.title": "Create Account",
        "auth.register.subtitle": "Join our community of artisan lovers",
        "auth.register.fullname": "Full Name",
        "auth.register.email": "Email Address",
        "auth.register.phone": "Phone Number",
        "auth.register.password": "Password",
        "auth.register.confirm": "Confirm Password",
        "auth.register.terms": "I agree to the Terms of Service and Privacy Policy",
        "auth.register.submit": "Create Account",
        "auth.register.or": "or",
        "auth.register.google": "Google",
        "auth.register.facebook": "Facebook",
        "auth.register.has-account": "Already have an account?",
        "auth.register.login-link": "Sign In",
        
        // Register Sidebar
        "auth.register.sidebar.title": "Why Join Us?",
        "auth.register.benefits.discover": "Discover authentic Egyptian handcrafts",
        "auth.register.benefits.support": "Support local artisans",
        "auth.register.benefits.exclusive": "Exclusive member discounts",
        "auth.register.benefits.early": "Early access to new collections",
        "auth.register.benefits.community": "Join a community of craft lovers",
        "auth.register.sidebar.cta-text": "Already a member?",
        "auth.register.sidebar.cta-btn": "Sign In",
        
        // Password Reset
        "auth.reset.title": "Reset Password",
        "auth.reset.subtitle": "Enter your email to receive a password reset link",
        "auth.reset.email": "Email Address",
        "auth.reset.submit": "Send Reset Link",
        "auth.reset.or": "or",
        "auth.reset.back": "Back to Sign In",
        "auth.reset.success.title": "Reset Link Sent!",
        "auth.reset.success.desc": "We've sent a password reset link to your email. Please check your inbox.",
        
        // Password Reset Sidebar
        "auth.reset.sidebar.title": "Reset Your Password",
        "auth.reset.step1.title": "Enter Your Email",
        "auth.reset.step1.desc": "Provide the email address associated with your account.",
        "auth.reset.step2.title": "Check Your Inbox",
        "auth.reset.step2.desc": "We'll send you a password reset link via email.",
        "auth.reset.step3.title": "Create New Password",
        "auth.reset.step3.desc": "Click the link and follow the instructions to set a new password.",
        "auth.reset.sidebar.help-text": "Need assistance?",
        "auth.reset.sidebar.help-btn": "Contact Support",
        
        // Footer
        "footer.description": "Bringing authentic Egyptian handcrafts to the world. Each piece tells a story of heritage, craftsmanship, and timeless beauty.",
        "footer.shop": "SHOP",
        "footer.help": "HELP",
        "footer.shipping": "Shipping Information",
        "footer.returns": "Returns & Exchanges",
        "footer.size": "Size Guide",
        "footer.faq": "FAQs",
        "footer.contact": "Contact Us",
        "footer.payment": "PAYMENT METHODS",
        
        // Categories
        "categories.jewelry": "Jewelry",
        "categories.pottery": "Pottery",
        "categories.leather": "Leather Products",
        "categories.rugs": "Rugs & Kilims",
        "categories.cotton": "Egyptian Cotton"
    },
    it: {
        // Navigation
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
        
        // Login
        "auth.login.title": "Bentornato",
        "auth.login.subtitle": "Accedi al tuo account per continuare gli acquisti",
        "auth.login.email": "Indirizzo Email",
        "auth.login.password": "Password",
        "auth.login.remember": "Ricordami",
        "auth.login.forgot": "Password Dimenticata?",
        "auth.login.submit": "Accedi",
        "auth.login.or": "o",
        "auth.login.google": "Google",
        "auth.login.facebook": "Facebook",
        "auth.login.no-account": "Non hai un account?",
        "auth.login.register-link": "Crea Account",
        
        // Login Sidebar
        "auth.login.sidebar.title": "Vantaggi del Tuo Account",
        "auth.login.benefits.orders": "Traccia facilmente i tuoi ordini",
        "auth.login.benefits.wishlist": "Salva i tuoi articoli preferiti",
        "auth.login.benefits.shipping": "Checkout più veloce con indirizzi salvati",
        "auth.login.benefits.offers": "Offerte esclusive e ricompense",
        "auth.login.benefits.returns": "Resi e cambi facili",
        "auth.login.sidebar.cta-text": "Nuovo su Souvenir Egypt?",
        "auth.login.sidebar.cta-btn": "Crea Account",
        
        // Register
        "auth.register.title": "Crea Account",
        "auth.register.subtitle": "Unisciti alla nostra comunità di amanti dell'artigianato",
        "auth.register.fullname": "Nome Completo",
        "auth.register.email": "Indirizzo Email",
        "auth.register.phone": "Numero di Telefono",
        "auth.register.password": "Password",
        "auth.register.confirm": "Conferma Password",
        "auth.register.terms": "Accetto i Termini di Servizio e la Privacy Policy",
        "auth.register.submit": "Crea Account",
        "auth.register.or": "o",
        "auth.register.google": "Google",
        "auth.register.facebook": "Facebook",
        "auth.register.has-account": "Hai già un account?",
        "auth.register.login-link": "Accedi",
        
        // Register Sidebar
        "auth.register.sidebar.title": "Perché Unirti a Noi?",
        "auth.register.benefits.discover": "Scopri autentici oggetti artigianali egiziani",
        "auth.register.benefits.support": "Supporta gli artigiani locali",
        "auth.register.benefits.exclusive": "Sconti esclusivi per i membri",
        "auth.register.benefits.early": "Accesso anticipato alle nuove collezioni",
        "auth.register.benefits.community": "Unisciti a una comunità di amanti dell'artigianato",
        "auth.register.sidebar.cta-text": "Sei già un membro?",
        "auth.register.sidebar.cta-btn": "Accedi",
        
        // Password Reset
        "auth.reset.title": "Reimposta Password",
        "auth.reset.subtitle": "Inserisci la tua email per ricevere il link di reimpostazione",
        "auth.reset.email": "Indirizzo Email",
        "auth.reset.submit": "Invia Link di Reimpostazione",
        "auth.reset.or": "o",
        "auth.reset.back": "Torna all'Accesso",
        "auth.reset.success.title": "Link Inviato!",
        "auth.reset.success.desc": "Abbiamo inviato un link di reimpostazione della password alla tua email. Controlla la tua casella di posta.",
        
        // Password Reset Sidebar
        "auth.reset.sidebar.title": "Reimposta la Tua Password",
        "auth.reset.step1.title": "Inserisci la Tua Email",
        "auth.reset.step1.desc": "Fornisci l'indirizzo email associato al tuo account.",
        "auth.reset.step2.title": "Controlla la Tua Posta",
        "auth.reset.step2.desc": "Ti invieremo un link di reimpostazione della password via email.",
        "auth.reset.step3.title": "Crea Nuova Password",
        "auth.reset.step3.desc": "Clicca sul link e segui le istruzioni per impostare una nuova password.",
        "auth.reset.sidebar.help-text": "Hai bisogno di assistenza?",
        "auth.reset.sidebar.help-btn": "Contatta il Supporto",
        
        // Footer
        "footer.description": "Portiamo autentici oggetti artigianali egiziani nel mondo. Ogni pezzo racconta una storia di patrimonio, artigianato e bellezza senza tempo.",
        "footer.shop": "NEGOZIO",
        "footer.help": "AIUTO",
        "footer.shipping": "Informazioni Spedizioni",
        "footer.returns": "Resi e Cambi",
        "footer.size": "Guida alle Taglie",
        "footer.faq": "FAQ",
        "footer.contact": "Contattaci",
        "footer.payment": "METODI DI PAGAMENTO",
        
        // Categories
        "categories.jewelry": "Gioielli",
        "categories.pottery": "Ceramica",
        "categories.leather": "Prodotti in Pelle",
        "categories.rugs": "Tappeti e Kilim",
        "categories.cotton": "Cotone Egiziano"
    },
    fr: {
        // Navigation
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
        
        // Login
        "auth.login.title": "Bon Retour",
        "auth.login.subtitle": "Connectez-vous à votre compte pour continuer vos achats",
        "auth.login.email": "Adresse Email",
        "auth.login.password": "Mot de Passe",
        "auth.login.remember": "Se souvenir de moi",
        "auth.login.forgot": "Mot de Passe Oublié?",
        "auth.login.submit": "Se Connecter",
        "auth.login.or": "ou",
        "auth.login.google": "Google",
        "auth.login.facebook": "Facebook",
        "auth.login.no-account": "Vous n'avez pas de compte?",
        "auth.login.register-link": "Créer un Compte",
        
        // Login Sidebar
        "auth.login.sidebar.title": "Avantages de Votre Compte",
        "auth.login.benefits.orders": "Suivez facilement vos commandes",
        "auth.login.benefits.wishlist": "Sauvegardez vos articles préférés",
        "auth.login.benefits.shipping": "Paiement plus rapide avec adresses enregistrées",
        "auth.login.benefits.offers": "Offres exclusives et récompenses",
        "auth.login.benefits.returns": "Retours et échanges faciles",
        "auth.login.sidebar.cta-text": "Nouveau sur Souvenir Egypt?",
        "auth.login.sidebar.cta-btn": "Créer un Compte",
        
        // Register
        "auth.register.title": "Créer un Compte",
        "auth.register.subtitle": "Rejoignez notre communauté d'amoureux de l'artisanat",
        "auth.register.fullname": "Nom Complet",
        "auth.register.email": "Adresse Email",
        "auth.register.phone": "Numéro de Téléphone",
        "auth.register.password": "Mot de Passe",
        "auth.register.confirm": "Confirmer le Mot de Passe",
        "auth.register.terms": "J'accepte les Conditions d'Utilisation et la Politique de Confidentialité",
        "auth.register.submit": "Créer un Compte",
        "auth.register.or": "ou",
        "auth.register.google": "Google",
        "auth.register.facebook": "Facebook",
        "auth.register.has-account": "Vous avez déjà un compte?",
        "auth.register.login-link": "Se Connecter",
        
        // Register Sidebar
        "auth.register.sidebar.title": "Pourquoi Nous Rejoindre?",
        "auth.register.benefits.discover": "Découvrez des objets artisanaux égyptiens authentiques",
        "auth.register.benefits.support": "Soutenez les artisans locaux",
        "auth.register.benefits.exclusive": "Réductions exclusives pour les membres",
        "auth.register.benefits.early": "Accès anticipé aux nouvelles collections",
        "auth.register.benefits.community": "Rejoignez une communauté d'amoureux de l'artisanat",
        "auth.register.sidebar.cta-text": "Vous êtes déjà membre?",
        "auth.register.sidebar.cta-btn": "Se Connecter",
        
        // Password Reset
        "auth.reset.title": "Réinitialiser le Mot de Passe",
        "auth.reset.subtitle": "Entrez votre email pour recevoir un lien de réinitialisation",
        "auth.reset.email": "Adresse Email",
        "auth.reset.submit": "Envoyer le Lien",
        "auth.reset.or": "ou",
        "auth.reset.back": "Retour à la Connexion",
        "auth.reset.success.title": "Lien Envoyé!",
        "auth.reset.success.desc": "Nous avons envoyé un lien de réinitialisation à votre email. Veuillez vérifier votre boîte de réception.",
        
        // Password Reset Sidebar
        "auth.reset.sidebar.title": "Réinitialiser Votre Mot de Passe",
        "auth.reset.step1.title": "Entrez Votre Email",
        "auth.reset.step1.desc": "Fournissez l'adresse email associée à votre compte.",
        "auth.reset.step2.title": "Vérifiez Votre Boîte de Réception",
        "auth.reset.step2.desc": "Nous vous enverrons un lien de réinitialisation par email.",
        "auth.reset.step3.title": "Créez un Nouveau Mot de Passe",
        "auth.reset.step3.desc": "Cliquez sur le lien et suivez les instructions pour définir un nouveau mot de passe.",
        "auth.reset.sidebar.help-text": "Besoin d'aide?",
        "auth.reset.sidebar.help-btn": "Contacter le Support",
        
        // Footer
        "footer.description": "Apportons l'artisanat égyptien authentique au monde. Chaque pièce raconte une histoire de patrimoine, d'artisanat et de beauté intemporelle.",
        "footer.shop": "BOUTIQUE",
        "footer.help": "AIDE",
        "footer.shipping": "Informations Livraison",
        "footer.returns": "Retours et Échanges",
        "footer.size": "Guide des Tailles",
        "footer.faq": "FAQ",
        "footer.contact": "Contactez-nous",
        "footer.payment": "MODES DE PAIEMENT",
        
        // Categories
        "categories.jewelry": "Bijoux",
        "categories.pottery": "Poterie",
        "categories.leather": "Articles en Cuir",
        "categories.rugs": "Tapis et Kilims",
        "categories.cotton": "Coton Égyptien"
    }
};

function switchAuthLanguage(lang) {
    if (!authTranslations[lang]) {
        console.warn(`Language ${lang} not supported for auth pages`);
        return;
    }
    
    currentLang = lang;
    localStorage.setItem('preferred-language', lang);
    
    // Update current language display
    const currentLangElement = document.querySelector('.current-lang');
    if (currentLangElement) {
        currentLangElement.textContent = lang.toUpperCase();
    }
    
    // Update active language option
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (authTranslations[lang] && authTranslations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.placeholder) {
                    element.placeholder = authTranslations[lang][key];
                }
            } else if (element.tagName === 'BUTTON' && element.type === 'submit') {
                // Handle submit buttons
                const icon = element.querySelector('i');
                if (icon) {
                    // Keep icon, update text
                    const textNode = element.childNodes[element.childNodes.length - 1];
                    if (textNode && textNode.nodeType === 3) {
                        textNode.textContent = authTranslations[lang][key];
                    }
                }
            } else {
                element.textContent = authTranslations[lang][key];
            }
        }
    });
    
    // Update page direction for RTL
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.body.classList.add('rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.body.classList.remove('rtl');
    }
    
    // Update page title based on page
    const pageTitle = document.querySelector('title');
    if (pageTitle) {
        const titles = {
            'en': {
                'login': 'Login - SOUVENIR Egyptian Handcrafts',
                'register': 'Register - SOUVENIR Egyptian Handcrafts',
                'reset': 'Reset Password - SOUVENIR Egyptian Handcrafts'
            },
            'it': {
                'login': 'Accedi - SOUVENIR Artigianato Egiziano',
                'register': 'Registrati - SOUVENIR Artigianato Egiziano',
                'reset': 'Reimposta Password - SOUVENIR Artigianato Egiziano'
            },
            'fr': {
                'login': 'Connexion - SOUVENIR Artisanat Égyptien',
                'register': 'Inscription - SOUVENIR Artisanat Égyptien',
                'reset': 'Réinitialiser Mot de Passe - SOUVENIR Artisanat Égyptien'
            }
        };
        
        const page = window.location.pathname.includes('register') ? 'register' :
                     window.location.pathname.includes('password-reset') ? 'reset' : 'login';
        
        if (titles[lang] && titles[lang][page]) {
            pageTitle.textContent = titles[lang][page];
        }
    }
    
    // Trigger language change event
    window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: lang } 
    }));
}

// Setup dropdown functionality
function setupAuthDropdowns() {
    const languageToggle = document.getElementById('languageToggle');
    const languageDropdown = document.getElementById('languageDropdown');

    if (languageToggle && languageDropdown) {
        languageToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });

        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.dataset.lang;
                switchAuthLanguage(lang);
                languageDropdown.classList.remove('show');
            });
        });
    }
}

// Load saved language preference
function loadAuthLanguage() {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    switchAuthLanguage(savedLang);
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    loadAuthLanguage();
    setupAuthDropdowns();
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.language-switcher-dropdown')) {
            const dropdown = document.getElementById('languageDropdown');
            if (dropdown) dropdown.classList.remove('show');
        }
    });
});

// Make functions globally available
window.currentLang = currentLang;
window.switchAuthLanguage = switchAuthLanguage;
window.authTranslations = authTranslations;