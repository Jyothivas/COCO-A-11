const LeapYear = require('../../lib/assignment/LeapYear')

describe('Leap Year',function(){
    it('Check given year is Leap year or not',function(){
        const leapYear = new LeapYear();
        expect(leapYear.isLeapYear('')).toEqual('Enter a valid year');
        expect(leapYear.isLeapYear(0)).toEqual('Enter a valid year');
        expect(leapYear.isLeapYear(2000)).toEqual('Leap Year');
        expect(leapYear.isLeapYear(2024)).toEqual('Leap Year');
        expect(leapYear.isLeapYear(1999)).toEqual('Not Leap Year');
        expect(leapYear.isLeapYear(2003)).toEqual('Not Leap Year');
        expect(leapYear.isLeapYear(1956)).toEqual('Leap Year');
        expect(leapYear.isLeapYear(2000)).toEqual('Leap Year');
        expect(leapYear.isLeapYear(2005)).toEqual('Not Leap Year');
        expect(leapYear.isLeapYear(2100)).toEqual('Leap Year');

    })
});