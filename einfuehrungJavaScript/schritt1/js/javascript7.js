// JavaScript Document
// Steuerung des Programmablaufs

// Die Emoji-Tabelle: https://unicode.org/emoji/charts/full-emoji-list.html#

// Beispiel für SwitchCase
// In einem Formularfeld wird der Gemütszustand mit einem Wort angegeben und das entsprechende Emoji angezeigt.
function checkGemuet()
	{
		let eingabe = document.getElementById('gemuetszustand').value;
		let ausgabe;
		switch(eingabe)
			{
				case 'lustig':	
					ausgabe = String.fromCodePoint(0x1F600);
					document.getElementById('nachricht').textContent=ausgabe;
				break;
				case 'verliebt':	
					ausgabe = String.fromCodePoint(0x1F970);
					document.getElementById('nachricht').textContent=ausgabe;
				break;
				case 'genervt':	
					ausgabe = String.fromCodePoint(0x1F644);
					document.getElementById('nachricht').textContent=ausgabe;
				break;
					
			}
		
		
	}





