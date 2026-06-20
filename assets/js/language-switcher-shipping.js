// language-switcher-shipping.js - Language switching for Shipping page

let currentLang = localStorage.getItem('preferred-language') || 'en';

const shippingTranslations = {
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
        
        // Hero Section
        "shipping.hero.title": "Shipping Information",
        "shipping.hero.subtitle": "We deliver our treasures worldwide with care and reliability",
        
        // Options
        "shipping.options.title": "Delivery Options",
        "shipping.options.hotel.title": "Hotel Delivery",
        "shipping.options.hotel.desc": "We deliver directly to your hotel during your stay in Egypt. Perfect for tourists who want to enjoy their purchases immediately.",
        "shipping.options.hotel.detail1": "Free delivery to hotels in Cairo, Alexandria, Luxor, and Aswan",
        "shipping.options.hotel.detail2": "Delivery within 24-48 hours",
        "shipping.options.hotel.detail3": "Secure packaging with gift wrapping option",
        "shipping.options.hotel.price": "Free",
        
        "shipping.options.international.title": "International Shipping",
        "shipping.options.international.desc": "We ship our authentic Egyptian handcrafts to customers worldwide with reliable tracking and insurance.",
        "shipping.options.international.detail1": "Worldwide delivery to over 50 countries",
        "shipping.options.international.detail2": "Tracking number provided for all orders",
        "shipping.options.international.detail3": "Fully insured against loss or damage",
        "shipping.options.international.detail4": "Delivery within 5-10 business days",
        "shipping.options.international.price": "Starting at $25",
        
        "shipping.options.express.title": "Express Shipping",
        "shipping.options.express.desc": "For urgent deliveries, choose our express shipping option to receive your order as quickly as possible.",
        "shipping.options.express.detail1": "Delivery within 2-3 business days worldwide",
        "shipping.options.express.detail2": "Priority handling and processing",
        "shipping.options.express.detail3": "Real-time tracking updates",
        "shipping.options.express.price": "Starting at $45",
        
        // Policy
        "shipping.policy.title": "Shipping Policy",
        "shipping.policy.processing": "Processing Time",
        "shipping.policy.processing.desc": "Orders are processed within 24-48 hours of confirmation. You will receive a confirmation email once your order has been processed.",
        "shipping.policy.packaging": "Packaging",
        "shipping.policy.packaging.desc": "Each item is carefully packaged using high-quality materials to ensure safe delivery. Fragile items receive extra protection.",
        "shipping.policy.tracking": "Order Tracking",
        "shipping.policy.tracking.desc": "All orders come with a tracking number. You will receive tracking information via email once your order has been shipped.",
        "shipping.policy.insurance": "Insurance",
        "shipping.policy.insurance.desc": "All international shipments are fully insured against loss or damage. If your order arrives damaged, we will replace it at no cost.",
        "shipping.policy.estimate": "Delivery Time Estimates",
        
        // Regions
        "shipping.regions.egypt": "Egypt",
        "shipping.regions.egypt.time": "1-3 days",
        "shipping.regions.middle-east": "Middle East",
        "shipping.regions.middle-east.time": "3-5 days",
        "shipping.regions.europe": "Europe",
        "shipping.regions.europe.time": "5-7 days",
        "shipping.regions.usa": "USA & Canada",
        "shipping.regions.usa.time": "6-10 days",
        "shipping.regions.asia": "Asia & Australia",
        "shipping.regions.asia.time": "7-14 days",
        
        // FAQ
        "shipping.faq.title": "Frequently Asked Questions",
        "shipping.faq.q1": "How long does shipping take?",
        "shipping.faq.a1": "Shipping times vary depending on your location and chosen shipping method. Hotel delivery in Egypt typically takes 24-48 hours. International shipping takes 5-10 business days, while express shipping takes 2-3 business days.",
        "shipping.faq.q2": "Can I track my order?",
        "shipping.faq.a2": "Yes, all orders come with a tracking number. You'll receive your tracking information via email once your order has been shipped. You can track your order on our website or through the carrier's tracking portal.",
        "shipping.faq.q3": "What happens if my order is damaged?",
        "shipping.faq.a3": "All shipments are fully insured. If your order arrives damaged, please contact us within 48 hours with photos of the damage. We will arrange a replacement or refund at no additional cost.",
        "shipping.faq.q4": "Do you offer free shipping?",
        "shipping.faq.a4": "We offer free hotel delivery for customers staying in Cairo, Alexandria, Luxor, and Aswan. For international orders, we offer free shipping on orders over $200. Express shipping is available for an additional fee.",
        "shipping.faq.q5": "Do you ship to my country?",
        "shipping.faq.a5": "We ship to over 50 countries worldwide. Please check our shipping list during checkout or contact our customer service team for more information about shipping to your specific location.",
        
        // CTA
        "shipping.cta.title": "Ready to Order?",
        "shipping.cta.desc": "Browse our collection of authentic Egyptian handcrafts and have them delivered to your doorstep.",
        "shipping.cta.shop": "Shop Now",
        "shipping.cta.contact": "Contact Us",
        
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
        
        // Hero Section
        "shipping.hero.title": "Informazioni sulla Spedizione",
        "shipping.hero.subtitle": "Consegniamo i nostri tesori in tutto il mondo con cura e affidabilità",
        
        // Options
        "shipping.options.title": "Opzioni di Consegna",
        "shipping.options.hotel.title": "Consegna in Hotel",
        "shipping.options.hotel.desc": "Consegniamo direttamente al tuo hotel durante il soggiorno in Egitto. Perfetto per i turisti che vogliono godersi subito i loro acquisti.",
        "shipping.options.hotel.detail1": "Consegna gratuita negli hotel del Cairo, Alessandria, Luxor e Assuan",
        "shipping.options.hotel.detail2": "Consegna entro 24-48 ore",
        "shipping.options.hotel.detail3": "Imballaggio sicuro con opzione di confezione regalo",
        "shipping.options.hotel.price": "Gratuita",
        
        "shipping.options.international.title": "Spedizione Internazionale",
        "shipping.options.international.desc": "Spediamo i nostri autentici oggetti artigianali egiziani in tutto il mondo con tracciamento e assicurazione affidabili.",
        "shipping.options.international.detail1": "Consegna in tutto il mondo in oltre 50 paesi",
        "shipping.options.international.detail2": "Numero di tracciamento fornito per tutti gli ordini",
        "shipping.options.international.detail3": "Completamente assicurato contro perdita o danni",
        "shipping.options.international.detail4": "Consegna entro 5-10 giorni lavorativi",
        "shipping.options.international.price": "A partire da $25",
        
        "shipping.options.express.title": "Spedizione Espressa",
        "shipping.options.express.desc": "Per consegne urgenti, scegli la nostra opzione di spedizione espressa per ricevere il tuo ordine il più rapidamente possibile.",
        "shipping.options.express.detail1": "Consegna entro 2-3 giorni lavorativi in tutto il mondo",
        "shipping.options.express.detail2": "Gestione ed elaborazione prioritaria",
        "shipping.options.express.detail3": "Aggiornamenti di tracciamento in tempo reale",
        "shipping.options.express.price": "A partire da $45",
        
        // Policy
        "shipping.policy.title": "Politica di Spedizione",
        "shipping.policy.processing": "Tempi di Elaborazione",
        "shipping.policy.processing.desc": "Gli ordini vengono elaborati entro 24-48 ore dalla conferma. Riceverai un'email di conferma dopo l'elaborazione dell'ordine.",
        "shipping.policy.packaging": "Imballaggio",
        "shipping.policy.packaging.desc": "Ogni articolo è accuratamente imballato con materiali di alta qualità per garantire una consegna sicura. Gli articoli fragili ricevono protezione extra.",
        "shipping.policy.tracking": "Tracciamento Ordini",
        "shipping.policy.tracking.desc": "Tutti gli ordini hanno un numero di tracciamento. Riceverai le informazioni di tracciamento via email dopo la spedizione.",
        "shipping.policy.insurance": "Assicurazione",
        "shipping.policy.insurance.desc": "Tutte le spedizioni internazionali sono completamente assicurate contro perdita o danni. Se il tuo ordine arriva danneggiato, lo sostituiremo senza costi aggiuntivi.",
        "shipping.policy.estimate": "Stime dei Tempi di Consegna",
        
        // Regions
        "shipping.regions.egypt": "Egitto",
        "shipping.regions.egypt.time": "1-3 giorni",
        "shipping.regions.middle-east": "Medio Oriente",
        "shipping.regions.middle-east.time": "3-5 giorni",
        "shipping.regions.europe": "Europa",
        "shipping.regions.europe.time": "5-7 giorni",
        "shipping.regions.usa": "USA e Canada",
        "shipping.regions.usa.time": "6-10 giorni",
        "shipping.regions.asia": "Asia e Australia",
        "shipping.regions.asia.time": "7-14 giorni",
        
        // FAQ
        "shipping.faq.title": "Domande Frequenti",
        "shipping.faq.q1": "Quanto tempo richiede la spedizione?",
        "shipping.faq.a1": "I tempi di spedizione variano in base alla tua posizione e al metodo di spedizione scelto. La consegna in hotel in Egitto richiede solitamente 24-48 ore. La spedizione internazionale richiede 5-10 giorni lavorativi, mentre la spedizione espressa richiede 2-3 giorni lavorativi.",
        "shipping.faq.q2": "Posso tracciare il mio ordine?",
        "shipping.faq.a2": "Sì, tutti gli ordini hanno un numero di tracciamento. Riceverai le informazioni di tracciamento via email dopo la spedizione. Puoi tracciare il tuo ordine sul nostro sito o attraverso il portale di tracciamento del corriere.",
        "shipping.faq.q3": "Cosa succede se il mio ordine arriva danneggiato?",
        "shipping.faq.a3": "Tutte le spedizioni sono completamente assicurate. Se il tuo ordine arriva danneggiato, contattaci entro 48 ore con foto del danno. Organizzeremo una sostituzione o un rimborso senza costi aggiuntivi.",
        "shipping.faq.q4": "Offrite spedizioni gratuite?",
        "shipping.faq.a4": "Offriamo consegna gratuita in hotel per i clienti che soggiornano al Cairo, Alessandria, Luxor e Assuan. Per gli ordini internazionali, offriamo spedizione gratuita per ordini superiori a $200. La spedizione espressa è disponibile con un costo aggiuntivo.",
        "shipping.faq.q5": "Spedite nel mio paese?",
        "shipping.faq.a5": "Spediamo in oltre 50 paesi in tutto il mondo. Controlla la nostra lista di spedizione durante il checkout o contatta il nostro servizio clienti per maggiori informazioni sulla spedizione nella tua località specifica.",
        
        // CTA
        "shipping.cta.title": "Pronto per Ordinare?",
        "shipping.cta.desc": "Sfoglia la nostra collezione di autentici oggetti artigianali egiziani e falli consegnare direttamente a casa tua.",
        "shipping.cta.shop": "Acquista Ora",
        "shipping.cta.contact": "Contattaci",
        
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
        
        // Hero Section
        "shipping.hero.title": "Informations sur la Livraison",
        "shipping.hero.subtitle": "Nous livrons nos trésors dans le monde entier avec soin et fiabilité",
        
        // Options
        "shipping.options.title": "Options de Livraison",
        "shipping.options.hotel.title": "Livraison en Hôtel",
        "shipping.options.hotel.desc": "Nous livrons directement à votre hôtel pendant votre séjour en Égypte. Parfait pour les touristes qui souhaitent profiter immédiatement de leurs achats.",
        "shipping.options.hotel.detail1": "Livraison gratuite dans les hôtels du Caire, Alexandrie, Louxor et Assouan",
        "shipping.options.hotel.detail2": "Livraison sous 24-48 heures",
        "shipping.options.hotel.detail3": "Emballage sécurisé avec option d'emballage cadeau",
        "shipping.options.hotel.price": "Gratuit",
        
        "shipping.options.international.title": "Livraison Internationale",
        "shipping.options.international.desc": "Nous livrons nos authentiques objets artisanaux égyptiens dans le monde entier avec un suivi et une assurance fiables.",
        "shipping.options.international.detail1": "Livraison dans le monde entier dans plus de 50 pays",
        "shipping.options.international.detail2": "Numéro de suivi fourni pour toutes les commandes",
        "shipping.options.international.detail3": "Entièrement assuré contre la perte ou les dommages",
        "shipping.options.international.detail4": "Livraison sous 5-10 jours ouvrables",
        "shipping.options.international.price": "À partir de 25€",
        
        "shipping.options.express.title": "Livraison Express",
        "shipping.options.express.desc": "Pour les livraisons urgentes, choisissez notre option de livraison express pour recevoir votre commande le plus rapidement possible.",
        "shipping.options.express.detail1": "Livraison sous 2-3 jours ouvrables dans le monde entier",
        "shipping.options.express.detail2": "Traitement et priorisation",
        "shipping.options.express.detail3": "Mises à jour de suivi en temps réel",
        "shipping.options.express.price": "À partir de 45€",
        
        // Policy
        "shipping.policy.title": "Politique de Livraison",
        "shipping.policy.processing": "Délai de Traitement",
        "shipping.policy.processing.desc": "Les commandes sont traitées dans les 24-48 heures suivant la confirmation. Vous recevrez un email de confirmation une fois votre commande traitée.",
        "shipping.policy.packaging": "Emballage",
        "shipping.policy.packaging.desc": "Chaque article est soigneusement emballé avec des matériaux de haute qualité pour garantir une livraison sécurisée. Les articles fragiles bénéficient d'une protection supplémentaire.",
        "shipping.policy.tracking": "Suivi des Commandes",
        "shipping.policy.tracking.desc": "Toutes les commandes sont accompagnées d'un numéro de suivi. Vous recevrez les informations de suivi par email une fois votre commande expédiée.",
        "shipping.policy.insurance": "Assurance",
        "shipping.policy.insurance.desc": "Tous les envois internationaux sont entièrement assurés contre la perte ou les dommages. Si votre commande arrive endommagée, nous la remplacerons sans frais supplémentaires.",
        "shipping.policy.estimate": "Estimations des Délais de Livraison",
        
        // Regions
        "shipping.regions.egypt": "Égypte",
        "shipping.regions.egypt.time": "1-3 jours",
        "shipping.regions.middle-east": "Moyen-Orient",
        "shipping.regions.middle-east.time": "3-5 jours",
        "shipping.regions.europe": "Europe",
        "shipping.regions.europe.time": "5-7 jours",
        "shipping.regions.usa": "USA et Canada",
        "shipping.regions.usa.time": "6-10 jours",
        "shipping.regions.asia": "Asie et Australie",
        "shipping.regions.asia.time": "7-14 jours",
        
        // FAQ
        "shipping.faq.title": "Questions Fréquentes",
        "shipping.faq.q1": "Combien de temps dure la livraison ?",
        "shipping.faq.a1": "Les délais de livraison varient selon votre emplacement et la méthode de livraison choisie. La livraison en hôtel en Égypte prend généralement 24-48 heures. La livraison internationale prend 5-10 jours ouvrables, tandis que la livraison express prend 2-3 jours ouvrables.",
        "shipping.faq.q2": "Puis-je suivre ma commande ?",
        "shipping.faq.a2": "Oui, toutes les commandes sont accompagnées d'un numéro de suivi. Vous recevrez vos informations de suivi par email une fois votre commande expédiée. Vous pouvez suivre votre commande sur notre site ou via le portail de suivi du transporteur.",
        "shipping.faq.q3": "Que se passe-t-il si ma commande est endommagée ?",
        "shipping.faq.a3": "Tous les envois sont entièrement assurés. Si votre commande arrive endommagée, veuillez nous contacter dans les 48 heures avec des photos des dommages. Nous organiserons un remplacement ou un remboursement sans frais supplémentaires.",
        "shipping.faq.q4": "Proposez-vous la livraison gratuite ?",
        "shipping.faq.a4": "Nous offrons la livraison gratuite en hôtel pour les clients séjournant au Caire, Alexandrie, Louxor et Assouan. Pour les commandes internationales, nous offrons la livraison gratuite pour les commandes supérieures à 200€. La livraison express est disponible moyennant un supplément.",
        "shipping.faq.q5": "Livrez-vous dans mon pays ?",
        "shipping.faq.a5": "Nous livrons dans plus de 50 pays dans le monde. Veuillez vérifier notre liste de livraison lors du paiement ou contacter notre service client pour plus d'informations sur la livraison dans votre localité spécifique.",
        
        // CTA
        "shipping.cta.title": "Prêt à Commander ?",
        "shipping.cta.desc": "Parcourez notre collection d'objets artisanaux égyptiens authentiques et faites-les livrer à votre porte.",
        "shipping.cta.shop": "Acheter Maintenant",
        "shipping.cta.contact": "Contactez-nous",
        
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

function switchShippingLanguage(lang) {
    if (!shippingTranslations[lang]) {
        console.warn(`Language ${lang} not supported for shipping page`);
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
        if (shippingTranslations[lang] && shippingTranslations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.placeholder) {
                    element.placeholder = shippingTranslations[lang][key];
                }
            } else {
                element.textContent = shippingTranslations[lang][key];
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
    const titles = {
        'en': 'Shipping Information - SOUVENIR Egyptian Handcrafts',
        'it': 'Informazioni sulla Spedizione - SOUVENIR Artigianato Egiziano',
        'fr': 'Informations sur la Livraison - SOUVENIR Artisanat Égyptien'
    };
    document.title = titles[lang] || titles['en'];
    
    // Trigger language change event
    window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: lang } 
    }));
}

// Setup dropdown functionality
function setupShippingDropdowns() {
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
                switchShippingLanguage(lang);
                languageDropdown.classList.remove('show');
            });
        });
    }
}

// Load saved language preference
function loadShippingLanguage() {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    switchShippingLanguage(savedLang);
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    loadShippingLanguage();
    setupShippingDropdowns();
    
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
window.switchShippingLanguage = switchShippingLanguage;
window.shippingTranslations = shippingTranslations;