
const plattformen = [
  { name: "TikTok", trendPopularitaet: 750 },
  { name: "Instagram", trendPopularitaet: 300 },
  { name: "Twitter", trendPopularitaet: 500 }
];

let nachricht;

function trendbewertung(popularitaet) {
  if (popularitaet > 600) {
    return "hoch";
  } else {
    return "niedrig";
  }
}

for (let i = 0; i < plattformen.length; i++) {
  let bewertung = trendbewertung(plattformen[i].trendPopularitaet);
  console.log(`${plattformen[i].name}: Der Einfluss des Trends ist ${bewertung}.`);
}
