const apikey = "0c5302f12709f8c5e14389b55ab6974f";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

// let cit=document.getElementById("search").value;
// console.log(cit);
let cit = document.getElementById("search");

async function check(city) {
  console.log(city);
  const res = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await res.json();

  document.querySelector("#city").innerHTML = data.name;
  document.querySelector("#deg").innerHTML = Math.round(data.main.temp) + "ºC";
  document.querySelector("#hd").innerHTML = data.main.humidity + "%";
  document.querySelector("#wd").innerHTML = data.wind.speed + " km/h";

  console.log(data);
}

function showit() {
  check(cit.value);
}

showit();
// check();
