const LeafYear = require('../../lib/jasmine_examples/assignment/LeafYear')

describe('Leaf Year',function(){
    it('Check given year is leaf year or not',function(){
        const leafYear = new LeafYear();
        expect(leafYear.isLeafYear('')).toEqual('Enter a valid year');
        expect(leafYear.isLeafYear(0)).toEqual('Enter a valid year');
        expect(leafYear.isLeafYear(2000)).toEqual('Leaf Year');
        expect(leafYear.isLeafYear(2024)).toEqual('Leaf Year');
        expect(leafYear.isLeafYear(1999)).toEqual('Not Leaf Year');
        expect(leafYear.isLeafYear(2003)).toEqual('Not Leaf Year');
        expect(leafYear.isLeafYear(1956)).toEqual('Leaf Year');
        expect(leafYear.isLeafYear(2000)).toEqual('Leaf Year');
        expect(leafYear.isLeafYear(2005)).toEqual('Not Leaf Year');
        expect(leafYear.isLeafYear(2100)).toEqual('Not Leaf Year');

    })
});