document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const userInput = e.target.value;
        const chatBox = document.getElementById('chat-box');
        const userMessage = document.createElement('p');
        userMessage.textContent = userInput;
        chatBox.appendChild(userMessage);
        e.target.value = '';
    }
});
