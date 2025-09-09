
// Wait for the entire HTML document to be loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Initialize EmailJS with your Public Key
    emailjs.init('MHLqfBjxj3ZdjEK-W'); // <-- Make sure this is your Public Key

    // Get the form and button elements from the DOM
    const contactForm = document.getElementById('contact-form-my');
    const sendButton = document.getElementById('send-button');

    // Add a 'submit' event listener to the form
    contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior (which reloads the page)
        event.preventDefault();

        // Change button text to show work is in progress
        sendButton.innerText = 'Sending...';

        const serviceID = 'service_t7hmv4b'; // Your Service ID
        const templateID = 'template_01zrjn8'; // Your Template ID

        // Send the form data using EmailJS
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                sendButton.innerText = 'Submit';
                alert('Your message was sent successfully!');
                contactForm.reset(); // Clear the form fields
            }, (err) => {
                sendButton.innerText = 'Submit';
                alert('Failed to send message. Error: ' + JSON.stringify(err));
                console.error("EmailJS Error:", err);
            });
    });
});