/* VARIABLES JOUEUR */

let getName = document.querySelector("#getName");
let buttonPlayer = document.querySelector("#votreNom");
let namePlayer = document.querySelector(".namePlayer");
let imgPlayer = document.querySelector("#imgPlayer");
let infoNamePlayer = document.querySelector(".info_namePlayer");
let infoPvPlayer = document.querySelector(".info_pvPlayer");
let playerName = "";
let pvPlayer = 50;


/* VARIABLES DEBILE */

let imgDebile = document.querySelector("#imgDebile");
let buttonDebile = document.querySelector("#debile_img");
let debileTexte = document.querySelector(".debileTexte");
let infoNameDebile = document.querySelector(".info_nameDebile");
let infoPvDebile = document.querySelector(".info_pvDebile");
let nameDebile = "Le Débile";
let pvDebile = 50;


/* VARIABLES DÉ */

let twiceText = document.querySelector(".texteDe");
let twice = document.querySelector("#twice");


/* VARIABLES RÉSULTATS */

let titreLancerJoueur = document.querySelector(".lancerJoueurTitre");
let resultLancerJoueur = document.querySelector(".resultLancerJoueur");
let titreLancerDebile = document.querySelector(".lancerDebileTitre");
let resultLancerDebile = document.querySelector(".resultLancerDebile");
let randomPlayer = 0;
let randomDebile = 0;
let resultCombat = document.querySelector(".resultCombat");


/* RÉCUPÉRER LE NOM DU JOUEUR */

buttonPlayer.addEventListener("click", function() {
    playerName = getName.value;
    getName.style.display = "none";
    buttonPlayer.style.display = "none";
    namePlayer.style.display = "flex";
    namePlayer.style.fontWeight = "bold";
    namePlayer.innerHTML = playerName;
    imgPlayer.style.opacity = "1";
    infoNamePlayer.innerHTML = playerName;
    infoPvPlayer.innerHTML = pvPlayer + " PV.";
    debileTexte.style.display = "flex";
    buttonDebile.style.display ="flex";
})


/* DECOUVRIR LE DEBILE */

buttonDebile.addEventListener("click", function() {
    imgDebile.style.opacity = "1";
    buttonDebile.style.display = "none";
    debileTexte.style.fontWeight = "bold";
    debileTexte.innerHTML = "Le Débile";
    infoNameDebile.innerHTML = nameDebile;
    infoPvDebile.innerHTML = pvDebile + " PV.";
    twiceText.style.opacity = "1";
    twice.style.opacity = "1";
})


/* LANCER LE DÉ */

twice.addEventListener("click", function() {
    if(pvPlayer <= 0) {
        imgPlayer.style.opacity = "0";
        namePlayer.innerHTML = "Perdu !";
        infoNamePlayer.innerHTML = "";
        infoPvPlayer.innerHTML = "";
        nameDebile.innerHTML = "Gagné !";
        infoNameDebile.innerHTML ="";
        infoPvDebile.innerHTML = "";
        titreLancerJoueur.style.display = "none";
        resultLancerJoueur.style.display = "none";
        twiceText.style.display = "none";
        twice.style.display = "none";
        resultCombat.style.display = "none";
        titreLancerDebile.style.display = "none";
        resultLancerDebile.style.display = "none";
    } else if (pvDebile <= 0) {
        imgDebile.style.opacity = "0";
        nameDebile.innerHTML = "Perdu !";
        infoNameDebile.innerHTML = "";
        infoPvDebile.innerHTML = "";
        namePlayer.innerHTML = "Gagné !";
        infoNamePlayer.innerHTML = "";
        infoPvPlayer.innerHTML = "";
        titreLancerJoueur.style.display = "none";
        resultLancerJoueur.style.display = "none";
        twiceText.style.display = "none";
        twice.style.display = "none";
        resultCombat.style.display = "none";
        titreLancerDebile.style.display = "none";
        resultLancerDebile.style.display = "none";
    } else {
        randomPlayer = Math.floor(Math.random() * 10+ 1);
        randomDebile = Math.floor(Math.random() * 10 + 1);
        randomResult = "";
        titreLancerJoueur.style.opacity = "1";
        resultLancerJoueur.innerHTML = randomPlayer;
        resultLancerJoueur.style.opacity = "1";
        titreLancerDebile.style.opacity = "1";
        resultLancerDebile.innerHTML = randomDebile;
        resultLancerDebile.style.opacity = "1";
        if (randomPlayer > randomDebile) {
            randomResult = randomPlayer - randomDebile;
            resultCombat.innerHTML = "Vous retirez " + randomResult + " PV au débile.";
            resultCombat.style.opacity = "1";
            pvDebile -= randomResult;
            infoPvDebile.innerHTML = pvDebile + " PV.";
        } else if (randomDebile > randomPlayer) {
            randomResult = randomDebile - randomPlayer;
            resultCombat.innerHTML = "Le débile vous retire " + randomResult + " PV.";
            resultCombat.opacity = "1";
            pvPlayer -= randomResult;
            infoPvPlayer.innerHTML = pvPlayer + " PV.";
        } else {
            resultCombat.innerHTML = "Égalité !";
            resultCombat.style.opacity = "1";
        }
    }
})


