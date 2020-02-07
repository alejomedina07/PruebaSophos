const { expect } = require('chai');
const main = require('../index');

describe('main', () => {
    it('should return an array of string with names when the salary is bigger than 500', done => {
        main().then(value => {
            expect(value).to.eql(['Juan Pablo', 'Gerónimo Serrano']);
            done();
        }).catch(reason => {
            done(reason);
        });
    });
});
