//document.querySelector('button');
//document.querySelector('.new-quote button');
//const document.querySelector('#js-new-quote');
const quoteButton = document.querySelector('#js-new-quote');

quoteButton.addEventListener('click', getQuote);
const endpoint = 'https://animechan.vercel.app/api/random/anime?title=one%20piece';

async function getQuote(){
    console.log("the quote button was clicked");
    try {
      const response = await fetch(endpoint)
      if(!response.ok){
        throw Error(response.statusText)
      }
      const json = await response.json();
      console.log(json);
      displayQuote(json.quote);

    }catch(err){
      console.log(err);
      alert('Fail');
    }
}

function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
const theButton = document.querySelector(".new-quote");

theButton.addEventListener("mouseover", () => {
    theButton.classList.add("new-quote--loading");
});
theButton.addEventListener("click", () => {
    theButton.classList.remove("new-quote--loading");
});


const randomHexColor = () => {
  // Generate a random 2 digit hex number, padded with a 0 if necessary
  const part = () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, '0');
  const r = part();
  const g = part();
  const b = part();
  return `#${r}${g}${b}`;
};

// Example
console.log(randomHexColor());
