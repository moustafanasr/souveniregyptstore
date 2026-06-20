// account.js - Account page functionality (Dashboard, Orders, Addresses, Details)

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('souvenir-user-loggedin') === 'true';
    
    if (!isLoggedIn) {
        // Redirect to login if not logged in
        window.location.href = 'login.html?redirect=my-account.html';
        return;
    }
    
    // Load user data
    loadUserData();
    loadDashboardStats();
    loadRecentOrders();
    loadWishlistCount();
    
    // Setup logout functionality
    setupLogout();
    
    // Account details form handling
    const accountForm = document.getElementById('accountForm');
    if (accountForm) {
        accountForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveAccountDetails(this);
        });
    }
    
    // Password change form handling
    const passwordForm = document.getElementById('passwordForm');
    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            changePassword(this);
        });
    }
    
    // Address form handling
    const addressForm = document.getElementById('addressForm');
    if (addressForm) {
        addressForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveAddress(this);
        });
    }
    
    // Add address button
    const addAddressBtn = document.querySelector('.btn-add-address');
    if (addAddressBtn) {
        addAddressBtn.addEventListener('click', function() {
            showAddressModal();
        });
    }
    
    // Order filter
    const orderFilter = document.getElementById('orderFilter');
    if (orderFilter) {
        orderFilter.addEventListener('change', function() {
            filterOrders(this.value);
        });
    }
    
    // Load addresses
    loadAddresses();
    
    // Load orders
    loadOrders();
});

// ============================================================
// USER DATA
// ============================================================

function loadUserData() {
    const userName = localStorage.getItem('souvenir-user-name') || 'Guest';
    const userEmail = localStorage.getItem('souvenir-user-email') || 'guest@souveniregypt.store';
    
    // Update sidebar
    const displayName = document.getElementById('userDisplayName');
    const displayEmail = document.getElementById('userDisplayEmail');
    
    if (displayName) displayName.textContent = userName;
    if (displayEmail) displayEmail.textContent = userEmail;
    
    // Update welcome section
    const welcomeTitle = document.querySelector('.welcome-section h1');
    if (welcomeTitle) {
        welcomeTitle.textContent = `Welcome ${userName}!`;
    }
    
    // Update header user menu
    const headerUserName = document.querySelector('.user-name');
    if (headerUserName) {
        headerUserName.textContent = userName;
    }
    
    // Update account details form if exists
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    
    if (fullNameInput) fullNameInput.value = userName;
    if (emailInput) emailInput.value = userEmail;
    
    // Load phone from storage if exists
    const userPhone = localStorage.getItem('souvenir-user-phone') || '';
    if (phoneInput) phoneInput.value = userPhone;
}

// ============================================================
// DASHBOARD STATS
// ============================================================

function loadDashboardStats() {
    // Get orders from storage
    const orders = getOrdersFromStorage();
    const totalOrders = orders.length;
    
    // Update order count in nav badge
    const orderBadge = document.getElementById('orderCount');
    if (orderBadge) orderBadge.textContent = totalOrders;
    
    // Update total orders stat
    const totalOrdersElement = document.getElementById('totalOrders');
    if (totalOrdersElement) totalOrdersElement.textContent = totalOrders;
    
    // Update reward points (simulated)
    const rewardPoints = totalOrders * 10 + 25; // 10 points per order + 25 bonus
    const rewardElement = document.getElementById('rewardPoints');
    if (rewardElement) rewardElement.textContent = rewardPoints;
    
    // Update reviews (simulated)
    const reviewsElement = document.getElementById('totalReviews');
    if (reviewsElement) reviewsElement.textContent = Math.min(totalOrders, 5);
}

function loadWishlistCount() {
    const wishlist = getWishlistFromStorage();
    const count = wishlist.length;
    
    const wishlistBadge = document.getElementById('wishlistCount');
    if (wishlistBadge) wishlistBadge.textContent = count;
    
    const wishlistStat = document.getElementById('wishlistCountStat');
    if (wishlistStat) wishlistStat.textContent = count;
}

// ============================================================
// RECENT ORDERS
// ============================================================

function loadRecentOrders() {
    const container = document.getElementById('recentOrdersContainer');
    const orders = getOrdersFromStorage();
    const recentOrders = orders.slice(0, 3);
    
    if (recentOrders.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-bag"></i>
                <p data-key="account.dashboard.no-orders">You haven't placed any orders yet.</p>
                <a href="shop.html" class="btn btn-primary" data-key="account.dashboard.start-shopping">Start Shopping</a>
            </div>
        `;
        return;
    }
    
    container.innerHTML = recentOrders.map(order => createOrderHTML(order)).join('');
}

function createOrderHTML(order) {
    const statusClass = order.status || 'pending';
    const statusLabel = {
        'pending': 'Pending',
        'processing': 'Processing',
        'shipped': 'Shipped',
        'delivered': 'Delivered',
        'cancelled': 'Cancelled'
    }[statusClass] || 'Pending';
    
    return `
        <div class="order-item">
            <img src="${order.image || 'assets/img/placeholder-product.jpg'}" alt="${order.productName || 'Order'}" class="order-image" onerror="this.src='assets/img/placeholder-product.jpg'">
            <div class="order-details">
                <h4>${order.productName || 'Order #' + order.id}</h4>
                <p>${order.quantity || 1} item(s) • ${order.category || 'Products'}</p>
                <span class="order-status ${statusClass}">${statusLabel}</span>
            </div>
            <div class="order-total">
                <div class="amount">$${(order.total || 0).toFixed(2)}</div>
                <div class="date">${order.date || 'Just now'}</div>
            </div>
        </div>
    `;
}

// ============================================================
// ORDERS PAGE
// ============================================================

function loadOrders() {
    const container = document.getElementById('ordersContainer');
    const orders = getOrdersFromStorage();
    
    if (orders.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-bag"></i>
                <h3>No Orders Yet</h3>
                <p>You haven't placed any orders. Start shopping to see your orders here.</p>
                <a href="shop.html" class="btn btn-primary">Start Shopping</a>
            </div>
        `;
        return;
    }
    
    container.innerHTML = orders.map(order => createOrderHTML(order)).join('');
}

function filterOrders(status) {
    const orders = getOrdersFromStorage();
    const container = document.getElementById('ordersContainer');
    
    let filtered = orders;
    if (status !== 'all') {
        filtered = orders.filter(order => order.status === status);
    }
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <p>No orders found with this status.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map(order => createOrderHTML(order)).join('');
}

// ============================================================
// ADDRESSES
// ============================================================

function loadAddresses() {
    const container = document.getElementById('addressesContainer');
    const addresses = getAddressesFromStorage();
    
    if (addresses.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-map-marker-alt"></i>
                <h3>No Addresses Saved</h3>
                <p>Add your shipping addresses to make checkout faster and easier.</p>
                <button class="btn btn-primary btn-add-address">Add New Address</button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = addresses.map((address, index) => {
        const isDefault = address.default || index === 0;
        return `
            <div class="address-card ${isDefault ? 'default' : ''}">
                ${isDefault ? '<span class="address-badge">Default</span>' : ''}
                <h4>${address.name || 'Address ' + (index + 1)}</h4>
                <p>${address.street || ''}</p>
                <p>${address.city || ''}, ${address.state || ''} ${address.zip || ''}</p>
                <p>${address.country || 'Egypt'}</p>
                <p>Phone: ${address.phone || 'N/A'}</p>
                <div class="address-actions">
                    <button class="btn btn-secondary edit-address" data-index="${index}">Edit</button>
                    <button class="btn btn-danger delete-address" data-index="${index}">Delete</button>
                    ${!isDefault ? `<button class="btn btn-primary set-default" data-index="${index}">Set Default</button>` : ''}
                </div>
            </div>
        `;
    }).join('');
    
    // Add event listeners for address actions
    document.querySelectorAll('.edit-address').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            editAddress(index);
        });
    });
    
    document.querySelectorAll('.delete-address').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            deleteAddress(index);
        });
    });
    
    document.querySelectorAll('.set-default').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            setDefaultAddress(index);
        });
    });
    
    // Add address button
    document.querySelectorAll('.btn-add-address').forEach(btn => {
        btn.addEventListener('click', function() {
            showAddressModal();
        });
    });
}

function showAddressModal() {
    // Simple modal implementation
    const modal = document.getElementById('addressModal');
    if (modal) {
        modal.style.display = 'flex';
        // Clear form
        const form = document.getElementById('addressForm');
        if (form) form.reset();
        document.getElementById('addressIndex').value = '';
        document.getElementById('modalTitle').textContent = 'Add New Address';
    } else {
        // Create modal if it doesn't exist
        createAddressModal();
    }
}

function createAddressModal() {
    const modalHTML = `
        <div id="addressModal" class="modal" style="display:flex;">
            <div class="modal-content" style="max-width:500px;">
                <span class="close-modal" onclick="document.getElementById('addressModal').style.display='none'">&times;</span>
                <h2 id="modalTitle">Add New Address</h2>
                <form id="addressForm">
                    <input type="hidden" id="addressIndex" value="">
                    <div class="form-group">
                        <label for="addressName">Address Name</label>
                        <input type="text" id="addressName" placeholder="e.g., Home, Office" required>
                    </div>
                    <div class="form-group">
                        <label for="addressStreet">Street Address</label>
                        <input type="text" id="addressStreet" placeholder="Street address" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="addressCity">City</label>
                            <input type="text" id="addressCity" placeholder="City" required>
                        </div>
                        <div class="form-group">
                            <label for="addressState">State/Region</label>
                            <input type="text" id="addressState" placeholder="State/Region">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="addressZip">ZIP Code</label>
                            <input type="text" id="addressZip" placeholder="ZIP Code">
                        </div>
                        <div class="form-group">
                            <label for="addressCountry">Country</label>
                            <input type="text" id="addressCountry" placeholder="Country" value="Egypt">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="addressPhone">Phone Number</label>
                        <input type="tel" id="addressPhone" placeholder="Phone number">
                    </div>
                    <div class="form-group checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" id="addressDefault">
                            <span class="checkmark"></span>
                            <span>Set as default address</span>
                        </label>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" onclick="document.getElementById('addressModal').style.display='none'">Cancel</button>
                        <button type="submit" class="btn btn-primary">Save Address</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    // Add modal to body
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML = modalHTML;
    document.body.appendChild(modalDiv.firstElementChild);
    
    // Setup form submission
    const form = document.getElementById('addressForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            saveAddress(this);
        });
    }
}

function saveAddress(form) {
    const index = document.getElementById('addressIndex').value;
    const address = {
        name: document.getElementById('addressName').value.trim(),
        street: document.getElementById('addressStreet').value.trim(),
        city: document.getElementById('addressCity').value.trim(),
        state: document.getElementById('addressState').value.trim(),
        zip: document.getElementById('addressZip').value.trim(),
        country: document.getElementById('addressCountry').value.trim() || 'Egypt',
        phone: document.getElementById('addressPhone').value.trim(),
        default: document.getElementById('addressDefault').checked
    };
    
    let addresses = getAddressesFromStorage();
    
    if (index !== '') {
        // Update existing address
        addresses[parseInt(index)] = address;
    } else {
        // Add new address
        addresses.push(address);
        if (address.default) {
            addresses = addresses.map(a => ({ ...a, default: false }));
            addresses[addresses.length - 1].default = true;
        }
    }
    
    saveAddressesToStorage(addresses);
    loadAddresses();
    
    // Close modal
    const modal = document.getElementById('addressModal');
    if (modal) modal.style.display = 'none';
    
    showNotification('Address saved successfully!', 'success');
}

function editAddress(index) {
    const addresses = getAddressesFromStorage();
    const address = addresses[index];
    
    if (!address) return;
    
    showAddressModal();
    
    // Fill form with address data
    document.getElementById('addressIndex').value = index;
    document.getElementById('modalTitle').textContent = 'Edit Address';
    document.getElementById('addressName').value = address.name || '';
    document.getElementById('addressStreet').value = address.street || '';
    document.getElementById('addressCity').value = address.city || '';
    document.getElementById('addressState').value = address.state || '';
    document.getElementById('addressZip').value = address.zip || '';
    document.getElementById('addressCountry').value = address.country || 'Egypt';
    document.getElementById('addressPhone').value = address.phone || '';
    document.getElementById('addressDefault').checked = address.default || false;
}

function deleteAddress(index) {
    if (!confirm('Are you sure you want to delete this address?')) return;
    
    const addresses = getAddressesFromStorage();
    addresses.splice(index, 1);
    saveAddressesToStorage(addresses);
    loadAddresses();
    showNotification('Address deleted successfully!', 'success');
}

function setDefaultAddress(index) {
    const addresses = getAddressesFromStorage();
    addresses = addresses.map((a, i) => ({ ...a, default: i === index }));
    saveAddressesToStorage(addresses);
    loadAddresses();
    showNotification('Default address updated!', 'success');
}

// ============================================================
// ACCOUNT DETAILS
// ============================================================

function saveAccountDetails(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Save to localStorage
    localStorage.setItem('souvenir-user-name', data.fullName);
    localStorage.setItem('souvenir-user-email', data.email);
    localStorage.setItem('souvenir-user-phone', data.phone);
    
    // Update UI
    loadUserData();
    
    showNotification('Account details updated successfully!', 'success');
}

function changePassword(form) {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (newPassword !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }
    
    if (newPassword.length < 6) {
        showNotification('Password must be at least 6 characters!', 'error');
        return;
    }
    
    // Simulate password change
    showNotification('Password changed successfully!', 'success');
    form.reset();
}

// ============================================================
// LOGOUT
// ============================================================

function setupLogout() {
    const logoutBtn = document.getElementById('logoutBtnSidebar');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                localStorage.removeItem('souvenir-user-loggedin');
                localStorage.removeItem('souvenir-user-email');
                localStorage.removeItem('souvenir-user-name');
                window.location.href = 'login.html';
            }
        });
    }
}

// ============================================================
// STORAGE HELPERS
// ============================================================

function getOrdersFromStorage() {
    try {
        const orders = localStorage.getItem('souvenir-orders');
        return orders ? JSON.parse(orders) : [];
    } catch {
        return [];
    }
}

function saveOrdersToStorage(orders) {
    localStorage.setItem('souvenir-orders', JSON.stringify(orders));
}

function getAddressesFromStorage() {
    try {
        const addresses = localStorage.getItem('souvenir-addresses');
        return addresses ? JSON.parse(addresses) : [];
    } catch {
        return [];
    }
}

function saveAddressesToStorage(addresses) {
    localStorage.setItem('souvenir-addresses', JSON.stringify(addresses));
}

function getWishlistFromStorage() {
    try {
        const wishlist = localStorage.getItem('souvenir-wishlist');
        return wishlist ? JSON.parse(wishlist) : [];
    } catch {
        return [];
    }
}

// ============================================================
// NOTIFICATIONS
// ============================================================

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `auth-notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
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
window.loadAddresses = loadAddresses;
window.showAddressModal = showAddressModal;
window.editAddress = editAddress;
window.deleteAddress = deleteAddress;
window.setDefaultAddress = setDefaultAddress;