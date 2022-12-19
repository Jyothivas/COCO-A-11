const Signals = require("../../lib/jasmine_examples/Assignment/signal");

describe("correct signal",function(){
   const signals=new Signals('red');
  
  
    it("send red signal",function(){
        expect(signals.next()).toEqual('green');
        expect(signals.next()).toEqual('yellow');
        expect(signals.next()).toEqual("red");
       
       
    });
     const signal = new Signals("green");
    it("send green signal",function(){
       expect(signal.next()).toEqual("yellow");
       expect(signal.next()).toEqual("red");
       expect(signal.next()).toEqual("green");
    });

     const signal1 = new Signals("yellow");
     it("send yellow",function(){
        expect(signal1.next()).toEqual("red");
        expect(signal1.next()).toEqual('green');
        expect(signal1.next()).toEqual("yellow");
     });
     const signal2=new Signals('');
     it("send empty signal",function(){
        expect(signal2.next()).toEqual('Enter any signal');
     })
})