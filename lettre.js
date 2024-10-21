let lettres = "abcdefghijklmnopqrstuvyz";
let mots = ["papa", "maman", "papy", "pomme", "banane", "ananas"];
let randomIndex = Math.floor(Math.random() * mots.length);
let randomMot = mots[randomIndex];
let tabloLettre = lettres.split("");
console.log(randomMot);
console.log(tabloLettre);
let divLettres=document.createElement("div")
divLettres.className="headline";

let divHeader= document.getElementsByClassName("headline")
let buttonContainer = document.createElement("div")
buttonContainer.className="button"



let divContainer = document.createElement("div");
divContainer.className = "container";
document.body.appendChild(divContainer);
let container = document.getElementsByClassName("container");
let h1 = document.createElement("h1");
h1.innerText = randomMot;
divLettres.appendChild(h1);
let h2 = document.createElement("h2");
h2.innerText=" "
container[0].appendChild(divLettres)
divLettres.appendChild(h2);
container[0].appendChild(buttonContainer)
let placeholder = [];
let currentIndex = 0; 
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
    if (randomMot[currentIndex] === lettres) {  // Check if the letter matches the current index
        placeholder[currentIndex] = lettres;  // Update the placeholder
        currentIndex++;  // Move to the next index
    }


    for (let j = 0; j < randomMot.length; j++) {
      if (randomMot[j] === lettres) {
        placeholder[j] = lettres;
      }
    }

    h2.innerText = placeholder.join(" ");
    console.log(placeholder);
  });
}



