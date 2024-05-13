// JavaScript Document
// Steuerung des Programmablaufs

// if-Anweisung
// Benutzername und Kennwort werden geprüft.

let benutzername='Bernd Müller';
let kennwort='1234';
// Logischen Operatoren
// || für ODER 
// && für UND
if(benutzername=='Bernd Müller' && kennwort=='1234')
	{
		let ausgabe = 'Herzlich Willkommen';
		document.getElementById('nachricht').textContent=ausgabe;
	} else 
		{
			let ausgabe = 'Benutzername oder Kennwort falsch';
			document.getElementById('nachricht').textContent=ausgabe;
		}




