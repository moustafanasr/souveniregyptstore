// faq.js - FAQ page functionality

document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            const answer = this.nextElementSibling;
            
            // Close all other FAQs in the same category
            const categorySection = this.closest('.faq-category-section');
            if (categorySection) {
                const siblingQuestions = categorySection.querySelectorAll('.faq-question');
                siblingQuestions.forEach(q => {
                    if (q !== this) {
                        q.classList.remove('active');
                        q.nextElementSibling.classList.remove('open');
                    }
                });
            }
            
            // Toggle current FAQ
            if (isActive) {
                this.classList.remove('active');
                answer.classList.remove('open');
            } else {
                this.classList.add('active');
                answer.classList.add('open');
            }
        });
    });
    
    // Category Filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const faqItems = document.querySelectorAll('.faq-item');
    const categorySections = document.querySelectorAll('.faq-category-section');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const selectedCategory = this.dataset.category;
            
            // Clear search
            const searchInput = document.getElementById('faqSearch');
            if (searchInput) {
                searchInput.value = '';
            }
            
            // Show/hide sections and items
            if (selectedCategory === 'all') {
                categorySections.forEach(section => {
                    section.style.display = 'block';
                });
                faqItems.forEach(item => {
                    item.classList.remove('hidden');
                });
                document.getElementById('noResults').classList.remove('show');
            } else {
                categorySections.forEach(section => {
                    const sectionCategory = section.dataset.category;
                    if (sectionCategory === selectedCategory) {
                        section.style.display = 'block';
                        // Show all items in this section
                        const items = section.querySelectorAll('.faq-item');
                        items.forEach(item => {
                            item.classList.remove('hidden');
                        });
                    } else {
                        section.style.display = 'none';
                    }
                });
                document.getElementById('noResults').classList.remove('show');
            }
        });
    });
    
    // Search Functionality
    const searchInput = document.getElementById('faqSearch');
    const searchBtn = document.getElementById('searchBtn');
    const noResults = document.getElementById('noResults');
    const clearSearchBtn = document.querySelector('.clear-search');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // Reset to show all
            resetSearch();
            return;
        }
        
        let foundResults = false;
        
        // Reset category filter
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.category-btn[data-category="all"]').classList.add('active');
        
        // Show all sections
        categorySections.forEach(section => {
            section.style.display = 'block';
        });
        
        // Search through all FAQ items
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question span').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer p')?.textContent.toLowerCase() || '';
            
            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.classList.remove('hidden');
                foundResults = true;
            } else {
                item.classList.add('hidden');
            }
        });
        
        // Show/hide no results message
        if (foundResults) {
            noResults.classList.remove('show');
        } else {
            noResults.classList.add('show');
        }
    }
    
    function resetSearch() {
        searchInput.value = '';
        faqItems.forEach(item => {
            item.classList.remove('hidden');
        });
        noResults.classList.remove('show');
        
        // Reset to "All" category
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.category-btn[data-category="all"]').classList.add('active');
        categorySections.forEach(section => {
            section.style.display = 'block';
        });
    }
    
    // Search on input
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            performSearch();
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Search on button click
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    // Clear search
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', function() {
            resetSearch();
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const offset = 70;
                const targetPosition = targetElement.offsetTop - offset;
                
                if (window.scrollbar) {
                    window.scrollbar.scrollTo(0, targetPosition, 800);
                } else {
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add animation to FAQ items on scroll
    const faqItemsAnimate = document.querySelectorAll('.faq-item');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: '0px 0px -50px 0px'
        });
        
        faqItemsAnimate.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = `all 0.4s ease ${index * 0.05}s`;
            observer.observe(item);
        });
    }
    
    // Track FAQ interactions
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const questionText = this.querySelector('span')?.textContent || 'Unknown';
            const isOpen = this.classList.contains('active');
            
            // Send to analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'faq_interaction', {
                    'event_category': 'FAQ',
                    'event_label': questionText,
                    'action': isOpen ? 'close' : 'open'
                });
            }
        });
    });
});