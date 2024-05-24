const fs = require('fs');

if (!fs.existsSync('./1/szoveg')) {
    fs.mkdir('./1/szoveg', err => {
        if (err) {
            console.log(err);
        }
        console.log('mappa létrehozva');
    });
} else {
    fs.writeFile('./1/szoveg/music.txt', 'II: András magyar király, András megoldja simán. Aranybulla-arany-aranybulla', err => {
        if (err) {
            console.log(err);
        }
    });
}

fs.readFile('./1/szoveg/music.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});