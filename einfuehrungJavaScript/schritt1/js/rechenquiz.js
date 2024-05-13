// JavaScript Document
// Rechenquiz
// Alle Befehle, die folgen, werden automatisch ausgeführt
console.log('Seite geladen');
let zahlenbereichMin=1;
let zahlenbereichMax=10;
let summand1=zufallszahl(zahlenbereichMin,zahlenbereichMax);
let summand2=zufallszahl(zahlenbereichMin,zahlenbereichMax);
let ergebnis = summand1+summand2;
let aufgabentext=summand1+'+'+summand2;
// Testweises Ausgeben der Aufgabe auf der Console
console.log(aufgabentext);
// Ausgabe der Aufgabe auf der Webseite
//  Zugriff auf das Element mit der ID=aufgabe
document.getElementById('aufgabe').value=aufgabentext;

function zufallszahl(min, max)
	{
		return Math.floor(Math.random()*(max-min))+min;
	}

function check()
{
	console.log('Funktion wurde aufgerufen!');
	// Wert auslesen, den der User eingetragen hat
	let userWert= document.getElementById('userErgebnis').value;
	console.log(userWert);
	// Werte vergleichen
	if(userWert==ergebnis)
	   {
	   		console.log('Richtig!');
	   }else
		   {
			console.log('Falsch!');
		   }
}
