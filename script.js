

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
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
    
    // Überprüfen auf Hauptstädte
    if (capitals[lowerInput]) {
        return `Die Hauptstadt von ${capitalizeFirstLetter(lowerInput)} ist ${capitals[lowerInput]}.`;
    }
    
    // Vordefinierte Antworten
    const responses = {
        "hallo": "Hallo! Wie kann ich dir helfen?",
        "wie geht's": "Mir geht es gut, danke! Und dir?",
        "was machst du": "Ich antworte auf deine Fragen!",
        "wer bist du": "Ich bin ein Chatbot, der dir hilft.",
        "tschüss": "Auf Wiedersehen! Bis zum nächsten Mal.",
        "wie spät ist es": `Es ist ${new Date().toLocaleTimeString()}.`,
        "welches datum haben wir": `Heute ist der ${new Date().toLocaleDateString()}.`,
        "wie heißt du": "Ich bin LA Chatbot, du kannst mich Freund nennen."
        "Kennst du alex ": "ja alex ist ein hund."

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

// Hilfsfunktion, um den ersten Buchstaben zu groß zu machen
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// Liste der Hauptstädte und Länder
const capitals = {

    "afghanistan": "Kabul",
    "albania": "Tirana",
    "algeria": "Algiers",
    "andorra": "Andorra la Vella",
    "angola": "Luanda",
    "antigua and barbuda": "Saint John's",
    "argentina": "Buenos Aires",
    "armenia": "Yerevan",
    "australia": "Canberra",
    "austria": "Vienna",
    "azerbaijan": "Baku",
    "bahamas": "Nassau",
    "bahrain": "Manama",
    "bangladesh": "Dhaka",
    "barbados": "Bridgetown",
    "belarus": "Minsk",
    "belgium": "Brussels",
    "belize": "Belmopan",
    "benin": "Porto-Novo",
    "bhutan": "Thimphu",
    "bolivia": "Sucre",
    "bosnia and herzegovina": "Sarajevo",
    "botswana": "Gaborone",
    "brazil": "Brasília",
    "brunei": "Bandar Seri Begawan",
    "bulgaria": "Sofia",
    "burkina faso": "Ouagadougou",
    "burundi": "Gitega",
    "cabo verde": "Praia",
    "cambodia": "Phnom Penh",
    "cameroon": "Yaoundé",
    "canada": "Ottawa",
    "central african republic": "Bangui",
    "chad": "N'Djamena",
    "chile": "Santiago",
    "china": "Beijing",
    "colombia": "Bogotá",
    "comoros": "Moroni",
    "congo": "Kinshasa",
    "costa rica": "San José",
    "croatia": "Zagreb",
    "cuba": "Havana",
    "cyprus": "Nicosia",
    "czech republic": "Prague",
    "denmark": "Copenhagen",
    "djibouti": "Djibouti",
    "dominica": "Roseau",
    "dominican republic": "Santo Domingo",
    "east timor": "Dili",
    "ecuador": "Quito",
    "egypt": "Cairo",
    "el salvador": "San Salvador",
    "equatorial guinea": "Malabo",
    "eritrea": "Asmara",
    "estonia": "Tallinn",
    "eswatini": "Mbabane",
    "ethiopia": "Addis Ababa",
    "fiji": "Suva",
    "finland": "Helsinki",
    "france": "Paris",
    "gabon": "Libreville",
    "gambia": "Banjul",
    "georgia": "Tbilisi",
    "germany": "Berlin",
    "ghana": "Accra",
    "greece": "Athens",
    "grenada": "St. George's",
    "guatemala": "Guatemala City",
    "guinea": "Conakry",
    "guinea-bissau": "Bissau",
    "guyana": "Georgetown",
    "haiti": "Port-au-Prince",
    "honduras": "Tegucigalpa",
    "hungary": "Budapest",
    "iceland": "Reykjavik",
    "india": "New Delhi",
    "indonesia": "Jakarta",
    "iran": "Tehran",
    "iraq": "Baghdad",
    "ireland": "Dublin",
    "israel": "Jerusalem",
    "italy": "Rome",
    "ivory coast": "Yamoussoukro",
    "jamaica": "Kingston",
    "japan": "Tokyo",
    "jordan": "Amman",
    "kazakhstan": "Nur-Sultan",
    "kenya": "Nairobi",
    "kiribati": "Tarawa",
    "kosovo": "Pristina",
    "kuwait": "Kuwait City",
    "kyrgyzstan": "Bishkek",
    "laos": "Vientiane",
    "latvia": "Riga",
    "lebanon": "Beirut",
    "lesotho": "Maseru",
    "liberia": "Monrovia",
    "libya": "Tripoli",
    "liechtenstein": "Vaduz",
    "lithuania": "Vilnius",
    "luxembourg": "Luxembourg",
    "madagascar": "Antananarivo",
    "malawi": "Lilongwe",
    "malaysia": "Kuala Lumpur",
    "maldives": "Malé",
    "mali": "Bamako",
    "malta": "Valletta",
    "marshall islands": "Majuro",
    "mauritania": "Nouakchott",
    "mauritius": "Port Louis",
    "mexico": "Mexico City",
    "micronesia": "Palikir",
    "moldova": "Chisinau",
    "monaco": "Monaco",
    "mongolia": "Ulaanbaatar",
    "montenegro": "Podgorica",
    "morocco": "Rabat",
    "mozambique": "Maputo",
    "myanmar": "Naypyidaw",
    "namibia": "Windhoek",
    "nauru": "Yaren",
    "nepal": "Kathmandu",
    "netherlands": "Amsterdam",
    "new zealand": "Wellington",
    "nicaragua": "Managua",
    "niger": "Niamey",
    "nigeria": "Abuja",
    "north korea": "Pyongyang",
    "north macedonia": "Skopje",
    "norway": "Oslo",
    "oman": "Muscat",
    "pakistan": "Islamabad",
    "palau": "Ngerulmud",
    "palestine": "Ramallah",
    "panama": "Panama City",
    "papua new guinea": "Port Moresby",
    "paraguay": "Asunción",
    "peru": "Lima",
    "philippines": "Manila",
    "poland": "Warsaw",
    "portugal": "Lisbon",
    "qatar": "Doha",
    "romania": "Bucharest",
    "russia": "Moscow",
    "rwanda": "Kigali",
    "saint kitts and nevis": "Basseterre",
    "saint lucia": "Castries",
    "saint vincent and the grenadines": "Kingstown",
    "samoa": "Apia",
    "san marino": "San Marino",
    "sao tome and principe": "São Tomé",
    "saudi arabia": "Riyadh",
    "senegal": "Dakar",
    "serbia": "Belgrade",
    "seychelles": "Victoria",
    "sierra leone": "Freetown",
    "singapore": "Singapore",
    "slovakia": "Bratislava",
    "slovenia": "Ljubljana",
    "solomon islands": "Honiara",
    "somalia": "Mogadishu",
    "south africa": "Pretoria",
    "south korea": "Seoul",
    "south sudan": "Juba",
    "spain": "Madrid",
    "sri lanka": "Sri Jayawardenepura Kotte",
    "sudan": "Khartoum",
    "suriname": "Paramaribo",
    "sweden": "Stockholm",
    "switzerland": "Bern",
    "syria": "Damascus",
    "taiwan": "Taipei",
    "tajikistan": "Dushanbe",
    "tanzania": "Dodoma",
    "thailand": "Bangkok",
    "togo": "Lomé",
    "tonga": "Nuku'alofa",
    "trinidad and tobago": "Port of Spain",
    "tunisia": "Tunis",
    "turkey": "Ankara",
    "turkmenistan": "Ashgabat",
    "tuvalu": "Funafuti",
    "uganda": "Kampala",
    "ukraine": "Kyiv",
    "united arab emirates": "Abu Dhabi",
    "united kingdom": "London",
    "united
};