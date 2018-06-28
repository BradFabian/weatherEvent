// A $( document ).ready() block.
$(document).ready(function () {

  // Algolia input box
  var placesAutocomplete = places({
    container: document.querySelector('#city'),
    type: 'city',
    aroundLatLngViaIP: false,
    templates: {
      value: function (suggestion) {
        return suggestion.name;

        var city = "Miami";

        // Here we construct our URL
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=ff67ab04503ce887f4d15b122c1904ed";
        // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // and display it in the div with an id of movie-view
        // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {
          // Log the resulting object
          console.log(response);

          console.log("ready!");
        });

        //API Working Code//
        $("#btn").on("click", function (event) {

          // event.preventDefault() can be used to prevent an event's default behavior.
          // Here, it prevents the submit button from trying to submit a form when clicked
          event.preventDefault();

          // Here we grab the text from the input box
          var city = $("#cityInput").val().trim();

          // Here we construct our URL
          var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=ff67ab04503ce887f4d15b122c1904ed";



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

          city

          // Event City Query//
          var eventURL = "https://api.eventful.com/json/events/search?l=" + city + "&app_key=8qj2VzB2Xt2BG7Zh";


          $.ajax({
            url: eventURL,
            method: "GET",
            dataType: 'jsonp'
          }).then(function (response) {
            // Log the resulting object



            console.log(response.events.event[0])
            console.log(response.events.event[1])
            console.log(response.events.event[2])
            console.log(response.events.event[3])
            console.log(response.events.event[4])
            console.log(response.events.event[5])

            var results = response.events.event




            // Looping over every result item
            for (var i = 0; i < results.length; i++) {

              // Obtain a reference to the tbody element in the DOM
              var tbody = $("#eventSchedule");
              // Create and save a reference to new empty table row
              var tr = $("<tr></tr>");
              // Create and save references to 6 td elements 
              var city = '<td>' + response.events.event[i].city_name + '</td>';
              var date = '<td>' + response.events.event[i].start_time + '</td>';
              var venueName = '<td>' + response.events.event[i].venue_name + '</td>';
              var description = '<td>' + response.events.event[i].description + '</td>';
              var address = '<td>' + response.events.event[i].venue_address + '</td>';
              var contact = '<td>' + response.events.event[i].venue_url + '</td>';
              console.log(city);
              console.log(date);
              console.log(venueName);
              console.log(description);
              console.log(address);
              console.log(contact);

            }
          });
        });

      });