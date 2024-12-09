// JavaScript Document
// Arbeiten mit Arrays.

const todo = new Array();

function pushMethode()
{
	let aufgabe=document.getElementById('todo').value;
	// Arbeiten mit push(). Fügt Arrayeintrag am Ende zu
	todo.push(aufgabe);
	document.getElementById('ausgabe').value= todo;
	console.log(todo.length);
	
}

function unshiftMethode()
{
	let aufgabe=document.getElementById('todo').value;
	// Arbeiten mit unshift() Fügt Eintrag am Anfang zu. Index wird neu sortiert.
	todo.unshift(aufgabe);
	document.getElementById('ausgabe').value= todo;
	console.log(todo.length);
	
}

function spliceMethode()
{
	let aufgabe=document.getElementById('todo').value;
	let spliceStelle=document.getElementById('splice').value;
	/* Arbeiten mit splice() Fügt Eintrag an beliebiger Stelle hinzu. Benötigt Parameter. 
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
	*/
	todo.splice(spliceStelle,0,aufgabe); // fügt das Element an der Stelle hinzu, die der Anwender eingegeben hat.
	document.getElementById('ausgabe').value= todo;
	console.log(todo.length);
	
}

function popMethode()
{
	todo.pop(); // Entfernt das letzte Element aus einer Liste.
	document.getElementById('ausgabe').value= todo;
	console.log(todo.length);
	
}

function shiftMethode() 
{
	todo.shift(); // lösche das erste Element der Liste mit shift()
	document.getElementById('ausgabe').value= todo; // Gebe den Inhalt des Arrays todo im Output-Element ausgabe aus
	console.log(todo.length);
	
}

function spliceDeleteMethode()
{
	// Lese aus dem Formular das Feld aus. Eingetragener Wert entspricht dem index, an der an Element gelöscht werden soll.
	let loeschenAb=document.getElementById('loeschenAb').value;
	let anzElemente=document.getElementById('anzElemente').value;
	/* Arbeiten mit splice() Fügt Eintrag an beliebiger Stelle hinzu. Benötigt Parameter. 
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
	*/
	todo.splice(loeschenAb,anzElemente); // fügt das Element an der Stelle hinzu, die der Anwender eingegeben hat.
	document.getElementById('ausgabe').value= todo;
	console.log(todo.length);
	
}

function listeUmkehren()
{
	todo.reverse(); // fügt das Element an der Stelle hinzu, die der Anwender eingegeben hat.
	document.getElementById('ausgabe').value= todo;
	console.log(todo.length);
}
