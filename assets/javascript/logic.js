//database initialization
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAPiXUM5pySi3Eg0I3rkpNjN_O53VLi2Jw",
        authDomain: "weatherevent-d8ee7.firebaseapp.com",
        databaseURL: "https://weatherevent-d8ee7.firebaseio.com",
        projectId: "weatherevent-d8ee7",
        storageBucket: "weatherevent-d8ee7.appspot.com",
        messagingSenderId: "444172683620"
    };
    firebase.initializeApp(config);

    var database = firebase.database();
    var searches = "";
    var time = "";


// A $( document ).ready() block.
$(document).ready(function () {
    //Algolia API
    // Algolia input box
    var placesAutocomplete = places({
        container: document.querySelector('#search-input'),
        type: 'city',
        aroundLatLngViaIP: false,
        templates: {
            value: function (suggestion) {
                return suggestion.name;
                console.log("work")
            }
        }
    });

    var city = "Miami";

    // Event City Query on Page Load//
    var eventURL = "https://api.eventful.com/json/events/search?l=" + city + "&app_key=8qj2VzB2Xt2BG7Zh + &page_size=5";

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

    //5 Day Weather Forecast on Page Load

    // Here we construct our URL
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=ff67ab04503ce887f4d15b122c1904ed";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Log the resulting object
        console.log(response);
        /*var iconcode = response.list.weather[i].icon;
        var iconurl = 'http://openweathermap.org/img/w/' + iconcode + '.png';*/
        var results = response.list
        $('tbody').empty();

        for (var i = 0; i < results.length; i++) {
            if (i % 8 === 0) {
                console.log(response.list[i])
                var iconcode = response.list[i].weather[0].icon;
                var iconurl = 'http://openweathermap.org/img/w/' + iconcode + '.png';
                console.log(iconcode);

                console.log("<img id='wicon' src=" + iconurl + " alt='Weather icon'>");
                console.log("Rain:" + response.list[i].weather[0].description);

                console.log("Wind Speed:" + response.list[i].wind.speed);
                console.log("Humidity:" + response.list[i].main.humidity);
                console.log("Temperature (F) " + response.list[i].main.temp);

                // Create and save a reference to new empty table row
                var tr = $("<tr>");
                // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
                // var cityRow = '<td>' + response.Title + '</td>';
                // var iconRow = '<td> <img id="wicon" src=' + iconurl + " alt='Weather icon'></td>";
                // var rainRow = '<td>' + response.list[i].weather[0].description + '</td>';
                // var windRow = '<td>' + response.list[i].wind.speed + '</td>';
                // var humidityRow = '<td>' + response.list[i].main.humidity + '</td>';
                // var tempRow = '<td>' + response.list[i].main.temp + '</td>';

                var cityRow = response.Title;
                var iconRow = '<img id="wicon" src=' + iconurl + " alt='Weather icon'>";
                var rainRow = response.list[i].weather[0].description;
                var windRow = response.list[i].wind.speed;
                var humidityRow = response.list[i].main.humidity;
                var tempRow = response.list[i].main.temp;

                $("#Weather-Table > tbody").append(

                    "<tr><td>"
                    + iconRow + "</td><td>" + rainRow + "</td><td>" + windRow + "</td><td>" + humidityRow + "</td><td>" + tempRow + "</td><td>" +
                    "</td></tr>");
            }

        }

    });
});

$("#submit-button").click(function () {

    var city = $("#search-input").val().trim();

    // Event City Query on Submit Click//
    var eventURL = "https://api.eventful.com/json/events/search?l=" + city + "&app_key=8qj2VzB2Xt2BG7Zh + &page_size=5";

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

    //5 Day Weather Forecast on Page Load

    // Here we construct our URL
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=ff67ab04503ce887f4d15b122c1904ed";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Log the resulting object
        console.log(response);
        /*var iconcode = response.list.weather[i].icon;
        var iconurl = 'http://openweathermap.org/img/w/' + iconcode + '.png';*/
        var results = response.list
        $('tbody').empty();

        for (var i = 0; i < results.length; i++) {
            if (i % 8 === 0) {
                console.log(response.list[i])
                var iconcode = response.list[i].weather[0].icon;
                var iconurl = 'http://openweathermap.org/img/w/' + iconcode + '.png';
                console.log(iconcode);

                console.log("<img id='wicon' src=" + iconurl + " alt='Weather icon'>");
                console.log("Rain:" + response.list[i].weather[0].description);

                console.log("Wind Speed:" + response.list[i].wind.speed);
                console.log("Humidity:" + response.list[i].main.humidity);
                console.log("Temperature (F) " + response.list[i].main.temp);

                // Create and save a reference to new empty table row
                var tr = $("<tr>");
                // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
                // var cityRow = '<td>' + response.Title + '</td>';
                // var iconRow = '<td> <img id="wicon" src=' + iconurl + " alt='Weather icon'></td>";
                // var rainRow = '<td>' + response.list[i].weather[0].description + '</td>';
                // var windRow = '<td>' + response.list[i].wind.speed + '</td>';
                // var humidityRow = '<td>' + response.list[i].main.humidity + '</td>';
                // var tempRow = '<td>' + response.list[i].main.temp + '</td>';

                var cityRow = response.Title;
                var iconRow = '<img id="wicon" src=' + iconurl + " alt='Weather icon'>";
                var rainRow = response.list[i].weather[0].description;
                var windRow = response.list[i].wind.speed;
                var humidityRow = response.list[i].main.humidity;
                var tempRow = response.list[i].main.temp;

                $("#Weather-Table > tbody").append(

                    "<tr><td>"
                    + iconRow + "</td><td>" + rainRow + "</td><td>" + windRow + "</td><td>" + humidityRow + "</td><td>" + tempRow + "</td><td>" +
                    "</td></tr>");
            }

        }

    });

    //Add search to recent searches databases and update recent searches box
    events = $("#search-input").val().trim();
    var stamp = moment().format("x");

    database.ref().push({
        searches: events,
        time: stamp
        
    })
    $("#search-input").val("");
});
database.ref().limitToLast(10).on("child_added", function (snapshot) {

    $("#recent-searches").prepend("<div> Events in " + snapshot.val().searches + " " + moment.unix(snapshot.val().time).startOf("minute").fromNow() + "</div>");


}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code)
});

