let lettres = "abcdefghijklmnopqrstuvyz";
let mots = [
  "papa",
  "maman",
  "papy",
  "pomme",
  "banane",
  "ananas",
  "chien",
  "chat",
  "madam",
];
let randomIndex = Math.floor(Math.random() * mots.length);
let randomMot = mots[randomIndex];
let tabloLettre = lettres.split("");
console.log(randomMot);
console.log(tabloLettre);
let divLettres = document.createElement("div");
divLettres.className = "headline";
____;
let buttonContainer = document.createElement("div");
buttonContainer.className = "button";

let divContainer = document.createElement("div");
divContainer.className = "container";
document.body.appendChild(divContainer);
let container = document.getElementsByClassName("container");
let h1 = document.createElement("h1");
h1.innerText = randomMot;
divLettres.appendChild(h1);
let h2 = document.createElement("h2");
h2.innerText = " ";
container[0].appendChild(divLettres);
divLettres.appendChild(h2);
container[0].appendChild(buttonContainer);
let message = document.createElement("p");
divContainer.appendChild(message);

let h3 = document.createElement("h3");
divLettres.appendChild(h3);

let ResetButton = document.createElement("button");
divContainer.appendChild(ResetButton);
ResetButton.innerText = "Reset";
ResetButton.className = "reset";

let placeholder = [];

for (let i = 0; i < randomMot.length; i++) {
  placeholder.push("_");
}

for (let i = 0; i < tabloLettre.length; i++) {
  let btn = document.createElement("button");
  btn.className = "btn";
  btn.id = "btn" + [i];
  btn.innerText = tabloLettre[i];
  buttonContainer.appendChild(btn);

  let button = document.getElementsByClassName("btn");
  button[i].addEventListener("click", function () {
    let lettres = button[i].innerText;

    for (let j = 0; j < randomMot.length; j++) {
      if (randomMot[j] === lettres) {
        placeholder[j] = lettres;
        console.log(placeholder);
      }
      if (randomMot.includes(lettres)) {
        message.innerText = "bravo";
      } else {
        message.innerText = "wrong letter";
      }
    }

    h2.innerText = placeholder.join(" ");
    console.log(placeholder);
    console.log(placeholder.join(" "));

    if (placeholder.join("") === randomMot) {
      message.innerText = "YOU WON!:D";
    }
  });
}

function reset() {
  randomIndex = Math.floor(Math.random() * mots.length);
  randomMot = mots[randomIndex];

  placeholder = [];
  for (let i = 0; i < randomMot.length; i++) {
    placeholder.push("_");
  }
  h1.innerText = randomMot;
  h2.innerText = placeholder.join(" ");
  message.innerText = "";
}

document.getElementsByClassName("reset")[0].addEventListener("click", reset);
