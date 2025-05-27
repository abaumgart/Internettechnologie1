// JavaScript Document

// Entfernung zum Ziel berechnen (Zufallszahl). 
// Wird auf der Webseite ausgegeben> HTML-Element 
// wird für die Ausgabe benötigt

// Globale Variable für das Ziel
let entfernungZumZiel;

entfernungZumZiel = zielEntfernungBerechnen();
document.getElementById("zielentfernung").innerText=entfernungZumZiel;
function zielEntfernungBerechnen()
	{
		ziel = Math.round(Math.random()*90+10);
		return ziel;
	}


function berechnen()
{
	console.log("Button wurde gedrückt!");
 	winkel = document.getElementById('winkel').value;
	console.log(winkel);
	v0 = document.getElementById('v0').value;
	console.log(v0);
	
	// Eingaben in Input-Feldern sind Zeichenketten.
	// Deshalb ist eine Umwandlung in numerische Werte notwendig
	
	winkel = parseInt(winkel);
	v0= parseInt(v0);
	console.log(winkel);
	console.log(v0);
	
	// Winkel umrechnen in radiant (mit Math.PI)
	// winkel * (pi/180)
	
	winkel = winkel*(Math.PI/180);
	console.log(winkel);
	// Wurfweite berechnen Math.sin()
	
	wurfweite= (v0*v0 * Math.sin(2*winkel))/9.81;
	console.log (wurfweite);
	
	// Abrunden, wenn der Dezimalanteil kleiner 0.5 und aufrunden, wenn der Anteil 0.5 oder größer ist.
	// Math.round(wert)
	wurfweite=Math.round(wurfweite);
	
	document.getElementById('ergebnis').innerText = wurfweite;
	
	
	
}

