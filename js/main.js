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

    // ── Scroll progress bar ──────────────────────────────────────
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollHint = document.querySelector('.scroll-hint');

    function onScroll() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollProgress && docHeight > 0) {
            scrollProgress.style.width = (scrollTop / docHeight * 100) + '%';
        }
        // Fade out the scroll hint once the user starts scrolling
        if (scrollHint && scrollTop > 60) {
            scrollHint.style.opacity = '0';
            scrollHint.style.transition = 'opacity 0.5s ease';
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    // ── Scroll reveal via IntersectionObserver ───────────────────
    const revealEls = document.querySelectorAll('.reveal-up');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));

    // ── 3D card tilt on carousel items ───────────────────────────
    document.querySelectorAll('.carousel-item').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width  - 0.5;
            const y = (e.clientY - rect.top)  / rect.height - 0.5;
            this.style.transform  = `perspective(700px) rotateX(${-y * 10}deg) rotateY(${x * 14}deg) scale(1.025)`;
            this.style.transition = 'transform 0.08s ease, box-shadow 0.3s ease';
            this.style.boxShadow  = `${x * -24}px ${y * -24}px 50px rgba(0,0,0,0.2)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform  = '';
            this.style.transition = 'transform 0.55s ease, box-shadow 0.55s ease';
            this.style.boxShadow  = '';
        });
    });
});