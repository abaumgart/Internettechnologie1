// JavaScript Document

let kneipenliste = [
	{
		kneipenname: 'Kling Klang',
		blogtext: 'Das KLING KLANG bietet ....',
		oeffnungszeiten: 'täglich von 18 bis 24 Uhr',
		bildpfad:'media/strandbild.jpeg',
		bewertung: 123
	},
	{
		kneipenname: 'Böll',
		blogtext: 'Im Böll kannst du ....',
		oeffnungszeiten: 'täglich von 10 bis 24 Uhr',
		bildpfad:'media/strandbild.jpeg',
		bewertung: 109
	},
	{
		kneipenname: 'Cocoon',
		blogtext: 'Karaoke und mehr: Das ist das Cocoon',
		oeffnungszeiten: 'Freitag und Samstag von 18 bis 4 Uhr',
		bildpfad:'media/strandbild.jpeg',
		bewertung: 205
	},
	{
		kneipenname: 'Kush',
		blogtext: 'Burger und Cocktails',
		oeffnungszeiten: 'Freitag und Samstag von 18 bis 4 Uhr',
		bildpfad:'media/strandbild.jpeg',
		bewertung: 200
	}
]

let anzahlKneipen=kneipenliste.length; // AUFGABE: WELCHE AUFGABE HAT DIESE ZEILE? LASSEN SIE SICH DAS ERGEBNIS AUF DER CONSOLE AUSGEBEN

let artikelHtml = '';
for (let i = 0; i < kneipenliste.length; i++) 
	{
		artikelHtml += '<article class="artikel">';
         {
            artikelHtml += '<header>';
			artikelHtml += `<h1>${(kneipenliste[i]).kneipenname}</h1>`;
			artikelHtml += '</header>';
			artikelHtml += `<p>${(kneipenliste[i]).blogtext}</p>`;
			artikelHtml += `<p>${(kneipenliste[i]).oeffnungszeiten}</p>`;
			
			artikelHtml += '<footer>';
			artikelHtml += `<p>Abgegebene Stimmen: ${(kneipenliste[i]).bewertung}</p>`; 
			artikelHtml += '</footer>';
		 }
        artikelHtml += '</article>';
    }
document.getElementById('kneipenliste').innerHTML = artikelHtml;
findeBeliebtesteKneipe(); // rufe die Funtion findeBeliebtesteKneipe() auf
abgegebeneStimmen();


function findeBeliebtesteKneipe()
{
	// Algorithmus für das Finden der beliebtesten Kneipe
	// Beim Start gehen wir davon aus, dass die erste Kneipe (mit dem Index 0) die beliebteste Kneipe ist
	// Die beliebteste Kneipe ist die, die bei der Bewertung die meisten abgegebenen Stimmen hat = höchster Wert
	let beliebtesteKneipe = kneipenliste[0]; 
	for (let i = 1; i < kneipenliste.length; i++) 
		{ // Wir greifen auf die nächste Kneipe in der Liste zu. Beim ersten Druchlauf die Kneipe mit dem Index 1. 
			// Wenn die Bewertung der Kneipe, auf die gerade zugegriffen wird, gößer ist, dann ist sie beliebter...
        	if (kneipenliste[i].bewertung > beliebtesteKneipe.bewertung) 
				{
            		beliebtesteKneipe = kneipenliste[i]; // ...also speichern wir die aktuelle Kneipe als beliebteste Kneipe
				}
		}
	console.log(beliebtesteKneipe.kneipenname); // Ausgabe des Namens der beliebtesten Kneipe
	document.getElementById('beliebtesteKneipe').innerText = 'Aktueller Favorit:'+ beliebtesteKneipe.kneipenname; // Und die Ausgabe auf der Webseite im gewünschten Element.
}


function abgegebeneStimmen()
{
	let gesamtsummeStimmen=0; 
	for (let i = 0; i < kneipenliste.length; i++) 
		{ 
        	gesamtsummeStimmen= kneipenliste[i].bewertung + gesamtsummeStimmen;
				
		}
	console.log('Gesamtzahl abgegebener Stimmen:'+gesamtsummeStimmen); // Ausgabe des Namens der beliebtesten Kneipe

	/* SELBSTSTUIDUM:
	
	ERWEITERN SIE DAS PROGRAMM, DAMIT DIE ANZAHL DER STIMMEN AUF DER WEBSEITE AUSGEGEBEN WIRD. ÄNDERN SIE DIE FUNKTION SO AB, DASS EBENFALLS BERECHNET WIRD, WIE VIELE STIMMEN IM SCHNITT AUF JEDE KNEIPE VERGEBEN WURDEN. DENKEN SIE AN DIE VARIABLE anzahlKneipen. GEBEN SIE DEN DURCHSCHNITT EBENFALLS AUF DER WEBSEITE AUS UND NICHT NUR AUF DER CONSOLE.
	EXPERIMENTIEREN SIE MIT DEN DATEN, ÄNDERN DIE STIMMEN, FÜGEN SIE NEUE KNEIPE DEM ARRAY HINZU.
	
	*/
}

