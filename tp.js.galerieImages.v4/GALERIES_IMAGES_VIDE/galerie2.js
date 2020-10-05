// ajax6.js
// request vers un fichier - retour en xml

// Liste finale (contient des objets de type 'Picture')
let listeImages = [];

onload = init;


function init() {

// document.getElementById("output").src = "./galeries/art_abstrait/big/Abstract_Wallpaper1.jpg";

  ajaxCall();
}


//----------------------------------
// function ajaxCall()
function ajaxCall() {
  // On instancie un objet 'ajax'
  let xhr = new XMLHttpRequest();
  console.log(xhr);

  // On établit une connexion
  xhr.open("GET", "galerie_images.xml");

  // On envoie la requète
  xhr.send();

  // On écoute le changement du readyState
  xhr.onreadystatechange = function () {
    // Le readystate == 4 (4=réponse prête)
    if (xhr.readyState === 4 && xhr.status === 200) {
      let data = xhr.responseXML; // responseXML
      console.log(data); // #document (document xml)
      processResponse(data);
    }
  };
}

//----------------------------------
// function ajaxCall()
function processResponse(data) {
  // data EST un document XML
  let nodeImages = data.getElementsByTagName("image");
//   console.log(nodeImages); // #document (document xml)

  for (let i = 0; i < nodeImages.length; i++) {
    // Les catégories
    let categorie = nodeImages[i].getAttribute("categorie");
    // console.log(categorie);

    let fichier = nodeImages[i].getElementsByTagName("fichier")[0].firstChild
      .nodeValue;
    // console.log(fichier);

    let legende = nodeImages[i].getElementsByTagName("legende")[0].firstChild
      .nodeValue;
    // console.log(legende);

    creationImgDom(categorie, fichier, legende, i);

    
  }


}
function creationImgDom(categorie, fichier, legende, i) {
    //Créer un élément 'div' + un noeud image
    let divImg = document.createElement("div");
  
    let img = document.createElement(
      image(categorie, fichier, legende, i)
    );
  
    //On ajoute la image à la div
    divImg.appendChild(img);
  
    //On ajoute la div à l'id container de l index (existant)
    document.getElementById("container").appendChild(divImg);
  }
  
  function image(categorie, fichier, legende, i) {
    var caracteristiqueImg = document.createElement("IMG");
    caracteristiqueImg.setAttribute("id", i);
    caracteristiqueImg.setAttribute("border", "10");
    caracteristiqueImg.setAttribute("margin", "5");
    caracteristiqueImg.setAttribute("src", "./galeries/" + categorie + "/" + fichier);
    caracteristiqueImg.setAttribute("alt", legende);
    caracteristiqueImg.setAttribute("onclick","(function(){grandeImage('" + "./galeries/" + categorie + "/big/" + fichier + "','" + legende + "');})()");
    document.body.appendChild(caracteristiqueImg);
  }
  
  function grandeImage(fichier, legende ) {
    document.getElementById("grandeImage").innerHTML =  '<img src="' +  fichier + '" alt="' + legende + '"></img>' ;
    document.getElementById("legende").innerHTML =  legende;
  }

