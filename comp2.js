var score1=90;
var score2=95;
var h1=75;
var h2=78;

var comp=(score1+score2)> (h1+h2);
var el=document.getElementById('answer');
el.textContent='New High Score: ' + comp;