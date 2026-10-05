// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('action-btn');
    const message = document.getElementById('message');

    // Add click event listener to the button
    button.addEventListener('click', () => {
        // Toggle the visibility of the success message
        message.classList.toggle('hidden');
    });
});