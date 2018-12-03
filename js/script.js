/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/

// create an array of objects containing quotes
var quotes = [
{
 quote:"A wise man can learn more from a foolish question than a fool can from a wise answer.",
 author:"Bruce Lee",
 tags: "Athlete"
},
{
 quote:"Don't count the days, make the days count.",
 author:"Muhammad Ali",
 tags: "Athlete"
},
{
 quote:"Success is not final. Failure is not fatal. It is the courage to continue that counts.",
 author:"Winston Churchill"
},
{
 quote:"We choose to go to the moon in this decade, and for other things, not because they are easy, but because they are hard.",
 author:"John F. Kennedy",
 citation:"JFK's Moon Speech",
 year:"1962"},
{
 quote:"Science is more than a body of knowledge. It is a way of thinking",
 author:"Carl Sagan",
 citation:"The Skeptical Inquirer Vol.14",
 year:"1990"
}
];

/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/
function getRandomQuote(array)
{
// create a variable that holds a random number between 0 and 4
var randomNumber = Math.floor(Math.random()*array.length-1)+1;

// use random number to return a quote object form the array
return quotes[randomNumber];
}

// create a function to generate a random background color
function randomColor()
{
var r= Math.floor(Math.random()*255).toString();
var g= Math.floor(Math.random()*255).toString();
var b= Math.floor(Math.random()*255).toString();
var color = 'rgb('+r+','+g+','+b+')';
console.log(color);
document.body.style.background = color;
}


function printQuote()
{
// call getRandomQuote to get a quote object form the array.
getQuote = getRandomQuote(quotes);

// create variable to hold an empty string
var html = "";
html += "<p class='quote'>" + getQuote.quote + "</p>";
html += "<p class='source'>" +getQuote.author + "</p>";
// if quote objects contain additional properties add them to html string
if(getQuote.citation)
{
html += "<p><span class='citation'>" + getQuote.citation + "</span></p>";
}
if(getQuote.year)
{
html += "<p><span class='year'>" + getQuote.year + "</span></p>";
}
if(getQuote.tags)
{
  html += "<p><span class='tags'>" + getQuote.tags + "</span></p>";
}
//call the randomColor function to change background color for every quote
randomColor();
document.getElementById('quote-box').innerHTML = html;

//create function to generate random color and change background color

}




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
