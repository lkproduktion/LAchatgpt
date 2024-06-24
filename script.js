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
    const lowerInput = userInput.toLowerCase();
    
    // Vordefinierte Antworten
    const responses = {
        "hallo": "Hallo! Wie kann ich dir helfen?",
        "wie geht's": "Mir geht es gut, danke! Und dir?",
        "was machst du": "Ich antworte auf deine Fragen!",
        "wer bist du": "Ich bin ein Chatbot, der dir hilft.",
        "tschüss": "Auf Wiedersehen! Bis zum nächsten Mal."
    };
    
    // Überprüfen auf vordefinierte Antworten
    if (responses[lowerInput]) {
        return responses[lowerInput];
    }

    // Mathematische Berechnungen
    const mathMatch = userInput.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);
    if (mathMatch) {
        const num1 = parseFloat(mathMatch[1]);
        const operator = mathMatch[2];
        const num2 = parseFloat(mathMatch[3]);
        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = "Unbekannter Operator";
        }
        return `Das Ergebnis von ${num1} ${operator} ${num2} ist ${result}.`;
    }
    
    // Standardantwort, falls keine passende Antwort gefunden wird
    return "Kann deine Frage zurzeit nicht beantworten, bin aber dabei, mich zu verbessern.";
}
