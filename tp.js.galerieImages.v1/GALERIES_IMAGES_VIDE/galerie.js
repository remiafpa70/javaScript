onload = init;



function init() {

    document.getElementById("insertionTitre").innerHTML = "CE QUE JE VOIS POUR LE MOMENT";

    document.getElementById("btn1").onclick = jaiclique;

    function jaiclique() {

        // var img = document.getAnimations(insertionImage);
        // On met du contenu dans le titre
        document.getElementById("insertionTitre").innerHTML = "CE QUE JE VOIS APRES AVOIR CLIQUE !";

        // console.log(titre);


    }



}