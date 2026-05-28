// =============================================
// Schritt 2: Line-up in die Seite schreiben (DOM)
// =============================================

const kuenstlerDaten = [
  { id: 1, name: "Peter Fox", genre: "deutschpop", uhrzeit: "20:30", buehne: "Hauptbuehne", info: "Deutschpop mit Live-Band." },
  { id: 2, name: "Nina Chuba", genre: "deutschpop", uhrzeit: "18:45", buehne: "Hauptbuehne", info: "Moderner Pop mit Rap-Einflüssen." },
  { id: 3, name: "Alle Farben", genre: "electro", uhrzeit: "22:00", buehne: "Electro Stage", info: "Electronic Dance Set." },
  { id: 4, name: "Milky Chance", genre: "indie", uhrzeit: "19:30", buehne: "Parkbuehne", info: "Indie/Folk mit bekannten Hits." }
];

const lineupListeElement = document.getElementById("lineup-liste");

function lineupAnzeigen(alleKuenstler) {
  lineupListeElement.innerHTML = "";

  alleKuenstler.forEach(kuenstler => {
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

// Start: alle Künstler anzeigen
lineupAnzeigen(kuenstlerDaten);
