let countDownDate = new Date("Nov 9, 2023 23:13:30").getTime();
console.log(countDownDate);

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.floor(dateDiff / (1000*60*60*24));
  console.log(days);

  let hours = Math.floor(dateDiff % (1000*60*60*24) / (1000 * 60 * 60));
  console.log(hours);

  let minutes = Math.floor(dateDiff % (1000*60*60) / (1000 * 60));
  console.log(minutes);

  let seconds = Math.floor(dateDiff % (1000*60) / (1000));
  console.log(seconds);


  document.querySelector('.num1').innerHTML= days;
  document.querySelector('.num2').innerHTML= hours;
  document.querySelector('.num3').innerHTML= minutes;
  document.querySelector('.num4').innerHTML= seconds;
  if(dateDiff < 0){
    let html = `
    <body>
    <main>
      <div class="head">WE HAVE LAUNCHED</div>
      <div class="container">
        <div class="box">
          <div class="num1">00</div>
          <div class="day"><span>DAYS</span></div>
          <span class="dot1"></span>
          <span class="dot2"></span>
          <span class="line"></span>
        </div>
        <div class="box">
          <div class="num2">00</div>
          <div class="hour">HOURS</div>
          <span class="dot1"></span>
          <span class="dot2"></span>
          <span class="line"></span>
        </div>
        <div class="box">
          <div class="num3">00</div>
          <div class="minute">MINUTES</div>
          <span class="dot1"></span>
          <span class="dot2"></span>
          <span class="line"></span>
        </div>
        <div class="box">
          <div class="num4">00</div>
          <div class="second">SECONDS</div>
          <span class="dot1"></span>
          <span class="dot2"></span>
          <span class="line"></span>
        </div>
      </div>
      <img class="mountain" src="images/pattern-hills.svg">
      <script src="main.js"></script>
    </main>
  </body>
  `
  document.querySelector('body').innerHTML = html;
  }
  document.querySelector
}, 1000);