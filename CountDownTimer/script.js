setInterval(() => {
  const result = document.getElementById("result");

  const currentTime = Date.now();
  const olympicTime = new Date(2028, 6, 14).getTime(); // July 14, 2028
  let time = olympicTime - currentTime;

  const day = Math.floor(time / (1000 * 60 * 60 * 24));
  time %= 1000 * 60 * 60 * 24;

  const hour = Math.floor(time / (1000 * 60 * 60));
  time %= 1000 * 60 * 60;

  const minute = Math.floor(time / (1000 * 60));
  time %= 1000 * 60;

  const second = Math.floor(time / 1000);
  time %= 1000;
  result.textContent = ` ${day}:day  ${hour}:hour  ${minute}:minute  ${second}:second`;


 }, 1000);
