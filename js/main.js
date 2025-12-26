document.addEventListener('DOMContentLoaded', function () {
    // Sidebar toggle functionality
    const hamburger = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');

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

    // Carousel functionality - ensure continuous rotation
    const carousel = document.querySelector('.carousel');
    
    // Pause animation on hover
    carousel.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });
    
    carousel.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
});