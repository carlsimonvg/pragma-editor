
import {expect} from 'chai';
import 'aurelia-polyfills';
import {PragmaEditor} from './../../../src/components/pragma-editor/pragma-editor';

describe('PragmaEditor Tests', function() {
    let pragmaEditor;

    beforeEach(function() {
        pragmaEditor = new PragmaEditor ({});
    });
    
    it('constructor', function() {
        expect(pragmaEditor).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => PragmaEditor()).to.throw("Cannot call a class as a function");
    });    
})
