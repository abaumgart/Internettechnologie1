// =============================================
// Schritt 3: Filter + change-Event
// =============================================

const kuenstlerDaten = [
  { id: 1, name: "Peter Fox", genre: "deutschpop", uhrzeit: "20:30", buehne: "Hauptbuehne", info: "Deutschpop mit Live-Band." },
  { id: 2, name: "Nina Chuba", genre: "deutschpop", uhrzeit: "18:45", buehne: "Hauptbuehne", info: "Moderner Pop mit Rap-Einflüssen." },
  { id: 3, name: "Alle Farben", genre: "electro", uhrzeit: "22:00", buehne: "Electro Stage", info: "Electronic Dance Set." },
  { id: 4, name: "Milky Chance", genre: "indie", uhrzeit: "19:30", buehne: "Parkbuehne", info: "Indie/Folk mit bekannten Hits." }
];

const genreAuswahlElement = document.getElementById("genre-auswahl");
const lineupListeElement = document.getElementById("lineup-liste");

function lineupAnzeigen(gewaehltesGenre) {
  const gefilterteKuenstler =
    gewaehltesGenre === "alle"
      ? kuenstlerDaten
      : kuenstlerDaten.filter(kuenstler => kuenstler.genre === gewaehltesGenre);

  lineupListeElement.innerHTML = "";

  gefilterteKuenstler.forEach(kuenstler => {
    const kachel = document.createElement("div");
    kachel.className = "kachel";

    kachel.innerHTML = `
      <strong>${kuenstler.name}</strong><br>
      Genre: ${kuenstler.genre}<br>
      ${kuenstler.uhrzeit} – ${kuenstler.buehne}
    `;

    lineupListeElement.appendChild(kachel);
  });
}

// Event: Wenn sich die Auswahl im Dropdown ändert
genreAuswahlElement.addEventListener("change", (ereignis) => {
  const gewaehltesGenre = ereignis.target.value;
  lineupAnzeigen(gewaehltesGenre);
});

// Start
lineupAnzeigen("alle");
