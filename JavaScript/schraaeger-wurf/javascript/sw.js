// JavaScript Document

function berechnen()
{
	console.log("Button wurde gedrückt!");
 	winkel = document.getElementById('winkel').value;
	console.log(winkel);
	v0 = document.getElementById('v0').value;
	console.log(v0);
	
	// Eingaben in Input-Feldern sind Zeichenketten.
	// Deshalb ist eine Umwandlung in numerische werte notwendig
	
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
	
	
	
	//seiteB = document.getElementById('seiteB').value;
	//flaeche = seiteA*seiteB;
	// alert(flaeche);
	//document.getElementById('ergebnis').value=flaeche;
}