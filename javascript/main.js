var goBtn = document.querySelector('.js-go');
var inputValue = document.querySelector('input');
var giphyContainer = document.getElementsByClassName('giphy-container');

 goBtn.addEventListener('click', function () {
    cleanContainer();
    ajaxCall(inputValue.value);
 });
 document.querySelector('.js-input').addEventListener('keyup', function (e) {
    // if enter key pressed
    if (e.which === 13) {
        cleanContainer();
        ajaxCall(inputValue.value);
    }
 });

function ajaxCall(inputValue) {
    var url = "http://api.giphy.com/v1/gifs/search?q=" + inputValue + "&api_key=P8H4gXpuD2318llilCez3bGYt2ENjSqD";
        // AJAX Request
        var GiphyAJAXCall = new XMLHttpRequest();
        GiphyAJAXCall.open( 'GET', url );
        GiphyAJAXCall.send();
        GiphyAJAXCall.addEventListener('load',function (e) {
            var giphyData = e.target.response;
            displayData(giphyData); 
            console.log(inputValue);
        });   
}

function displayData(input){
    var gifData = JSON.parse(input);
    console.log(gifData);
    var gifUrls = gifData.data;
    gifUrls.forEach(function (gif) {
        var url = gif.images.fixed_height.url;
        giphyContainer[0].innerHTML += "<img src=\""+ url +"\" class =\"container-image\">";
    });
}


function cleanContainer() {
    var container = document.querySelector(".giphy-container");
    container.innerHTML = "";
}