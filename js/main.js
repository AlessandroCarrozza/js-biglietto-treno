
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
    totPriceJunior = totPriceJunior.toFixed(2);
    document.getElementById("price").innerHTML = "Il prezzo del tuo ticket Junior è di " + totPriceJunior + "€" + " a cui è stato attivato uno sconto del 20%.";
} else if (etaUtente >= 65) {
    totPriceSenior = totPrice - ((totPrice * 40) / 100);
    totPriceSenior = totPriceSenior.toFixed(2);
    document.getElementById("price").innerHTML = "Il prezzo del tuo ticket Senior è di " + totPriceSenior + "€" + " a cui è stato attivato uno sconto del 40%.";
} else {
    totPrice = totPrice.toFixed(2);
    document.getElementById("price").innerHTML = "Il prezzo del tuo ticket è di " + totPrice + "€" + ".";
}