// This function builds the URL
function makeUrl (theCity) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + theCity + "&APPID=cf8903b4094a518b0d20af5a7ebe6e8b";
    return url;
    };

function kelToFahr (kelvins) {
    var fahr = Math.floor(kelvins * (9/5) - 459.67);
    var temp = fahr.toString();
    return 'Temperature: ' + temp + String.fromCharCode(176) + 'F';
}


$(document).ready(function() {
console.log('NOW READY')
 



    $('form').submit(function(event) {
        event.preventDefault();
        });

        $('#searchButton').click (function () {

            var city = $('#citySearch').val();
            
            $('#cityName').append('<h1 id="cityHeader">' + city + '</h1');
            console.log(city);
            var cityTempInfo = makeUrl(city);
            $.get(cityTempInfo, function(weather) {
                var temp = weather.main.temp;
                console.log(weather.main.temp);
                $('#temp').append(kelToFahr(temp));
            
            },'json');

            return false;
        
        });

    $('#reset').click(function(){
            location.reload();    
        
            




        
            
        // 
            
        // console.log(url);
        
        // return false;

    });


    
});










// My API key cf8903b4094a518b0d20af5a7ebe6e8b

// http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&APPID=