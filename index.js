(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let birthday = "Dec 25, 2020 00:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "Merry Christmas I LOVE YOUUUU";
          alert("Hello Baby I LOVE YOUUUUU");
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

  document.onkeydown = function(e) {
    if(event.keyCode == 123) {
      console.log('You cannot inspect Element');
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      console.log('You cannot inspect Element');
      return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      console.log('You cannot inspect Element');
      return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      console.log('You cannot inspect Element');
      return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      console.log('You cannot inspect Element');
      return false;
    }
  } 
  // prevents right clicking
  document.addEventListener('contextmenu', e => e.preventDefault());