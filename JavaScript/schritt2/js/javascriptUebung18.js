// JavaScript Document
// Arbeiten mit value, innerhtml und innertext

// Welche Aufgabe hat die folgende Zeile:
// Antwort:
let ueberschrift='Arbeiten mit der Eigenschaft value, innerhtml und innertext';
// Welche Aufgabe hat die folgende Zeile:
// Antwort:
let labelTextarea = 'Gebe HTML-Code ein und klicke auf ok';
// Welche Aufgabe hat die folgende Zeile:
// Antwort:
let vorbelegungFuerTextArea = '<p><h1>Ich bin eine Blindueberschrift</h1><br>Ändere mich ein wenig ab, füge <b>HTML-Elemente</b> hinzu, klicke auf OK und schaue, was passiert.</p>';

// Kommentiere den folgenden Code / Beantworte die folgenden Fragen
// Welche Aufgabe hat die folgende Zeile?
// Antwort:
document.getElementById('ueberschrift').innerText=ueberschrift;
// Welche Aufgabe hat die folgende Zeile?
// Antwort:
document.getElementById('labelTextarea').innerText=labelTextarea;
// Welche Aufgabe hat die folgende Zeile?
// Antwort:
document.getElementById('textarea').value=vorbelegungFuerTextArea;



// Von wo wird die Funktion update aufgerufen?
// Antwort: 
function update()
	{
		// Auslesen der Textarea
		const textausTextarea = document.getElementById('textarea').value;
		// Ändere in der folgenden Zeile innerHTML in innerText ab, speichere die Datei, überprüfe das Ergebnis und beantworte die anschließenden Fragen:
		document.getElementById('ausgabe').innerHTML=textausTextarea;
		/*
		Was bewirkt die Änderung von innerHTML auf innerText? Begründe deine Antwort.
		Antwort:
		
		
		Was bewirkt eine Änderung von innerHTML auf value? Begründe deine Antwort.
		Antwort:
		
		*/
		
		
	}