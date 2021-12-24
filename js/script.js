/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/



/***
 Bellow are  quotes in an array that will populate at random when the user click the button
 ***/

const quotes = [{
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela',
    citation: 'internet',
    year: 2021
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney',

  },
  {
    quote: 'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma - which is living with the results of other peoples thinking',
    source: 'Steve Jobs',

  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor..',
    source: 'Eleanor Roosevelt',

  },
  {
    quote: 'If you set your goals ridiculously high and its a failure, you will fail above everyone elses success.',
    source: 'James Cameron',

  }

];



/***
 random quote function. Using the renadom number function this will make it so DOM will reach in and grab a random array from the list of quotes and display them.
 ***/

function getRandomQuote() {

  const randomQuote = Math.floor(Math.random() * quotes.length);

  return quotes[randomQuote];
}




/***
 Code below works with the previous function and prints the HTML to the page. The 'if' statements make it so the addtitional 'citation' and 'year' that are only applied to a couple of the quotes will appear.
 the function is called and the HTML is returned every time the user refreshes the page, displaying a random quote each time.
 ***/
function printQuote() {
  const displayQuote = getRandomQuote();

  let html = `
			<p class="quote">${displayQuote.quote}</p>
			<p class="source">${displayQuote.source};
			`

  if (displayQuote.citation) {
    html += `<span class="citation">${displayQuote.citation}</span>`
  }

  if (displayQuote.year) {
    html += `<span class="year">${displayQuote.year}</span>`
  }



  html = html.concat(`</p>`);

  return document.getElementById("quote-box").innerHTML = html;






}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
