// language-switcher-faq.js - Language switching for FAQ page

let currentLang = localStorage.getItem('preferred-language') || 'en';

const faqTranslations = {
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
        "faq.hero.title": "Frequently Asked Questions",
        "faq.hero.subtitle": "Find answers to the most common questions about our products, shipping, returns, and more.",
        "faq.search.placeholder": "Search for answers...",
        
        // Categories
        "faq.categories.all": "All Questions",
        "faq.categories.ordering": "Ordering",
        "faq.categories.shipping": "Shipping",
        "faq.categories.returns": "Returns",
        "faq.categories.products": "Products",
        "faq.categories.account": "Account",
        
        // Ordering
        "faq.ordering.title": "Ordering",
        "faq.ordering.q1": "How do I place an order?",
        "faq.ordering.a1": "Placing an order is easy! Simply browse our collection, select the items you love, and add them to your cart. When you're ready, proceed to checkout, enter your shipping information, choose your payment method, and confirm your order. You'll receive a confirmation email once your order is placed.",
        "faq.ordering.q2": "Can I change or cancel my order?",
        "faq.ordering.a2": "If you need to change or cancel your order, please contact us immediately. Orders can be modified or canceled within 2 hours of placement. Once an order has been processed and shipped, changes may not be possible.",
        "faq.ordering.q3": "What payment methods do you accept?",
        "faq.ordering.a3": "We accept all major credit cards including Visa, MasterCard, and American Express. We also accept PayPal, Apple Pay, and bank transfers. All payments are processed securely through our encrypted payment gateway.",
        "faq.ordering.q4": "Is my payment information secure?",
        "faq.ordering.a4": "Yes, we take security very seriously. All payment information is encrypted using industry-standard SSL technology. We never store your credit card details on our servers. Payments are processed through trusted, PCI-compliant payment gateways.",
        
        // Shipping
        "faq.shipping.title": "Shipping",
        "faq.shipping.q1": "How long does shipping take?",
        "faq.shipping.a1": "Shipping times vary depending on your location and chosen shipping method. Hotel delivery in Egypt typically takes 24-48 hours. International shipping takes 5-10 business days, while express shipping takes 2-3 business days. You'll receive tracking information once your order ships.",
        "faq.shipping.q2": "Do you ship internationally?",
        "faq.shipping.a2": "Yes, we ship our authentic Egyptian handcrafts worldwide! We offer international shipping to over 50 countries. Delivery times and costs vary by destination. You can calculate shipping costs during checkout by entering your shipping address.",
        "faq.shipping.q3": "How can I track my order?",
        "faq.shipping.a3": "Once your order has been shipped, you'll receive a confirmation email with a tracking number. You can track your order by clicking the tracking link in the email or by visiting the carrier's website with your tracking number. You can also track your order in your account dashboard.",
        "faq.shipping.q4": "Do you offer free shipping?",
        "faq.shipping.a4": "We offer free hotel delivery for customers staying in Cairo, Alexandria, Luxor, and Aswan. For international orders, we offer free shipping on orders over $200. Express shipping is available for an additional fee.",
        
        // Returns
        "faq.returns.title": "Returns & Exchanges",
        "faq.returns.q1": "What is your return policy?",
        "faq.returns.a1": "We offer a 30-day return policy for all items in their original condition. Items must be unworn, unwashed, and with all original tags and packaging intact. Custom or personalized items cannot be returned unless damaged. Please visit our Returns & Exchanges page for full details.",
        "faq.returns.q2": "How do I return an item?",
        "faq.returns.a2": "To return an item, please contact our customer service team to initiate the return process. We'll provide you with a return authorization and instructions. Pack your item securely and ship it to our returns address using a trackable shipping method. You'll receive a refund once we receive and inspect your return.",
        "faq.returns.q3": "How long does it take to process a refund?",
        "faq.returns.a3": "Once we receive and inspect your return, we will process your refund within 5-7 business days. The refund will be credited to your original payment method. You'll receive a confirmation email once the refund has been processed.",
        "faq.returns.q4": "Can I exchange an item?",
        "faq.returns.a4": "Yes, you can exchange an item for a different size, color, or style. We recommend initiating a return and placing a new order to ensure the fastest processing time and availability of your desired item. Contact our customer service team for assistance with exchanges.",
        
        // Products
        "faq.products.title": "Products",
        "faq.products.q1": "Are your products authentic Egyptian handcrafts?",
        "faq.products.a1": "Yes! All our products are authentic Egyptian handcrafts made by skilled local artisans. Each piece is handcrafted using traditional techniques passed down through generations. We work directly with artisans to ensure quality, authenticity, and fair compensation.",
        "faq.products.q2": "What materials are used in your products?",
        "faq.products.a2": "We use high-quality, natural materials in all our products. Our jewelry features sterling silver, gold, and semi-precious stones. Our leather goods are made from premium natural leather. Pottery is crafted from natural clay, and our textiles use 100% Egyptian cotton. All materials are sustainably sourced.",
        "faq.products.q3": "Are your products handmade?",
        "faq.products.a3": "Yes, every product we sell is handmade by skilled artisans. This means each piece is unique and may have slight variations in color, size, and finish. These variations are what make each piece special and authentic.",
        "faq.products.q4": "Can I request a custom design?",
        "faq.products.a4": "Yes, many of our artisans accept custom orders. Please contact us with your design idea, and we'll connect you with an artisan who can bring your vision to life. Custom orders typically take 2-4 weeks to complete depending on the complexity of the design.",
        
        // Account
        "faq.account.title": "Account",
        "faq.account.q1": "How do I create an account?",
        "faq.account.a1": "Creating an account is quick and easy! Click the 'Register' link in the header or visit our registration page. Enter your email address, choose a password, and fill in your basic information. You'll receive a confirmation email to verify your account.",
        "faq.account.q2": "What are the benefits of creating an account?",
        "faq.account.a2": "Creating an account allows you to track orders, save your shipping addresses for faster checkout, view order history, manage your profile, receive exclusive offers, and earn loyalty rewards. It also makes returns and exchanges easier to process.",
        "faq.account.q3": "I forgot my password. What should I do?",
        "faq.account.a3": "If you've forgotten your password, click the 'Forgot Password' link on the login page. Enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password. If you don't receive the email, please check your spam folder.",
        "faq.account.q4": "How can I delete my account?",
        "faq.account.a4": "We're sorry to see you go! To delete your account, please contact our customer service team. They will guide you through the process and ensure all your personal data is removed from our systems. Please note that order history may be retained for legal purposes.",
        
        // No Results
        "faq.no-results.title": "No Results Found",
        "faq.no-results.desc": "We couldn't find any questions matching your search. Try different keywords or browse the categories above.",
        "faq.no-results.clear": "Clear Search",
        
        // CTA
        "faq.cta.title": "Still Have Questions?",
        "faq.cta.desc": "Our friendly customer service team is ready to help you with any questions you may have.",
        "faq.cta.contact": "Contact Us",
        "faq.cta.shipping": "Shipping Info",
        
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
        "faq.hero.title": "Domande Frequenti",
        "faq.hero.subtitle": "Trova le risposte alle domande più comuni sui nostri prodotti, spedizioni, resi e altro.",
        "faq.search.placeholder": "Cerca risposte...",
        
        // Categories
        "faq.categories.all": "Tutte le Domande",
        "faq.categories.ordering": "Ordini",
        "faq.categories.shipping": "Spedizioni",
        "faq.categories.returns": "Resi",
        "faq.categories.products": "Prodotti",
        "faq.categories.account": "Account",
        
        // Ordering
        "faq.ordering.title": "Ordini",
        "faq.ordering.q1": "Come faccio a effettuare un ordine?",
        "faq.ordering.a1": "Effettuare un ordine è facile! Sfoglia la nostra collezione, seleziona gli articoli che ami e aggiungili al carrello. Quando sei pronto, procedi al checkout, inserisci le tue informazioni di spedizione, scegli il metodo di pagamento e conferma l'ordine. Riceverai un'email di conferma una volta effettuato l'ordine.",
        "faq.ordering.q2": "Posso modificare o cancellare il mio ordine?",
        "faq.ordering.a2": "Se hai bisogno di modificare o cancellare il tuo ordine, contattaci immediatamente. Gli ordini possono essere modificati o cancellati entro 2 ore dall'effettuazione. Una volta che un ordine è stato elaborato e spedito, le modifiche potrebbero non essere possibili.",
        "faq.ordering.q3": "Quali metodi di pagamento accettate?",
        "faq.ordering.a3": "Accettiamo tutte le principali carte di credito tra cui Visa, MasterCard e American Express. Accettiamo anche PayPal, Apple Pay e bonifici bancari. Tutti i pagamenti sono elaborati in modo sicuro attraverso il nostro gateway di pagamento crittografato.",
        "faq.ordering.q4": "Le mie informazioni di pagamento sono sicure?",
        "faq.ordering.a4": "Sì, prendiamo molto seriamente la sicurezza. Tutte le informazioni di pagamento sono crittografate utilizzando la tecnologia SSL standard del settore. Non memorizziamo mai i dettagli della tua carta di credito sui nostri server. I pagamenti sono elaborati attraverso gateway di pagamento affidabili e conformi PCI.",
        
        // Shipping (Italian)
        "faq.shipping.title": "Spedizioni",
        "faq.shipping.q1": "Quanto tempo richiede la spedizione?",
        "faq.shipping.a1": "I tempi di spedizione variano in base alla tua posizione e al metodo di spedizione scelto. La consegna in hotel in Egitto richiede tipicamente 24-48 ore. La spedizione internazionale richiede 5-10 giorni lavorativi, mentre la spedizione espressa richiede 2-3 giorni lavorativi. Riceverai le informazioni di tracciamento una volta che il tuo ordine sarà stato spedito.",
        "faq.shipping.q2": "Spedite a livello internazionale?",
        "faq.shipping.a2": "Sì, spediamo i nostri autentici oggetti artigianali egiziani in tutto il mondo! Offriamo spedizioni internazionali in oltre 50 paesi. I tempi e i costi di consegna variano in base alla destinazione. Puoi calcolare i costi di spedizione durante il checkout inserendo il tuo indirizzo di spedizione.",
        "faq.shipping.q3": "Come posso tracciare il mio ordine?",
        "faq.shipping.a3": "Una volta che il tuo ordine è stato spedito, riceverai un'email di conferma con un numero di tracciamento. Puoi tracciare il tuo ordine cliccando sul link di tracciamento nell'email o visitando il sito del corriere con il tuo numero di tracciamento. Puoi anche tracciare il tuo ordine nel tuo dashboard account.",
        "faq.shipping.q4": "Offrite spedizioni gratuite?",
        "faq.shipping.a4": "Offriamo consegna gratuita in hotel per i clienti che soggiornano al Cairo, Alessandria, Luxor e Assuan. Per gli ordini internazionali, offriamo spedizione gratuita per ordini superiori a $200. La spedizione espressa è disponibile con un costo aggiuntivo.",
        
        // Returns (Italian)
        "faq.returns.title": "Resi e Cambi",
        "faq.returns.q1": "Qual è la vostra politica di reso?",
        "faq.returns.a1": "Offriamo una politica di reso di 30 giorni per tutti gli articoli nelle loro condizioni originali. Gli articoli devono essere non indossati, non lavati e con tutte le etichette e l'imballaggio originali intatti. Gli articoli personalizzati non possono essere restituiti a meno che non siano danneggiati. Visita la nostra pagina Resi e Cambi per tutti i dettagli.",
        "faq.returns.q2": "Come faccio a restituire un articolo?",
        "faq.returns.a2": "Per restituire un articolo, contatta il nostro team di assistenza clienti per avviare il processo di reso. Ti forniremo un'autorizzazione al reso e le istruzioni. Imballa il tuo articolo in modo sicuro e spediscilo al nostro indirizzo di reso utilizzando un metodo di spedizione tracciabile. Riceverai un rimborso una volta ricevuto e ispezionato il tuo reso.",
        "faq.returns.q3": "Quanto tempo ci vuole per elaborare un rimborso?",
        "faq.returns.a3": "Una volta ricevuto e ispezionato il tuo reso, elaboreremo il tuo rimborso entro 5-7 giorni lavorativi. Il rimborso verrà accreditato sul tuo metodo di pagamento originale. Riceverai un'email di conferma una volta elaborato il rimborso.",
        "faq.returns.q4": "Posso cambiare un articolo?",
        "faq.returns.a4": "Sì, puoi cambiare un articolo con una taglia, colore o stile diverso. Ti consigliamo di avviare un reso e piazzare un nuovo ordine per garantire i tempi di elaborazione più rapidi e la disponibilità dell'articolo desiderato. Contatta il nostro team di assistenza clienti per assistenza con i cambi.",
        
        // Products (Italian)
        "faq.products.title": "Prodotti",
        "faq.products.q1": "I vostri prodotti sono autentici oggetti artigianali egiziani?",
        "faq.products.a1": "Sì! Tutti i nostri prodotti sono autentici oggetti artigianali egiziani realizzati da abili artigiani locali. Ogni pezzo è realizzato a mano utilizzando tecniche tradizionali tramandate di generazione in generazione. Lavoriamo direttamente con gli artigiani per garantire qualità, autenticità e un compenso equo.",
        "faq.products.q2": "Quali materiali vengono utilizzati nei vostri prodotti?",
        "faq.products.a2": "Utilizziamo materiali naturali di alta qualità in tutti i nostri prodotti. I nostri gioielli presentano argento sterling, oro e pietre semipreziose. I nostri articoli in pelle sono realizzati con pelle naturale premium. La ceramica è realizzata con argilla naturale e i nostri tessuti utilizzano cotone egiziano al 100%. Tutti i materiali provengono da fonti sostenibili.",
        "faq.products.q3": "I vostri prodotti sono fatti a mano?",
        "faq.products.a3": "Sì, ogni prodotto che vendiamo è fatto a mano da abili artigiani. Questo significa che ogni pezzo è unico e può presentare lievi variazioni nel colore, nelle dimensioni e nella finitura. Queste variazioni sono ciò che rende ogni pezzo speciale e autentico.",
        "faq.products.q4": "Posso richiedere un design personalizzato?",
        "faq.products.a4": "Sì, molti dei nostri artigiani accettano ordini personalizzati. Contattaci con la tua idea di design e ti metteremo in contatto con un artigiano che può dare vita alla tua visione. Gli ordini personalizzati richiedono tipicamente 2-4 settimane per essere completati a seconda della complessità del design.",
        
        // Account (Italian)
        "faq.account.title": "Account",
        "faq.account.q1": "Come faccio a creare un account?",
        "faq.account.a1": "Creare un account è veloce e facile! Clicca sul link 'Registrati' nell'header o visita la nostra pagina di registrazione. Inserisci il tuo indirizzo email, scegli una password e compila le tue informazioni di base. Riceverai un'email di conferma per verificare il tuo account.",
        "faq.account.q2": "Quali sono i vantaggi di creare un account?",
        "faq.account.a2": "Creare un account ti permette di tracciare gli ordini, salvare i tuoi indirizzi di spedizione per un checkout più veloce, visualizzare la cronologia degli ordini, gestire il tuo profilo, ricevere offerte esclusive e guadagnare premi fedeltà. Rende anche i resi e i cambi più facili da elaborare.",
        "faq.account.q3": "Ho dimenticato la password. Cosa devo fare?",
        "faq.account.a3": "Se hai dimenticato la password, clicca sul link 'Password dimenticata' nella pagina di login. Inserisci il tuo indirizzo email e ti invieremo un link per reimpostare la password. Segui le istruzioni nell'email per creare una nuova password. Se non ricevi l'email, controlla la cartella spam.",
        "faq.account.q4": "Come posso eliminare il mio account?",
        "faq.account.a4": "Ci dispiace vederti andare! Per eliminare il tuo account, contatta il nostro team di assistenza clienti. Ti guideranno attraverso il processo e assicureranno che tutti i tuoi dati personali siano rimossi dai nostri sistemi. Tieni presente che la cronologia degli ordini potrebbe essere conservata per motivi legali.",
        
        // No Results
        "faq.no-results.title": "Nessun Risultato Trovato",
        "faq.no-results.desc": "Non abbiamo trovato domande corrispondenti alla tua ricerca. Prova con parole chiave diverse o sfoglia le categorie sopra.",
        "faq.no-results.clear": "Cancella Ricerca",
        
        // CTA
        "faq.cta.title": "Hai Ancora Domande?",
        "faq.cta.desc": "Il nostro cordiale team di assistenza clienti è pronto ad aiutarti con qualsiasi domanda tu possa avere.",
        "faq.cta.contact": "Contattaci",
        "faq.cta.shipping": "Info Spedizioni",
        
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
        "faq.hero.title": "Questions Fréquentes",
        "faq.hero.subtitle": "Trouvez les réponses aux questions les plus courantes sur nos produits, la livraison, les retours et plus encore.",
        "faq.search.placeholder": "Rechercher des réponses...",
        
        // Categories
        "faq.categories.all": "Toutes les Questions",
        "faq.categories.ordering": "Commandes",
        "faq.categories.shipping": "Livraison",
        "faq.categories.returns": "Retours",
        "faq.categories.products": "Produits",
        "faq.categories.account": "Compte",
        
        // Ordering (French)
        "faq.ordering.title": "Commandes",
        "faq.ordering.q1": "Comment passer une commande ?",
        "faq.ordering.a1": "Passer une commande est facile ! Parcourez notre collection, sélectionnez les articles que vous aimez et ajoutez-les à votre panier. Lorsque vous êtes prêt, passez à la caisse, entrez vos informations de livraison, choisissez votre méthode de paiement et confirmez votre commande. Vous recevrez un email de confirmation une fois votre commande passée.",
        "faq.ordering.q2": "Puis-je modifier ou annuler ma commande ?",
        "faq.ordering.a2": "Si vous devez modifier ou annuler votre commande, veuillez nous contacter immédiatement. Les commandes peuvent être modifiées ou annulées dans les 2 heures suivant la passation. Une fois qu'une commande a été traitée et expédiée, les modifications peuvent ne pas être possibles.",
        "faq.ordering.q3": "Quels modes de paiement acceptez-vous ?",
        "faq.ordering.a3": "Nous acceptons toutes les principales cartes de crédit, y compris Visa, MasterCard et American Express. Nous acceptons également PayPal, Apple Pay et les virements bancaires. Tous les paiements sont traités en toute sécurité via notre passerelle de paiement cryptée.",
        "faq.ordering.q4": "Mes informations de paiement sont-elles sécurisées ?",
        "faq.ordering.a4": "Oui, nous prenons la sécurité très au sérieux. Toutes les informations de paiement sont cryptées à l'aide de la technologie SSL standard de l'industrie. Nous ne stockons jamais les détails de votre carte de crédit sur nos serveurs. Les paiements sont traités via des passerelles de paiement fiables et conformes à la norme PCI.",
        
        // Shipping (French)
        "faq.shipping.title": "Livraison",
        "faq.shipping.q1": "Combien de temps dure la livraison ?",
        "faq.shipping.a1": "Les délais de livraison varient en fonction de votre emplacement et du mode de livraison choisi. La livraison en hôtel en Égypte prend généralement 24 à 48 heures. La livraison internationale prend 5 à 10 jours ouvrables, tandis que la livraison express prend 2 à 3 jours ouvrables. Vous recevrez les informations de suivi une fois votre commande expédiée.",
        "faq.shipping.q2": "Livrez-vous à l'international ?",
        "faq.shipping.a2": "Oui, nous livrons nos objets artisanaux égyptiens authentiques dans le monde entier ! Nous offrons une livraison internationale dans plus de 50 pays. Les délais et les coûts de livraison varient selon la destination. Vous pouvez calculer les frais de livraison lors du paiement en entrant votre adresse de livraison.",
        "faq.shipping.q3": "Comment puis-je suivre ma commande ?",
        "faq.shipping.a3": "Une fois votre commande expédiée, vous recevrez un email de confirmation avec un numéro de suivi. Vous pouvez suivre votre commande en cliquant sur le lien de suivi dans l'email ou en visitant le site du transporteur avec votre numéro de suivi. Vous pouvez également suivre votre commande dans votre tableau de bord de compte.",
        "faq.shipping.q4": "Proposez-vous la livraison gratuite ?",
        "faq.shipping.a4": "Nous offrons la livraison gratuite en hôtel pour les clients séjournant au Caire, Alexandrie, Louxor et Assouan. Pour les commandes internationales, nous offrons la livraison gratuite pour les commandes supérieures à 200€. La livraison express est disponible moyennant un supplément.",
        
        // Returns (French)
        "faq.returns.title": "Retours et Échanges",
        "faq.returns.q1": "Quelle est votre politique de retour ?",
        "faq.returns.a1": "Nous offrons une politique de retour de 30 jours pour tous les articles dans leur état d'origine. Les articles doivent être non portés, non lavés et avec toutes les étiquettes et l'emballage d'origine intacts. Les articles personnalisés ne peuvent pas être retournés sauf s'ils sont endommagés. Consultez notre page Retours et Échanges pour tous les détails.",
        "faq.returns.q2": "Comment retourner un article ?",
        "faq.returns.a2": "Pour retourner un article, veuillez contacter notre équipe de service client pour initier le processus de retour. Nous vous fournirons une autorisation de retour et des instructions. Emballez votre article en toute sécurité et expédiez-le à notre adresse de retour en utilisant un mode d'expédition traçable. Vous recevrez un remboursement une fois que nous aurons reçu et inspecté votre retour.",
        "faq.returns.q3": "Combien de temps faut-il pour traiter un remboursement ?",
        "faq.returns.a3": "Une fois que nous avons reçu et inspecté votre retour, nous traiterons votre remboursement sous 5 à 7 jours ouvrables. Le remboursement sera crédité sur votre mode de paiement original. Vous recevrez un email de confirmation une fois le remboursement traité.",
        "faq.returns.q4": "Puis-je échanger un article ?",
        "faq.returns.a4": "Oui, vous pouvez échanger un article contre une taille, couleur ou style différent. Nous vous recommandons d'initier un retour et de passer une nouvelle commande pour garantir le traitement le plus rapide et la disponibilité de l'article souhaité. Contactez notre équipe de service client pour obtenir de l'aide pour les échanges.",
        
        // Products (French)
        "faq.products.title": "Produits",
        "faq.products.q1": "Vos produits sont-ils authentiques ?",
        "faq.products.a1": "Oui ! Tous nos produits sont des objets artisanaux égyptiens authentiques fabriqués par des artisans locaux qualifiés. Chaque pièce est fabriquée à la main en utilisant des techniques traditionnelles transmises de génération en génération. Nous travaillons directement avec les artisans pour garantir la qualité, l'authenticité et une rémunération équitable.",
        "faq.products.q2": "Quels matériaux sont utilisés dans vos produits ?",
        "faq.products.a2": "Nous utilisons des matériaux naturels de haute qualité dans tous nos produits. Nos bijoux présentent de l'argent sterling, de l'or et des pierres semi-précieuses. Nos articles en cuir sont fabriqués à partir de cuir naturel de qualité supérieure. La poterie est fabriquée à partir d'argile naturelle et nos textiles utilisent du coton égyptien à 100 %. Tous les matériaux sont issus de sources durables.",
        "faq.products.q3": "Vos produits sont-ils faits à la main ?",
        "faq.products.a3": "Oui, chaque produit que nous vendons est fabriqué à la main par des artisans qualifiés. Cela signifie que chaque pièce est unique et peut présenter de légères variations de couleur, de taille et de finition. Ces variations sont ce qui rend chaque pièce spéciale et authentique.",
        "faq.products.q4": "Puis-je demander un design personnalisé ?",
        "faq.products.a4": "Oui, beaucoup de nos artisans acceptent les commandes personnalisées. Veuillez nous contacter avec votre idée de design et nous vous mettrons en relation avec un artisan qui pourra donner vie à votre vision. Les commandes personnalisées prennent généralement 2 à 4 semaines selon la complexité du design.",
        
        // Account (French)
        "faq.account.title": "Compte",
        "faq.account.q1": "Comment créer un compte ?",
        "faq.account.a1": "Créer un compte est rapide et facile ! Cliquez sur le lien 'S'inscrire' dans l'en-tête ou visitez notre page d'inscription. Entrez votre adresse email, choisissez un mot de passe et remplissez vos informations de base. Vous recevrez un email de confirmation pour vérifier votre compte.",
        "faq.account.q2": "Quels sont les avantages de créer un compte ?",
        "faq.account.a2": "Créer un compte vous permet de suivre les commandes, d'enregistrer vos adresses de livraison pour un paiement plus rapide, de consulter l'historique des commandes, de gérer votre profil, de recevoir des offres exclusives et de gagner des récompenses de fidélité. Cela facilite également le traitement des retours et des échanges.",
        "faq.account.q3": "J'ai oublié mon mot de passe. Que dois-je faire ?",
        "faq.account.a3": "Si vous avez oublié votre mot de passe, cliquez sur le lien 'Mot de passe oublié' sur la page de connexion. Entrez votre adresse email et nous vous enverrons un lien de réinitialisation de mot de passe. Suivez les instructions dans l'email pour créer un nouveau mot de passe. Si vous ne recevez pas l'email, veuillez vérifier votre dossier spam.",
        "faq.account.q4": "Comment puis-je supprimer mon compte ?",
        "faq.account.a4": "Nous sommes désolés de vous voir partir ! Pour supprimer votre compte, veuillez contacter notre équipe de service client. Ils vous guideront tout au long du processus et s'assureront que toutes vos données personnelles sont supprimées de nos systèmes. Veuillez noter que l'historique des commandes peut être conservé à des fins légales.",
        
        // No Results
        "faq.no-results.title": "Aucun Résultat Trouvé",
        "faq.no-results.desc": "Nous n'avons trouvé aucune question correspondant à votre recherche. Essayez différents mots-clés ou parcourez les catégories ci-dessus.",
        "faq.no-results.clear": "Effacer la Recherche",
        
        // CTA
        "faq.cta.title": "Vous Avez Encore des Questions ?",
        "faq.cta.desc": "Notre équipe de service client sympathique est prête à vous aider avec toutes vos questions.",
        "faq.cta.contact": "Contactez-nous",
        "faq.cta.shipping": "Info Livraison",
        
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

function switchFaqLanguage(lang) {
    if (!faqTranslations[lang]) {
        console.warn(`Language ${lang} not supported for FAQ page`);
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
        if (faqTranslations[lang] && faqTranslations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.placeholder) {
                    element.placeholder = faqTranslations[lang][key];
                }
            } else {
                element.textContent = faqTranslations[lang][key];
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
        'en': 'FAQs - SOUVENIR Egyptian Handcrafts',
        'it': 'FAQ - SOUVENIR Artigianato Egiziano',
        'fr': 'FAQ - SOUVENIR Artisanat Égyptien'
    };
    document.title = titles[lang] || titles['en'];
    
    // Trigger language change event
    window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: lang } 
    }));
}

// Setup dropdown functionality
function setupFaqDropdowns() {
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
                switchFaqLanguage(lang);
                languageDropdown.classList.remove('show');
            });
        });
    }
}

// Load saved language preference
function loadFaqLanguage() {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    switchFaqLanguage(savedLang);
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    loadFaqLanguage();
    setupFaqDropdowns();
    
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
window.switchFaqLanguage = switchFaqLanguage;
window.faqTranslations = faqTranslations;