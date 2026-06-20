// size-guide.js - Size Guide page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const sizeSections = document.querySelectorAll('.size-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all sections
            sizeSections.forEach(section => section.classList.remove('active'));
            
            // Show the corresponding section
            const tabId = this.dataset.tab;
            const targetSection = document.getElementById(tabId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Smooth scroll to section
                setTimeout(() => {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const offset = 100;
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
    
    // Add animation to size cards on scroll
    const sizeCards = document.querySelectorAll('.size-card');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        sizeCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.5s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }
    
    // Add animation to measure cards
    const measureCards = document.querySelectorAll('.measure-card');
    
    if ('IntersectionObserver' in window) {
        const measureObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        measureCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `all 0.5s ease ${index * 0.1}s`;
            measureObserver.observe(card);
        });
    }
    
    // Handle window resize for sticky nav
    let isNavSticky = false;
    const sizeNav = document.querySelector('.size-nav');
    const headerHeight = 70;
    
    window.addEventListener('scroll', function() {
        if (sizeNav) {
            const scrollPosition = window.scrollY;
            
            if (scrollPosition > 100 && !isNavSticky) {
                sizeNav.style.top = '0';
                sizeNav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                isNavSticky = true;
            } else if (scrollPosition <= 100 && isNavSticky) {
                sizeNav.style.top = headerHeight + 'px';
                sizeNav.style.boxShadow = 'none';
                isNavSticky = false;
            }
        }
    });
});