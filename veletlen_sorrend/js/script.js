function VeletlenSorrend(){
    let tomb = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];
    var db=0;


    for(let i = 0; i<tomb.length;i++){
        document.getElementById("eredeti").innerHTML += " "+tomb[i]+";";
    }

    function Keveres(tomb){
        var tomb2 = [];
        let random = Math.floor(Math.random()*tomb.length);

        for(let i=tomb.length-1;i>=0;i--){
            tomb2.push(tomb.splice(random,1));
            random = Math.floor(Math.random()*i);
        }
        document.getElementById("container").innerHTML += `<div id="ujtomb${(db)}"> Az új tömb: </div><br>`;

        for(let i = 0; i<tomb2.length;i++){
            document.getElementById("ujtomb"+db).innerHTML += `${(tomb2[i])}; `;
        }

        db+=1;
        console.log(tomb2);
    }

    Keveres(tomb);
    Keveres([1, 2, 3, 4, 5, 6, 7, 8, 9]);
}



   