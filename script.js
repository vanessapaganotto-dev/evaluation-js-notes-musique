// tableau de correspondance classique -> américain
const notesCorrespondance = {
  "do": "C",
  "ré": "D",
  "mi": "E",
  "fa": "F",
  "sol": "G",
  "la": "A",
  "si": "B"
};

// Fonction appelée au chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  // Création du formulaire
  const form = document.createElement("form");

  // Création du label
  const label = document.createElement("label");
  label.textContent = "Choisissez une note :";
  label.setAttribute("for", "noteSelect");

  // Création du select
  const select = document.createElement("select");
  select.id = "noteSelect";

  // Option vide par défaut
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "-- Sélectionnez une note --";
  select.appendChild(defaultOption);

  // Ajout des options dynamiquement
  Object.keys(notesCorrespondance).forEach(noteClassique => {
    const option = document.createElement("option");
    option.value = noteClassique;
    option.textContent = noteClassique;
    select.appendChild(option);
  });

  // Ajout au formulaire
  form.appendChild(label);
  form.appendChild(select);

  // Ajout du formulaire au body
  document.body.appendChild(form);

  // Zone pour afficher le message
  const messageDiv = document.createElement("div");
  messageDiv.className = "message";
  document.body.appendChild(messageDiv);

  // Gestionnaire d'événement sur le select
  select.addEventListener("change", function () {
    const noteClassique = select.value;

    if (noteClassique === "") {
      messageDiv.textContent = ""; // Réinitialise le message
    } else {
      const noteAmericaine = notesCorrespondance[noteClassique];
      messageDiv.textContent = `La notation américaine pour la note ${noteClassique} est ${noteAmericaine}.`;
    }
  });
});