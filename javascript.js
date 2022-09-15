/*console.log("hello world");
console.error('this is an error');
console.log('hello world');
document.write("this is document write function")

// Variables
// to store data values
var n1=34;
var n2=78;
//console.log(n1 + n2);

//data types
var str1="this is a string";
var str2="this is also a string";

//objects
var marks={
    ravi: 34,
    shubham: 89,
    garima: 31 
}
// booleans
var a=true;
var b=false
//console.log(a,b);

//array
var arr=[1,2,3,'ghh','jhg',7,8]
console.log(arr)

console.log("value of n1 + n2",n1+n2);*/


/*var n1=34;
var n2=78;
function avg(n1,n2)
{
    return (n1+n2)/2;
}
c=avg(4,9);
console.log(c);

var arr=[1,2,3,4,5,6];
console.log(arr);
for(var i=0;i < arr.length;i++)
{
    console.log(arr[i])
}

arr.forEach(function(element)
{
    console.log(element)
})

let newarr=['fan','cam',5,6,null,true]
// array methods
newarr.pop()
console.log(newarr)
newarr.push("jahnavi")
console.log(newarr);
newarr.shift()
console.log(newarr)
*/
// string methods 

var a=98
console.log(a)

let mystring = "he is a good boy";
console.log(mystring);
console.log(mystring.indexOf("good"))
d=mystring.replace("he","ram");
console.log(d,mystring)

//Date
myDate=new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getDay());
console.log(myDate.getFullYear());


//events in javascript
function clicked()
{
    console.log("button was clicked");
}
window.onload=function()
{
    console.log(" document is loaded")
}
function sum(a,b)
{
    return a+b;
}
sum=(a,b)=>{
    return a+b;
}

add=()=>
{
    console.log("hii, i am add");
}
setTimeout(add, 5000);