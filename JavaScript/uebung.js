
const plattformen = [
  { name: "TikTok", trendPopularitaet: 750 },
  { name: "Instagram", trendPopularitaet: 300 },
  { name: "Twitter", trendPopularitaet: 500 }
];

let nachricht;

if (plattformen[0].trendPopularitaet > 600) {
  nachricht = "hoch";
} else {
  nachricht = "niedrig";
}
console.log(`TikTok: Der Einfluss des Trends ist ${nachricht}.`);


if (plattformen[1].trendPopularitaet > 600) {
  nachricht = "hoch";
} else {
  nachricht = "niedrig";
}
console.log(`Instagram: Der Einfluss des Trends ist ${nachricht}.`);

if (plattformen[2].trendPopularitaet > 600) {
  nachricht = "hoch";
} else {
  nachricht = "niedrig";
}
console.log(`Twitter: Der Einfluss des Trends ist ${nachricht}.`);