var placesAutocomplete = places({
    container: document.querySelector('#search-input'),
    type: 'city',
    aroundLatLngViaIP: false,
    templates: {
        value: function (suggestion) {
            return suggestion.name;
        }
    }
});

