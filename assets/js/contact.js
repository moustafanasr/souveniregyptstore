// contact.js - Contact Us page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(this)) {
                submitForm(this);
            }
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            const answer = this.nextElementSibling;
            
            // Close all other FAQs
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('open');
                }
            });
            
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
    
    // Add animation to info items on scroll
    const infoItems = document.querySelectorAll('.info-item');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        infoItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = `all 0.5s ease ${index * 0.1}s`;
            observer.observe(item);
        });
    }
});

// Form Validation Functions
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        if (input.type !== 'checkbox') {
            if (!validateField(input)) {
                isValid = false;
            }
        }
    });
    
    // Validate checkbox
    const checkbox = form.querySelector('input[type="checkbox"]');
    if (checkbox && !checkbox.checked) {
        const errorMessage = checkbox.closest('.form-group').querySelector('.error-message');
        const errorText = checkbox.closest('.checkbox-group').dataset.error || 'Please agree to the terms';
        showError(checkbox, errorMessage, errorText);
        isValid = false;
    }
    
    return isValid;
}

function validateField(input) {
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    
    // Skip hidden fields
    if (input.type === 'hidden') return true;
    
    // Skip checkbox (handled separately)
    if (input.type === 'checkbox') return true;
    
    // Validate based on type
    let isValid = true;
    let errorText = '';
    
    if (input.hasAttribute('required') && !input.value.trim()) {
        isValid = false;
        errorText = 'This field is required';
    } else if (input.type === 'email' && input.value.trim()) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value.trim())) {
            isValid = false;
            errorText = 'Please enter a valid email address';
        }
    } else if (input.id === 'subject' && input.value === '') {
        isValid = false;
        errorText = 'Please select a subject';
    } else if (input.tagName === 'TEXTAREA' && input.value.trim().length < 10) {
        isValid = false;
        errorText = 'Message must be at least 10 characters';
    }
    
    if (isValid) {
        showSuccess(input, errorMessage);
    } else {
        showError(input, errorMessage, errorText);
    }
    
    return isValid;
}

function showError(input, errorMessage, text) {
    input.classList.add('error');
    if (errorMessage) {
        errorMessage.textContent = text;
        errorMessage.classList.add('show');
    }
}

function showSuccess(input, errorMessage) {
    input.classList.remove('error');
    if (errorMessage) {
        errorMessage.classList.remove('show');
    }
}

// Form Submission
function submitForm(form) {
    const submitBtn = form.querySelector('.submit-btn');
    const successMessage = form.querySelector('.success-message') || createSuccessMessage(form);
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.innerHTML = '<i class="fas fa-spinner"></i> Sending...';
    submitBtn.disabled = true;
    
    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Simulate API call
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Remove loading state
        submitBtn.classList.remove('loading');
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        submitBtn.disabled = false;
        
        // Remove any error states
        form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
        form.querySelectorAll('.error-message').forEach(el => el.classList.remove('show'));
        
        // Show success message
        successMessage.classList.add('show');
        
        // Log data (for debugging)
        console.log('Form submitted:', data);
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
        
        // Track conversion
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submission', {
                'form_name': 'contact',
                'form_subject': data.subject || 'General'
            });
        }
        
    }, 1500);
}

function createSuccessMessage(form) {
    const message = document.createElement('div');
    message.className = 'success-message';
    message.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h4>Message Sent Successfully!</h4>
        <p>Thank you for contacting us. We'll get back to you within 24-48 hours.</p>
    `;
    form.appendChild(message);
    return message;
}