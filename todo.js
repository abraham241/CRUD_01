// je récupere tout les éléments du formulaire dans le html
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// je crée un écouteur d'événement de soumission pour le
// formulaire afin qu'il puisse empêcher le comportement par défaut de notre application.

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("comportement bloqué");

  // fonction de formulaire de validation
  formValidation();

  // fonction d'accetptation de la data
  acceptData();
});

// le scrit de validation du formulaire

// ::::::::::::::::::::::::::::::::::::::::::::::::
let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Votre tache est vide";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
  }
};
// ::::::::::::::::::::::::::::::::::::::::::::::::::

let data = {};

let acceptData = () => {
  data.text = input.value;
  // console.log(data);
  // je lui donne la fonction decréer un poste
  createPost();
};

// fonction qui crée les posts
let createPost = () => {
  posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
  `;
  input.value = "";
};

// fonction classic

/*function createPost() {
  posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
  `;
  input.value = "";
}*/

// Fonction de supression
// Fonction de suppression avec confirmation
let deletePost = (e) => {
  // Demander une confirmation avant de supprimer
  if (confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
    e.parentElement.parentElement.remove();
  }
};

// la fonction pour editer un élément
let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
