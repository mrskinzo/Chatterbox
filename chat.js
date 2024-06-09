document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const userInput = e.target.value;
        const chatBox = document.getElementById('chat-box');
        
        // Display user message
        const userMessage = document.createElement('p');
        userMessage.textContent = userInput;
        userMessage.className = 'user-message'; // Add a class for styling if needed
        chatBox.appendChild(userMessage);
        
        // Clear the input field
        e.target.value = '';

        // Bot response
        const botMessage = document.createElement('p');
        botMessage.textContent = "I am a bot, how can I help you?";
        botMessage.className = 'bot-message'; // Add a class for styling if needed
        chatBox.appendChild(botMessage);

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
