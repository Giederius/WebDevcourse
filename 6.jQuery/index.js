//  SELECTING ELEMENTS WITH jQuery

// changes the color of h1 to red.
// same as document.querySelector("h1").style.color = "red";
// $("h1").css("color", "red");

// selecting elements
// document.querySelector("h1"); --- javascript
// jQuery method:

// $("h1.title"); // selects h1 that has a class of title
// $("#header h1"); // selects h1 that has an id of header

// no difference between selecting one or selecting many
// still going to use the $("element name"); method.

// -------------------------------------------------

//  EDITING CSS

// .css("parameter");
// $("h1").css("color", "green");
//  to get the value of color with jQeury you would only need
//  to write $("h1").css("color"); and console log it for output

// console.log($("h1").css("color"));

$("h1").addClass("big-title"); // adds class

$("h1").removeClass("big-title"); // removes class

// to add multiple classes you would do the same, but add a space between them. like so:

$("h1").addClass("big-title margin-50"); //adds multiple classes

// to look up if an item has a class:
$("h1").hasClass("margin-50");

// -------------------------------------------------

//  EDITING TEXT

$("h1").text("Bye"); // changes text of h1

$("button").text("Don't click me"); // changes all button text updated

// can also use html for adding more than just a text.
$("button").html("<em>Hey</em>"); //buttons are not emphasized and with hey

// -------------------------------------------------

// EDITING ATTRIBUTES
// src. href ir tt.
// attr = attribute

console.log($("img").attr("src")); // gets attribute value

// setting ancher tag value:
$("a").attr("href", "http://www.bing.com");

// -------------------------------------------------

// ADDING EVENT LISTENERS

// adds listener to h1 to change color to purple
// $("h1").click(function () {
//   $("h1").css("color", "purple");
// });

// adding event listener to all buttons
// with Javascript we needed to use for loop

// click listener, for mouse presses
// $("button").click(function () {
//   $("h1").css("color", "purple");
// });

//key press listener

// $("input").keypress(function () {
//   $("h1").text(event.key);
// });

// to log a key press for a whole website we need to target
// document, instead of some element.

// $("h1").on("mouseoever", function () {
//   $("h1").css("color", "purple");
// });

// -------------------------------------------------

// ADDING and REMOVING ELEMENTS
// adds a button before h1
$("h1").before("<button>NWE</button>");

// adds a button after h1
$("h1").after("<button>NWE</button>");

// .prepend adds an item just before the selected item after the opening tag
$("h1").prepend("<button>NWE</button>");

// .append adds an item just after the selected item before the closing tag
$("h1").append("<button>NWE</button>");

// -------------------------------------------------

// Adding animations

// hiding the h1 when clicking the button

// adding fadeout after selected element helps it with fading in.
// fadetoggle does the same as toggle

//  slideUp, slideDown also the same.
// $("button").on("click", function () {
//   $("h1").fadeToggle(); //putting toggle lets hiding and showing it
// });

// $("button").on("click", function () {
//   $("h1").animate({ opacity: 0.5 }); //lets you animate things
// });
// you can only animate the parameters that have numeric value, so you can't change color and etc.
//  adding percentage value with "20%" is allowed as well

// you can combine animations together

$("button").on("click", function () {
  $("h1").slideDown().animate({ opacity: 0.5 });
});
