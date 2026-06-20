// Artisans Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const artisanCards = document.querySelectorAll('.artisan-card');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const selectedCategory = this.dataset.category;
            
            // Filter artisans
            artisanCards.forEach(card => {
                const cardCategory = card.dataset.category;
                
                if (selectedCategory === 'all' || selectedCategory === cardCategory) {
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        card.style.transition = 'all 0.3s ease';
                    }, 50);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
    
    // Read more/less functionality
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const storySection = this.closest('.artisan-story');
            const fullStory = storySection.querySelector('.full-story');
            const storyPreview = storySection.querySelector('.story-preview');
            
            if (fullStory.classList.contains('expanded')) {
                // Collapse
                fullStory.classList.remove('expanded');
                storyPreview.style.display = 'block';
                this.innerHTML = 'Read Full Story <i class="fas fa-chevron-down"></i>';
                this.classList.remove('active');
                
                // Scroll to the beginning of the story
                storySection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                // Expand
                fullStory.classList.add('expanded');
                storyPreview.style.display = 'none';
                this.innerHTML = 'Read Less <i class="fas fa-chevron-up"></i>';
                this.classList.add('active');
                
                // Scroll to show the expanded content
                this.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Image error handling
    const artisanImages = document.querySelectorAll('.artisan-image img');
    
    artisanImages.forEach(img => {
        img.addEventListener('error', function() {
            // Set a fallback image
            this.src = 'assets/img/artisans/default.jpg';
        });
    });
});