// language-switcher-account.js - Language switching for Account pages

let currentLang = localStorage.getItem('preferred-language') || 'en';

const accountTranslations = {
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
        
        // Account Badge
        "account.badge.member": "Member",
        
        // Navigation
        "account.nav.dashboard": "Dashboard",
        "account.nav.orders": "My Orders",
        "account.nav.details": "Account Details",
        "account.nav.addresses": "My Addresses",
        "account.nav.wishlist": "Wishlist",
        "account.nav.logout": "Logout",
        
        // Dashboard
        "account.dashboard.welcome": "Welcome Back!",
        "account.dashboard.subtitle": "Here's an overview of your account activity",
        "account.dashboard.recent-orders": "Recent Orders",
        "account.dashboard.view-all": "View All",
        "account.dashboard.no-orders": "You haven't placed any orders yet.",
        "account.dashboard.start-shopping": "Start Shopping",
        "account.dashboard.quick-actions": "Quick Actions",
        
        // Stats
        "account.stats.orders": "Total Orders",
        "account.stats.wishlist": "Wishlist Items",
        "account.stats.reviews": "Reviews",
        "account.stats.rewards": "Reward Points",
        
        // Quick Actions
        "account.actions.shop": "Continue Shopping",
        "account.actions.profile": "Edit Profile",
        "account.actions.address": "Manage Addresses",
        "account.actions.orders": "Track Orders",
        "account.actions.wishlist": "View Wishlist",
        "account.actions.help": "Help & Support",
        
        // Account Details
        "account.details.title": "Account Details",
        "account.details.subtitle": "Update your personal information",
        "account.details.fullname": "Full Name",
        "account.details.email": "Email Address",
        "account.details.phone": "Phone Number",
        "account.details.save": "Save Changes",
        "account.details.cancel": "Cancel",
        "account.details.password.title": "Change Password",
        "account.details.password.current": "Current Password",
        "account.details.password.new": "New Password",
        "account.details.password.confirm": "Confirm New Password",
        "account.details.password.update": "Update Password",
        
        // Addresses
        "account.addresses.title": "My Addresses",
        "account.addresses.subtitle": "Manage your shipping addresses",
        "account.addresses.add": "Add New Address",
        "account.addresses.empty": "No Addresses Saved",
        "account.addresses.empty.desc": "Add your shipping addresses to make checkout faster and easier.",
        "account.addresses.default": "Default",
        "account.addresses.edit": "Edit",
        "account.addresses.delete": "Delete",
        "account.addresses.set-default": "Set Default",
        "account.addresses.modal.title": "Add New Address",
        "account.addresses.modal.edit": "Edit Address",
        "account.addresses.name": "Address Name",
        "account.addresses.street": "Street Address",
        "account.addresses.city": "City",
        "account.addresses.state": "State/Region",
        "account.addresses.zip": "ZIP Code",
        "account.addresses.country": "Country",
        "account.addresses.phone": "Phone Number",
        "account.addresses.default-label": "Set as default address",
        "account.addresses.save": "Save Address",
        "account.addresses.cancel": "Cancel",
        
        // Orders
        "account.orders.title": "My Orders",
        "account.orders.subtitle": "View and track all your orders",
        "account.orders.filter": "Filter by:",
        "account.orders.all": "All Orders",
        "account.orders.pending": "Pending",
        "account.orders.processing": "Processing",
        "account.orders.shipped": "Shipped",
        "account.orders.delivered": "Delivered",
        "account.orders.cancelled": "Cancelled",
        "account.orders.empty": "No Orders Yet",
        "account.orders.empty.desc": "You haven't placed any orders. Start shopping to see your orders here.",
        
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
        
        // Account Badge
        "account.badge.member": "Membro",
        
        // Navigation
        "account.nav.dashboard": "Dashboard",
        "account.nav.orders": "I Miei Ordini",
        "account.nav.details": "Dettagli Account",
        "account.nav.addresses": "I Miei Indirizzi",
        "account.nav.wishlist": "Lista dei Desideri",
        "account.nav.logout": "Esci",
        
        // Dashboard
        "account.dashboard.welcome": "Bentornato!",
        "account.dashboard.subtitle": "Ecco una panoramica della tua attività sull'account",
        "account.dashboard.recent-orders": "Ordini Recenti",
        "account.dashboard.view-all": "Vedi Tutto",
        "account.dashboard.no-orders": "Non hai ancora effettuato alcun ordine.",
        "account.dashboard.start-shopping": "Inizia a Fare Shopping",
        "account.dashboard.quick-actions": "Azioni Rapide",
        
        // Stats
        "account.stats.orders": "Ordini Totali",
        "account.stats.wishlist": "Articoli nella Lista dei Desideri",
        "account.stats.reviews": "Recensioni",
        "account.stats.rewards": "Punti Premio",
        
        // Quick Actions
        "account.actions.shop": "Continua a Fare Shopping",
        "account.actions.profile": "Modifica Profilo",
        "account.actions.address": "Gestisci Indirizzi",
        "account.actions.orders": "Traccia Ordini",
        "account.actions.wishlist": "Vedi Lista dei Desideri",
        "account.actions.help": "Aiuto e Supporto",
        
        // Account Details
        "account.details.title": "Dettagli Account",
        "account.details.subtitle": "Aggiorna le tue informazioni personali",
        "account.details.fullname": "Nome Completo",
        "account.details.email": "Indirizzo Email",
        "account.details.phone": "Numero di Telefono",
        "account.details.save": "Salva Modifiche",
        "account.details.cancel": "Annulla",
        "account.details.password.title": "Cambia Password",
        "account.details.password.current": "Password Attuale",
        "account.details.password.new": "Nuova Password",
        "account.details.password.confirm": "Conferma Nuova Password",
        "account.details.password.update": "Aggiorna Password",
        
        // Addresses
        "account.addresses.title": "I Miei Indirizzi",
        "account.addresses.subtitle": "Gestisci i tuoi indirizzi di spedizione",
        "account.addresses.add": "Aggiungi Nuovo Indirizzo",
        "account.addresses.empty": "Nessun Indirizzo Salvato",
        "account.addresses.empty.desc": "Aggiungi i tuoi indirizzi di spedizione per rendere il checkout più veloce e facile.",
        "account.addresses.default": "Predefinito",
        "account.addresses.edit": "Modifica",
        "account.addresses.delete": "Elimina",
        "account.addresses.set-default": "Imposta come Predefinito",
        "account.addresses.modal.title": "Aggiungi Nuovo Indirizzo",
        "account.addresses.modal.edit": "Modifica Indirizzo",
        "account.addresses.name": "Nome Indirizzo",
        "account.addresses.street": "Indirizzo",
        "account.addresses.city": "Città",
        "account.addresses.state": "Stato/Regione",
        "account.addresses.zip": "CAP",
        "account.addresses.country": "Paese",
        "account.addresses.phone": "Numero di Telefono",
        "account.addresses.default-label": "Imposta come indirizzo predefinito",
        "account.addresses.save": "Salva Indirizzo",
        "account.addresses.cancel": "Annulla",
        
        // Orders
        "account.orders.title": "I Miei Ordini",
        "account.orders.subtitle": "Visualizza e traccia tutti i tuoi ordini",
        "account.orders.filter": "Filtra per:",
        "account.orders.all": "Tutti gli Ordini",
        "account.orders.pending": "In Sospeso",
        "account.orders.processing": "In Elaborazione",
        "account.orders.shipped": "Spedito",
        "account.orders.delivered": "Consegnato",
        "account.orders.cancelled": "Annullato",
        "account.orders.empty": "Nessun Ordine",
        "account.orders.empty.desc": "Non hai ancora effettuato alcun ordine. Inizia a fare shopping per vedere i tuoi ordini qui.",
        
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
        
        // Account Badge
        "account.badge.member": "Membre",
        
        // Navigation
        "account.nav.dashboard": "Tableau de Bord",
        "account.nav.orders": "Mes Commandes",
        "account.nav.details": "Détails du Compte",
        "account.nav.addresses": "Mes Adresses",
        "account.nav.wishlist": "Liste de Souhaits",
        "account.nav.logout": "Déconnexion",
        
        // Dashboard
        "account.dashboard.welcome": "Bon Retour!",
        "account.dashboard.subtitle": "Voici un aperçu de l'activité de votre compte",
        "account.dashboard.recent-orders": "Commandes Récentes",
        "account.dashboard.view-all": "Voir Tout",
        "account.dashboard.no-orders": "Vous n'avez pas encore passé de commandes.",
        "account.dashboard.start-shopping": "Commencer les Achats",
        "account.dashboard.quick-actions": "Actions Rapides",
        
        // Stats
        "account.stats.orders": "Commandes Totales",
        "account.stats.wishlist": "Articles dans la Liste de Souhaits",
        "account.stats.reviews": "Avis",
        "account.stats.rewards": "Points de Récompense",
        
        // Quick Actions
        "account.actions.shop": "Continuer les Achats",
        "account.actions.profile": "Modifier le Profil",
        "account.actions.address": "Gérer les Adresses",
        "account.actions.orders": "Suivre les Commandes",
        "account.actions.wishlist": "Voir la Liste de Souhaits",
        "account.actions.help": "Aide et Support",
        
        // Account Details
        "account.details.title": "Détails du Compte",
        "account.details.subtitle": "Mettez à jour vos informations personnelles",
        "account.details.fullname": "Nom Complet",
        "account.details.email": "Adresse Email",
        "account.details.phone": "Numéro de Téléphone",
        "account.details.save": "Enregistrer les Modifications",
        "account.details.cancel": "Annuler",
        "account.details.password.title": "Changer le Mot de Passe",
        "account.details.password.current": "Mot de Passe Actuel",
        "account.details.password.new": "Nouveau Mot de Passe",
        "account.details.password.confirm": "Confirmer le Nouveau Mot de Passe",
        "account.details.password.update": "Mettre à Jour le Mot de Passe",
        
        // Addresses
        "account.addresses.title": "Mes Adresses",
        "account.addresses.subtitle": "Gérez vos adresses de livraison",
        "account.addresses.add": "Ajouter une Nouvelle Adresse",
        "account.addresses.empty": "Aucune Adresse Enregistrée",
        "account.addresses.empty.desc": "Ajoutez vos adresses de livraison pour rendre le paiement plus rapide et plus facile.",
        "account.addresses.default": "Par Défaut",
        "account.addresses.edit": "Modifier",
        "account.addresses.delete": "Supprimer",
        "account.addresses.set-default": "Définir comme Par Défaut",
        "account.addresses.modal.title": "Ajouter une Nouvelle Adresse",
        "account.addresses.modal.edit": "Modifier l'Adresse",
        "account.addresses.name": "Nom de l'Adresse",
        "account.addresses.street": "Adresse",
        "account.addresses.city": "Ville",
        "account.addresses.state": "État/Région",
        "account.addresses.zip": "Code Postal",
        "account.addresses.country": "Pays",
        "account.addresses.phone": "Numéro de Téléphone",
        "account.addresses.default-label": "Définir comme adresse par défaut",
        "account.addresses.save": "Enregistrer l'Adresse",
        "account.addresses.cancel": "Annuler",
        
        // Orders
        "account.orders.title": "Mes Commandes",
        "account.orders.subtitle": "Consultez et suivez toutes vos commandes",
        "account.orders.filter": "Filtrer par:",
        "account.orders.all": "Toutes les Commandes",
        "account.orders.pending": "En Attente",
        "account.orders.processing": "En Traitement",
        "account.orders.shipped": "Expédié",
        "account.orders.delivered": "Livré",
        "account.orders.cancelled": "Annulé",
        "account.orders.empty": "Aucune Commande",
        "account.orders.empty.desc": "Vous n'avez pas encore passé de commandes. Commencez à faire vos achats pour voir vos commandes ici.",
        
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

function switchAccountLanguage(lang) {
    if (!accountTranslations[lang]) {
        console.warn(`Language ${lang} not supported for account pages`);
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
        if (accountTranslations[lang] && accountTranslations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.placeholder) {
                    element.placeholder = accountTranslations[lang][key];
                }
            } else {
                element.textContent = accountTranslations[lang][key];
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
    
    // Update page title
    const pageTitles = {
        'en': 'My Account - SOUVENIR Egyptian Handcrafts',
        'it': 'Il Mio Account - SOUVENIR Artigianato Egiziano',
        'fr': 'Mon Compte - SOUVENIR Artisanat Égyptien'
    };
    document.title = pageTitles[lang] || pageTitles['en'];
    
    // Trigger language change event
    window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: lang } 
    }));
}

// Setup dropdown functionality
function setupAccountDropdowns() {
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
                switchAccountLanguage(lang);
                languageDropdown.classList.remove('show');
            });
        });
    }
}

// Load saved language preference
function loadAccountLanguage() {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    switchAccountLanguage(savedLang);
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    loadAccountLanguage();
    setupAccountDropdowns();
    
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
window.switchAccountLanguage = switchAccountLanguage;
window.accountTranslations = accountTranslations;