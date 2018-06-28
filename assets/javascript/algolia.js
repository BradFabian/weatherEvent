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



