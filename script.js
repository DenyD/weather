$(document).ready(function(){
 
  var long;
  var lat;
  
  $.getJSON("http://ip-api.com/json",function(data2){
    lat=data2.lat;
    console.log(data2);
   long=data2.lon;
 var api= "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=42350a00e2208e04d246e10ea832af78";
  
 $.getJSON(api, function(data){
   var faren;
   var cel;
   var kelv;
   var tempSwap;
   var weather=data.weather[0].main;
   var kelv=data.main.temp;
   var windSpeed=data.wind.speed;
   var city=data.name;
    
    faren=(kelv*(9/5)-459.67).toFixed(1);
    cel=(kelv-273).toFixed(1);
    windSpeed=(2.237*(windSpeed)).toFixed(1);
    
   $("#city").html(city);
   $("#weather").html(weather);
   $("#windSpeed").html(windSpeed+" mph");
   $("#faren").html(faren+" &#8457");
   $("#faren").click(function(){
        if (tempSwap===false){
                       $("#faren").html(faren+" &#8457");
                       tempSwap=true;
                     }else{
                       $("#faren").html(cel+" &#8451");
                       tempSwap=false;
                     }
                     });
    if (faren>80){
     $("body").css('background','url(http://hd-wall-papers.com/images/wallpapers/sunny-image/sunny-image-21.jpg)');
   }else if (faren>65){
     $('body').css('background','url(http://hd-wall-papers.com/images/wallpapers/sky-hd-wallpaper/sky-hd-wallpaper-5.jpg)');
   }else if (faren>50){
     $('body').css('backgorund','url(http://www.weatherwizkids.com/wp-content/uploads/2015/04/cloud141.jpg)');
   }else if (faren>30){
     $('body').css('background','url(http://images.huffingtonpost.com/2014-08-13-cloudmood143357_1920.jpg)');
   }
  });
  
  });
    
    
  
});