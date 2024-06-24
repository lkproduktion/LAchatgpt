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
    botMessage.textContent = `ChatGPT: ${generateResponse(userInput)}`;
    chatBox.appendChild(botMessage);

    // Scrollen Sie nach unten, um die neue Nachricht anzuzeigen
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateResponse(userInput) {
    const responses = {
        "Hallo": "Hallo! Wie kann ich dir helfen?",
        "Wie geht's": "Mir geht es gut, danke! Und dir?",
        "Was machst du": "Ich antworte auf deine Fragen!",
        "Wer bist du": "Ich bin ein Chatbot, der dir hilft.",
        "Tschüss": "Auf Wiedersehen! Bis zum nächsten Mal."
    };
    
    // Standardantwort, falls keine passende Antwort gefunden wird
    return responses[userInput.toLowerCase()] || "Der zeit wird bearbeitet.";
}

