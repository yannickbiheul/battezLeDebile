/* RÉCUPÉRER LE NOM DU JOUEUR */

let getName = document.querySelector("#getName");
let buttonPlayer = document.querySelector("#votreNom");
let namePlayer = document.querySelector(".namePlayer");
let imgPlayer = document.querySelector("#imgPlayer");
let infoNamePlayer = document.querySelector(".info_namePlayer");
let infoPvPlayer = document.querySelector(".info_pvPlayer");
let playerName = "";
let pvPlayer = 50;

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

let imgDebile = document.querySelector("#imgDebile");
let buttonDebile = document.querySelector("#debile_img");
let debileTexte = document.querySelector(".debileTexte");
let infoNameDebile = document.querySelector(".info_nameDebile");
let infoPvDebile = document.querySelector(".info_pvDebile");
let nameDebile = "Le Débile";
let pvDebile = 50;

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


/* FAIRE APPARAITRE LE DE */

let twiceText = document.querySelector(".texteDe");
let twice = document.querySelector("#twice");
