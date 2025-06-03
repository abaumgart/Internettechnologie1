// JavaScript Document

// Entfernung zum Ziel berechnen (Zufallszahl). 
// Wird auf der Webseite ausgegeben> HTML-Element 
// wird für die Ausgabe benötigt

// Globale Variable für das Ziel
let entfernungZumZiel;
let counter=0; // Variable für das Zählen der Versuche
let anzahlVersuche=5;


entfernungZumZiel = zielEntfernungBerechnen();
let toleranz=3; // Toleranz, mit der die Wurfweite von der Entfernung abweichen darf
let minWurfweite= entfernungZumZiel-toleranz;
let maxWurfweite= entfernungZumZiel+toleranz;
document.getElementById("zielentfernung").innerText=entfernungZumZiel;


function elementeDeaktivieren()
	{
	   	document.getElementById("btn_berechnung").disabled=true;
		document.getElementById("winkel").disabled=true;
		document.getElementById("v0").disabled=true;
	}


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
	
	console.log(minWurfweite); // Testweise Zugriff und Ausgabe auf die globale Variable entfernungZumZiel
	console.log(maxWurfweite);
	// Counter erhöhen
	counter++;
	if((wurfweite>minWurfweite)&&(wurfweite<maxWurfweite) )
		{
			console.log("Treffer");
			console.log("Sie haben "+counter+" Versuche benötigt.");
		
		}
			else
				{
					console.log("Leider daneben");
				}	
	
	console.log("Aktueller Wurfversuch: "+counter);

	// Wenn Anzahl der Versuche größer 2 ist, dann
	// Button deaktivieren
	
	if(counter>=anzahlVersuche)
	   {
	   	elementeDeaktivieren();
	   }
	
	
	
}

