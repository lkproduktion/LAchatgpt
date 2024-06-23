async function sendMessage(hallo) {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.textContent = `Du: ${userInput}`;
    chatBox.appendChild(userMessage);

    document.getElementById('user-input').value = '';

    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
            },
            body: JSON.stringify({
                prompt: userInput,
                max_tokens: 150
            })
        });

        if (response.ok) {
            const data = await response.json();
            const botMessage = document.createElement('div');
            botMessage.textContent = `ChatGPT: ${data.choices[0].text.trim()}`;
            chatBox.appendChild(botMessage);
        } else {
            const errorMessage = document.createElement('div');
            errorMessage.textContent = 'Fehler beim Abrufen der Antwort von ChatGPT.';
            chatBox.appendChild(errorMessage);
        }
    } catch (error) {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = 'Fehler beim Abrufen der Antwort von ChatGPT.';
        chatBox.appendChild(errorMessage);
    }

    chatBox.scrollTop = chatBox.scrollHeight; // Scrollen Sie nach unten, um die neue Nachricht anzuzeigen
}
