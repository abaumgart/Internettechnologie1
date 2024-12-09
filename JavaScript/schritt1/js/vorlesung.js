// JavaScript Document

let meinGewicht;
let meineGroesse;
let bmi=0;





function bmiBerechnen()
{
 	meinGewicht = document.getElementById('gewicht').value;
	meineGroesse = document.getElementById('koerpergroesse').value;
	bmi=meinGewicht/(Math.pow(meineGroesse,2));
	console.log(bmi);
	document.getElementById('bmiErgebnis').value=bmi;
}
