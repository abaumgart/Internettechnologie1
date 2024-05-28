// JavaScript Document

let blogeintrag = [
	{
		titel: 'Willkommen bei Masaai',
		blogtext: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vit',
		verlinkung: 'http://www.jade-hs.de',
		bildpfad:'media/strandbild.jpeg'
	},
	{
		titel: 'Willkommen in Jever',
		blogtext: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vit',
		verlinkung: 'http://www.jever.de',
		bildpfad:'media/strandbild.jpeg'
	},
	{
		titel: 'Willkommen in Wilhelmshaven',
		blogtext: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vit',
		verlinkung: 'http://www.wilhelmshaven.de',
		bildpfad:'media/strandbild.jpeg'
	}
]

let artikelHtml = '';
for (let i = 0; i < blogeintrag.length; i++) 
	{
		artikelHtml += '<article class="artikel">';
         {
            artikelHtml += '<header>';
			artikelHtml += `<h1>${(blogeintrag[i]).titel}</h1>`;
			artikelHtml += '</header>';
			artikelHtml += `<p>${(blogeintrag[i]).blogtext}</p>`;
			artikelHtml += `<img src="${(blogeintrag[i]).bildpfad}" >`;
			artikelHtml += '<footer>';
			artikelHtml += `<a href="${(blogeintrag[i]).verlinkung}" target="_blank">${(blogeintrag[i]).verlinkung}</a>`; 
			artikelHtml += '</footer>';
		 }
        artikelHtml += '</article>';
    }
document.getElementById('artikelcontainer').innerHTML = artikelHtml;
