const fs = require('fs').promises;
const {
    mkdirp,
    writeJSON
} = require('../lib/fs-function.js');

jest.mock('fs', () => ({
    promises: {
        mkdir: jest.fn(() => Promise.resolve()),
        writeFile: jest.fn(() => Promise.resolve())
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
        return writeJSON('./some/example/test/dirs', {
            one: 'one',
            two: 2
        })
            .then(() => {
                expect(fs.writeJSON).toHaveBeenCalledWith('./some/example/test/dirs', JSON.stringify({ 
                    one: 'one',
                    two: 2
                }));
            });
    });
});
