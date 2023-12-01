let fizetes = {
    Anna : 2100,
    Cecil : 1890,
    Emil : 2050,
    Gerald : 2920
    }


function Osszeg(obj)
{
    let osszeg = 0;
    for (let i in obj) {
        osszeg += obj[i]
    }
    return osszeg;
}

function Kiiras(obj)
{
    for(let i in obj)
    {
        console.log(`${i} ${obj[i]}`)
    }
}

Kiiras(fizetes);
console.log(Osszeg(fizetes));
