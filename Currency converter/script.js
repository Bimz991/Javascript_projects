const currencyFirstEL = document.getElementById
  ("currency-first");
const worthFirstEL = document.getElementById
  ("worth-first");
const currencySecondEL = document.getElementById
  ("currency-second");
const worthSecondEL = document.getElementById
  ("worth-second");
const ExchangeRateElement = document.getElementById
  ("exchange-rate");

updateRate()  

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/fef1affc139a65332d0e0611/latest/${currencyFirstEL.value}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEL.value];
      ExchangeRateElement.innerText = ` 1 ${currencyFirstEL.value} = ${rate + " " + currencySecondEL.value}`;

      worthSecondEL.value = (worthFirstEL.value * rate).toFixed(2)
    });
}

currencyFirstEL.addEventListener("change", updateRate)

currencySecondEL.addEventListener("change",updateRate)
worthFirstEL.addEventListener("input",updateRate)
