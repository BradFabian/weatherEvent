$(document).ready(function(){
    $("#submit-button").on("click",function(){
        var location= $("#location").val();
        console.log(location);
    })

    var config = {
        apiKey: "AIzaSyAkkbAUFohZ84LOVG6-YEdvPQYLiM5ZspU",
        authDomain: "train-scheduler-e510b.firebaseapp.com",
        databaseURL: "https://train-scheduler-e510b.firebaseio.com",
        projectId: "train-scheduler-e510b",
        storageBucket: "train-scheduler-e510b.appspot.com",
        messagingSenderId: "586386758280"
      };
      firebase.initializeApp(config);

      var database = firebase.database();

      database.ref().on()
})
