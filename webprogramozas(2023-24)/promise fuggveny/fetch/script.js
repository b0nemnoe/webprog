function lekerdezes() {
    let id = document.getElementById("data-id").value;
    fetch(`https://jsonplaceholder.org/users/?id=${id}`)
  .then(response => {
    return response.json();
  })
  .then(user => {
    logolas(user);
    document.getElementById("selecteduser").style.display = "block"
    document.getElementById("selecteduser").innerHTML = kiiras(user);
  })
  .catch(error => {
    alert("Hiba történt.", error)
  });
  
};
function logolas(user) {
    console.log(user.id);
    console.log(user.firstname);
    console.log(user.lastname);
    console.log(user.email);
    console.log(user.phone);
    console.log(user.address.city);
    console.log(user.address.street);
    console.log(user.address.geo.lat);
    console.log(user.address.geo.lng);
    console.log(user.company.name);
};
function kiiras(user) {
      let ki = "";
      ki += "id:" + user.id;
      ki += "\n<br>Firstname:" + user.firstname;
      ki += "\n<br>Lastname:" + user.lastname;
      ki += "\n<br>Email:" + user.email;
      ki += "\n<br>Phone:" + user.phone;
      ki += "\n<br>Address:" + user.address.city + ", " + user.address.street;
      ki += "\n<br>Geo:" + user.address.geo.lat + " " + user.address.geo.lng;
      ki += "\n<br>Company:" + user.company.name;
      return ki;
    };