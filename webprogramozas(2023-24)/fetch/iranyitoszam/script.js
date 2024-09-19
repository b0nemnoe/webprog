function lekerdezes() {
  let id = document.getElementById("data-id").value;
  fetch(`https://hur.webmania.cc/zips/${id}.json`)
.then(response => {
  return response.json();
})
.then(city => {
  /*logolas(city);*/
  document.getElementById("selectedcity").style.display = "block"    
  document.getElementById("selectedcity").innerHTML = kiiras(city);
})
.catch(error => {
  alert("Hiba történt.", error)
});

};
/*
function logolas(city) {
console.log(city.zip)
};
*/
function kiiras(city) {
let ki = "";
for (const i of city.zips) {
  ki += `${i.zip}: ${i.name}<br>`;
  console.log(ki)
}
return ki;
};