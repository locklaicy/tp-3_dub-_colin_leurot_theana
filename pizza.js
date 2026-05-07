
/*Espace Thor */


/*2.2*/
// Formulaire pizza
const pizzaForm = document.getElementById("form-pizza");

const pizza = document.createElement("form");

const margheritaLabel = document.createElement("label");
margheritaLabel.textContent = "Margherita";
const margheritaInput = document.createElement("input");
margheritaInput.setAttribute("type", "checkbox");
margheritaInput.setAttribute("name", "margherita");
const margheritaNumber = document.createElement("input");
margheritaNumber.setAttribute("type", "number");
margheritaNumber.setAttribute("max", "50");
margheritaLabel.appendChild(margheritaInput);
margheritaLabel.appendChild(margheritaInput);

pizza.appendChild(margheritaLabel);

pizzaForm.appendChild(pizza);




/*2.3*/







/*SAUTER LIGNE Salope */
document.getElementById("form-pizza").innerHTML += "<br>";
document.getElementById("formlivraison").innerHTML += "<br>";

/*Espace colin */

/*2.4*/








/*2.5*/

// Recuperer le conteneur du formulaire
const livraisonContainer = document.getElementById("formlivraison");

// Creer un formulaire
const livraisonForm = document.createElement("form");

// Creéer un champ de texte pour le nom
const nomLabel = document.createElement("label");
nomLabel.textContent = "Nom : ";
const nomInput = document.createElement("input");
nomInput.setAttribute("type", "text");
nomInput.setAttribute("name", "name");
nomInput.setAttribute("size", "15");
nomLabel.appendChild(nomInput);



// Ajouter les champs au formulaire
livraisonForm.appendChild(nomLabel);


// Ajouter le formulaire au conteneur
livraisonContainer.appendChild(livraisonForm);





