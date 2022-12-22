//const leapyear = require('../../lib/jasmine_examples/leap');

 
	describe('leap year', function () {



      it('Check given year is leaf year or not',function(){
          const leafYear = new LeafYear();
          expect(leafYear.isLeafYear('1999')).toEqual('Enter a valid year');
          expect(leafYear.isLeafYear(1998)).toEqual('Enter a valid year');
          expect(leafYear.isLeafYear(2000)).toEqual('Leaf Year');
          expect(leafYear.isLeafYear(2008)).toEqual('Leaf Year');
          expect(leafYear.isLeafYear(1999)).toEqual('Not Leaf Year');
          expect(leafYear.isLeafYear(2003)).toEqual('Not Leaf Year');
          expect(leafYear.isLeafYear(2001)).toEqual('Leaf Year');
          expect(leafYear.isLeafYear(2007)).toEqual('Leaf Year');
          expect(leafYear.isLeafYear(2020)).toEqual('Not Leaf Year');
          expect(leafYear.isLeafYear(2023)).toEqual('Not Leaf Year');
  
      });
  });
 
    
