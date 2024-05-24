const fs = require('fs');

if (!fs.existsSync('./szoveg')) {
    fs.mkdir('./szoveg', err => {
        if (err) {
            console.log(err);
        }
        console.log('mappa létrehozva');
        Writing();
    });
} else {
    Writing();
}


function Writing() {
    fs.writeFile('./szoveg/music.txt', 'II: András magyar király, András megoldja simán. Aranybulla-arany-aranybulla', err => {
        if (err) {
            console.log(err);
        }
        console.log('file létrehozva');
        Reading();
    });
}


function Reading() {
    if (fs.existsSync('./szoveg/music.txt')) {
        fs.readFile('./szoveg/music.txt', (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data.toString());
        });   
    }
    else{
        console.log('nem létezik a fájl');
    }
}