// Pobieramy elementy DOM
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Funkcja do aktualizacji zawartości spana na podstawie wprowadzonego tekstu
function updateNameOutput() {
  const name = nameInput.value.trim(); // Usuwamy zbędne spacje z początku i końca wprowadzonego tekstu
  nameOutput.textContent = name || "Anonymous"; // Jeśli name nie jest puste, aktualizujemy zawartość spana, w przeciwnym razie wyświetlamy "Anonymous"
}

// Dodajemy listener na zdarzenie input na polu input#name-input
nameInput.addEventListener("input", updateNameOutput);
