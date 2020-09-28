/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// check.js

// Event 'click' sur le bouton
// document.getElementById("bt-check").onclick = check;
document.getElementById("bt-check").addEventListener("click", check);


//---------------------------------------------------------------------

function check(){
    let validationFinale = true;
    document.getElementById("err-user").innerHTML = "";
    document.getElementById("err-pass").innerHTML = "";
    document.getElementById("err-size").innerHTML = "";
    document.getElementById("err-topping").innerHTML = "";
    document.getElementById("err-payment").innerHTML = "";
    
    //---------------------------------------------------------------------
// valid user
if(document.getElementById("user").value.lenght < 10 || document.getElementById("user").value.lenght > 20){
        document.getElementById("err-user").innerHTML = "Min: 10 - Max: 20!";
        validationFinale = false;
    }
            //---------------------------------------------------------------------
// valid pass
if(document.getElementById("pass").value.lenght < 5 || document.getElementById("pass").value.lenght > 10){
        document.getElementById("err-pass").innerHTML = "Entre 5 et 10 caractères !";
        validationFinale = false;
    }
    
                //---------------------------------------------------------------------
// valid size
let size =  document.getElementsByClassName("size"); // returns Nodelist, un tableau
let tailleOK = false;
for(let i=0; i<size.lengt; i++){
    if(size[i].checked === true) tailleOK = true;
}

if(tailleOK){
        document.getElementById("err-size").innerHTML = "SVP saisissez une taille !";
        validationFinale = false;
    }
 
        
                //---------------------------------------------------------------------
// valid toppings
let toppings =  document.getElementsByClassName("topping"); // returns Nodelist, un tableau
let toppingCount = false;
for(let i=0; i<toppings.lengt; i++){
    if(toppings[i].checked === true) ++toppingCount;
}

if(toppingCount<3){
        document.getElementById("err-topping").innerHTML = "SVP au moins 3 ingrédients !";
        validationFinale = false;
    }

//---------------------------------------------------------------------
// valid payment
// En 2 instructions
var laListe = document.getElementsByClassName("payment").options; 
var optionSelectionnee = document.getElementById("payment").selectedIndex;
console.log(optionSelectionnee);
var optionPaiement = laListe[optionSelectionnee].value;



if(optionPaiement === 1){
        document.getElementById("err-payment").innerHTML = "SVP un moyen de paiement";
        validationFinale = false;
    }
    
// en 1 instruction
// var optionPaiement = document.getElementById("payment").options[document.getElementById("payment").selectedIndex].value;

//validation finale
if(validationFinale) document.getElementById("zePizzaForm").submit;
}