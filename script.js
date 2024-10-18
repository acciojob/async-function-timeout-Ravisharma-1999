// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Attach the click event to the button
    document.getElementById('btn').addEventListener('click', async () => {
        const text = document.getElementById('text').value;
        const delay = parseInt(document.getElementById('delay').value, 10);

        // Validate input
        if (!text || isNaN(delay) || delay < 0) {
            alert("Please enter a valid message and a non-negative delay.");
            return;
        }

        // Call the function to display the message after the delay
        await displayMessageAfterDelay(text, delay);
    });
});

// Function to create a delay using a Promise
const displayMessageAfterDelay = async (message, delay) => {
    // Create a promise that resolves after the specified delay
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // Display the message in the output div
    document.getElementById('output').innerText = message;
};
