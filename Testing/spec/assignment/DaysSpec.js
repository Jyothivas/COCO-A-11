const Days = require('../../lib/jasmine_examples/assignment/Days')

describe('Week days',function(){

    it('Name of the Day for a given day of the week',function(){
        const days=new Days();
        expect(days.dayOfWeek(1)).toEqual('Sunday');
        expect(days.dayOfWeek(2)).toEqual('Monday');
        expect(days.dayOfWeek(3)).toEqual('Tuesday');
        expect(days.dayOfWeek(4)).toEqual('Wednesday');
        expect(days.dayOfWeek(5)).toEqual('Thrusday');
        expect(days.dayOfWeek(6)).toEqual('Friday');
        expect(days.dayOfWeek(7)).toEqual('Saturday');
    });
});