// JavaScript Document
console.log("Seite wurde geladen");
// Variable deklarieren
let radius = 5;
let durchmesser = 2*radius;
let umfang = runden(kreisumfang(radius),2);
let flaeche = runden(kreisflaeche(radius),2);
let ausgabeUmfang = 'Umfang: '+umfang;
let ausgabeFlaeche = 'Fläche: '+flaeche;

ausgabe('flaeche',ausgabeFlaeche);
ausgabe('umfang',ausgabeUmfang);

console.log(umfang);
console.log(flaeche);

werteliste(1,1000);


function werteListe()
	{
		
	}

function ausgabe(id, text)
	{
		document.getElementById(id).innerText=text;
	}

function kreisflaeche(radius)
	{
			return (Math.PI * Math.pow(radius, 2));
	}
function kreisumfang(radius)
	{
			return 2 * Math.PI * radius;
	}

function runden(wert, anzStellen)
	{
		return parseFloat(wert.toFixed(anzStellen));
	}

function berechnen()
{
nsole.log("Berechnung wurde ausgeführt");
}