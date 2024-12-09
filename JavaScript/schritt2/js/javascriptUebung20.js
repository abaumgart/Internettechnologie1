// JavaScript Document
// Arbeiten mit 2-dimensionalen Arrays

// Die folgenden Variablen übernehmen die Werte aus dem Formular beim Speichern
let studiengang;
let studiengangKuerzel;

const studiengaenge =[
	['Medienwirtschaft und Journalismus','MWJ',7,'Dr. Melanie Hellwig','Bachelor of Arts'],
	['Management digitaler Medien','MdM',3,'Prof. Dr. Knut Barghorn','Master of Arts'],
	['Wirtschaftsingenieurwesen','Wing',7,'Prof. Dr. Lutz Engel','Bachelor of Engineering'],
];

// Ausgabe der Elemente mittels zweier Schleifen

function speichern()
	{
		// Formular auslesen
		studiengang=document.getElementById('studiengang').value;
		studiengangKuerzel=document.getElementById('studiengangkuerzel').value;
		// FÜGE selbst die restlichen Elemente hinzu.
		studiengaenge.push([studiengang,studiengangKuerzel]);
	}

function ausgabe()
	{
		// Vervollständige die Funktion
	}


