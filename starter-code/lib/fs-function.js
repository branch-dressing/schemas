const fs = require('fs').promises;

function makedirp(path) {
    fs.mkdir(path, { recursive: true }, (err) => {
        if(err) throw err;
    });
}

module.exports = {
    makedirp,
    
}