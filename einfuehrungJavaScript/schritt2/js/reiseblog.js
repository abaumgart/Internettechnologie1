// JavaScript Document

let blogeintrag = [
	{
		titel: '<h1>Willkommen <br>bei Masaai</h1>',
		blogtext: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vit',
		verlinkung: 'http://www.jade-hs.de'
	},
	{
		titel: 'Willkommen in Jever',
		blogtext: 'Beste Bierstadt!',
		verlinkung: 'http://www.jever.de'
	}
]
//console.log(blogeintrag);
console.log(blogeintrag[0].titel); 
document.getElementById('ueberschriftArtikel1').innerHTML=blogeintrag[0].titel;
document.getElementById('textArtikel1').innerHTML=blogeintrag[0].blogtext;
