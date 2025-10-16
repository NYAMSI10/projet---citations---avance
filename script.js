async function chargerCitation() {
  const response = await fetch(
    "https://api.allorigins.win/get?url=" +
      encodeURIComponent("https://zenquotes.io/api/random")
  );
  const proxyData = await response.json();
  const data = JSON.parse(proxyData.contents);
  document.getElementById("citation").innerText = `${data[0].q} — ${data[0].a}`;
}

document.getElementById("nouvelle").addEventListener("click", chargerCitation);
window.onload = chargerCitation;
// ok
