async function loadWines() {
  const res = await fetch("data/wines.json");
  return await res.json();
}

document.addEventListener("DOMContentLoaded", async () => {
  const wines = await loadWines();
  console.log("Vins :", wines);
});
