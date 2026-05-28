// =============================================
// Schritt 4: Filter + Klick → Details (Event Delegation)
// =============================================

const kuenstlerDaten = [
  { id: 1, name: "Peter Fox", genre: "deutschpop", uhrzeit: "20:30", buehne: "Hauptbuehne", info: "Deutschpop mit Live-Band." },
  { id: 2, name: "Nina Chuba", genre: "deutschpop", uhrzeit: "18:45", buehne: "Hauptbuehne", info: "Moderner Pop mit Rap-Einflüssen." },
  { id: 3, name: "Alle Farben", genre: "electro", uhrzeit: "22:00", buehne: "Electro Stage", info: "Electronic Dance Set." },
  { id: 4, name: "Milky Chance", genre: "indie", uhrzeit: "19:30", buehne: "Parkbuehne", info: "Indie/Folk mit bekannten Hits." }
];

const genreAuswahlElement = document.getElementById("genre-auswahl");
const lineupListeElement = document.getElementById("lineup-liste");
const kuenstlerDetailsElement = document.getElementById("kuenstler-details");

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
      ${kuenstler.uhrzeit} – ${kuenstler.buehne}<br>
      <button type="button" data-id="${kuenstler.id}" class="details-knopf">Details</button>
    `;

    lineupListeElement.appendChild(kachel);
  });
}

function kuenstlerDetailsAnzeigen(kuenstlerId) {
  const gefundenerKuenstler = kuenstlerDaten.find(kuenstler => kuenstler.id === kuenstlerId);
  if (!gefundenerKuenstler) return;

  kuenstlerDetailsElement.innerHTML = `
    <strong>${gefundenerKuenstler.name}</strong><br>
    Genre: ${gefundenerKuenstler.genre}<br>
    Auftritt: ${gefundenerKuenstler.uhrzeit} auf ${gefundenerKuenstler.buehne}<br>
    Info: ${gefundenerKuenstler.info}
  `;
}

genreAuswahlElement.addEventListener("change", (ereignis) => {
  lineupAnzeigen(ereignis.target.value);
});

// Ein Listener für alle Detail-Buttons (auch nach neuem Rendern)
lineupListeElement.addEventListener("click", (ereignis) => {
  const geklickterKnopf = ereignis.target.closest(".details-knopf");
  if (!geklickterKnopf) return;

  const kuenstlerId = Number(geklickterKnopf.dataset.id);
  kuenstlerDetailsAnzeigen(kuenstlerId);
});

lineupAnzeigen("alle");
