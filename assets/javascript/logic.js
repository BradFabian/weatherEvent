$(document).ready(function(){
    $("#submit-button").on("click",function(){
        var location= $("#location").val();
        console.log(location);
    })
    var placesAutocomplete = places({
        container: document.querySelector('#location'),
        type: 'city',
        aroundLatLngViaIP: false,
        templates: {
            value: function (suggestion) {
                return suggestion.name;
            }
        }
    });
});
