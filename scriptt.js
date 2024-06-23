async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.textContent = `Du: ${userInput}`;
    chatBox.appendChild(userMessage);

    document.getElementById('user-input').value = '';

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

    const data = await response.json();
    const botMessage = document.createElement('div');
    botMessage.textContent = `ChatGPT: ${data.choices[0].text.trim()}`;
    chatBox.appendChild(botMessage);
}
