function lekerdezes() {
    let id = document.getElementById("data-id").value;
    console.log(id)
    fetch(`https://www.codewars.com/api/v1/users/${id}`)
  .then(response => {
    return response.json();
  })
  .then(user => {
    document.getElementById("selectedUser").style.display = "block"    
    document.getElementById("selectedUser").innerHTML = kiiras(user);
    console.log(user)
  })
  .catch(error => {
    alert("Hiba történt.", error)
  });
  
  };
  function kiiras(user) {
  let ki = "";
  for (const i of user.ranks.languages) {
    ki += `${i}: ${i.score}<br>`;
    console.log(ki)
  }
  return ki;
  };