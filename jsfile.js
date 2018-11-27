
var pathname = window.location;
var v=pathname.href;
var res = v.slice(43);
console.log(res);
city="New York";
city=res;
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" +city +"&units=imperial&appid=3588f60672ee815fd5a88542706a8f09",
          function(data)
          {
  
    var icon= "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp=data.main.temp;
    var weather = data.weather[0].main;
    
    $('.icon').attr('src',icon);
    $('.temp').append(temp);
    $('.weather').append(weather);
}
         )



