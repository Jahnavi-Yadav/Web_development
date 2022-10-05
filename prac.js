let student={
    "name":"jahnavi",
    "age":19,
    "city":"varanasi"
}
let a=JSON.stringify(student);
console.log(a);

let nstr='{"name":"jahnavi","age":19}'
let b=JSON.parse(nstr);
console.log(b);