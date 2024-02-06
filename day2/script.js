man();
function man() {
  var currentDate = new Date();
  var hours = ((currentDate.getHours() + 11) % 12) + 1;
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;

  let sec = document.getElementById("sec");
  let minut = document.getElementById("min");
  let hr = document.getElementById("hour");

  sec.style.transform = `rotate(${second - 90}deg)`;
  minut.style.transform = `rotate(${minute - 90}deg)`;
  hr.style.transform = `rotate(${hour - 90}deg )`;

  //   document.querySelector("#hour").style.transform = `rotate(${hour-90}deg )`;
  //   document.querySelector("#min").style.transform = `rotate(${minute-90}deg)`;
  //   document.querySelector("#sec").style.transform = `rotate(${second-90}deg)`;
}


setInterval(man, 1000);
