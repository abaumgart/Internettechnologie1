// =============================================
// Schritt 5: Gastro-Liste + Speisekarte per Klick
// =============================================

const foodtruckDaten = [
  { id: 1, name: "Vegan Wagen", kategorie: "vegan", speisekarte: ["Falafel Wrap", "Pommes", "Limo"] },
  { id: 2, name: "Burger Bus", kategorie: "burger", speisekarte: ["Cheeseburger", "Veggie Burger", "Cola"] },
  { id: 3, name: "Pasta Mobil", kategorie: "italienisch", speisekarte: ["Pasta Pesto", "Pasta Arrabbiata", "Wasser"] }
];

const gastroListeElement = document.getElementById("gastro-liste");
const speisekarteDetailsElement = document.getElementById("speisekarte-details");

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
  const gefundenerTruck = foodtruckDaten.find(truck => truck.id === truckId);
  if (!gefundenerTruck) return;

  const gerichteListe = gefundenerTruck.speisekarte
    .map(gericht => `<li>${gericht}</li>`)
    .join("");

  speisekarteDetailsElement.innerHTML = `
    <strong>${gefundenerTruck.name}</strong>
    <ul>${gerichteListe}</ul>
  `;
}

gastroListeElement.addEventListener("click", (ereignis) => {
  const speisekarteKnopf = ereignis.target.closest(".speisekarte-knopf");
  if (!speisekarteKnopf) return;

  const truckId = Number(speisekarteKnopf.dataset.id);
  speisekarteAnzeigen(truckId);
});

gastroAnzeigen();
