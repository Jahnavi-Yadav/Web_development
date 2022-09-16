
let runagain=true;
const canDrive=(age)=>{
    return age>=18?true:false
}
while(runagain){
    let age=prompt("Enter your age")
    age=Number.parseInt(age);

 if(canDrive(age)){
    alert("yes, u can drive")
 }
 else{
    alert("you cant drive");
 }
 runagain=confirm("Do u want to play again")
}