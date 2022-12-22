const stack = require('../../lib/test/stack');

describe('stack class',function(){
    it('push the value in a stack.',function(){
        const stacks = new stack();
        expect(stacks.push('')).toEqual('enter number value');
        expect(stacks.pop()).toEqual('array is empty');
        expect(stacks.push(0)).toEqual('0 added');
        expect(stacks.pop()).toEqual('0 removed');
        expect(stacks.push(1)).toEqual('1 added');
        expect(stacks.push(2)).toEqual('2 added');
        expect(stacks.pop()).toEqual('2 removed');
        expect(stacks.pop()).toEqual('1 removed');
        expect(stacks.push(3)).toEqual('3 added');
        expect(stacks.pop()).toEqual('3 removed');
        expect(stacks.push(4)).toEqual('4 added');
        expect(stacks.push(5)).toEqual('5 added');
        expect(stacks.push(6)).toEqual('6 added');
        expect(stacks.pop()).toEqual('6 removed');
        expect(stacks.pop()).toEqual('5 removed');
        expect(stacks.pop()).toEqual('4 removed');
        expect(stacks.pop()).toEqual('array is empty');
        expect(stacks.push('a')).toEqual('a added');
        expect(stacks.push('abc')).toEqual('abc added');
        expect(stacks.pop()).toEqual('abc removed');

    });

    
    
});