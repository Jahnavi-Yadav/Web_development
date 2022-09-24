//Strings

var s='Home sweet home';
a=s.length;
console.log(a);
b=s.toLocaleUpperCase();
console.log(b);
c=s.substring(6,12);
console.log(c);
d=s.split(' ');
console.log(d);
e=s.replaceAll('me','w');
console.log(e);

//Numbers
var r=Math.floor((Math.random ()*10)+1);

//Date Object
var today=new Date();
console.log(today);
console.log(today.getDay());
console.log(today.getHours());

console.log(today.getTimezoneOffset());
console.log(today.toString());
console.log(today.toDateString());
console.log(today.getFullYear());
