document.addEventListener('DOMContentLoaded', () => {
    // Get all necessary DOM elements
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const initialMessage = document.getElementById('initial-message');
    const container = document.querySelector('.container');

    // Set up the first interactive step: opening the envelope
    envelope.addEventListener('click', () => {
        // Animate the envelope opening
        envelope.classList.add('open');
        
        // Hide the initial message
        initialMessage.classList.add('hidden');

        // Set up the heart spawning after a delay that matches the animation
        setTimeout(() => {
            setupHeartSpawning();
        }, 1000); // 1000ms delay to match the CSS animation duration
    }, { once: true }); // The event listener will only fire once

    // Function to set up the heart spawning on screen click
    function setupHeartSpawning() {
        container.addEventListener('click', (event) => {
            // Create a new heart element
            const heart = document.createElement('div');
            heart.innerText = '❤️';
            heart.classList.add('heart');

            // Set a random position for the heart based on the click event coordinates
            heart.style.left = `${event.clientX}px`;
            heart.style.top = `${event.clientY}px`;

            // Append the heart to the container
            container.appendChild(heart);
            
            // Remove the heart after its animation is finished to prevent clutter
            // Durasi ini disesuaikan dengan durasi animasi 'floatUp' di file CSS
            setTimeout(() => {
                heart.remove();
            }, 3000); // Durasi diubah dari 2000ms menjadi 3000ms
        });
    }
});
