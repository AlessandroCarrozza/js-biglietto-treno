
// prompt per l'inserimenti dei valori
const numKm = parseInt(prompt("Inserisci i KM che vuoi percorrere."));

const etaUtente = parseInt(prompt("Inserisci la tua età."));

// coefficiente del prezzo
const coeff = 0.21; 

// prezzo totale standard
let totPrice = numKm * coeff;

// dichiarazione variabili dei due prezzi scontati
let totPriceJunior;
let totPriceSenior;

// istruzioni condizionali
if (etaUtente <= 17) {
    totPriceJunior = totPrice - ((totPrice * 20) / 100);
    document.getElementById("price").innerHTML = "Il prezzo del tuo ticket è di " + totPriceJunior + "€";
} else if (etaUtente >= 65) {
    totPriceSenior = totPrice - ((totPrice * 40) / 100);
    document.getElementById("price").innerHTML = "Il prezzo del tuo ticket è di " + totPriceSenior + "€";
} else {
    document.getElementById("price").innerHTML = "Il prezzo del tuo ticket è di " + totPrice + "€";
}