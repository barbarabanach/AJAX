var url = 'http://api.icndb.com/jokes/random';

var button = document.getElementById('get-joke');
button.addEventListener('click', function() {
    getJoke();
});


var paragraph = document.getElementById('joke');

function getJoke() {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function() {
        var response = JSON.parse(request.response);
        paragraph.innerText = response.value.joke;
    });
    request.send();
}
