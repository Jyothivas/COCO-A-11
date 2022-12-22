const ToggleCase = require('../../lib/jasmine_examples/ToggleCase');

describe('toggle case', function(){

    it('Toggle the case of each character in a word',function(){
        const toggle = new ToggleCase();
        expect(toggle.convertToggle('')).toEqual('Enter a string');
        expect(toggle.convertToggle(' ')).toEqual('Enter a string');
        expect(toggle.convertToggle('a')).toEqual('A');
        expect(toggle.convertToggle('A')).toEqual('a');
        expect(toggle.convertToggle('ab')).toEqual('AB');
        expect(toggle.convertToggle('aBc')).toEqual('AbC');
        expect(toggle.convertToggle('Hello')).toEqual('hELLO');
        expect(toggle.convertToggle('Hello Word')).toEqual('hELLO wORD');
        expect(toggle.convertToggle('I Am  a ProGraMER')).toEqual('i aM  A pROgRAmer');      
    
    });
});