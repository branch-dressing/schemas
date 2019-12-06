const fs = require('fs').promises;
const {
    mkdirp,
    writeJSON,
    readJSON
} = require('../lib/fs-function.js');

jest.mock('fs', () => ({
    promises: {
        mkdir: jest.fn(() => Promise.resolve()),
        writeFile: jest.fn(() => Promise.resolve()),
        readFile: jest.fn(() => Promise.resolve('{"one":"one"}'))
    }
}));

describe('fs-functions test', () => {
    it('will make directory parents', () => {
        return mkdirp('./some/example/test/dirs')
            .then(() => {
                expect(fs.mkdir).toHaveBeenCalledWith('./some/example/test/dirs', { recursive: true });
            });
    });

    it('will write a file', () => {
        return writeJSON('./some/example/test/file', {
            one: 'one',
            two: 2
        })
            .then(() => {
                expect(fs.writeFile).toHaveBeenCalledWith('./some/example/test/file', JSON.stringify({ 
                    one: 'one',
                    two: 2
                }));
            });
    });

    it('will read a file', () => {
        return readJSON('./some/example/test/file')
            .then(json => {
                expect(fs.readFile).toHaveBeenCalledWith('./some/example/test/file', 'utf8');
                expect(json).toEqual({ 'one':'one' });
            });
    });
});
