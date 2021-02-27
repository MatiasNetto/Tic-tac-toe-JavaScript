const infoContainer = document.getElementById(`infoContainer`);
const lengEs = document.getElementById(`lengEs`);
const lengEn = document.getElementById(`lengEn`);
const tittle1 = document.getElementById(`tittle1`);
const tittle2 = document.getElementById(`tittle2`);
const info1 = document.getElementById(`info1`);
const info2 = document.getElementById(`info2`);
const infoBTN = document.getElementById(`infoBTN`);

function changeEspañol() {
    tittle1.innerHTML = "Informacion";
    info1.innerHTML = `Esto es un remake del clasico juego "TikTakToe" tambien conocido como "TaTeTi". Desarollado en su totalidad con HTML, CSS y JavaScript nativo, sin frameworks ni librerias.`;
    tittle2.innerHTML = "Como jugar?"
    info2.innerHTML = "Debes lograr alinear 3 casillas con el mismo simbolo (X o O) para ganar, puedes cambiar el nombre de los jugadores."
    infoBTN.innerHTML = "Entendido";
}

function changeEnglish() {
    tittle1.innerHTML = "Information";
    info1.innerHTML = `This is a remake of the classic game "TikTakToe" also known as "TaTeTi". Developed only using HTML, CSS and native JavaScript, without frameworks or libraries.`;
    tittle2.innerHTML = "How to play?"
    info2.innerHTML = "You must align 3 squares with the same symbol (X or O) to win, also you can change the names of the players."
    infoBTN.innerHTML = "I understand";
}

lengEs.addEventListener(`click`,changeEspañol);

lengEn.addEventListener(`click`,changeEnglish);

infoBTN.addEventListener(`click`,()=>{
    infoContainer.classList.add(`info-container--out-animation`);
    setTimeout(()=>{infoContainer.style.display = "none"},100);
})

changeEnglish();

