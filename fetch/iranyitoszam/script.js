function lekerdezes() {
    let id = document.getElementById("data-id").value;
    fetch(`https://hur.webmania.cc/zips/${id}.json`)
  .then(response => {
    return response.json();
  })
  .then(city => {
    logolas(city);
    document.getElementById("selectedcity").style.display = "block"    
    document.getElementById("selectedcity").innerHTML = kiiras(city);
    console.log(zips.zip)
  })
  .catch(error => {
    alert("Hiba történt.", error)
  });
  
};
function logolas(city) {
  console.log(city.zip)
};
function kiiras(city) {
      let ki = "";
      ki += "zip:" + city.zip;
      return ki;
    };