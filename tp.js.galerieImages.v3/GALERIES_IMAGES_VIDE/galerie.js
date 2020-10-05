// galerie.js


onload = init;

var premierClick = true;

function init() {

    document.getElementById("insertionTitre").innerHTML = "KALEIDOSCOPE";

    document.getElementById("btn1").onclick = clickBtn1;

    // console.log(premierClick);

    document.getElementById("insertionImg1").onclick = clickBtn1;

    // clickBtn1();

    function clickBtn1() {

        if (premierClick == true) {

            imgSuivante();

            premierClick = false

        } else {

            imgPremiere();

            premierClick = true

            // console.log(titre);
        }
    }
}

function imgSuivante() {
    console.log(premierClick);

    document.getElementById("insertionTitre").innerHTML = "LA SITE DU FUTUR";

    document.getElementById("insertionImg1").src = "./galeries/art_abstrait/big/AbstractBlue.jpg";

    console.log();
}

function imgPremiere() {
    console.log(premierClick);

    document.getElementById("insertionTitre").innerHTML = "KALEIDOSCOPE";

    document.getElementById("insertionImg1").src = "./galeries/art_abstrait/big/Abstract_Wallpaper1.jpg";

    console.log();
}