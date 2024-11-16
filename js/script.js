const quotes = [
    "Be yourself; everyone else is already taken.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.",
    "Logic will get you from A to Z; imagination will get you everywhere.",
    "Do what you can, with what you have, where you are.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Creativity is knowing how to hide your sources.",
    "If you try to fail, and succeed, which have you done?"
];

const quoteDisplay = document.getElementById("quots");
const quoteButton = document.getElementById("btn");

function newQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomNumber];
}

quoteButton.onclick = newQuote;