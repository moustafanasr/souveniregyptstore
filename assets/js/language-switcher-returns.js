// language-switcher-returns.js - Language switching for Returns page

let currentLang = localStorage.getItem('preferred-language') || 'en';

const returnsTranslations = {
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
        "returns.hero.title": "Returns & Exchanges",
        "returns.hero.subtitle": "We want you to love your purchase. If you're not completely satisfied, we're here to help.",
        
        // Policy
        "returns.policy.title": "Our Returns Policy",
        "returns.policy.intro": "At SOUVENIR Egypt, we stand behind the quality and authenticity of every product we sell. Your satisfaction is our priority, and we want you to be completely happy with your purchase.",
        "returns.policy.timeframe": "Return Timeframe",
        "returns.policy.timeframe.desc": "You have <strong>30 days</strong> from the date of delivery to return your item for a full refund or exchange. Items must be returned in their original condition, unworn, unwashed, and with all original tags and packaging intact.",
        "returns.policy.condition": "Return Conditions",
        "returns.policy.condition1": "Items must be returned within 30 days of delivery",
        "returns.policy.condition2": "Items must be in their original, unused condition",
        "returns.policy.condition3": "All original tags and packaging must be included",
        "returns.policy.condition4": "Custom or personalized items cannot be returned unless damaged",
        "returns.policy.condition5": "Return shipping costs are the responsibility of the customer unless the item is defective",
        "returns.policy.exchanges": "Exchanges",
        "returns.policy.exchanges.desc": "If you would like to exchange your item for a different size, color, or style, please initiate a return and place a new order. This ensures the fastest processing time and guarantees availability of your desired item.",
        "returns.policy.refunds": "Refunds",
        "returns.policy.refunds.desc": "Once we receive and inspect your return, we will process your refund within 5-7 business days. Refunds will be issued to the original payment method used for the purchase. You will receive a confirmation email once your refund has been processed.",
        
        // Sidebar
        "returns.sidebar.quick": "Quick Help",
        "returns.sidebar.process": "Return Process",
        "returns.sidebar.faq": "Frequently Asked Questions",
        "returns.sidebar.contact": "Contact Support",
        "returns.sidebar.shipping": "Shipping Information",
        "returns.sidebar.need-help": "Need Help?",
        "returns.sidebar.help-text": "Our customer service team is here to assist you with any questions about returns or exchanges.",
        "returns.sidebar.hours": "Mon-Fri: 9:00 AM - 6:00 PM (Cairo Time)",
        "returns.sidebar.contact-btn": "Contact Us",
        
        // Process
        "returns.process.title": "How to Return an Item",
        "returns.process.step1.title": "Initiate Return",
        "returns.process.step1.desc": "Contact our customer service team to initiate your return. Provide your order number and the reason for return. We'll guide you through the process and provide you with a return authorization.",
        "returns.process.step2.title": "Pack Your Item",
        "returns.process.step2.desc": "Carefully pack your item in its original packaging, including all tags and accessories. Ensure the item is well-protected for shipping to prevent damage during transit.",
        "returns.process.step3.title": "Ship Your Return",
        "returns.process.step3.desc": "Ship your return using a trackable shipping method to our returns address. Keep your tracking number for reference. Return shipping costs are the responsibility of the customer.",
        "returns.process.step4.title": "Receive Your Refund",
        "returns.process.step4.desc": "Once we receive and inspect your return, we'll process your refund within 5-7 business days. You'll receive a confirmation email and the refund will appear on your original payment method.",
        
        // FAQ
        "returns.faq.title": "Frequently Asked Questions",
        "returns.faq.q1": "How long do I have to return an item?",
        "returns.faq.a1": "You have 30 days from the date of delivery to return your item for a full refund or exchange. Items must be returned in their original condition with all tags and packaging intact.",
        "returns.faq.q2": "Who pays for return shipping?",
        "returns.faq.a2": "Return shipping costs are the responsibility of the customer, unless the item is defective, damaged, or if we made a mistake with your order. In these cases, we will provide a prepaid return shipping label.",
        "returns.faq.q3": "How long does it take to process a refund?",
        "returns.faq.a3": "Once we receive and inspect your return, we will process your refund within 5-7 business days. The refund will be credited to your original payment method. You will receive a confirmation email once the refund has been processed.",
        "returns.faq.q4": "Can I exchange an item?",
        "returns.faq.a4": "Yes, you can exchange an item for a different size, color, or style. We recommend initiating a return and placing a new order to ensure the fastest processing time and availability of your desired item.",
        "returns.faq.q5": "What if my item is damaged or defective?",
        "returns.faq.a5": "If your item arrives damaged or defective, please contact us immediately within 48 hours of delivery. We will arrange for a replacement or full refund at no additional cost to you. Please provide photos of the damage to expedite the process.",
        "returns.faq.q6": "Can I return a custom or personalized item?",
        "returns.faq.a6": "Custom and personalized items are final sale and cannot be returned unless they are damaged or defective. Please carefully review all customization details before placing your order to ensure you are satisfied with the design.",
        
        // CTA
        "returns.cta.title": "Still Have Questions?",
        "returns.cta.desc": "Our friendly customer service team is ready to help you with any questions or concerns about returns and exchanges.",
        "returns.cta.contact": "Contact Us",
        "returns.cta.shop": "Continue Shopping",
        
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
        "returns.hero.title": "Resi e Cambi",
        "returns.hero.subtitle": "Vogliamo che tu ami il tuo acquisto. Se non sei completamente soddisfatto, siamo qui per aiutarti.",
        
        // Policy
        "returns.policy.title": "La Nostra Politica sui Resi",
        "returns.policy.intro": "Da SOUVENIR Egypt, sosteniamo la qualità e l'autenticità di ogni prodotto che vendiamo. La tua soddisfazione è la nostra priorità e vogliamo che tu sia completamente soddisfatto del tuo acquisto.",
        "returns.policy.timeframe": "Periodo di Reso",
        "returns.policy.timeframe.desc": "Hai <strong>30 giorni</strong> dalla data di consegna per restituire il tuo articolo per un rimborso completo o un cambio. Gli articoli devono essere restituiti nelle loro condizioni originali, non indossati, non lavati, con tutti i tag e l'imballaggio originali intatti.",
        "returns.policy.condition": "Condizioni di Reso",
        "returns.policy.condition1": "Gli articoli devono essere restituiti entro 30 giorni dalla consegna",
        "returns.policy.condition2": "Gli articoli devono essere nelle loro condizioni originali e non utilizzati",
        "returns.policy.condition3": "Tutti i tag e l'imballaggio originali devono essere inclusi",
        "returns.policy.condition4": "Gli articoli personalizzati non possono essere restituiti a meno che non siano danneggiati",
        "returns.policy.condition5": "I costi di spedizione del reso sono a carico del cliente a meno che l'articolo non sia difettoso",
        "returns.policy.exchanges": "Cambi",
        "returns.policy.exchanges.desc": "Se desideri cambiare il tuo articolo con una taglia, colore o stile diverso, avvia un reso e piazza un nuovo ordine. Questo garantisce i tempi di elaborazione più rapidi e la disponibilità dell'articolo desiderato.",
        "returns.policy.refunds": "Rimborsi",
        "returns.policy.refunds.desc": "Una volta ricevuto e ispezionato il tuo reso, elaboreremo il tuo rimborso entro 5-7 giorni lavorativi. I rimborsi verranno emessi sul metodo di pagamento originale utilizzato per l'acquisto. Riceverai un'email di conferma una volta elaborato il rimborso.",
        
        // Sidebar
        "returns.sidebar.quick": "Aiuto Rapido",
        "returns.sidebar.process": "Processo di Reso",
        "returns.sidebar.faq": "Domande Frequenti",
        "returns.sidebar.contact": "Contatta il Supporto",
        "returns.sidebar.shipping": "Informazioni Spedizioni",
        "returns.sidebar.need-help": "Hai Bisogno di Aiuto?",
        "returns.sidebar.help-text": "Il nostro team di assistenza clienti è qui per aiutarti con qualsiasi domanda su resi o cambi.",
        "returns.sidebar.hours": "Lun-Ven: 9:00 - 18:00 (Ora del Cairo)",
        "returns.sidebar.contact-btn": "Contattaci",
        
        // Process
        "returns.process.title": "Come Restituire un Articolo",
        "returns.process.step1.title": "Avvia il Reso",
        "returns.process.step1.desc": "Contatta il nostro team di assistenza clienti per avviare il reso. Fornisci il numero d'ordine e il motivo del reso. Ti guideremo attraverso il processo e ti forniremo un'autorizzazione al reso.",
        "returns.process.step2.title": "Imballa il Tuo Articolo",
        "returns.process.step2.desc": "Imballa attentamente il tuo articolo nella sua confezione originale, includendo tutti i tag e gli accessori. Assicurati che l'articolo sia ben protetto per la spedizione per prevenire danni durante il trasporto.",
        "returns.process.step3.title": "Spedisci il Tuo Reso",
        "returns.process.step3.desc": "Spedisci il tuo reso utilizzando un metodo di spedizione tracciabile al nostro indirizzo di reso. Conserva il numero di tracciamento come riferimento. I costi di spedizione del reso sono a carico del cliente.",
        "returns.process.step4.title": "Ricevi il Tuo Rimborso",
        "returns.process.step4.desc": "Una volta ricevuto e ispezionato il tuo reso, elaboreremo il rimborso entro 5-7 giorni lavorativi. Riceverai un'email di conferma e il rimborso apparirà sul tuo metodo di pagamento originale.",
        
        // FAQ
        "returns.faq.title": "Domande Frequenti",
        "returns.faq.q1": "Quanto tempo ho per restituire un articolo?",
        "returns.faq.a1": "Hai 30 giorni dalla data di consegna per restituire il tuo articolo per un rimborso completo o un cambio. Gli articoli devono essere restituiti nelle loro condizioni originali con tutti i tag e l'imballaggio intatti.",
        "returns.faq.q2": "Chi paga la spedizione del reso?",
        "returns.faq.a2": "I costi di spedizione del reso sono a carico del cliente, a meno che l'articolo non sia difettoso, danneggiato o se abbiamo commesso un errore con il tuo ordine. In questi casi, forniremo un'etichetta di spedizione prepagata.",
        "returns.faq.q3": "Quanto tempo ci vuole per elaborare un rimborso?",
        "returns.faq.a3": "Una volta ricevuto e ispezionato il tuo reso, elaboreremo il rimborso entro 5-7 giorni lavorativi. Il rimborso verrà accreditato sul tuo metodo di pagamento originale. Riceverai un'email di conferma una volta elaborato il rimborso.",
        "returns.faq.q4": "Posso cambiare un articolo?",
        "returns.faq.a4": "Sì, puoi cambiare un articolo con una taglia, colore o stile diverso. Ti consigliamo di avviare un reso e piazzare un nuovo ordine per garantire i tempi di elaborazione più rapidi e la disponibilità dell'articolo desiderato.",
        "returns.faq.q5": "Cosa succede se il mio articolo è danneggiato o difettoso?",
        "returns.faq.a5": "Se il tuo articolo arriva danneggiato o difettoso, contattaci immediatamente entro 48 ore dalla consegna. Organizzeremo una sostituzione o un rimborso completo senza costi aggiuntivi. Fornisci foto del danno per accelerare il processo.",
        "returns.faq.q6": "Posso restituire un articolo personalizzato?",
        "returns.faq.a6": "Gli articoli personalizzati sono vendita finale e non possono essere restituiti a meno che non siano danneggiati o difettosi. Rivedi attentamente tutti i dettagli di personalizzazione prima di effettuare l'ordine per assicurarti di essere soddisfatto del design.",
        
        // CTA
        "returns.cta.title": "Hai Ancora Domande?",
        "returns.cta.desc": "Il nostro cordiale team di assistenza clienti è pronto ad aiutarti con qualsiasi domanda o dubbio su resi e cambi.",
        "returns.cta.contact": "Contattaci",
        "returns.cta.shop": "Continua a Fare Shopping",
        
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
        "returns.hero.title": "Retours et Échanges",
        "returns.hero.subtitle": "Nous voulons que vous aimiez votre achat. Si vous n'êtes pas entièrement satisfait, nous sommes là pour vous aider.",
        
        // Policy
        "returns.policy.title": "Notre Politique de Retour",
        "returns.policy.intro": "Chez SOUVENIR Egypt, nous soutenons la qualité et l'authenticité de chaque produit que nous vendons. Votre satisfaction est notre priorité et nous voulons que vous soyez complètement satisfait de votre achat.",
        "returns.policy.timeframe": "Délai de Retour",
        "returns.policy.timeframe.desc": "Vous avez <strong>30 jours</strong> à compter de la date de livraison pour retourner votre article pour un remboursement complet ou un échange. Les articles doivent être retournés dans leur état d'origine, non portés, non lavés, avec toutes les étiquettes et l'emballage d'origine intacts.",
        "returns.policy.condition": "Conditions de Retour",
        "returns.policy.condition1": "Les articles doivent être retournés dans les 30 jours suivant la livraison",
        "returns.policy.condition2": "Les articles doivent être dans leur état d'origine et non utilisés",
        "returns.policy.condition3": "Toutes les étiquettes et l'emballage d'origine doivent être inclus",
        "returns.policy.condition4": "Les articles personnalisés ne peuvent pas être retournés sauf s'ils sont endommagés",
        "returns.policy.condition5": "Les frais de retour sont à la charge du client sauf si l'article est défectueux",
        "returns.policy.exchanges": "Échanges",
        "returns.policy.exchanges.desc": "Si vous souhaitez échanger votre article contre une taille, couleur ou style différent, veuillez initier un retour et passer une nouvelle commande. Cela garantit le traitement le plus rapide et la disponibilité de l'article souhaité.",
        "returns.policy.refunds": "Remboursements",
        "returns.policy.refunds.desc": "Une fois que nous avons reçu et inspecté votre retour, nous traiterons votre remboursement sous 5-7 jours ouvrables. Les remboursements seront effectués sur le mode de paiement original utilisé pour l'achat. Vous recevrez un email de confirmation une fois le remboursement traité.",
        
        // Sidebar
        "returns.sidebar.quick": "Aide Rapide",
        "returns.sidebar.process": "Processus de Retour",
        "returns.sidebar.faq": "Questions Fréquentes",
        "returns.sidebar.contact": "Contacter le Support",
        "returns.sidebar.shipping": "Informations Livraison",
        "returns.sidebar.need-help": "Besoin d'Aide?",
        "returns.sidebar.help-text": "Notre équipe de service client est là pour vous aider avec toutes vos questions sur les retours et échanges.",
        "returns.sidebar.hours": "Lun-Ven: 9h00 - 18h00 (Heure du Caire)",
        "returns.sidebar.contact-btn": "Contactez-nous",
        
        // Process
        "returns.process.title": "Comment Retourner un Article",
        "returns.process.step1.title": "Initier le Retour",
        "returns.process.step1.desc": "Contactez notre équipe de service client pour initier votre retour. Fournissez votre numéro de commande et la raison du retour. Nous vous guiderons à travers le processus et vous fournirons une autorisation de retour.",
        "returns.process.step2.title": "Emballer Votre Article",
        "returns.process.step2.desc": "Emballez soigneusement votre article dans son emballage d'origine, en incluant toutes les étiquettes et accessoires. Assurez-vous que l'article est bien protégé pour l'expédition afin d'éviter tout dommage pendant le transport.",
        "returns.process.step3.title": "Expédier Votre Retour",
        "returns.process.step3.desc": "Expédiez votre retour en utilisant un mode d'expédition traçable à notre adresse de retour. Conservez votre numéro de suivi comme référence. Les frais de retour sont à la charge du client.",
        "returns.process.step4.title": "Recevoir Votre Remboursement",
        "returns.process.step4.desc": "Une fois que nous avons reçu et inspecté votre retour, nous traiterons votre remboursement sous 5-7 jours ouvrables. Vous recevrez un email de confirmation et le remboursement apparaîtra sur votre mode de paiement original.",
        
        // FAQ
        "returns.faq.title": "Questions Fréquentes",
        "returns.faq.q1": "Combien de temps ai-je pour retourner un article?",
        "returns.faq.a1": "Vous avez 30 jours à compter de la date de livraison pour retourner votre article pour un remboursement complet ou un échange. Les articles doivent être retournés dans leur état d'origine avec toutes les étiquettes et l'emballage intacts.",
        "returns.faq.q2": "Qui paie les frais de retour?",
        "returns.faq.a2": "Les frais de retour sont à la charge du client, sauf si l'article est défectueux, endommagé ou si nous avons commis une erreur avec votre commande. Dans ces cas, nous fournirons une étiquette de retour prépayée.",
        "returns.faq.q3": "Combien de temps faut-il pour traiter un remboursement?",
        "returns.faq.a3": "Une fois que nous avons reçu et inspecté votre retour, nous traiterons votre remboursement sous 5-7 jours ouvrables. Le remboursement sera crédité sur votre mode de paiement original. Vous recevrez un email de confirmation une fois le remboursement traité.",
        "returns.faq.q4": "Puis-je échanger un article?",
        "returns.faq.a4": "Oui, vous pouvez échanger un article contre une taille, couleur ou style différent. Nous vous recommandons d'initier un retour et de passer une nouvelle commande pour garantir le traitement le plus rapide et la disponibilité de l'article souhaité.",
        "returns.faq.q5": "Que se passe-t-il si mon article est endommagé ou défectueux?",
        "returns.faq.a5": "Si votre article arrive endommagé ou défectueux, veuillez nous contacter immédiatement dans les 48 heures suivant la livraison. Nous organiserons un remplacement ou un remboursement complet sans frais supplémentaires. Veuillez fournir des photos des dommages pour accélérer le processus.",
        "returns.faq.q6": "Puis-je retourner un article personnalisé?",
        "returns.faq.a6": "Les articles personnalisés sont en vente finale et ne peuvent pas être retournés sauf s'ils sont endommagés ou défectueux. Veuillez examiner attentivement tous les détails de personnalisation avant de passer votre commande pour vous assurer d'être satisfait du design.",
        
        // CTA
        "returns.cta.title": "Vous Avez Encore des Questions?",
        "returns.cta.desc": "Notre équipe de service client sympathique est prête à vous aider avec toutes vos questions ou préoccupations concernant les retours et échanges.",
        "returns.cta.contact": "Contactez-nous",
        "returns.cta.shop": "Continuer les Achats",
        
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

function switchReturnsLanguage(lang) {
    if (!returnsTranslations[lang]) {
        console.warn(`Language ${lang} not supported for returns page`);
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
        if (returnsTranslations[lang] && returnsTranslations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.placeholder) {
                    element.placeholder = returnsTranslations[lang][key];
                }
            } else {
                element.textContent = returnsTranslations[lang][key];
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
        'en': 'Returns & Exchanges - SOUVENIR Egyptian Handcrafts',
        'it': 'Resi e Cambi - SOUVENIR Artigianato Egiziano',
        'fr': 'Retours et Échanges - SOUVENIR Artisanat Égyptien'
    };
    document.title = titles[lang] || titles['en'];
    
    // Trigger language change event
    window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: lang } 
    }));
}

// Setup dropdown functionality
function setupReturnsDropdowns() {
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
                switchReturnsLanguage(lang);
                languageDropdown.classList.remove('show');
            });
        });
    }
}

// Load saved language preference
function loadReturnsLanguage() {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    switchReturnsLanguage(savedLang);
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    loadReturnsLanguage();
    setupReturnsDropdowns();
    
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
window.switchReturnsLanguage = switchReturnsLanguage;
window.returnsTranslations = returnsTranslations;