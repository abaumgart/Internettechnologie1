const kuenstlerDaten = [
  { id: 1, name: "Peter Fox", genre: "deutschpop", uhrzeit: "20:30", buehne: "Hauptbuehne", info: "Deutschpop mit Live-Band." },
  { id: 2, name: "Nina Chuba", genre: "deutschpop", uhrzeit: "18:45", buehne: "Hauptbuehne", info: "Moderner Pop mit Rap-Einflüssen." },
  { id: 3, name: "Alle Farben", genre: "electro", uhrzeit: "22:00", buehne: "Electro Stage", info: "Electronic Dance Set." },
  { id: 4, name: "Milky Chance", genre: "indie", uhrzeit: "19:30", buehne: "Parkbuehne", info: "Indie/Folk mit bekannten Hits." }
];

genreAuswahlElement = document.getElementById("genre-auswahl");
lineupListElement = document.getElementById("lineup-liste");
kuenstlerDetailsElement = document.getElementById("kuenstler-details");

console.log("Anzahl der Künstler:", kuenstlerDaten.length);
console.log("Erster Künstler:", kuenstlerDaten[0]);
console.log("Genre-Auswahl:",genreAuswahlElement);






