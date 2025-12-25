document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');

    // Force sidebar closed on load (important for mobile)
    sidebar.classList.remove('sidebar-open');
    overlay.classList.remove('overlay-visible');
    hamburger.classList.remove('is-active');

    function toggleSidebar() {
        sidebar.classList.toggle('sidebar-open');
        overlay.classList.toggle('overlay-visible');
        hamburger.classList.toggle('is-active');
        document.body.classList.toggle('menu-open');
    }

    hamburger.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Smooth scrolling + close sidebar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            sidebar.classList.remove('sidebar-open');
            overlay.classList.remove('overlay-visible');
            hamburger.classList.remove('is-active');
            document.body.classList.remove('menu-open');
        });
    });

    // Carousel (guarded)
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', function () {
            this.style.animationPlayState = 'paused';
        });
        carousel.addEventListener('mouseleave', function () {
            this.style.animationPlayState = 'running';
        });
    }
});
