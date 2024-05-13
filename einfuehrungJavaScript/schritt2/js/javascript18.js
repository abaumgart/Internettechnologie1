// JavaScript Document
// Arbeiten mit value, innerhtml und innertext


let ueberschrift= 'Arbeiten mit den Eigenschaften .value, .innerText, .innerHTML';
document.getElementById('valueBeispiel').innerText;



let textBeispiel='Yeah! JavaScript !!';
let htmlBeispiel='<table><tr><td>4</td><td>6</td><td>8</td></tr><tr><td>56</td><td>34</td><td>66</td></tr></table>';

document.getElementById('bspInnerText').innerText=textBeispiel;
document.getElementById('bspInnerHtml').innerHTML=htmlBeispiel;

console.log(document.getElementById('bspInnerText').innerText);
console.log(document.getElementById('bspInnerHtml').innerHTML);

