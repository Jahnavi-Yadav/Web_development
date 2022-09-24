var pass=50;
var score=90;
var haspassed=score>=pass;
var el=document.getElementById('answer');
el.textContent='Level passed: ' + haspassed;