// Etape 1 - Sélectionner nos éléments

let formulaire = document.querySelector("#formulaire");
let input = document.querySelector("#prix");
let error = document.querySelector("small");

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire

let nombreAleatoire;
let coups = 0;
let nombreChoisi;


function verifier(nombre) {
  let instruction = document.createElement('div')

  if (nombre < nombreAleatoire) {
    instruction.textContent = "#" + coups + " : C'est plus, réessaie !"
    instruction.className = "instruction plus";
  }
  else if (nombre > nombreAleatoire) {
    instruction.textContent = "#" + coups + " : C'est moins, réessaie !"
    instruction.className = "instruction moins";
  }
  else {
    instruction.textContent = "#" + coups + " : C'est ca, félicitations !"
    instruction.className = "instruction fini";
    input.disabled = true;
  }
  document.querySelector("#instructions").prepend(instruction);
}

function entierAleatoire(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
nombreAleatoire = entierAleatoire(0, 1000);
console.log(nombreAleatoire);

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    error.style.display = "inline";
  } else {
    error.style.display = "none";
  }
})

// Etape 5 - Agir à l'envoi du formulaire

formulaire.addEventListener("submit", (event) => {
  event.preventDefault();

  if (isNaN(input.value) || (input.value.length == 0)) {
    input.style.borderColor = "red";

  } else {
    coups++;
    input.style.borderColor = "silver";
    nombreChoisi = input.value;
    input.value = "";
    verifier(nombreChoisi);
  }
})
