// JavaScript Document
// Arbeiten mit functions



function rechteckberechnung()
	{
		let seiteA= 15;
		let seiteB=20;

		let umfang;
		let flaeche;
		let diagonale;

		umfang=umfangberechnen(seiteA, seiteB);
		flaeche= flaecheberechnen(seiteA, seiteB);
		diagonale= diagonaleberechnen(seiteA, seiteB);

		ausgabe(umfang);
		ausgabe(flaeche);
		ausgabe(diagonale);
	}
function diagonaleberechnen(seiteA, seiteB)
{
	return Math.sqrt(Math.pow(seiteA,2)+Math.pow(seiteB,2));
}

function flaecheberechnen(seiteA, seiteB)
	{
			return seiteA*seiteB;
	}

function umfangberechnen(seiteA, seiteB)
	{
			return (2*seiteA)+(2*seiteB);
	}

function ausgabe(meldungstext)
	{
			console.warn(meldungstext);
	}
rechteckberechnung();
