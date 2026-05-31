async function loadWines() {
  const res = await fetch("data/wines.json");
  return await res.json();
}

function renderWine(wine) {
  return `
    <div class="wine-card">
      <h3>${wine.name}</h3>
      <p>${wine.millesime}</p>
      <p>${wine.region_id}</p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", async () => {
  const wines = await loadWines();

  const container = document.getElementById("cave-list");
  container.innerHTML = wines.map(renderWine).join("");
});
