const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

const loading = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

const loaded = () => {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

//show New Quote
const newQuote = () => {
    const index = Math.floor(apiQuotes.length * Math.random());
    const quote = apiQuotes[index];
    authorText.textContent = (quote['author'] != null) ? quote['author'] : 'Unknown';

    if (quote.text.length > 100){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote['text'];
}

// Get Quotes from API
const getQuotes = async () => {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        loading();
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
        loaded()
    } catch (e) {

    }
}

// Tweet Quote
const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


getQuotes();
