
const but1=document.querySelector('.b1');
 const but2=document.querySelector('.b2');
 const but3=document.querySelector('.b3');
 const but4=document.querySelector('.b4');
 const but5=document.querySelector('.b5');
 const but6=document.querySelector('.b6');
 const but7=document.querySelector('.b7');
 const but8=document.querySelector('.b8');
 const but9=document.querySelector('.b9');

but1.addEventListener('click',function(){
    document.querySelector('p').style.color='red';
})
but2.addEventListener('click',function(){
    document.querySelector('p').style.color='green';
})
but3.addEventListener('click',function(){
    document.querySelector('p').style.color='blue';
})
but4.addEventListener('click',function(){
    document.querySelector('p').style.fontSize='10px';
})
but5.addEventListener('click',function(){
    document.querySelector('p').style.fontSize='20px';
})
but6.addEventListener('click',function(){
    document.querySelector('p').style.fontSize='30px'
})
but7.addEventListener('click',function(){
    document.querySelector('p').style.fontFamily='Arial', sans-serif;
})
but8.addEventListener('click',function(){
    document.querySelector('p').style.fontFamily='Times New Roman',serif;
})
but9.addEventListener('click',function(){
    document.querySelector('p').style.fontFamily='Brush Script MT',cursive;
})


