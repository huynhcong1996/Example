$(document).ready(function () {
	  var b;
      var a = [];
      for(var i=1;i<=7;i++)
      {
          if(i%2 !=0)
          {
              b=i*i;
              a.push(b);
          }
      }
      console.log(a);
  })