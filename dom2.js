/*var el=document.getElementById('one');
el.className='cool';
//selecting element form nodelist-
//item() method
var el1=document.getElementsByClassName('hot');
if(el1.length>=1)
{
    var first=el1[1];
    el1.className='cool'
}
*/


/*var i=document.getElementById('two');
var elText=i.firstChild.nodeValue;
elText=elText.replace('pine nuts','kale');
i.firstChild.nodeValue=elText;

 var a=document.getElementById('one').textContent;
 console.log(a);
 var b=document.getElementById('one').innerText;
 console.log(b);
*/
var i=document.getElementById('one');
var itemcontent=i.innerHTML;
i.innerHTML='<a href=\"http://example.org\">'+ itemcontent + '</a>';

//adding new element to the dom tree
var el=document.createElement('li');
var newtext=document.createTextNode('qwerty');
el.appendChild(newtext);
var pos=document.getElementsByTagName('ul')[0];
pos.appendChild(el);


//removing elements via dom manipulation
var rem=document.getElementsByTagName('li')[3];
var cel=rem.parentNode;
cel.removeChild(rem);

//Attribute nodes
e=document.getElementById('one').getAttribute('class');
console.log(e);