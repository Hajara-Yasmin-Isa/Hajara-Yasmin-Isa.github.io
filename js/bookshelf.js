const hamburger = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');
const closeZoomBtn = document.getElementById('close-zoom-btn'); // New close button for zoom overlay
const books = document.querySelectorAll('.book.with-image');
const zoomedOverlay = document.getElementById('zoomed-overlay');
const zoomedBookImage = document.getElementById('zoomed-book-image');

// Toggle sidebar function
function toggleSidebar() {
    sidebar.classList.toggle('sidebar-open');
    overlay.classList.toggle('overlay-visible');
    hamburger.classList.toggle('is-active');
}

hamburger.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

/* Optional: Add smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close the sidebar after clicking a link
        sidebar.classList.remove('sidebar-open');
        overlay.classList.remove('overlay-visible');
        hamburger.classList.remove('is-active');
    });
});

// Zoom functionality for books
books.forEach(book => {
    book.addEventListener('click', function () {
        const bookCover = book.style.backgroundImage.slice(5, -2); // Extract URL from background-image style
        zoomedBookImage.src = bookCover; // Set the book cover image in the zoomed view
        zoomedOverlay.style.display = 'flex'; // Show the overlay
        document.body.classList.add('zoom-active'); // Add zoom-active class to body
    });
});

// Close the zoomed view when clicking outside of the book or clicking the close button
zoomedOverlay.addEventListener('click', function (e) {
    if (e.target === zoomedOverlay || e.target === closeZoomBtn) {
        zoomedOverlay.style.display = 'none'; // Hide the overlay
        document.body.classList.remove('zoom-active'); // Remove zoom-active class from body
    }
});

closeZoomBtn.addEventListener('click', function () {
    zoomedOverlay.style.display = 'none'; // Hide the overlay when close button is clicked
    document.body.classList.remove('zoom-active'); // Remove zoom-active class from body
});
