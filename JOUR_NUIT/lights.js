// lights.js

// On écoute le chargement complet de la page
onload = init;

// Business logic - Logique applicative - Métier
var light = true;

//-------------------------------
// FONCTION init 
//-------------------------------
function init(){
	
	// On associe l'évènement 'click' au bouton
	document.getElementById("bt1").onclick = jourNuit;
	// et aussi au bitmap
	document.getElementById("picto").onclick = jourNuit;

	// On invoque la fonction 'jourNuit' (la 1ere fois, personne n'a cliqué !)
	jourNuit();
	
}


//-------------------------------
// FONCTION jourNuit 
//-------------------------------
function jourNuit(){
	
	// On teste l'état des lieux
	if(light == true){
		// Action
		jour();

		// On change l'état des lieux
		light = false;	
	}
	else{
		// Action
		nuit();

		// On change l'état des lieux
		light = true;		
	}
	
} // fin fonction jourNuit 


//-------------------------------
// FONCTION jour 
//-------------------------------
function jour(){
	
	// Le libellé du bouton
	document.getElementById("bt1").value = "Passer à la nuit";
	// Le contenu du titre
	document.getElementById("out").innerHTML = "JOUR ! (DAY !)";
	// La source de l'image
	document.getElementById("picto").src = "ampoule_on.png";
	// La couleur de fond
	document.body.style.backgroundColor = "#f1ae00";
	
}

//-------------------------------
// FONCTION nuit 
//-------------------------------
function nuit(){
	
	// Le libellé du bouton
	document.getElementById("bt1").value = "Passer au jour";
	// Le contenu du titre
	document.getElementById("out").innerHTML = "NUIT ! (NITE !)";
	// La source de l'image
	document.getElementById("picto").src = "ampoule_off.png";
	// La couleur de fond
	document.body.style.backgroundColor = "#333";
	
}







