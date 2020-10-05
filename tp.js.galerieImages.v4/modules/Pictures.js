//Modele Picture avec une classe
export class Picture {

    constructor(categorie, fichier, legende) {

        this.categorie = categorie;
        this.fichier = fichier;
        this.legende = legende;
    }

    display() {
        console.log("Categorie= " + this.categorie + " Fichier= " + this.fichier + " Legende= " + this.legende);
    }
}

let picture = new Picture("art_abstrait", "AbstractBlue.jpg", "Art abstrait 2");
picture.display();