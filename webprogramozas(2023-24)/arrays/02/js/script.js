let tomb = [];
let elemek = document.getElementById("flexboxok")

function Bekeres()
{
    let szoveg = document.getElementById("szoveg");
    tomb.push(szoveg.value);
    
    
}

function Kiiras()
{
    for (let i = 0; i < tomb.length; i++) {
        elemek.innerHTML = `<div class="kartya">${tomb[i]}</div>`
    }
    
}