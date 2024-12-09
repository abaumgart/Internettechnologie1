
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

nachricht= trendbewertung(plattformen[0].trendPopularitaet);
console.log(`TikTok: Der Einfluss des Trends ist ${nachricht}.`);

nachricht= trendbewertung(plattformen[1].trendPopularitaet);
console.log(`Instagram: Der Einfluss des Trends ist ${nachricht}.`);

nachricht= trendbewertung(plattformen[2].trendPopularitaet);
console.log(`Twitter: Der Einfluss des Trends ist ${nachricht}.`);