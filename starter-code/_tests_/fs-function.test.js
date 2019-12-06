const fs = require('fs').promises;
const {
    mkdirp
} = require('../lib/fs-function.js');

jest.mock('fs', () => ({
    promises: {
        mkdir: jest.fn(() => Promise.resolve())
    }
}));

descirbe('fs-functions test', () => {
    it('will make directory parents', () => {
        return mkdirp('./some/example/test/dirs')
            .then(() => {
                expect(fs.mkdir).toHaveBeenCalledWith('./some/example/test/dirs', { recursive: true });
            });
    });
});
