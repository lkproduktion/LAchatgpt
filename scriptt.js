function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    const chatBox = document.getElementById('chat-box');
    
    // Benutzer Nachricht anzeigen
    const userMessage = document.createElement('div');
    userMessage.textContent = `Du: ${userInput}`;
    chatBox.appendChild(userMessage);

    // Benutzer Eingabe zurücksetzen
    document.getElementById('user-input').value = '';

    // ChatGPT Nachricht anzeigen
    const botMessage = document.createElement('div');
    botMessage.textContent = `ChatGPT: ich liebe dich kvakva.`;
    chatBox.appendChild(botMessage);

    // Scrollen Sie nach unten, um die neue Nachricht anzuzeigen
    chatBox.scrollTop = chatBox.scrollHeight;
}
