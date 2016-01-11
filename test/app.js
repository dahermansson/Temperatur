///<reference path="../typings/mocha/mocha.d.ts" />
///<reference path="../typings/chai/chai.d.ts" />
var chai = require('chai');
var expect = chai.expect;
var app = require('../app');
describe('Example app tests', function () {
    it('Should say Hello from ny!', function () {
        expect(app.get('', null)).to.be.equal('Hello from ny!');
    });
});
//# sourceMappingURL=app.js.map