"use strict";

let soundQuote = document.querySelector(".sound");
let QuoteSpan = document.querySelector(".quote");
let QuoteAuthor = document.querySelector(".author");
let NewQuote = document.querySelector(".new-quote");
let Twitter = document.querySelector("#twitter");
// Free Quotes API
const APIQuote = async () => {
  const response = await fetch("https://api.quotable.io/random");
  const finalResponse = await response.json();
  QuoteSpan.textContent = finalResponse.content;
  QuoteAuthor.textContent = finalResponse.author;
  //   For Font Size
  if (finalResponse.length > 50) {
    QuoteSpan.classList.add("long-quote");
  } else {
    QuoteSpan.classList.remove("long-quote");
  }
};

function twitterBtn() {
  let herfTweets = `https://twitter.com/intent/tweet?text=${QuoteSpan.textContent}--${QuoteAuthor.textContent}`;
  window.open(herfTweets, "_blank");
}
// Quote And The author audio
soundQuote.addEventListener("click", () => {
  let soundMethod = new SpeechSynthesisUtterance(
    `${QuoteSpan.textContent} And The author of the quote is ${QuoteAuthor.textContent}`
  );
  speechSynthesis.speak(soundMethod);
});
// New Quote Btn
NewQuote.addEventListener("click", APIQuote);
// Twitter Tweet Btn
Twitter.addEventListener("click", twitterBtn);

APIQuote();
