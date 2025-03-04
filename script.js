// Set the date we're counting down to
const datesMap = new Map([
["Deutsch", new Date("Apr 29, 2025 08:00:00").getTime()],
["Russisch", new Date("Jun 3, 2025 08:00:00").getTime()]
]);

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // select countdown date depending on subject
  var countDownDate = datesMap.get(document.getElementById("subject").value);
  console.println(countDownDate);
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days + "<span> Tage</span>";
  document.getElementById("hours").innerHTML = hours + "<span> Stunden</span>";
  document.getElementById("minutes").innerHTML = minutes + "<span> Minuten</span>";
  document.getElementById("seconds").innerHTML = seconds + "<span> Sekunden</span>";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);