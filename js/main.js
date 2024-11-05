const hamburger = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-open');
    hamburger.classList.toggle('is-active'); // Optional: to animate the hamburger icon
});

/* Optional: Add smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close the sidebar after clicking a link
        sidebar.classList.remove('sidebar-open');
        hamburger.classList.remove('is-active');
    });
});
