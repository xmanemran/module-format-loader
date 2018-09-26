console.log(define);
requirejs(["./add"], function(add) {
  add.addition(3, 7);
});
