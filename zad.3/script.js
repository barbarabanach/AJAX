$(document).ready(function() {
    console.log('kartpfel');
    var url = 'https://restcountries.eu/rest/v1/name/';
    var countriesList = $('#countries');


    function searchCountries() {
        console.log('dzialam')
        var countryName = $('#country-name').val();
        if(!countryName.length) countryName = 'Poland';

        $.ajax({
            dataType: "json",
            url: url + countryName,
            method: 'GET',
            success: showCountriesList

        });
    }

    function showCountriesList(resp) {
        console.log(resp)
        countriesList.empty();
        resp.forEach(function(item) {
            $('<li>').text(item.name).appendTo(countriesList);

        });
    }

    $('#search').click(searchCountries);
});






