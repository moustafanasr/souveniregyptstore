// language-switcher-size-guide.js - Language switching for Size Guide page

let currentLang = localStorage.getItem('preferred-language') || 'en';

const sizeTranslations = {
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
        "size.hero.title": "Size Guide",
        "size.hero.subtitle": "Find the perfect fit for your authentic Egyptian handcrafts",
        
        // Tabs
        "size.tabs.jewelry": "Jewelry",
        "size.tabs.leather": "Leather",
        "size.tabs.pottery": "Pottery",
        "size.tabs.rugs": "Rugs",
        "size.tabs.cotton": "Cotton",
        
        // Jewelry
        "size.jewelry.title": "Jewelry Size Guide",
        "size.jewelry.intro": "Find the perfect fit for rings, bracelets, and necklaces with our comprehensive jewelry size guide.",
        "size.jewelry.rings.title": "Ring Size Chart",
        "size.jewelry.rings.desc": "Measure the circumference of your finger to find your ring size.",
        "size.jewelry.rings.size": "Size",
        "size.jewelry.rings.circumference": "Circumference (mm)",
        "size.jewelry.rings.diameter": "Diameter (mm)",
        "size.jewelry.rings.tip": "Tip: Measure your finger at the end of the day when it's at its largest.",
        "size.jewelry.bracelets.title": "Bracelet Size Chart",
        "size.jewelry.bracelets.desc": "Measure your wrist circumference to find the perfect bracelet fit.",
        "size.jewelry.bracelets.size": "Size",
        "size.jewelry.bracelets.wrist": "Wrist (cm)",
        "size.jewelry.bracelets.length": "Length (cm)",
        "size.jewelry.bracelets.tip": "Tip: Add 1-2 cm to your wrist measurement for a comfortable fit.",
        "size.jewelry.necklaces.title": "Necklace Length Guide",
        "size.jewelry.necklaces.desc": "Choose the perfect necklace length for your style and neckline.",
        "size.jewelry.necklaces.choker": "Choker",
        "size.jewelry.necklaces.choker.desc": "Sits high on the neck",
        "size.jewelry.necklaces.collarbone": "Collarbone",
        "size.jewelry.necklaces.collarbone.desc": "Rests at the collarbone",
        "size.jewelry.necklaces.princess": "Princess",
        "size.jewelry.necklaces.princess.desc": "Rests below collarbone",
        "size.jewelry.necklaces.matiinee": "Matinee",
        "size.jewelry.necklaces.matiinee.desc": "Rests at the bust",
        "size.jewelry.necklaces.rope": "Rope",
        "size.jewelry.necklaces.rope.desc": "Rests below the bust",
        
        // Leather
        "size.leather.title": "Leather Products Size Guide",
        "size.leather.intro": "Find the perfect fit for leather bags, belts, and accessories.",
        "size.leather.bags.title": "Bag Size Guide",
        "size.leather.bags.desc": "Choose the right bag size for your needs.",
        "size.leather.bags.type": "Type",
        "size.leather.bags.dimensions": "Dimensions (cm)",
        "size.leather.bags.suitable": "Suitable For",
        "size.leather.bags.clutch": "Clutch",
        "size.leather.bags.clutch.suitable": "Phone, cards, keys",
        "size.leather.bags.crossbody": "Crossbody",
        "size.leather.bags.crossbody.suitable": "Daily essentials",
        "size.leather.bags.tote": "Tote",
        "size.leather.bags.tote.suitable": "Work, shopping",
        "size.leather.bags.backpack": "Backpack",
        "size.leather.bags.backpack.suitable": "Travel, daily use",
        "size.leather.belts.title": "Belt Size Guide",
        "size.leather.belts.desc": "Find your belt size based on your waist measurement.",
        "size.leather.belts.size": "Size",
        "size.leather.belts.waist": "Waist (cm)",
        "size.leather.belts.length": "Belt Length (cm)",
        "size.leather.belts.tip": "Tip: Measure your waist where you normally wear your belt.",
        
        // Pottery
        "size.pottery.title": "Pottery Size Guide",
        "size.pottery.intro": "Choose the right pottery pieces for your home decor.",
        "size.pottery.vases.title": "Vase Size Guide",
        "size.pottery.vases.desc": "Select the perfect vase size for your space and flowers.",
        "size.pottery.vases.size": "Size",
        "size.pottery.vases.height": "Height (cm)",
        "size.pottery.vases.best": "Best For",
        "size.pottery.vases.small": "Small",
        "size.pottery.vases.small.best": "Tabletops, small flowers",
        "size.pottery.vases.medium": "Medium",
        "size.pottery.vases.medium.best": "Side tables, bouquets",
        "size.pottery.vases.large": "Large",
        "size.pottery.vases.large.best": "Floor decor, large bouquets",
        "size.pottery.vases.extra-large": "Extra Large",
        "size.pottery.vases.extra-large.best": "Statement pieces, entryways",
        "size.pottery.plates.title": "Plate & Bowl Sizes",
        "size.pottery.plates.desc": "Choose the right size for your dining and serving needs.",
        "size.pottery.plates.type": "Type",
        "size.pottery.plates.diameter": "Diameter (cm)",
        "size.pottery.plates.use": "Use",
        "size.pottery.plates.side": "Side Plate",
        "size.pottery.plates.side.use": "Bread, salad",
        "size.pottery.plates.dinner": "Dinner Plate",
        "size.pottery.plates.dinner.use": "Main course",
        "size.pottery.plates.serving": "Serving Bowl",
        "size.pottery.plates.serving.use": "Salad, pasta",
        "size.pottery.plates.large-serving": "Large Serving",
        "size.pottery.plates.large-serving.use": "Family-style serving",
        
        // Rugs
        "size.rugs.title": "Rugs & Kilims Size Guide",
        "size.rugs.intro": "Choose the perfect rug size for your space.",
        "size.rugs.standard": "Standard Rug Sizes",
        "size.rugs.standard.desc": "Common rug sizes for different rooms and purposes.",
        "size.rugs.size": "Size",
        "size.rugs.dimensions": "Dimensions (cm)",
        "size.rugs.best-for": "Best For",
        "size.rugs.small": "Small",
        "size.rugs.small.best": "Entryway, bathroom",
        "size.rugs.medium": "Medium",
        "size.rugs.medium.best": "Kitchen, hallway",
        "size.rugs.large": "Large",
        "size.rugs.large.best": "Living room, bedroom",
        "size.rugs.extra-large": "Extra Large",
        "size.rugs.extra-large.best": "Large living rooms, dining rooms",
        "size.rugs.runner": "Runner",
        "size.rugs.runner.best": "Hallways, corridors",
        "size.rugs.placement": "Room Placement Guide",
        "size.rugs.placement.desc": "Tips for placing rugs in different rooms.",
        "size.rugs.placement.living": "Living Room",
        "size.rugs.placement.living.desc": "Rug should be large enough to fit under the front legs of all furniture.",
        "size.rugs.placement.bedroom": "Bedroom",
        "size.rugs.placement.bedroom.desc": "Rug should extend at least 60 cm beyond the sides and foot of the bed.",
        "size.rugs.placement.dining": "Dining Room",
        "size.rugs.placement.dining.desc": "Rug should extend at least 60 cm beyond the table on all sides.",
        
        // Cotton
        "size.cotton.title": "Egyptian Cotton Size Guide",
        "size.cotton.intro": "Find the perfect fit for cotton clothing, towels, and bedding.",
        "size.cotton.clothing": "Clothing Size Guide",
        "size.cotton.clothing.desc": "Standard clothing sizes for Egyptian cotton garments.",
        "size.cotton.clothing.size": "Size",
        "size.cotton.clothing.chest": "Chest (cm)",
        "size.cotton.clothing.waist": "Waist (cm)",
        "size.cotton.clothing.hip": "Hip (cm)",
        "size.cotton.clothing.tip": "Tip: 100% Egyptian cotton may shrink slightly after first wash.",
        "size.cotton.towels": "Towels & Bedding",
        "size.cotton.towels.desc": "Standard sizes for Egyptian cotton towels and bedding.",
        "size.cotton.towels.type": "Type",
        "size.cotton.towels.dimensions": "Dimensions (cm)",
        "size.cotton.towels.hand": "Hand Towel",
        "size.cotton.towels.bath": "Bath Towel",
        "size.cotton.towels.bath-sheet": "Bath Sheet",
        "size.cotton.towels.queen": "Queen Sheet",
        "size.cotton.towels.king": "King Sheet",
        
        // How to Measure
        "size.how-to.title": "How to Measure",
        "size.how-to.subtitle": "Follow these simple steps to get accurate measurements",
        "size.how-to.ring": "Ring Size",
        "size.how-to.ring.step1": "Wrap a strip of paper around your finger",
        "size.how-to.ring.step2": "Mark where the paper overlaps",
        "size.how-to.ring.step3": "Measure the length in millimeters",
        "size.how-to.ring.step4": "Use the chart to find your ring size",
        "size.how-to.bracelet": "Bracelet/Wrist",
        "size.how-to.bracelet.step1": "Wrap a measuring tape around your wrist",
        "size.how-to.bracelet.step2": "Take the measurement where you'd wear the bracelet",
        "size.how-to.bracelet.step3": "Add 1-2 cm for a comfortable fit",
        "size.how-to.bracelet.step4": "Use the chart to find your bracelet size",
        "size.how-to.clothing": "Clothing",
        "size.how-to.clothing.step1": "Measure chest: around the fullest part",
        "size.how-to.clothing.step2": "Measure waist: around the narrowest part",
        "size.how-to.clothing.step3": "Measure hips: around the fullest part",
        "size.how-to.clothing.step4": "Compare with our size chart",
        "size.how-to.rug": "Rugs",
        "size.how-to.rug.step1": "Measure the length and width of your space",
        "size.how-to.rug.step2": "Consider furniture placement",
        "size.how-to.rug.step3": "Leave 30-60 cm of floor space around the rug",
        "size.how-to.rug.step4": "Choose the size that fits best",
        
        // CTA
        "size.cta.title": "Need More Help?",
        "size.cta.desc": "Our team is here to help you find the perfect size for your Egyptian handcrafts.",
        "size.cta.contact": "Contact Us",
        "size.cta.shop": "Shop Now",
        
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
        "size.hero.title": "Guida alle Taglie",
        "size.hero.subtitle": "Trova la vestibilità perfetta per i tuoi autentici oggetti artigianali egiziani",
        
        // Tabs
        "size.tabs.jewelry": "Gioielli",
        "size.tabs.leather": "Pelle",
        "size.tabs.pottery": "Ceramica",
        "size.tabs.rugs": "Tappeti",
        "size.tabs.cotton": "Cotone",
        
        // Jewelry
        "size.jewelry.title": "Guida alle Taglie dei Gioielli",
        "size.jewelry.intro": "Trova la vestibilità perfetta per anelli, bracciali e collane con la nostra guida completa.",
        "size.jewelry.rings.title": "Tabella Taglie Anelli",
        "size.jewelry.rings.desc": "Misura la circonferenza del tuo dito per trovare la tua taglia di anello.",
        "size.jewelry.rings.size": "Taglia",
        "size.jewelry.rings.circumference": "Circonferenza (mm)",
        "size.jewelry.rings.diameter": "Diametro (mm)",
        "size.jewelry.rings.tip": "Consiglio: Misura il dito alla fine della giornata quando è più grande.",
        "size.jewelry.bracelets.title": "Tabella Taglie Bracciali",
        "size.jewelry.bracelets.desc": "Misura la circonferenza del polso per trovare la taglia perfetta.",
        "size.jewelry.bracelets.size": "Taglia",
        "size.jewelry.bracelets.wrist": "Polso (cm)",
        "size.jewelry.bracelets.length": "Lunghezza (cm)",
        "size.jewelry.bracelets.tip": "Consiglio: Aggiungi 1-2 cm alla misura del polso per una vestibilità comoda.",
        "size.jewelry.necklaces.title": "Guida alla Lunghezza delle Collane",
        "size.jewelry.necklaces.desc": "Scegli la lunghezza perfetta per il tuo stile e scollatura.",
        "size.jewelry.necklaces.choker": "Choker",
        "size.jewelry.necklaces.choker.desc": "Si posiziona alto sul collo",
        "size.jewelry.necklaces.collarbone": "Clavicola",
        "size.jewelry.necklaces.collarbone.desc": "Si ferma alla clavicola",
        "size.jewelry.necklaces.princess": "Principessa",
        "size.jewelry.necklaces.princess.desc": "Si ferma sotto la clavicola",
        "size.jewelry.necklaces.matiinee": "Matinée",
        "size.jewelry.necklaces.matiinee.desc": "Si ferma al petto",
        "size.jewelry.necklaces.rope": "Corda",
        "size.jewelry.necklaces.rope.desc": "Si ferma sotto il petto",
        
        // Leather
        "size.leather.title": "Guida alle Taglie dei Prodotti in Pelle",
        "size.leather.intro": "Trova la vestibilità perfetta per borse, cinture e accessori in pelle.",
        "size.leather.bags.title": "Guida alle Taglie delle Borse",
        "size.leather.bags.desc": "Scegli la taglia giusta per le tue esigenze.",
        "size.leather.bags.type": "Tipo",
        "size.leather.bags.dimensions": "Dimensioni (cm)",
        "size.leather.bags.suitable": "Adatto Per",
        "size.leather.bags.clutch": "Clutch",
        "size.leather.bags.clutch.suitable": "Telefono, carte, chiavi",
        "size.leather.bags.crossbody": "A Tracolla",
        "size.leather.bags.crossbody.suitable": "Essenziali quotidiani",
        "size.leather.bags.tote": "Tote",
        "size.leather.bags.tote.suitable": "Lavoro, shopping",
        "size.leather.bags.backpack": "Zaino",
        "size.leather.bags.backpack.suitable": "Viaggi, uso quotidiano",
        "size.leather.belts.title": "Guida alle Taglie delle Cinture",
        "size.leather.belts.desc": "Trova la tua taglia in base alla misura del girovita.",
        "size.leather.belts.size": "Taglia",
        "size.leather.belts.waist": "Girovita (cm)",
        "size.leather.belts.length": "Lunghezza Cintura (cm)",
        "size.leather.belts.tip": "Consiglio: Misura il punto in cui indossi normalmente la cintura.",
        
        // Pottery
        "size.pottery.title": "Guida alle Taglie della Ceramica",
        "size.pottery.intro": "Scegli i pezzi giusti per l'arredamento della tua casa.",
        "size.pottery.vases.title": "Guida alle Taglie dei Vasi",
        "size.pottery.vases.desc": "Seleziona la taglia perfetta per il tuo spazio e i tuoi fiori.",
        "size.pottery.vases.size": "Taglia",
        "size.pottery.vases.height": "Altezza (cm)",
        "size.pottery.vases.best": "Ideale Per",
        "size.pottery.vases.small": "Piccolo",
        "size.pottery.vases.small.best": "Tavoli, fiori piccoli",
        "size.pottery.vases.medium": "Medio",
        "size.pottery.vases.medium.best": "Tavoli laterali, mazzi",
        "size.pottery.vases.large": "Grande",
        "size.pottery.vases.large.best": "Decorazione pavimento, mazzi grandi",
        "size.pottery.vases.extra-large": "Extra Grande",
        "size.pottery.vases.extra-large.best": "Pezzi d'arredo, ingressi",
        "size.pottery.plates.title": "Taglie di Piatti e Ciotole",
        "size.pottery.plates.desc": "Scegli la taglia giusta per le tue esigenze di pranzo e servizio.",
        "size.pottery.plates.type": "Tipo",
        "size.pottery.plates.diameter": "Diametro (cm)",
        "size.pottery.plates.use": "Uso",
        "size.pottery.plates.side": "Piatto da Contorno",
        "size.pottery.plates.side.use": "Pane, insalata",
        "size.pottery.plates.dinner": "Piatto da Pranzo",
        "size.pottery.plates.dinner.use": "Piatto principale",
        "size.pottery.plates.serving": "Ciotola da Servizio",
        "size.pottery.plates.serving.use": "Insalata, pasta",
        "size.pottery.plates.large-serving": "Servizio Grande",
        "size.pottery.plates.large-serving.use": "Servizio in stile familiare",
        
        // Rugs
        "size.rugs.title": "Guida alle Taglie dei Tappeti e Kilim",
        "size.rugs.intro": "Scegli la taglia perfetta per il tuo spazio.",
        "size.rugs.standard": "Taglie Standard dei Tappeti",
        "size.rugs.standard.desc": "Taglie comuni per diverse stanze e scopi.",
        "size.rugs.size": "Taglia",
        "size.rugs.dimensions": "Dimensioni (cm)",
        "size.rugs.best-for": "Ideale Per",
        "size.rugs.small": "Piccolo",
        "size.rugs.small.best": "Ingresso, bagno",
        "size.rugs.medium": "Medio",
        "size.rugs.medium.best": "Cucina, corridoio",
        "size.rugs.large": "Grande",
        "size.rugs.large.best": "Soggiorno, camera da letto",
        "size.rugs.extra-large": "Extra Grande",
        "size.rugs.extra-large.best": "Grandi soggiorni, sale da pranzo",
        "size.rugs.runner": "Corridoio",
        "size.rugs.runner.best": "Corridoi, passaggi",
        "size.rugs.placement": "Guida al Posizionamento",
        "size.rugs.placement.desc": "Consigli per posizionare i tappeti in diverse stanze.",
        "size.rugs.placement.living": "Soggiorno",
        "size.rugs.placement.living.desc": "Il tappeto dovrebbe essere abbastanza grande da stare sotto le gambe anteriori di tutti i mobili.",
        "size.rugs.placement.bedroom": "Camera da Letto",
        "size.rugs.placement.bedroom.desc": "Il tappeto dovrebbe estendersi almeno 60 cm oltre i lati e il fondo del letto.",
        "size.rugs.placement.dining": "Sala da Pranzo",
        "size.rugs.placement.dining.desc": "Il tappeto dovrebbe estendersi almeno 60 cm oltre il tavolo su tutti i lati.",
        
        // Cotton
        "size.cotton.title": "Guida alle Taglie del Cotone Egiziano",
        "size.cotton.intro": "Trova la vestibilità perfetta per abbigliamento, asciugamani e biancheria.",
        "size.cotton.clothing": "Guida alle Taglie dell'Abbigliamento",
        "size.cotton.clothing.desc": "Taglie standard per capi in cotone egiziano.",
        "size.cotton.clothing.size": "Taglia",
        "size.cotton.clothing.chest": "Petto (cm)",
        "size.cotton.clothing.waist": "Vita (cm)",
        "size.cotton.clothing.hip": "Fianchi (cm)",
        "size.cotton.clothing.tip": "Consiglio: Il cotone egiziano 100% potrebbe restringersi leggermente dopo il primo lavaggio.",
        "size.cotton.towels": "Asciugamani e Biancheria",
        "size.cotton.towels.desc": "Taglie standard per asciugamani e biancheria in cotone egiziano.",
        "size.cotton.towels.type": "Tipo",
        "size.cotton.towels.dimensions": "Dimensioni (cm)",
        "size.cotton.towels.hand": "Asciugamano da Mano",
        "size.cotton.towels.bath": "Asciugamano da Bagno",
        "size.cotton.towels.bath-sheet": "Telone da Bagno",
        "size.cotton.towels.queen": "Lenzuolo Queen",
        "size.cotton.towels.king": "Lenzuolo King",
        
        // How to Measure
        "size.how-to.title": "Come Misurare",
        "size.how-to.subtitle": "Segui questi semplici passaggi per ottenere misurazioni accurate",
        "size.how-to.ring": "Taglia Anello",
        "size.how-to.ring.step1": "Avvolgi una striscia di carta intorno al dito",
        "size.how-to.ring.step2": "Segna dove la carta si sovrappone",
        "size.how-to.ring.step3": "Misura la lunghezza in millimetri",
        "size.how-to.ring.step4": "Usa il grafico per trovare la tua taglia",
        "size.how-to.bracelet": "Bracciale/Polso",
        "size.how-to.bracelet.step1": "Avvolgi un metro intorno al polso",
        "size.how-to.bracelet.step2": "Prendi la misura dove indosseresti il bracciale",
        "size.how-to.bracelet.step3": "Aggiungi 1-2 cm per una vestibilità comoda",
        "size.how-to.bracelet.step4": "Usa il grafico per trovare la taglia",
        "size.how-to.clothing": "Abbigliamento",
        "size.how-to.clothing.step1": "Misura il petto: intorno alla parte più ampia",
        "size.how-to.clothing.step2": "Misura la vita: intorno alla parte più stretta",
        "size.how-to.clothing.step3": "Misura i fianchi: intorno alla parte più ampia",
        "size.how-to.clothing.step4": "Confronta con il nostro grafico taglie",
        "size.how-to.rug": "Tappeti",
        "size.how-to.rug.step1": "Misura la lunghezza e larghezza del tuo spazio",
        "size.how-to.rug.step2": "Considera il posizionamento dei mobili",
        "size.how-to.rug.step3": "Lascia 30-60 cm di spazio pavimento intorno al tappeto",
        "size.how-to.rug.step4": "Scegli la taglia che si adatta meglio",
        
        // CTA
        "size.cta.title": "Hai Bisogno di Altro Aiuto?",
        "size.cta.desc": "Il nostro team è qui per aiutarti a trovare la taglia perfetta per i tuoi oggetti artigianali egiziani.",
        "size.cta.contact": "Contattaci",
        "size.cta.shop": "Acquista Ora",
        
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
        "size.hero.title": "Guide des Tailles",
        "size.hero.subtitle": "Trouvez la taille parfaite pour vos objets artisanaux égyptiens authentiques",
        
        // Tabs
        "size.tabs.jewelry": "Bijoux",
        "size.tabs.leather": "Cuir",
        "size.tabs.pottery": "Poterie",
        "size.tabs.rugs": "Tapis",
        "size.tabs.cotton": "Coton",
        
        // Jewelry (French translations)
        "size.jewelry.title": "Guide des Tailles de Bijoux",
        "size.jewelry.intro": "Trouvez la taille parfaite pour les bagues, bracelets et colliers avec notre guide complet.",
        "size.jewelry.rings.title": "Tableau des Tailles de Bagues",
        "size.jewelry.rings.desc": "Mesurez la circonférence de votre doigt pour trouver votre taille.",
        "size.jewelry.rings.size": "Taille",
        "size.jewelry.rings.circumference": "Circonférence (mm)",
        "size.jewelry.rings.diameter": "Diamètre (mm)",
        "size.jewelry.rings.tip": "Conseil: Mesurez votre doigt en fin de journée quand il est le plus gros.",
        "size.jewelry.bracelets.title": "Tableau des Tailles de Bracelets",
        "size.jewelry.bracelets.desc": "Mesurez la circonférence de votre poignet pour trouver la taille parfaite.",
        "size.jewelry.bracelets.size": "Taille",
        "size.jewelry.bracelets.wrist": "Poignet (cm)",
        "size.jewelry.bracelets.length": "Longueur (cm)",
        "size.jewelry.bracelets.tip": "Conseil: Ajoutez 1-2 cm à la mesure de votre poignet pour un ajustement confortable.",
        "size.jewelry.necklaces.title": "Guide des Longueurs de Colliers",
        "size.jewelry.necklaces.desc": "Choisissez la longueur parfaite pour votre style et votre décolleté.",
        "size.jewelry.necklaces.choker": "Choker",
        "size.jewelry.necklaces.choker.desc": "Se place haut sur le cou",
        "size.jewelry.necklaces.collarbone": "Clavicule",
        "size.jewelry.necklaces.collarbone.desc": "S'arrête à la clavicule",
        "size.jewelry.necklaces.princess": "Princesse",
        "size.jewelry.necklaces.princess.desc": "S'arrête sous la clavicule",
        "size.jewelry.necklaces.matiinee": "Matinée",
        "size.jewelry.necklaces.matiinee.desc": "S'arrête à la poitrine",
        "size.jewelry.necklaces.rope": "Corde",
        "size.jewelry.necklaces.rope.desc": "S'arrête sous la poitrine",
        
        // Additional translations (abbreviated for brevity - include all keys from English version)
        // ... (include all remaining translations in French)
    }
};

function switchSizeLanguage(lang) {
    if (!sizeTranslations[lang]) {
        console.warn(`Language ${lang} not supported for size guide page`);
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
        if (sizeTranslations[lang] && sizeTranslations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.placeholder) {
                    element.placeholder = sizeTranslations[lang][key];
                }
            } else {
                element.textContent = sizeTranslations[lang][key];
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
        'en': 'Size Guide - SOUVENIR Egyptian Handcrafts',
        'it': 'Guida alle Taglie - SOUVENIR Artigianato Egiziano',
        'fr': 'Guide des Tailles - SOUVENIR Artisanat Égyptien'
    };
    document.title = titles[lang] || titles['en'];
    
    // Trigger language change event
    window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: lang } 
    }));
}

// Setup dropdown functionality
function setupSizeDropdowns() {
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
                switchSizeLanguage(lang);
                languageDropdown.classList.remove('show');
            });
        });
    }
}

// Load saved language preference
function loadSizeLanguage() {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    switchSizeLanguage(savedLang);
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    loadSizeLanguage();
    setupSizeDropdowns();
    
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
window.switchSizeLanguage = switchSizeLanguage;
window.sizeTranslations = sizeTranslations;