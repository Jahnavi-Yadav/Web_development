var score=15;
var msg;
if(score>=50)
{
    msg='Congrts';
    msg+=' Proceed to next round';
}
else{
    msg='Have Another go!'
}
var el=document.getElementById('answer');
el.textContent=msg;