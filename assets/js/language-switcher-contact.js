// language-switcher-contact.js - Language switching for Contact Us page

let currentLang = localStorage.getItem('preferred-language') || 'en';

const contactTranslations = {
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
        
        // Hero
        "contact.hero.title": "Contact Us",
        "contact.hero.subtitle": "We'd love to hear from you. Get in touch with our team for any questions, feedback, or collaboration opportunities.",
        
        // Contact Info
        "contact.info.title": "Get in Touch",
        "contact.info.desc": "Have questions about our products, shipping, or want to collaborate with our artisans? We're here to help.",
        "contact.info.address.title": "Visit Us",
        "contact.info.address.desc": "Cairo, Egypt",
        "contact.info.phone.title": "Call Us",
        "contact.info.phone.hours": "Mon-Fri: 9:00 AM - 6:00 PM (Cairo Time)",
        "contact.info.email.title": "Email Us",
        "contact.info.hours.title": "Working Hours",
        "contact.info.hours.weekdays": "Monday - Friday: 9:00 AM - 6:00 PM",
        "contact.info.hours.weekend": "Saturday: 10:00 AM - 4:00 PM",
        "contact.info.hours.closed": "Sunday: Closed",
        "contact.info.social": "Follow Us",
        
        // Form
        "contact.form.title": "Send Us a Message",
        "contact.form.desc": "We'll get back to you within 24-48 hours.",
        "contact.form.name": "Full Name",
        "contact.form.email": "Email Address",
        "contact.form.subject": "Subject",
        "contact.form.subject.placeholder": "Select a subject",
        "contact.form.subject.general": "General Inquiry",
        "contact.form.subject.order": "Order Question",
        "contact.form.subject.shipping": "Shipping Information",
        "contact.form.subject.returns": "Returns & Exchanges",
        "contact.form.subject.product": "Product Information",
        "contact.form.subject.collaboration": "Collaboration",
        "contact.form.subject.feedback": "Feedback",
        "contact.form.subject.other": "Other",
        "contact.form.message": "Message",
        "contact.form.agree": "I agree to the Privacy Policy and Terms of Service",
        "contact.form.submit": "Send Message",
        
        // FAQ
        "contact.faq.title": "Frequently Asked Questions",
        "contact.faq.q1": "How do I track my order?",
        "contact.faq.a1": "Once your order has been shipped, you will receive a confirmation email with a tracking number. You can track your order by clicking the tracking link in the email or by visiting the carrier's website with your tracking number.",
        "contact.faq.q2": "What is your return policy?",
        "contact.faq.a2": "We offer a 30-day return policy for all items in their original condition. Please visit our Returns & Exchanges page for detailed information about our return process and conditions.",
        "contact.faq.q3": "Do you ship internationally?",
        "contact.faq.a3": "Yes, we ship our authentic Egyptian handcrafts worldwide. We offer international shipping to over 50 countries. Please refer to our Shipping Information page for details about delivery times and costs.",
        "contact.faq.q4": "Can I collaborate with your artisans?",
        "contact.faq.a4": "We welcome collaboration opportunities with designers, retailers, and organizations. Please send us a message through our contact form with details about your collaboration proposal, and our team will get back to you.",
        
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
        
        // Hero
        "contact.hero.title": "Contattaci",
        "contact.hero.subtitle": "Saremo lieti di sentirti. Mettiti in contatto con il nostro team per qualsiasi domanda, feedback o opportunità di collaborazione.",
        
        // Contact Info
        "contact.info.title": "Mettiti in Contatto",
        "contact.info.desc": "Hai domande sui nostri prodotti, sulla spedizione o vuoi collaborare con i nostri artigiani? Siamo qui per aiutarti.",
        "contact.info.address.title": "Visita il Nostro Showroom",
        "contact.info.address.desc": "Il Cairo, Egitto",
        "contact.info.phone.title": "Chiamaci",
        "contact.info.phone.hours": "Lun-Ven: 9:00 - 18:00 (Ora del Cairo)",
        "contact.info.email.title": "Scrivici",
        "contact.info.hours.title": "Orari di Lavoro",
        "contact.info.hours.weekdays": "Lunedì - Venerdì: 9:00 - 18:00",
        "contact.info.hours.weekend": "Sabato: 10:00 - 16:00",
        "contact.info.hours.closed": "Domenica: Chiuso",
        "contact.info.social": "Seguici",
        
        // Form
        "contact.form.title": "Inviaci un Messaggio",
        "contact.form.desc": "Ti risponderemo entro 24-48 ore.",
        "contact.form.name": "Nome Completo",
        "contact.form.email": "Indirizzo Email",
        "contact.form.subject": "Oggetto",
        "contact.form.subject.placeholder": "Seleziona un oggetto",
        "contact.form.subject.general": "Richiesta Generale",
        "contact.form.subject.order": "Domanda sull'Ordine",
        "contact.form.subject.shipping": "Informazioni Spedizione",
        "contact.form.subject.returns": "Resi e Cambi",
        "contact.form.subject.product": "Informazioni Prodotto",
        "contact.form.subject.collaboration": "Collaborazione",
        "contact.form.subject.feedback": "Feedback",
        "contact.form.subject.other": "Altro",
        "contact.form.message": "Messaggio",
        "contact.form.agree": "Accetto la Privacy Policy e i Termini di Servizio",
        "contact.form.submit": "Invia Messaggio",
        
        // FAQ
        "contact.faq.title": "Domande Frequenti",
        "contact.faq.q1": "Come posso tracciare il mio ordine?",
        "contact.faq.a1": "Una volta che il tuo ordine è stato spedito, riceverai un'email di conferma con un numero di tracciamento. Puoi tracciare il tuo ordine cliccando sul link di tracciamento nell'email o visitando il sito del corriere con il tuo numero di tracciamento.",
        "contact.faq.q2": "Qual è la vostra politica di reso?",
        "contact.faq.a2": "Offriamo una politica di reso di 30 giorni per tutti gli articoli nelle loro condizioni originali. Visita la nostra pagina Resi e Cambi per informazioni dettagliate sul processo e le condizioni di reso.",
        "contact.faq.q3": "Spedite a livello internazionale?",
        "contact.faq.a3": "Sì, spediamo i nostri autentici oggetti artigianali egiziani in tutto il mondo. Offriamo spedizioni internazionali in oltre 50 paesi. Consulta la nostra pagina Informazioni Spedizioni per dettagli sui tempi e costi di consegna.",
        "contact.faq.q4": "Posso collaborare con i vostri artigiani?",
        "contact.faq.a4": "Accogliamo con favore opportunità di collaborazione con designer, rivenditori e organizzazioni. Inviami un messaggio attraverso il nostro modulo di contatto con i dettagli della tua proposta di collaborazione, e il nostro team ti risponderà.",
        
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
        
        // Hero
        "contact.hero.title": "Contactez-nous",
        "contact.hero.subtitle": "Nous serions ravis de vous entendre. Contactez notre équipe pour toute question, retour d'information ou opportunité de collaboration.",
        
        // Contact Info
        "contact.info.title": "Prenez Contact",
        "contact.info.desc": "Vous avez des questions sur nos produits, la livraison ou souhaitez collaborer avec nos artisans ? Nous sommes là pour vous aider.",
        "contact.info.address.title": "Visitez-nous",
        "contact.info.address.desc": "Le Caire, Égypte",
        "contact.info.phone.title": "Appelez-nous",
        "contact.info.phone.hours": "Lun-Ven: 9h00 - 18h00 (Heure du Caire)",
        "contact.info.email.title": "Écrivez-nous",
        "contact.info.hours.title": "Horaires d'Ouverture",
        "contact.info.hours.weekdays": "Lundi - Vendredi: 9h00 - 18h00",
        "contact.info.hours.weekend": "Samedi: 10h00 - 16h00",
        "contact.info.hours.closed": "Dimanche: Fermé",
        "contact.info.social": "Suivez-nous",
        
        // Form
        "contact.form.title": "Envoyez-nous un Message",
        "contact.form.desc": "Nous vous répondrons dans les 24-48 heures.",
        "contact.form.name": "Nom Complet",
        "contact.form.email": "Adresse Email",
        "contact.form.subject": "Sujet",
        "contact.form.subject.placeholder": "Sélectionnez un sujet",
        "contact.form.subject.general": "Demande Générale",
        "contact.form.subject.order": "Question sur une Commande",
        "contact.form.subject.shipping": "Informations Livraison",
        "contact.form.subject.returns": "Retours et Échanges",
        "contact.form.subject.product": "Informations Produit",
        "contact.form.subject.collaboration": "Collaboration",
        "contact.form.subject.feedback": "Retour d'Information",
        "contact.form.subject.other": "Autre",
        "contact.form.message": "Message",
        "contact.form.agree": "J'accepte la Politique de Confidentialité et les Conditions d'Utilisation",
        "contact.form.submit": "Envoyer le Message",
        
        // FAQ
        "contact.faq.title": "Questions Fréquentes",
        "contact.faq.q1": "Comment puis-je suivre ma commande ?",
        "contact.faq.a1": "Une fois votre commande expédiée, vous recevrez un email de confirmation avec un numéro de suivi. Vous pouvez suivre votre commande en cliquant sur le lien de suivi dans l'email ou en visitant le site du transporteur avec votre numéro de suivi.",
        "contact.faq.q2": "Quelle est votre politique de retour ?",
        "contact.faq.a2": "Nous offrons une politique de retour de 30 jours pour tous les articles dans leur état d'origine. Consultez notre page Retours et Échanges pour des informations détaillées sur notre processus et nos conditions de retour.",
        "contact.faq.q3": "Livrez-vous à l'international ?",
        "contact.faq.a3": "Oui, nous livrons nos objets artisanaux égyptiens authentiques dans le monde entier. Nous offrons une livraison internationale dans plus de 50 pays. Consultez notre page Informations Livraison pour les détails sur les délais et les coûts.",
        "contact.faq.q4": "Puis-je collaborer avec vos artisans ?",
        "contact.faq.a4": "Nous accueillons favorablement les opportunités de collaboration avec les designers, les détaillants et les organisations. Envoyez-nous un message via notre formulaire de contact avec les détails de votre proposition de collaboration, et notre équipe vous répondra.",
        
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

function switchContactLanguage(lang) {
    if (!contactTranslations[lang]) {
        console.warn(`Language ${lang} not supported for contact page`);
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
        if (contactTranslations[lang] && contactTranslations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.placeholder) {
                    element.placeholder = contactTranslations[lang][key];
                }
            } else if (element.tagName === 'SELECT') {
                // Handle select options
                const options = element.querySelectorAll('option');
                options.forEach(option => {
                    const optionKey = option.dataset.key;
                    if (optionKey && contactTranslations[lang][optionKey]) {
                        option.textContent = contactTranslations[lang][optionKey];
                    }
                });
            } else {
                element.textContent = contactTranslations[lang][key];
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
        'en': 'Contact Us - SOUVENIR Egyptian Handcrafts',
        'it': 'Contattaci - SOUVENIR Artigianato Egiziano',
        'fr': 'Contactez-nous - SOUVENIR Artisanat Égyptien'
    };
    document.title = titles[lang] || titles['en'];
    
    // Trigger language change event
    window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: lang } 
    }));
}

// Setup dropdown functionality
function setupContactDropdowns() {
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
                switchContactLanguage(lang);
                languageDropdown.classList.remove('show');
            });
        });
    }
}

// Load saved language preference
function loadContactLanguage() {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    switchContactLanguage(savedLang);
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    loadContactLanguage();
    setupContactDropdowns();
    
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
window.switchContactLanguage = switchContactLanguage;
window.contactTranslations = contactTranslations;