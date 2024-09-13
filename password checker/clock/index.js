let deg = 6
let sec = document.getElementById("sec")
let min = document.getElementById("min")
let hr = document.getElementById("hr")




setInterval(() => {
  let day = new Date();
  let rhr = day.getHours() * 30;
  let rmin = day.getMinutes() * deg;
  let rsec = day.getSeconds() * deg;



  //second
  sec.style.transform = `rotate(${rsec}deg)`;
  //minute
  min.style.transform = `rotate(${rmin}deg)`;
  // hours
  hr.style.transform = `rotate(${rhr}deg)`;

  // for another clock

  let hour = day.getHours();
  let newhr;
  if (hour > 12) {
    newhr = hour - 12;
  } else {
    newhr = hour;
  }

  document.getElementById("acsec").innerText = day.getSeconds();
  document.getElementById("acmin").innerText = day.getMinutes();
  document.getElementById("achr").innerText = newhr;
});



