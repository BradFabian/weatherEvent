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

//API Working Code//


    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    

    // Here we grab the text from the input box
    

    // Here we construct our URL
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "miami" + "&units=imperial&appid=ff67ab04503ce887f4d15b122c1904ed";



    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      // Log the resulting object
      console.log(response);

      var iconcode = response.weather[0].icon;
      var iconurl = 'http://openweathermap.org/img/w/' + iconcode + '.png';

      // Transfer content to HTML
      $(".city").html("<h1>" + response.name + " Weather Details</h1>");
      $('.icon').html("<img id='wicon' src=" + iconurl + " alt='Weather icon'>");
      $(".rain").text("Rain:" + response.weather[0].description);
      $(".wind").text("Wind Speed:" + response.wind.speed);
      $(".humidity").text("Humidity:" + response.main.humidity);
      $(".temp").text("Temperature (F) " + response.main.temp);

      // Log the data in the console as well
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + response.main.temp);
    });

    

    // Event City Query on Page Load//
    var eventURL = "https://api.eventful.com/json/events/search?l=" + city + "&app_key=8qj2VzB2Xt2BG7Zh + &page_size=5" ;

    $.ajax({
      url: eventURL,
      method: "GET",
      dataType: 'jsonp'
    }).then(function (response) {

      var results = response.events.event
      // Looping over every result item
      for (var i = 0; i < results.length; i++) {
        // Obtain a reference to the tbody element in the DOM
        var tbody = $("#eventSchedule");
        // Create and save a reference to new empty table row
        var tr = $("<tr></tr>");
        // Create and save references to 6 td elements 
        var city = response.events.event[i].city_name;
        var date = response.events.event[i].start_time;
        var venueName = response.events.event[i].venue_name;
        var description = response.events.event[i].description;
        var address = response.events.event[i].venue_address;
        var contact = response.events.event[i].venue_url;
        var image = response.events.event[i].title;

        $("#Event-Table > tbody").append("<tr><td>" + date + "</td><td>" + image + "</td><td>" + venueName + 
	   "</td><td>" + address + "</td><td>" + "</td></tr>");
      }
    });
   


    $( "#submit-button" ).click(function() {
      alert( "Handler for .click() called." );

      var city = $("#search-input").val().trim();

          // Event City Query on Page Load//
          var eventURL = "https://api.eventful.com/json/events/search?l=" + city + "&app_key=8qj2VzB2Xt2BG7Zh + &page_size=5" ;

          $.ajax({
            url: eventURL,
            method: "GET",
            dataType: 'jsonp'
          }).then(function (response) {

            var results = response.events.event
            // Looping over every result item

            //Clear Tables
            $("#Event-Table > tbody").empty();
            for (var i = 0; i < results.length; i++) {
              // Obtain a reference to the tbody element in the DOM
              var tbody = $("#eventSchedule");
              // Create and save a reference to new empty table row
              var tr = $("<tr></tr>");
              // Create and save references to 6 td elements 
              var city = response.events.event[i].city_name;
              var date = response.events.event[i].start_time;
              var venueName = response.events.event[i].venue_name;
              var description = response.events.event[i].description;
              var address = response.events.event[i].venue_address;
              var contact = response.events.event[i].venue_url;
              var image = response.events.event[i].title;

              $("#Event-Table > tbody").append("<tr><td>" + date + "</td><td>" + image + "</td><td>" + venueName + 
          "</td><td>" + address + "</td><td>" + "</td></tr>");
            }
          });

    });

});