// =============================================
// Schritt 6: Festival Reporter Live – Version 1 komplett
// HTML = Struktur | CSS = Aussehen | JS = Verhalten
// =============================================

// --- Daten ---
const kuenstlerDaten = [
  { id: 1, name: "Peter Fox", genre: "deutschpop", uhrzeit: "20:30", buehne: "Hauptbuehne", info: "Deutschpop mit Live-Band." },
  { id: 2, name: "Nina Chuba", genre: "deutschpop", uhrzeit: "18:45", buehne: "Hauptbuehne", info: "Moderner Pop mit Rap-Einflüssen." },
  { id: 3, name: "Alle Farben", genre: "electro", uhrzeit: "22:00", buehne: "Electro Stage", info: "Electronic Dance Set." },
  { id: 4, name: "Milky Chance", genre: "indie", uhrzeit: "19:30", buehne: "Parkbuehne", info: "Indie/Folk mit bekannten Hits." }
];

const foodtruckDaten = [
  { id: 1, name: "Vegan Wagen", kategorie: "vegan", speisekarte: ["Falafel Wrap", "Pommes", "Limo"] },
  { id: 2, name: "Burger Bus", kategorie: "burger", speisekarte: ["Cheeseburger", "Veggie Burger", "Cola"] },
  { id: 3, name: "Pasta Mobil", kategorie: "italienisch", speisekarte: ["Pasta Pesto", "Pasta Arrabbiata", "Wasser"] }
];

const galerieDaten = [
  { titel: "Hauptbühne 2024", info: "Über 5.000 Besucher:innen beim Opening-Act." },
  { titel: "Foodtruck-Area", info: "12 Stände, davon 6 vegan – neu seit 2023." },
  { titel: "Nachtprogramm", info: "Electro Stage bis 2 Uhr – Highlight des Samstags." }
];

// Genre-Objekte mit isAktiv / isDeaktiviert (Filter-Status)
const genreDaten = [
  { id: 1, name: "Deutschpop", wert: "deutschpop", isAktiv: false, isDeaktiviert: true },
  { id: 2, name: "Electro", wert: "electro", isAktiv: false, isDeaktiviert: true },
  { id: 3, name: "Indie", wert: "indie", isAktiv: false, isDeaktiviert: true }
];

const meinTimetable = [];
let aktuellesGenre = "alle";
let galerieIndex = 0;

// --- DOM-Elemente ---
const lineupListeElement = document.getElementById("lineup-liste");
const kuenstlerDetailsElement = document.getElementById("kuenstler-details");
const gastroListeElement = document.getElementById("gastro-liste");
const speisekarteDetailsElement = document.getElementById("speisekarte-details");
const genreKnoepfeElement = document.getElementById("genre-knoepfe");
const genreAlleKnopf = document.getElementById("genre-alle-knopf");
const timetableListeElement = document.getElementById("timetable-liste");
const timetableLeerElement = document.getElementById("timetable-leer");
const galerieTitelElement = document.getElementById("galerie-titel");
const galerieInfoElement = document.getElementById("galerie-info");
const galerieZaehlerElement = document.getElementById("galerie-zaehler");

// =============================================
// Navigation zwischen Bereichen (Reiter)
// =============================================
function bereichAnzeigen(bereichName) {
  document.querySelectorAll(".bereich").forEach(bereich => {
    bereich.classList.remove("sichtbar");
  });
  document.getElementById(`bereich-${bereichName}`).classList.add("sichtbar");

  document.querySelectorAll(".nav-knopf").forEach(knopf => {
    const istAktiv = knopf.dataset.bereich === bereichName;
    knopf.classList.toggle("aktiv", istAktiv);
    knopf.classList.toggle("passiv", !istAktiv);
  });
}

document.querySelector(".haupt-navigation").addEventListener("click", (ereignis) => {
  const navKnopf = ereignis.target.closest(".nav-knopf");
  if (!navKnopf) return;
  bereichAnzeigen(navKnopf.dataset.bereich);
});

// =============================================
// Genre: isAktiv / isDeaktiviert setzen
// =============================================
function setzeGenreStatus(genreId, aktiv) {
  const genre = genreDaten.find(eintrag => eintrag.id === genreId);
  if (!genre) return;

  genre.isAktiv = aktiv;
  genre.isDeaktiviert = !aktiv;

  const genreKnopf = document.querySelector(`.genre-knopf[data-genre-id="${genreId}"]`);
  if (!genreKnopf) return;

  genreKnopf.classList.toggle("aktiv", genre.isAktiv);
  genreKnopf.classList.toggle("deaktiviert", genre.isDeaktiviert);
  genreKnopf.textContent = `${genre.name} (${genre.isAktiv ? "aktiv" : "passiv"})`;
}

function alleGenresPassivSetzen() {
  genreDaten.forEach(genre => setzeGenreStatus(genre.id, false));
  aktuellesGenre = "alle";
  lineupAnzeigen("alle");
}

function genreKnoepfeErzeugen() {
  genreKnoepfeElement.innerHTML = "";

  genreDaten.forEach(genre => {
    const knopf = document.createElement("button");
    knopf.type = "button";
    knopf.className = "genre-knopf deaktiviert";
    knopf.dataset.genreId = genre.id;
    knopf.dataset.genreWert = genre.wert;
    knopf.textContent = `${genre.name} (passiv)`;

    genreKnoepfeElement.appendChild(knopf);
  });
}

function genreAuswaehlen(genreId) {
  const gewaehltesGenre = genreDaten.find(eintrag => eintrag.id === genreId);
  if (!gewaehltesGenre) return;

  genreDaten.forEach(genre => setzeGenreStatus(genre.id, genre.id === genreId));
  aktuellesGenre = gewaehltesGenre.wert;
  lineupAnzeigen(aktuellesGenre);
}

genreKnoepfeElement.addEventListener("click", (ereignis) => {
  const genreKnopf = ereignis.target.closest(".genre-knopf");
  if (!genreKnopf) return;

  const genreId = Number(genreKnopf.dataset.genreId);
  const genre = genreDaten.find(eintrag => eintrag.id === genreId);

  if (genre && genre.isAktiv) {
    alleGenresPassivSetzen();
  } else {
    genreAuswaehlen(genreId);
  }
});

genreAlleKnopf.addEventListener("click", alleGenresPassivSetzen);

// =============================================
// Line-up
// =============================================
function lineupAnzeigen(gewaehltesGenre) {
  const gefilterteKuenstler =
    gewaehltesGenre === "alle"
      ? kuenstlerDaten
      : kuenstlerDaten.filter(kuenstler => kuenstler.genre === gewaehltesGenre);

  lineupListeElement.innerHTML = "";

  if (gefilterteKuenstler.length === 0) {
    lineupListeElement.innerHTML = '<p class="hinweis-text">Keine Acts in diesem Genre.</p>';
    return;
  }

  gefilterteKuenstler.forEach(kuenstler => {
    const kachel = document.createElement("div");
    kachel.className = "kachel";
    kachel.innerHTML = `
      <strong>${kuenstler.name}</strong><br>
      Genre: ${kuenstler.genre}<br>
      ${kuenstler.uhrzeit} – ${kuenstler.buehne}<br>
      <button type="button" data-id="${kuenstler.id}" class="details-knopf">Details</button>
      <button type="button" data-id="${kuenstler.id}" class="timetable-knopf">Zum Timetable</button>
    `;
    lineupListeElement.appendChild(kachel);
  });
}

function kuenstlerDetailsAnzeigen(kuenstlerId) {
  const gefundenerKuenstler = kuenstlerDaten.find(k => k.id === kuenstlerId);
  if (!gefundenerKuenstler) return;

  kuenstlerDetailsElement.innerHTML = `
    <strong>${gefundenerKuenstler.name}</strong><br>
    Genre: ${gefundenerKuenstler.genre}<br>
    Auftritt: ${gefundenerKuenstler.uhrzeit} auf ${gefundenerKuenstler.buehne}<br>
    Info: ${gefundenerKuenstler.info}
  `;
}

lineupListeElement.addEventListener("click", (ereignis) => {
  const detailsKnopf = ereignis.target.closest(".details-knopf");
  const timetableKnopf = ereignis.target.closest(".timetable-knopf");

  if (detailsKnopf) {
    kuenstlerDetailsAnzeigen(Number(detailsKnopf.dataset.id));
  }
  if (timetableKnopf) {
    zumTimetableHinzufuegen(Number(timetableKnopf.dataset.id));
  }
});

// =============================================
// Gastro
// =============================================
function gastroAnzeigen() {
  gastroListeElement.innerHTML = "";

  foodtruckDaten.forEach(truck => {
    const eintrag = document.createElement("div");
    eintrag.className = "eintrag";
    eintrag.innerHTML = `
      <strong>${truck.name}</strong> (${truck.kategorie})
      <button type="button" data-id="${truck.id}" class="speisekarte-knopf">Speisekarte</button>
    `;
    gastroListeElement.appendChild(eintrag);
  });
}

function speisekarteAnzeigen(truckId) {
  const truck = foodtruckDaten.find(t => t.id === truckId);
  if (!truck) return;

  speisekarteDetailsElement.innerHTML = `
    <strong>${truck.name}</strong>
    <ul>${truck.speisekarte.map(g => `<li>${g}</li>`).join("")}</ul>
  `;
}

gastroListeElement.addEventListener("click", (ereignis) => {
  const knopf = ereignis.target.closest(".speisekarte-knopf");
  if (!knopf) return;
  speisekarteAnzeigen(Number(knopf.dataset.id));
});

// =============================================
// Galerie (Use Case: Fotogalerie / Über uns)
// =============================================
function galerieAnzeigen() {
  const bild = galerieDaten[galerieIndex];
  galerieTitelElement.textContent = bild.titel;
  galerieInfoElement.textContent = bild.info;
  galerieZaehlerElement.textContent = `${galerieIndex + 1} / ${galerieDaten.length}`;
}

function galerieWeiter() {
  galerieIndex = (galerieIndex + 1) % galerieDaten.length;
  galerieAnzeigen();
}

function galerieZurueck() {
  galerieIndex = (galerieIndex - 1 + galerieDaten.length) % galerieDaten.length;
  galerieAnzeigen();
}

document.getElementById("galerie-weiter").addEventListener("click", galerieWeiter);
document.getElementById("galerie-zurueck").addEventListener("click", galerieZurueck);

// =============================================
// Timetable
// =============================================
function timetableAktualisieren() {
  timetableListeElement.innerHTML = "";

  meinTimetable.forEach(eintrag => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${eintrag.name} – ${eintrag.uhrzeit} (${eintrag.buehne})</span>
      <button type="button" class="entfernen-knopf" data-id="${eintrag.id}">Entfernen</button>
    `;
    timetableListeElement.appendChild(li);
  });

  timetableLeerElement.classList.toggle("sichtbar", meinTimetable.length === 0);
}

function zumTimetableHinzufuegen(kuenstlerId) {
  const kuenstler = kuenstlerDaten.find(k => k.id === kuenstlerId);
  if (!kuenstler) return;
  if (meinTimetable.some(e => e.id === kuenstlerId)) return;

  meinTimetable.push(kuenstler);
  timetableAktualisieren();
  bereichAnzeigen("timetable");
}

function ausTimetableEntfernen(kuenstlerId) {
  const index = meinTimetable.findIndex(e => e.id === kuenstlerId);
  if (index === -1) return;

  meinTimetable.splice(index, 1);
  timetableAktualisieren();
}

timetableListeElement.addEventListener("click", (ereignis) => {
  const knopf = ereignis.target.closest(".entfernen-knopf");
  if (!knopf) return;
  ausTimetableEntfernen(Number(knopf.dataset.id));
});

// =============================================
// Start
// =============================================
genreKnoepfeErzeugen();
lineupAnzeigen("alle");
gastroAnzeigen();
galerieAnzeigen();
timetableAktualisieren();
bereichAnzeigen("lineup");
