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

// Form submission with clearing fields on success
const form = document.querySelector('form'); // Select the form element

if (form) {
    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent default form submission

        // Capture form data
        const formData = new FormData(form);

        // Send data to Formspree
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                alert('Your message has been sent successfully!');
                form.reset(); // Clear form fields
            } else {
                alert('Oops! There was a problem sending your message.');
            }
        } catch (error) {
            alert('There was an error sending your message. Please try again later.');
        }
    });
}
