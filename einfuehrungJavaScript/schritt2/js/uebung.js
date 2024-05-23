// JavaScript Document
let graphenArray=[];
let y=0;
let ySchnittpunkt=0;
let xSchnittpunkt=0;
let a=0;
let b=0;
let c=0;
let d=0;
let wertebereichVon;
let wertebereichBis;



function wertetabelle()
{
	
	// Array löschen
	graphenArray.splice(0,graphenArray.length);
	// auslesen der formularfelder
		a= parseInt(document.getElementById('a').value);
		b= parseInt(document.getElementById('b').value);
		c= parseInt(document.getElementById('c').value);
		d= parseInt(document.getElementById('d').value);
		e= parseInt(document.getElementById('e').value);
		f= parseInt(document.getElementById('f').value);
	
		wertebereichVon= parseInt(document.getElementById('wertebereichVon').value);
		wertebereichBis= parseInt(document.getElementById('wertebereichBis').value);
		// Schleife für das wiederholte Berechnen
			for(let x=wertebereichVon; x<=wertebereichBis; x++ )
				{
					y=a*Math.pow(x,5)+
						b*Math.pow(x,4)+
						c*Math.pow(x,3)+
						d*Math.pow(x,2)+
						e*Math.pow(x,1)+
						f;
					// Schnittpunkt ermitteln
					graphenArray.push({x: x, y: y});
					// Für Y
					if(x==0)
					   {
							ySchnittpunkt=y;
					   }
					// Für X
					if(y==0)
					   {
							xSchnittpunkt=y;
					   }

					//console.log('x: '+x+' y: '+y);
				}
		//console.log("Schnittpunkt der x-Achse bei y="+ySchnittpunkt);
		//console.log("Schnittpunkt der y-Achse bei x="+xSchnittpunkt);
		console.log(graphenArray);
	
		arrayZuTabelle(graphenArray,'tabelle');
		
        
	
	
}


function arrayZuTabelle(datenArray, zielElementId) {
    // Überprüfe, ob das Datenarray Elemente enthält
    if (datenArray.length === 0) {
        document.getElementById(zielElementId).innerHTML = "Keine Daten vorhanden.";
        return;
    }

    // Beginne mit dem Tabellenkopf, extrahiere Spaltenüberschriften aus den Schlüsseln des ersten Objekts
    let tabelleHtml = "<table><thead><tr>";
    for (let i = 0; i < Object.keys(datenArray[0]).length; i++) {
        tabelleHtml += `<th>${Object.keys(datenArray[0])[i]}</th>`;
    }
    tabelleHtml += "</tr></thead><tbody>";

    // Füge für jedes Objekt im Array eine Tabellenzeile hinzu
    for (let i = 0; i < datenArray.length; i++) {
        tabelleHtml += "<tr>";
        for (let j = 0; j < Object.values(datenArray[i]).length; j++) {
            tabelleHtml += `<td>${Object.values(datenArray[i])[j]}</td>`;
        }
        tabelleHtml += "</tr>";
    }

    // Schließe die Tabelle und aktualisiere das Ziel-HTML-Element
    tabelleHtml += "</tbody></table>";
    document.getElementById(zielElementId).innerHTML = tabelleHtml;
}

