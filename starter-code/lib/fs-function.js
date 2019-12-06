const fs = require('fs').promises;

function mkdirp(path) {
    return fs.mkdir(path, { recursive: true });
}

function writeJSON(path, data) {
    return fs.writeFile(path, JSON.stringify(data));
}

module.exports = {
    mkdirp,
    writeJSON
};
