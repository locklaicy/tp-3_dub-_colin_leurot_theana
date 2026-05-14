// Espace Théana

/*2.2*/
// Formulaire pizza
const pizzaForm = document.getElementById("formpizza");
const pizza = document.createElement("form");

// Margherita - quantité
/*const margheritaDiv = document.createElement("div");
margheritaDiv.setAttribute("id", "margherita");

const margheritaInput = document.createElement("input");
margheritaInput.setAttribute("type", "checkbox");
margheritaInput.setAttribute("name", "margherita");

const margheritaLabel = document.createElement("label");
margheritaLabel.textContent = "Margherita Quantité :";

const margheritaNumber = document.createElement("input");
margheritaNumber.setAttribute("type", "number");
margheritaNumber.setAttribute("min", "0");
margheritaNumber.setAttribute("max", "50");

margheritaDiv.appendChild(margheritaInput);
margheritaDiv.appendChild(margheritaLabel);
margheritaDiv.appendChild(margheritaNumber);

// Margherita - garniture
const garnituresMargheritaDiv = document.createElement("div");

const garnituresMargheritaLabel = document.createElement("label");
garnituresMargheritaLabel.textContent = "Garnitures : ";

const fromageMargheritaLabel = document.createElement("label");
fromageMargheritaLabel.textContent = "Fromage";
const fromageMargheritaInput = document.createElement("input");
fromageMargheritaInput.setAttribute("type", "checkbox");
fromageMargheritaInput.setAttribute("name", "fromageMargherita");
fromageMargheritaLabel.appendChild(fromageMargheritaInput);

const champignonsMargheritaLabel = document.createElement("label");
champignonsMargheritaLabel.textContent = "Champignons";
const champignonsMargheritaInput = document.createElement("input");
champignonsMargheritaInput.setAttribute("type", "checkbox");
champignonsMargheritaInput.setAttribute("name", "champignonsMargherita");
champignonsMargheritaLabel.appendChild(champignonsMargheritaInput);

const oignonsMargheritaLabel = document.createElement("label");
oignonsMargheritaLabel.textContent = "Oignons";
const oignonsMargheritaInput = document.createElement("input");
oignonsMargheritaInput.setAttribute("type", "checkbox");
oignonsMargheritaInput.setAttribute("name", "oignonsMargherita");
oignonsMargheritaLabel.appendChild(oignonsMargheritaInput);

garnituresMargheritaDiv.appendChild(garnituresMargheritaLabel);
garnituresMargheritaDiv.appendChild(fromageMargheritaLabel);
garnituresMargheritaDiv.appendChild(champignonsMargheritaLabel);
garnituresMargheritaDiv.appendChild(oignonsMargheritaLabel);

// Pepperonni - quantité
const pepperoniDiv = document.createElement("div");
pepperoniDiv.setAttribute("id", "pepperoni");

const pepperoniInput = document.createElement("input");
pepperoniInput.setAttribute("type", "checkbox");
pepperoniInput.setAttribute("name", "pepperoni");

const pepperoniLabel = document.createElement("label");
pepperoniLabel.textContent = "Pepperoni Quantité :";

const pepperoniNumber = document.createElement("input");
pepperoniNumber.setAttribute("type", "number");
pepperoniNumber.setAttribute("min", "0");
pepperoniNumber.setAttribute("max", "50");

pepperoniDiv.appendChild(pepperoniInput);
pepperoniDiv.appendChild(pepperoniLabel);
pepperoniDiv.appendChild(pepperoniNumber);

// Pepperoni - garniture
const garnituresPepperoniDiv = document.createElement("div");

const garnituresPepperonniLabel = document.createElement("label");
garnituresPepperonniLabel.textContent = "Garnitures : ";

const fromagePepperonniLabel = document.createElement("label");
fromagePepperonniLabel.textContent = "Fromage";
const fromagePepperonniInput = document.createElement("input");
fromagePepperonniInput.setAttribute("type", "checkbox");
fromagePepperonniInput.setAttribute("name", "fromagePepperoni");
fromagePepperonniLabel.appendChild(fromagePepperonniInput);

const champignonsPepperonniLabel = document.createElement("label");
champignonsPepperonniLabel.textContent = "Champignons";
const champignonsPepperonniInput = document.createElement("input");
champignonsPepperonniInput.setAttribute("type", "checkbox");
champignonsPepperonniInput.setAttribute("name", "champignonsPepperoni");
champignonsPepperonniLabel.appendChild(champignonsPepperonniInput);

const olivePepperoniLabel = document.createElement("label");
olivePepperoniLabel.textContent = "Oignons";
const olivePepperoniInput = document.createElement("input");
olivePepperoniInput.setAttribute("type", "checkbox");
olivePepperoniInput.setAttribute("name", "olivePepperoni");
olivePepperoniLabel.appendChild(olivePepperoniInput);

garnituresPepperoniDiv.appendChild(garnituresPepperonniLabel);
garnituresPepperoniDiv.appendChild(fromagePepperonniLabel);
garnituresPepperoniDiv.appendChild(champignonsPepperonniLabel);
garnituresPepperoniDiv.appendChild(olivePepperoniLabel);

// Végétarienne - quantité
const vegeDiv = document.createElement("div");
vegeDiv.setAttribute("id", "vege");

const vegeInput = document.createElement("input");
vegeInput.setAttribute("type", "checkbox");
vegeInput.setAttribute("name", "vege");

const vegeLabel = document.createElement("label");
vegeLabel.textContent = "Végétarienne Quantité :";

const vegeNumber = document.createElement("input");
vegeNumber.setAttribute("type", "number");
vegeNumber.setAttribute("min", "0");
vegeNumber.setAttribute("max", "50");

vegeDiv.appendChild(vegeInput);
vegeDiv.appendChild(vegeLabel);
vegeDiv.appendChild(vegeNumber);

// Végétarienne - garniture
const garnituresVegeDiv = document.createElement("div");

const garnituresVegeLabel = document.createElement("label");
garnituresVegeLabel.textContent = "Garnitures : ";

const oignonsVegeLabel = document.createElement("label");
oignonsVegeLabel.textContent = "Oignons";
const oignonsVegeInput = document.createElement("input");
oignonsVegeInput.setAttribute("type", "checkbox");
oignonsVegeInput.setAttribute("name", "oignons");
oignonsVegeLabel.appendChild(oignonsVegeInput);

const champignonsVegeLabel = document.createElement("label");
champignonsVegeLabel.textContent = "Champignons";
const champignonsVegeInput = document.createElement("input");
champignonsVegeInput.setAttribute("type", "checkbox");
champignonsVegeInput.setAttribute("name", "champignons");
champignonsVegeLabel.appendChild(champignonsPepperonniInput);

const oliveVegeLabel = document.createElement("label");
oliveVegeLabel.textContent = "Oignons";
const oliveVegeInput = document.createElement("input");
oliveVegeInput.setAttribute("type", "checkbox");
oliveVegeInput.setAttribute("name", "olive");
oliveVegeLabel.appendChild(oignonsInput);

garnituresVegeDiv.appendChild(garnituresVegeLabel);
garnituresVegeDiv.appendChild(oignonsVegeLabel);
garnituresVegeDiv.appendChild(champignonsVegeLabel);
garnituresVegeDiv.appendChild(oliveVegeLabel);

// Sicilicienne - quantité
const siciliDiv = document.createElement("div");
siciliDiv.setAttribute("id", "sicili");

const siciliInput = document.createElement("input");
siciliInput.setAttribute("type", "checkbox");
siciliInput.setAttribute("name", "sicili");

const siciliLabel = document.createElement("label");
siciliLabel.textContent = "Sicilicienne Quantité :";

const siciliNumber = document.createElement("input");
siciliNumber.setAttribute("type", "number");
siciliNumber.setAttribute("min", "0");
siciliNumber.setAttribute("max", "50");

siciliDiv.appendChild(siciliInput);
siciliDiv.appendChild(siciliLabel);
siciliDiv.appendChild(siciliNumber);

// Sicilicienne - garniture
const garnituresSiciliDiv = document.createElement("div");

const garnituresSiciliLabel = document.createElement("label");
garnituresSiciliLabel.textContent = "Garnitures : ";

const fromageSiciliLabel = document.createElement("label");
fromageSiciliLabel.textContent = "Fromage";
const fromageSiciliInput = document.createElement("input");
fromageSiciliInput.setAttribute("type", "checkbox");
fromageSiciliInput.setAttribute("name", "fromage");
fromageSiciliLabel.appendChild(fromageSiciliInput);

const champignonsSiciliLabel = document.createElement("label");
champignonsSiciliLabel.textContent = "Champignons";
const champignonsSiciliInput = document.createElement("input");
champignonsSiciliInput.setAttribute("type", "checkbox");
champignonsSiciliInput.setAttribute("name", "champignons");
champignonsSiciliLabel.appendChild(champignonsSiciliInput);

const oignonsSiciliLabel = document.createElement("label");
oignonsSiciliLabel.textContent = "Oignons";
const oignonsSiciliInput = document.createElement("input");
oignonsSiciliInput.setAttribute("type", "checkbox");
oignonsSiciliInput.setAttribute("name", "oignons");
oignonsSiciliLabel.appendChild(oignonsSiciliInput);

garnituresSiciliDiv.appendChild(garnituresSiciliLabel);
garnituresSiciliDiv.appendChild(fromageSiciliLabel);
garnituresSiciliDiv.appendChild(champignonsSiciliLabel);
garnituresSiciliDiv.appendChild(oignonsSiciliLabel);

// Faire apparaitre les éléments dans le document

pizza.appendChild(margheritaDiv);
pizza.appendChild(garnituresMargheritaDiv);
pizza.appendChild(pepperoniDiv);
pizza.appendChild(garnituresPepperoniDiv);
pizza.appendChild(vegeDiv);
pizza.appendChild(garnituresVegeDiv);
pizza.appendChild(siciliDiv);
pizza.appendChild(garnituresSiciliDiv);

pizzaForm.appendChild(pizza);
*/
/*2.3*/
// Mode de paiement

const modePaiementForm = document.getElementById("formpaiement");

const modePaiementDiv = document.createElement("div");
modePaiementDiv.setAttribute("id", "modePaiementDiv");

const modePaiementLabel = document.createElement("label");
modePaiementLabel.textContent = "Mode de paiement : ";

const carteEnLigneDiv = document.createElement("div");

const carteEnLigneInput = document.createElement("input");
carteEnLigneInput.setAttribute("type", "radio");
carteEnLigneInput.setAttribute("name", "carteEnLigneInput");

const carteEnLigneLabel = document.createElement("label");
carteEnLigneLabel.textContent = "Carte de crédit (en ligne)";

const cartePorteDiv = document.createElement("div");

const cartePorteInput = document.createElement("input");
cartePorteInput.setAttribute("type", "radio");
cartePorteInput.setAttribute("name", "cartePorteInput");

const cartePorteLabel = document.createElement("label");
cartePorteLabel.textContent = "Débit/Crédit (à la porte)";

const especeDiv = document.createElement("div");

const especeInput = document.createElement("input");
especeInput.setAttribute("type", "radio");
especeInput.setAttribute("name", "especeInput");

const especeLabel = document.createElement("label");
especeLabel.textContent = "Espèces (à la porte)";

carteEnLigneDiv.appendChild(carteEnLigneInput);
carteEnLigneDiv.appendChild(carteEnLigneLabel);
cartePorteDiv.appendChild(cartePorteInput);
cartePorteDiv.appendChild(cartePorteLabel);
especeDiv.appendChild(especeInput);
especeDiv.appendChild(especeLabel);

modePaiementDiv.appendChild(carteEnLigneDiv);
modePaiementDiv.appendChild(cartePorteDiv);
modePaiementDiv.appendChild(especeDiv);

modePaiementForm.appendChild(modePaiementDiv);

/* Sauter ligne */
document.getElementById("formpizza").innerHTML += "<br>";
document.getElementById("formlivraison").innerHTML += "<br>";
document.getElementById("container").innerHTML += "<br>";

/*Espace colin */

/*2.4*/

// Recuperer le conteneur du formulaire
const clientContainer = document.getElementById("formclient");

// Créer un formulaire
const clientForm = document.createElement("client");

// Créer un champ de texte pour le nom

const nomLabel = document.createElement("label");
nomLabel.textContent = "Nom : ";
const nomInput = document.createElement("input");
nomInput.setAttribute("type", "text");
nomInput.setAttribute("name", "name");
nomInput.setAttribute("size", "15");
nomLabel.appendChild(nomInput);

const prenomLabel = document.createElement("label");
prenomLabel.textContent = "Prénom : ";
const prenomInput = document.createElement("input");
prenomInput.setAttribute("type", "text");
prenomInput.setAttribute("name", "name");
prenomInput.setAttribute("size", "15");
prenomLabel.appendChild(prenomInput);

const telephoneLabel = document.createElement("label");
telephoneLabel.textContent = "Téléphone : ";
const telephoneInput = document.createElement("input");
telephoneInput.setAttribute("type", "text");
telephoneInput.setAttribute("name", "name");
telephoneInput.setAttribute("size", "15");
telephoneLabel.appendChild(telephoneInput);

const adresseLabel = document.createElement("label");
adresseLabel.textContent = "Adresse complète : ";
const adresseInput = document.createElement("input");
adresseInput.setAttribute("type", "text");
adresseInput.setAttribute("name", "name");
adresseInput.setAttribute("size", "15");
adresseLabel.appendChild(adresseInput);

// Ajouter les champs au formulaire
clientForm.appendChild(nomLabel);
clientForm.appendChild(prenomLabel);
clientForm.appendChild(telephoneLabel);
clientForm.appendChild(adresseLabel);

// Ajouter le formulaire au conteneur
clientContainer.appendChild(clientForm);

/*2.5*/

// Recuperer le conteneur du formulaire
const livraisonContainer = document.getElementById("formlivraison");

// Creer un formulaire
const livraisonForm = document.createElement("form");

// Creéer un champ de texte pour le nom
const nomprenomLabel = document.createElement("label");
nomprenomLabel.textContent = "Nom et prénom : ";
const nomprenomInput = document.createElement("input");
nomprenomInput.setAttribute("type", "text");
nomprenomInput.setAttribute("name", "name");
nomprenomInput.setAttribute("size", "15");
nomprenomLabel.appendChild(nomprenomInput);

const telephonelivraisonLabel = document.createElement("label");
telephonelivraisonLabel.textContent = "Téléphone :  ";
const telephonelivraisonInput = document.createElement("input");
telephonelivraisonInput.setAttribute("type", "text");
telephonelivraisonInput.setAttribute("name", "name");
telephonelivraisonInput.setAttribute("size", "15");
telephonelivraisonLabel.appendChild(telephonelivraisonInput);

const adresselivraisonLabel = document.createElement("label");
adresselivraisonLabel.textContent = "Adresse de livraison : ";
const adresselivraisonInput = document.createElement("input");
adresselivraisonInput.setAttribute("type", "text");
adresselivraisonInput.setAttribute("name", "name");
adresselivraisonInput.setAttribute("size", "15");
adresselivraisonLabel.appendChild(adresselivraisonInput);

// Ajouter les champs au formulaire
livraisonForm.appendChild(nomprenomLabel);
livraisonForm.appendChild(telephonelivraisonLabel);
livraisonForm.appendChild(adresselivraisonLabel);

// Ajouter le formulaire au conteneur
livraisonContainer.appendChild(livraisonForm);

/*2.6*/

const boutonContainer = document.getElementById("boutonContainer");

const bouton = document.createElement("button");
bouton.textContent = "Commander";
bouton.id = "bouton";

boutonContainer.appendChild(bouton);

// Fonctions

// Génerer la facture
/*function genererFacture() {
  const facture = [];
  const prixPizza = 12;
  const prixGarniture = 2;

  // Vérification des éléments
  // Pizzas
  if (margheritaInput.checked && margheritaNumber.value > 0) {
    facture.push ({
      item: "Pizza Margherita",
      prix: prixUnitairePizza,
      quantite: parseInt(margheritaNumber.value),
    });
  }

  if (fromageMargheritaInput.checked) { facture.push ({item: "Fromage Margherita", prix: prixGarniture,});}
  if (champignonsMargheritaInput.checked) { facture.push({item: "Champignong Margherita", prix: prixGarniture,})};
  if (oignonsMargheritaInput.checked) { facture.push({item: "Oignons Margherita", prix: prixGarniture,});}

  if (pepperoniInput.checked && pepperoniNumber.value > 0) {
    facture.push ({
      item: "Pizza Pepperoni",
      prix: prixUnitairePizza,
      quantite: parseInt(pepperoniNumber.value),
    });
  }

  if (fromagePepperoniInput.checked) { facture.push ({item: "Fromage Pepperoni", prix: prixGarniture,});}
  if (champignonsPepperoniInput.checked) { facture.push({item: "Champignong Pepperoni", prix: prixGarniture,})};
  if (olivePepperoniInput.checked) { facture.push({item: "Oignons Pepperoni", prix: prixGarniture,});}
}
// Appel de la fonction pour génerer la facture avec le bouton
bouton.addEventListener("click", function () {
  genererFacture();
})*/
