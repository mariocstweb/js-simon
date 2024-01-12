const cpuNumber = document.getElementById("cpuNumber");

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Genera 5 numeri casuali compresi tra 1 e 100 e aggiungili alla stringa
for (let i = 0; i < 5; i++) {
  let numeroCasuale = getRandomNumber(1, 100);
  console.log(numeroCasuale);
  cpuNumber.innerText += " " + numeroCasuale;
}

// Funzione per far "scomparire" i numeri dopo 5 secondi
setTimeout(function () {
  cpuNumber.classList.add("d-none");
}, 5000);
