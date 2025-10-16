async function chargerCitation() {
  const response = await fetch(
    "https://api.allorigins.win/raw?url=https://zenquotes.io/api/random"
  );
  const data = await response.json();
  document.getElementById("citation").innerText = `${data[0].q} — ${data[0].a}`;
}

document.getElementById("nouvelle").addEventListener("click", chargerCitation);
window.onload = chargerCitation;
// ok
