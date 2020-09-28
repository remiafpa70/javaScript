// starter.js

// console.log("hey");

// on écoute le chargement
// avec un attribut évènementiel OU avec la méthode addEvenListener()
// addEvenListener("load",init,false); false eventuellement
// onload = init;

addEventListener("load",init);

function init(evt){
console.log(evt.target);
document.getElementById("output").innerHTML = "Hey !";


// INLINE FUNCTIONS / ANONYMOUS FUNCTIONS
let maFonction =  function (){
    console.log("Hey from an inline function");
};
 // Invocation de la fonction
 maFonction;
}