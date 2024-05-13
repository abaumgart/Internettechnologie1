// JavaScript Document
// Steuerung des Programmablaufs

// if-Anweisung

let istAnwenderAngemeldet= false;

if(istAnwenderAngemeldet==true)
	{
		let ausgabe = 'Herzlich Willkommen';
		document.getElementById('nachricht').textContent=ausgabe;
	} else 
		{
			let ausgabe = 'Bitte erst anmelden';
			document.getElementById('nachricht').textContent=ausgabe;
		}




