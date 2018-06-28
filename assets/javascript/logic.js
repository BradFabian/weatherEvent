var placesAutocomplete = places({
    container: document.querySelector('#search-inputgit '),
    type: 'city',
    aroundLatLngViaIP: false,
    templates: {
        value: function (suggestion) {
            return suggestion.name;
        }
    }
});

