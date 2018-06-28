// A $( document ).ready() block.
$( document ).ready(function() {

    var city = "Miami";

// Here we construct our URL
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid=ff67ab04503ce887f4d15b122c1904ed";
// Write code between the dashes below to hit the queryURL with $ajax, then take the response data
// and display it in the div with an id of movie-view
// ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
   // Log the resulting object
console.log(response);

    console.log( "ready!" );
});
});