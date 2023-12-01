let heroes = [
    {firstName: "Skywalker", lastName: "Lajos", job: "postás"},
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
    {firstName: "Han", lastName: "Solo", job: "csempész"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor"}
    
]

function Render(){
    let generalt = `<h1 id="elsosor">A hősök:</h1><div id="container2">`;
    for(let i=0;i<heroes.length;i++){  
        generalt+= `<div class="hos"> A hős neve: ${heroes[i].lastName} ${heroes[i].firstName},<br> foglalkozása: ${heroes[i].job} </div>`;
    }
    generalt+=`</div>`;
    document.getElementById("container").innerHTML += generalt;
}

function Table(){
    let table=`<table><caption>A hősök táblázatban</caption><tr><th>Név</th><th>foglalkozás</th></tr>`;
    for(let i=0;i<heroes.length;i++){
        table+=`<tr><td>${heroes[i].lastName} ${heroes[i].firstName}</td><td>${heroes[i].job}</td></tr>`;
    }
    table+=`</table>`;
    document.getElementById("container3").innerHTML+=table;
}
