const fs = require('fs');



fs.readFile('./films.json', (err, data) => {
    if (err) throw err;
    let d = JSON.parse(data);

    d = d.filter(e => e?.Error == null);
    
    fs.writeFile('films_ok.txt', JSON.stringify(d), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
  });