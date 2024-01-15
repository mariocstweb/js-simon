// Recupero gli elementi:
const cpuNumber = document.getElementById("cpuNumber");
const form = document.querySelector("form");
const userInput = document.getElementById("number");
const userNumbers = [];
const guessedNumbers = [];

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

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Consento all'utente di inserire massimo 5 numeri
  if (userNumbers.length === 5) {
    alert("Hai già inserito 5 numeri. Non puoi inserirne altri.");
    return;
  }

  // Recupero i numeri dell'utente
  const userNumber = parseInt(userInput.value);

  // Verifico che il value fornito sia numerico e non ripetuto
  if (isNaN(userNumber) || userNumbers.includes(userNumber)) {
    alert("Inserisci un numero valido e non ripetuto!");
    return;
  }

  userNumbers.push(userNumber);

  console.log("Numeri dell'utente:", userNumbers);

  // Svuoto il campo
  userInput.value = "";

  // Se l'utente ha inserito tutti e 5 i numeri, verifica i numeri indovinati
  if (userNumbers.length === 5) {
    checkGuessedNumbers();
  }
});

function checkGuessedNumbers() {
  // Confronto i numeri
  for (const userNumber of userNumbers) {
    if (cpuNumber.innerText.includes(userNumber)) {
      guessedNumbers.push(userNumber);
    }
  }

  // Mostra i numeri indovinati
  if (guessedNumbers.length > 0) {
    alert("Hai indovinato i seguenti numeri: " + guessedNumbers);
  } else {
    alert("Non hai indovinato nessun numero.");
  }
}
