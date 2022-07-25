let d = new Date();
let year=d.getFullYear();
let month=d.getMonth()+1;
let day=d.getDate();
let thenumbers=  new Date(year, month, 0).getDate();
let searchingen=document.getElementById("ser");
let thecity=searchingen.value;
searchingen.value="Beijing";





function today(y,m){
if(month>=10){
    var conc1=month; 
}else{
   var themonthnow=month;
    var conc1="0";
    conc1+=themonthnow;
}

if(day>=10){
    var conc2=day;     
}else{
    var thedaynow=day;
     var conc2="0";
     conc2+= thedaynow;
 }
return `${d.getFullYear()}-${conc1}-${conc2}`
}
console.log(today());
function tomoro(y,m){
    let thenumbers=  new Date(year, month, 0).getDate();
    if(thenumbers==d.getDate()){
         let theday=1;
         let themonth=month+1;        
         if(themonth>=10){}else{
             var st="0";
            st+=themonth;
            themonth=st;
            }
      return(`${d.getFullYear()}-${themonth}-0${theday}`)
    }else{
        let theday=d.getDate()+1;
        let themonth=month;
        if(theday<10){
          var  dcon=`0`;
          dcon+=theday;
          theday=dcon;
        }
        if(themonth>=10){}else{
            var st="0";
           st+=themonth;
           themonth=st;
           }
     return(`${d.getFullYear()}-${themonth}-${theday}`)
    }
}
function getaftertomoro(y,m){
    let thenumbers=  new Date(year, month, 0).getDate();
    if(thenumbers==d.getDate()){
         let theday=2;
         let themonth=month+1;  
         if(themonth>=10){}else{
             var st="0";
            st+=themonth;
            themonth=st;
            }
      return(`${d.getFullYear()}-${themonth}-0${theday}`)
    }else{
        let theday=d.getDate()+2;
        let themonth=month;
        if(theday<10){
            var  dcon=`0`;
            dcon+=theday;
            theday=dcon;
          }
        if(themonth>=10){}else{
            var st="0";
           st+=themonth;
           themonth=st;
           }
     return(`${d.getFullYear()}-${themonth}-${theday}`)
    }
}
async function theweathertoday(){
    let firstreq=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1932016411974b60aac171107222905&q=${searchingen.value}&dt=${today(year,month)}`);
    let lastreq=await firstreq.json();
    let maxt =lastreq.forecast.forecastday[0].day.maxtemp_c;
    let mint =lastreq.forecast.forecastday[0].day.mintemp_c;
    let ico =lastreq.forecast.forecastday[0].day.condition.icon;
    let tex= lastreq.forecast.forecastday[0].day.condition.text;
    let c_n=lastreq.location.name;
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satrday'][new Date().getDay()]
    document.getElementById("one").innerHTML=weekday;
    let nameofmonth = ['jan', 'feb', 'mars', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'][new Date().getMonth()]
    document.getElementById("two").innerHTML=`${d.getDate()}`+nameofmonth;
    document.getElementById("three").innerHTML=c_n;
    document.getElementById("four").innerHTML=maxt+"&#8451;";
    document.getElementById("five").src=`https:${ico}`
    document.getElementById("six").innerHTML=tex;
}
async function theweatheraftertomorow(){
    let firstreq=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1932016411974b60aac171107222905&q=${searchingen.value}&dt=${getaftertomoro(year,month)}`);
    let lastreq=await firstreq.json();
    let maxt =lastreq.forecast.forecastday[0].day.maxtemp_c;
    let mint =lastreq.forecast.forecastday[0].day.mintemp_c;
    let ico =lastreq.forecast.forecastday[0].day.condition.icon;
    let tex= lastreq.forecast.forecastday[0].day.condition.text;
    let c_n=lastreq.location.name;
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satrday'][(new Date().getDay())+2 ==8?1:(new Date().getDay()) +2];
    document.getElementById("therteen").innerHTML=weekday;
    document.getElementById("fourteen").src=`https:${ico}`;
    document.getElementById("fifteen").innerHTML=maxt+`&#8451;`;
    document.getElementById("sixteen").innerHTML=mint+`&#8451;`;
    document.getElementById("seventeen").innerHTML=tex;
}
async function theweathertomorow(){
    let firstreq=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1932016411974b60aac171107222905&q=${searchingen.value}&dt=${tomoro(year,month)}`);
    let lastreq =await firstreq.json();
    let maxt =lastreq.forecast.forecastday[0].day.maxtemp_c;
    let mint =lastreq.forecast.forecastday[0].day.mintemp_c;
    let ico =lastreq.forecast.forecastday[0].day.condition.icon;
    let tex= lastreq.forecast.forecastday[0].day.condition.text;
    let c_n=lastreq.location.name;
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satrday'][(new Date().getDay())+1 ==7?0:(new Date().getDay()) +1];

document.getElementById("eight").innerHTML=weekday;
document.getElementById("nine").src=`https:${ico}`;
document.getElementById("ten").innerHTML=maxt+`&#8451;`;
document.getElementById("eleven").innerHTML=mint+`&#8451;`;
document.getElementById("twelv").innerHTML=tex;
}
theweathertomorow();
    theweatheraftertomorow();
    theweathertoday();
searchingen.addEventListener("keyup",()=>{

    theweathertomorow();
    theweatheraftertomorow();
    theweathertoday();
})
searchingen.value="";