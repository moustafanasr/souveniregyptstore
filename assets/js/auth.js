// auth.js - Authentication page functionality (Login, Register, Password Reset)

document.addEventListener('DOMContentLoaded', function() {
    // Password visibility toggle
    const toggleButtons = document.querySelectorAll('.toggle-password');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.closest('.input-group').querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
    
    // Login Form Handling
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        // Check for redirect parameter
        const urlParams = new URLSearchParams(window.location.search);
        const redirect = urlParams.get('redirect') || 'my-account.html';
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateLoginForm(this)) {
                submitLoginForm(this, redirect);
            }
        });
        
        // Real-time validation
        const inputs = loginForm.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateLoginField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateLoginField(this);
                }
            });
        });
    }
    
    // Register Form Handling
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateRegisterForm(this)) {
                submitRegisterForm(this);
            }
        });
        
        // Real-time validation for all fields
        const inputs = registerForm.querySelectorAll('input');
        inputs.forEach(input => {
            // Skip checkbox as it's handled separately
            if (input.type === 'checkbox') return;
            
            input.addEventListener('blur', function() {
                validateRegisterField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateRegisterField(this);
                }
            });
        });
        
        // Special validation for confirm password on input
        const confirmPassword = registerForm.querySelector('#confirmPassword');
        const password = registerForm.querySelector('#password');
        
        if (confirmPassword && password) {
            confirmPassword.addEventListener('input', function() {
                if (this.value && password.value) {
                    validateRegisterField(this);
                }
            });
            
            password.addEventListener('input', function() {
                const confirm = registerForm.querySelector('#confirmPassword');
                if (confirm && confirm.value) {
                    validateRegisterField(confirm);
                }
            });
        }
    }
    
    // Password Reset Form Handling
    const resetForm = document.getElementById('resetForm');
    
    if (resetForm) {
        resetForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateResetForm(this)) {
                submitResetForm(this);
            }
        });
        
        const emailInput = resetForm.querySelector('#resetEmail');
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                validateResetField(this);
            });
            
            emailInput.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateResetField(this);
                }
            });
        }
    }
    
    // Social login buttons
    const socialButtons = document.querySelectorAll('.btn-social');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.classList.contains('google') ? 'Google' : 'Facebook';
            const isRegister = window.location.pathname.includes('register');
            const action = isRegister ? 'sign up with' : 'connect with';
            
            showNotification(`${action} ${provider}...`, 'info');
            
            // Simulate social login/register
            setTimeout(() => {
                showNotification(`${provider} ${isRegister ? 'registration' : 'login'} successful!`, 'success');
                setTimeout(() => {
                    window.location.href = 'my-account.html';
                }, 1000);
            }, 1500);
        });
    });
});

// ============================================================
// LOGIN VALIDATION
// ============================================================

function validateLoginForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input');
    
    inputs.forEach(input => {
        if (input.id !== 'remember') {
            if (!validateLoginField(input)) {
                isValid = false;
            }
        }
    });
    
    return isValid;
}

function validateLoginField(input) {
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    const inputGroup = input.closest('.input-group');
    
    let isValid = true;
    let errorText = '';
    
    if (input.id === 'email') {
        if (!input.value.trim()) {
            isValid = false;
            errorText = 'Email address is required';
        } else if (!isValidEmail(input.value.trim())) {
            isValid = false;
            errorText = 'Please enter a valid email address';
        }
    } else if (input.id === 'password') {
        if (!input.value.trim()) {
            isValid = false;
            errorText = 'Password is required';
        } else if (input.value.trim().length < 6) {
            isValid = false;
            errorText = 'Password must be at least 6 characters';
        }
    }
    
    if (isValid) {
        input.classList.remove('error');
        if (inputGroup) inputGroup.classList.remove('error');
        if (errorMessage) {
            errorMessage.classList.remove('show');
        }
    } else {
        input.classList.add('error');
        if (inputGroup) inputGroup.classList.add('error');
        if (errorMessage) {
            errorMessage.textContent = errorText;
            errorMessage.classList.add('show');
        }
    }
    
    return isValid;
}

// ============================================================
// REGISTER VALIDATION
// ============================================================

function validateRegisterForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input');
    
    inputs.forEach(input => {
        if (input.type !== 'checkbox') {
            if (!validateRegisterField(input)) {
                isValid = false;
            }
        }
    });
    
    // Validate password confirmation
    const password = form.querySelector('#password');
    const confirmPassword = form.querySelector('#confirmPassword');
    if (password && confirmPassword) {
        if (password.value !== confirmPassword.value) {
            const formGroup = confirmPassword.closest('.form-group');
            const errorMessage = formGroup.querySelector('.error-message');
            const inputGroup = confirmPassword.closest('.input-group');
            
            confirmPassword.classList.add('error');
            if (inputGroup) inputGroup.classList.add('error');
            if (errorMessage) {
                errorMessage.textContent = 'Passwords do not match';
                errorMessage.classList.add('show');
            }
            isValid = false;
        }
    }
    
    // Validate terms checkbox
    const termsCheckbox = form.querySelector('#terms');
    if (termsCheckbox && !termsCheckbox.checked) {
        const formGroup = termsCheckbox.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.textContent = 'You must agree to the Terms of Service';
            errorMessage.classList.add('show');
        }
        isValid = false;
    }
    
    return isValid;
}

function validateRegisterField(input) {
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    const inputGroup = input.closest('.input-group');
    
    let isValid = true;
    let errorText = '';
    
    // Skip checkbox (handled separately)
    if (input.type === 'checkbox') return true;
    
    // Required field validation
    if (input.hasAttribute('required') && !input.value.trim()) {
        isValid = false;
        errorText = 'This field is required';
    } else if (input.id === 'email' && input.value.trim()) {
        if (!isValidEmail(input.value.trim())) {
            isValid = false;
            errorText = 'Please enter a valid email address';
        }
    } else if (input.id === 'password' && input.value.trim()) {
        if (input.value.trim().length < 6) {
            isValid = false;
            errorText = 'Password must be at least 6 characters';
        }
    } else if (input.id === 'confirmPassword' && input.value.trim()) {
        const password = input.closest('form').querySelector('#password');
        if (password && input.value.trim() !== password.value.trim()) {
            isValid = false;
            errorText = 'Passwords do not match';
        }
    } else if (input.id === 'phone' && input.value.trim()) {
        if (!isValidPhone(input.value.trim())) {
            isValid = false;
            errorText = 'Please enter a valid phone number';
        }
    }
    
    if (isValid) {
        input.classList.remove('error');
        if (inputGroup) inputGroup.classList.remove('error');
        if (errorMessage) {
            errorMessage.classList.remove('show');
        }
    } else {
        input.classList.add('error');
        if (inputGroup) inputGroup.classList.add('error');
        if (errorMessage) {
            errorMessage.textContent = errorText;
            errorMessage.classList.add('show');
        }
    }
    
    return isValid;
}

// ============================================================
// PASSWORD RESET VALIDATION
// ============================================================

function validateResetForm(form) {
    let isValid = true;
    const emailInput = form.querySelector('#resetEmail');
    
    if (emailInput) {
        if (!validateResetField(emailInput)) {
            isValid = false;
        }
    }
    
    return isValid;
}

function validateResetField(input) {
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    const inputGroup = input.closest('.input-group');
    
    let isValid = true;
    let errorText = '';
    
    if (!input.value.trim()) {
        isValid = false;
        errorText = 'Email address is required';
    } else if (!isValidEmail(input.value.trim())) {
        isValid = false;
        errorText = 'Please enter a valid email address';
    }
    
    if (isValid) {
        input.classList.remove('error');
        if (inputGroup) inputGroup.classList.remove('error');
        if (errorMessage) {
            errorMessage.classList.remove('show');
        }
    } else {
        input.classList.add('error');
        if (inputGroup) inputGroup.classList.add('error');
        if (errorMessage) {
            errorMessage.textContent = errorText;
            errorMessage.classList.add('show');
        }
    }
    
    return isValid;
}

// ============================================================
// FORM SUBMISSIONS
// ============================================================

function submitLoginForm(form, redirect) {
    const submitBtn = form.querySelector('.submit-btn');
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.innerHTML = '<i class="fas fa-spinner"></i> Signing in...';
    submitBtn.disabled = true;
    
    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Simulate API call
    setTimeout(() => {
        // Simulate successful login
        localStorage.setItem('souvenir-user-loggedin', 'true');
        localStorage.setItem('souvenir-user-email', data.email);
        localStorage.setItem('souvenir-user-name', data.email.split('@')[0] || 'User');
        
        // Remove loading state
        submitBtn.classList.remove('loading');
        submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign In';
        submitBtn.disabled = false;
        
        // Remove any error states
        form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
        form.querySelectorAll('.error-message').forEach(el => el.classList.remove('show'));
        
        // Show success message
        showNotification('Login successful! Redirecting...', 'success');
        
        // Redirect
        setTimeout(() => {
            window.location.href = redirect;
        }, 1000);
        
        // Track login
        if (typeof gtag !== 'undefined') {
            gtag('event', 'login', {
                'method': 'email'
            });
        }
        
        console.log('Login data:', data);
        
    }, 1500);
}

function submitRegisterForm(form) {
    const submitBtn = form.querySelector('.submit-btn');
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.innerHTML = '<i class="fas fa-spinner"></i> Creating account...';
    submitBtn.disabled = true;
    
    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Simulate API call
    setTimeout(() => {
        // Remove loading state
        submitBtn.classList.remove('loading');
        submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> Create Account';
        submitBtn.disabled = false;
        
        // Remove any error states
        form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
        form.querySelectorAll('.error-message').forEach(el => el.classList.remove('show'));
        
        // Show success message
        showNotification('Account created successfully!', 'success');
        
        // Auto-login
        localStorage.setItem('souvenir-user-loggedin', 'true');
        localStorage.setItem('souvenir-user-email', data.email);
        localStorage.setItem('souvenir-user-name', data.fullName || data.email.split('@')[0]);
        
        // Redirect after delay
        setTimeout(() => {
            window.location.href = 'my-account.html';
        }, 1500);
        
        // Track registration
        if (typeof gtag !== 'undefined') {
            gtag('event', 'sign_up', {
                'method': 'email'
            });
        }
        
        console.log('Registration data:', data);
        
    }, 1500);
}

function submitResetForm(form) {
    const submitBtn = form.querySelector('.submit-btn');
    const emailInput = form.querySelector('#resetEmail');
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.innerHTML = '<i class="fas fa-spinner"></i> Sending...';
    submitBtn.disabled = true;
    
    // Collect email
    const email = emailInput.value.trim();
    
    // Simulate API call
    setTimeout(() => {
        // Remove loading state
        submitBtn.classList.remove('loading');
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Reset Link';
        submitBtn.disabled = false;
        
        // Create or update success message
        let successMessage = form.querySelector('.success-message');
        if (!successMessage) {
            successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            form.appendChild(successMessage);
        }
        
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <h4 data-key="auth.reset.success.title">Reset Link Sent!</h4>
            <p data-key="auth.reset.success.desc">We've sent a password reset link to <strong>${email}</strong>. Please check your email.</p>
        `;
        
        successMessage.classList.add('show');
        emailInput.value = '';
        
        // Track password reset
        if (typeof gtag !== 'undefined') {
            gtag('event', 'password_reset_request', {
                'event_category': 'Authentication'
            });
        }
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
        
        console.log('Password reset requested for:', email);
        
    }, 1500);
}

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^[\+\d\s\-\(\)]{10,15}$/.test(phone);
}

function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.auth-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `auth-notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    notification.remove();
                }
            }, 300);
        }
    }, 3000);
}

// Make functions globally available
window.showNotification = showNotification;