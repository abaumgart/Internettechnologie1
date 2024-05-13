// JavaScript Document
// Arbeiten mit 2-dimensionalen Arrays

const studiengaenge =[
	['Medienwirtschaft und Journalismus','MWJ',7,'Dr. Melanie Hellwig','Bachelor of Arts'],
	['Management digitaler Medien','MdM',3,'Prof. Dr. Knut Barghorn','Master of Arts'],
	['Wirtschaftsingenieurwesen','Wing',7,'Prof. Dr. Lutz Engel','Bachelor of Engineering'],
];

// Ausgabe der Elemente mittels zweier Schleifen

for(let zeilen=0;zeilen<studiengaenge.length; zeilen++)
	{
		
		for(let spalten=0;spalten<studiengaenge[zeilen].length; spalten++)
			{
				console.log(studiengaenge[zeilen][spalten]);
			}
	}
