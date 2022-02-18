const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// let apiQuotes = [];

// Show new quote
function newQuote() {
    // pick a random quote from apiQuotes array
    // const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    // Check if Author field is blank and replace it with 'unknown'
    if (!quote.author) {
        authorText.textContent = "unknown";
    } else {
        authorText.textContent = quote.author;
    }

    // check Quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}

// Tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// // Get Quotes From API
// async function getQuotes() {
//     const apiURL = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiURL);
//         apiQuotes = await response.json();
//         newQuote()
//     } catch (error) {
//         // Catch Error Here
//     }
// }

// On Load
// getQuotes();
newQuote();