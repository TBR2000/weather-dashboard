//date set
var today = moment().format("Do MMM YYYY")
var todayPlusOne = moment().add(1, 'days').format("Do MMM YYYY")
var todayPlusTwo = moment().add(2, 'days').format("Do MMM YYYY")
var todayPlusThree = moment().add(3, 'days').format("Do MMM YYYY") 
var todayPlusFour = moment().add(4, 'days').format("Do MMM YYYY")
var todayPlusFive = moment().add(5, 'days').format("Do MMM YYYY")
var main = document.getElementById('main-card-header');
var dayOne = document.getElementById('day1head');
var dayTwo = document.getElementById('day2head');
var dayThree = document.getElementById('day3head');
var dayFour = document.getElementById('day4head');
var dayFive = document.getElementById('day5head');
main.innerHTML=today;
dayOne.innerHTML=todayPlusOne;
dayTwo.innerHTML=todayPlusTwo;
dayThree.innerHTML=todayPlusThree;
dayFour.innerHTML=todayPlusFour;
dayFive.innerHTML=todayPlusFive;


//City select

var button = document.getElementById('button')
button.addEventListener("click", function(){
	
//Build query string

var city = document.getElementById('city').value

fetch('http://api.positionstack.com/v1/forward?access_key=9fa7dc70a5044eb41a03d3ca66779ff4&query=' + city + '&output=json')

.then(function (response) {
	return response.json();
  })
.then(function(data) {
	console.log(data);
	var lat = data.data[0].latitude
    var lon = data.data[0].longitude
    var fetchRequest = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=metric&exclude=hourly,minutely,alerts&appid=b523b401eb24eb396e66606847c2d6e3'

//API call

return fetch(fetchRequest)	 
   
})

.then(function (response) {
	return response.json();
  })

//append weather cards
.then(function (data) {
	console.log(data);
var todayTemp = document.getElementById('temp1');
var todayHum = document.getElementById('hum1');
var todayWind = document.getElementById('wind1');
var uv = document.getElementById('uv');
var temp2 = document.getElementById('temp2');
var hum2 = document.getElementById('hum2');
var wind2 = document.getElementById('wind2');
var temp3 = document.getElementById('temp3');
var hum3 = document.getElementById('hum3');
var wind3 = document.getElementById('wind3');
var temp4 = document.getElementById('temp4');
var hum4 = document.getElementById('hum4');
var wind4 = document.getElementById('wind4');
var temp5 = document.getElementById('temp5');
var hum5 = document.getElementById('hum5');
var wind5 = document.getElementById('wind5');
var temp6 = document.getElementById('temp6');
var hum6 = document.getElementById('hum6');
var wind6 = document.getElementById('wind6');
var tempRead1 = data.daily[0].temp.day;
var humRead1 = data.daily[0].humidity;
var windRead1= data.daily[0].wind_speed;
var uvRead= data.daily[0].uvi;
var icon1 = data.daily[0].weather[0].icon; 
var tempRead2 = data.daily[1].temp.day;
var humRead2 =data.daily[1].humidity;
var windRead2= data.daily[1].wind_speed;
var icon2 = data.daily[1].weather[0].icon; 
var tempRead3 =data.daily[2].temp.day;
var humRead3 =data.daily[2].humidity;
var windRead3=data.daily[2].wind_speed;
var icon3 = data.daily[2].weather[0].icon;
var tempRead4 = data.daily[3].temp.day;
var humRead4 =data.daily[3].humidity;
var windRead4=data.daily[3].wind_speed;
var icon4 = data.daily[3].weather[0].icon;
var tempRead5 = data.daily[4].temp.day;
var humRead5 = data.daily[4].humidity;
var windRead5=data.daily[4].wind_speed;
var icon5 = data.daily[4].weather[0].icon;
var tempRead6 = data.daily[5].temp.day;
var humRead6 = data.daily[5].humidity;
var windRead6= data.daily[5].wind_speed;
var icon6 = data.daily[5].weather[0].icon;
todayTemp.innerHTML= 'Temp: ' + tempRead1;
todayHum.innerHTML= 'Hum: ' + humRead1;
todayWind.innerHTML= 'Wind: ' + windRead1;
uv.innerHTML = 'UV: ' + uvRead;
temp2.innerHTML= 'Temp: ' + tempRead2;
hum2.innerHTML= 'Hum: ' + humRead2;
wind2.innerHTML= 'Wind: ' + windRead2;
temp3.innerHTML= 'Temp: ' + tempRead3;
hum3.innerHTML= 'Hum: ' + humRead3;
wind3.innerHTML= 'Wind: ' + windRead3;
temp4.innerHTML= 'Temp: ' + tempRead4;
hum4.innerHTML= 'Hum: ' + humRead4;
wind4.innerHTML= 'Wind: ' + windRead4;
temp5.innerHTML= 'Temp: ' + tempRead5;
hum5.innerHTML= 'Hum: ' + humRead5;
wind5.innerHTML= 'Wind: ' + windRead5;
temp6.innerHTML= 'Temp: ' + tempRead6;
hum6.innerHTML= 'Hum: ' + humRead6;
wind6.innerHTML= 'Wind: ' + windRead6;
var iconurl1 = "http://openweathermap.org/img/w/" + icon1 + ".png";
var iconurl2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
var iconurl3 = "http://openweathermap.org/img/w/" + icon3 + ".png";
var iconurl4 = "http://openweathermap.org/img/w/" + icon4 + ".png";
var iconurl5 = "http://openweathermap.org/img/w/" + icon5 + ".png";
var iconurl6 = "http://openweathermap.org/img/w/" + icon6 + ".png";
$('#wicon1').attr('src', iconurl1);
$('#wicon2').attr('src', iconurl2);
$('#wicon3').attr('src', iconurl3);
$('#wicon4').attr('src', iconurl4);
$('#wicon5').attr('src', iconurl5);
$('#wicon6').attr('src', iconurl6);
//if (data.daily[0].uvi<=2){uv.setAttribute('style', 'background-color: #03fc52;')}
//else if (data.daily[0].uvi<=5){uv.setAttribute('style', 'background-color: #03fc52;')}
//else if (data.daily[0].uvi<=7){uv.setAttribute('style', 'background-color: #03fc52;')}
//else if (data.daily[0].uvi<=9){uv.setAttribute('style', 'background-color: #fc0314;')}
//else{uv.setAttribute('style', 'background-color:#400108; color: #fffafa;')};

})	

});

//Log to Local Stroage

//Append hsitory from local storage

