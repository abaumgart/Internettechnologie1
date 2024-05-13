// JavaScript Document
// Arbeiten mit Schleifen, hier Zählschleife
const selectElement = document.getElementById('studiengang');
const studiengaenge = [
'Medienwirtschaft & Journalismus',
'Wirtschaft',
'Wirtschaftsingenieurwesen',
'Wirtschaftsinformatik',
'Maschinenbau',
'Architektur',
	'Mediendesign'
];
for(let i=0; i<studiengaenge.length;i++){
	const optionElement = document.createElement('option'); 
	const optionText = document.createTextNode(studiengaenge[i]); 
	optionElement.appendChild(optionText);
	selectElement.appendChild(optionElement);
} 