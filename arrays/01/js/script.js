/*Feladat:
Hozz létre egy weboldalt és kösd össze a JavaScript programoddal.
A JavaScriptben hozz létre egy tömböt!

1.
A weboldalon hozz létre három gombot. 
Ha az első gombra kattintasz, akkor a tömbe első eleme, 
ha a második gombra kattintasz, akkor a tömb második eleme,
ha a harmadik gombra kattintasz, akkor a tömb harmadik eleme jelenjen meg.
2.
Egészítsd ki az oldaladat egy "összeg elem" gombbal,
melyre kattintva az összes elem megjelenik a tömbből.
3.
Adj az oldaladhoz egy input taget, mellyel szöveget tudsz bevinni.
Az így megadott szöveget add hozzá a tömbödhöz.
Ha a "összeg elem" gombra kattintunk, akkor az új elmet is írja ki az oldal.
4.
Készíts egy tömb hossza" gombot.
Ha a gombra kattintunk, akkor kiírha a tömb hosszát: "A tömb xxx elemet tartalmaz."
5.
Adj az oldaladhoz egy input taget, mellyel az indexet tudsz bevinni.
A megadott indexű elemet töröld a tömbből.*/



let tomb = [1,2,3,4,5]
let ki;

function elsoElemMegjelenitese()
{
    ki = tomb[0];
    let kiiras = document.getElementById("kiir").innerHTML = ki;
}

function masodikElemMegjelenitese()
{
    ki = tomb[1];
    let kiiras = document.getElementById("kiir").innerHTML = ki;
}

function harmadikElemMegjelenitese()
{
    ki = tomb[2];
    document.getElementById("kiir").innerHTML = ki;
}

function osszesKiiras()
{
   ki = tomb;
   document.getElementById("kiir").innerHTML = ki;
}

function Hozzaadas()
{
    tomb.push(document.getElementById("hozzaadas").value);
}

function tombHossza()
{
    let hossz = tomb.length;
    ki = "A tömb "+hossz+" elemet tartalmaz."
    document.getElementById("kiir").innerHTML = ki;
}

function Torles()
{
    let index = document.getElementById("torles").value;
    tomb.splice(index, 1)
}