var a = 1, b = 2, c = 3;

(function firstFn() {
  var b = 5, c = 6;

  (function secondFn(){
    var b = 8;
    console.log("a: " + a + ", b: " + b + ", c: " + c);

    (function thirdFn(){
      var a = 7, c = 9;

      (function fourthFn(){
        var a = 1, c = 8;
      })();
    })();
  })();
})();
