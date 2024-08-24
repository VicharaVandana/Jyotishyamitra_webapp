document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Collect form data
        const name = document.getElementById('contact_nom').value;
        //const email = document.getElementById('contact_email').value;
        const email = "shyam.bhat@gmail.com"
        const subject = document.getElementById('contact_sujet').value;
        const message = document.getElementById('contact_message').value;

        // Encode data for URL
        const encode = encodeURIComponent;
        const mailtoLink = `mailto:${email}?subject=${encode(subject)}&body=${encode(`Name: ${name}\nMessage: ${message}\n\n`)}`;

        // Open the default email client
        window.location.href = mailtoLink;
        window.location.href = '/';
    });
});
