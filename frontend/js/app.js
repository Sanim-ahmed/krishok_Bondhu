/* Krishok Bondhu - Main App JavaScript */

// Navigation highlight
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        }
    });
});

// Search functionality for crop list
function searchCrops(query) {
    const cropCards = document.querySelectorAll('.crop-card');
    const searchTerm = query.toLowerCase();
    
    cropCards.forEach(card => {
        const cropName = card.querySelector('h3').textContent.toLowerCase();
        const cropDesc = card.querySelector('p').textContent.toLowerCase();
        
        if (cropName.includes(searchTerm) || cropDesc.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize search if search input exists
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('cropSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchCrops(this.value);
        });
    }
});
