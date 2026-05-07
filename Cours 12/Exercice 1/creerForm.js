// Récupérer le conteneur du formulaire
const conteneurForm = document.getElementById("form-conteneur");

// Créer un formulaire
const form = document.createElement("form");

// Créer un champ de texte pour le nom
const nomLabel = document.createElement("label");
nomLabel.textContent = "Nom : ";
const nomInput = document.createElement("input");
nomInput.setAttribute("type", "text");
nomInput.setAttribute("name", "name");
nomInput.setAttribute("size", "15");
nomLabel.appendChild(nomInput);

// Créer un champ de texte pour le prenom
const prenomLabel = document.createElement("label");
prenomLabel.textContent = "Prénom : ";
const prenomInput = document.createElement("input");
prenomInput.setAttribute("type", "text");
prenomInput.setAttribute("name", "prénom");
prenomInput.setAttribute("size", "15");
prenomLabel.appendChild(prenomInput);

// Créer un bouton pour soumettre le formulaire
const boutonEnvoyer = document.createElement("button");
boutonEnvoyer.setAttribute("type", "submit");
boutonEnvoyer.textContent = "Envoyer";

// Ajouter les champs au formulaire
form.appendChild(nomLabel);
form.appendChild(prenomLabel);
form.appendChild(boutonEnvoyer);

// Ajouter le formulaire au conteneur
conteneurForm.appendChild(form);

// Supprimer l'Ã©lÃ©ment prenomInput et son label associÃ© du formulaire
//prenomInput.remove();
//prenomLabel.remove();
