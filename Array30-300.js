$(document).ready(function () {
var a = [];
      var u;
      for (var i = 30; i <= 300; i++) {
          if (i % 7 == 0) {
              u = "abc";
              a.push(u);
          }
          else if (i % 13 == 0) {
              u = "xyz";
              a.push(u);
          }
          else if ((i % 7 == 0) && (i % 13 == 0)) {
              u = "a-z";
              a.push(u);
          }
          a.push(i);
      }
      console.log(a);
  })