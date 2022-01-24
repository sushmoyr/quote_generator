const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];
//show New Quote
const newQuote = () => {
    const index = Math.floor(apiQuotes.length * Math.random());
    const quote = apiQuotes[index];
    authorText.textContent = (quote['author'] != null) ? quote['author'] : 'Unknown';
    quoteText.textContent = quote['text'];
}

// Get Quotes from API
const getQuotes = async () => {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (e) {

    }
}



getQuotes();