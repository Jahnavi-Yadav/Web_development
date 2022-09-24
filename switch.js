var msg;
var level=2;

switch(level){
    case 1:
        msg='Good luck on forst test';
        break;

    case 2:
        msg='Second- Keep going';
        break;
    case 3:
        msg='Final round, almost there';
        break;
    default:
        msg='good luck';
        break;
}
var el= document.getElementById('answer');
el.textContent=msg
