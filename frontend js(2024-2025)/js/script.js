function lekerdezes() {
  let id = document.getElementById("data-id").value;
  console.log(id);
  fetch(`https://www.codewars.com/api/v1/users/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("404: Felhasználó nem található");
      }
      return response.json();
    })
    .then(user => {
      document.getElementById("selectedUser").style.display = "block";
      document.getElementById("user-data").innerHTML = "Adatok betöltve. Válassz a menüből!";
      window.userData = user; // Tároljuk a felhasználói adatokat
    })
    .catch(error => {
      document.getElementById("selectedUser").style.display = "block";
      document.getElementById("user-data").innerHTML = "Hiba: " + error.message;
    });
}

function show(option) {
  const user = window.userData; // Elérjük a korábban letöltött adatokat
  if (!user) {
    alert("Először kérdezz le egy felhasználót!");
    return;
  }

  let output = "";
  if (option === "overall") {
    // Összesített adatok megjelenítése
    output += `<strong>Név:</strong> ${user.name} <br>`;
    output += `<strong>Összesített rank:</strong> ${user.ranks.overall.name} <br>`;
    output += `<strong>Összesített pontok:</strong> ${user.ranks.overall.score} <br>`;
    output += `<strong>Honor:</strong> ${user.honor} <br>`;
  } else if (option === "languages") {
    // Nyelvek szerinti pontszámok megjelenítése
    output += "<h3>Pontok nyelvek szerint:</h3>";
    for (const lang in user.ranks.languages) {
      const score = user.ranks.languages[lang].score;
      output += `${lang}: ${score}<br>`;
    }
  }

  document.getElementById("user-data").innerHTML = output;
}
