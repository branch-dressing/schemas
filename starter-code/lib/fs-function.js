const fs = require('fs').promises;

function mkdirp(path) {
    return fs.mkdir(path, { recursive: true });
}

function writeJSON(path, data) {
    return fs.writeFile(path, JSON.stringify(data));
}

function readJSON(path) {
    return fs.readFile(path, 'utf8')
        .then(content => JSON.parse(content));
}

module.exports = {
    mkdirp,
    writeJSON,
    readJSON
};
