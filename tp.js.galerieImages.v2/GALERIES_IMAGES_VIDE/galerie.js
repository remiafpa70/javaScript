// galerie.js


onload = init;

var premierClick = true;

function init() {

    document.getElementById("insertionTitre").innerHTML = "CE QUE JE VOIS POUR LE MOMENT";

    document.getElementById("btn1").onclick = clickBtn1;

    // console.log(premierClick);

    document.getElementById("insertionImg1").onclick = clickBtn1;

    // clickBtn1();

    function clickBtn1() {

        if (premierClick == true) {

            imgSuivante();

            premierClick = false

        } else {

            imgSuivante();

            premierClick = true

            // console.log(titre);
        }
    }
}

function imgSuivante() {
    console.log(premierClick);

    document.getElementById("insertionTitre").innerHTML = "CE QUE JE VOIS APRES AVOIR CLIQUE !";


    document.getElementById("insertionImg1").src = "./galeries/art_abstrait/big/AbstractBlue.jpg";

    console.log();
}