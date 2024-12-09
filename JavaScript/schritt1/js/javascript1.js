// JavaScript Document

function berechnen()
{
 	seiteA = document.getElementById('seiteA').value;
	seiteB = document.getElementById('seiteB').value;
	flaeche = seiteA*seiteB;
	// alert(flaeche);
	document.getElementById('ergebnis').value=flaeche;
}