var a=$('li.hot');
console.log(a);
$('li.hot').addClass('complete');
var b=$('li.complete');
console.log(b);
var c=$('li').html();
console.log(c);

//html() and text() method
var d=$('ul').html();
console.log(d);
var e=$('ul').text();
console.log(e);

///var listitem=$('ul').html();
//$('ul').append(listitem);

//var list2=$('ul').text();
//$('ul').append('<p>'+list2+ '</p>');

//var listtext=$('li').text();
//$('li').append('<i>' + listtext + '</i>');

//updating elements-
//using a function to update content
$('li.hot').html(function()
{
    return '<em>'+$(this).text()+'</em>';
})

//adding new content-
$(function()
{
    $('ul').before('<p class="notice"> Just updated </p>');
    $('li').prepend('+ ');
    var newlistitem=$('<li><em>gluten free</em> soy sauce</li>');
    $('li:last').after(newlistitem);
})

//getting and setting css properties-
var bgc=$('li').css('background-color');
console.log(bgc);
$('li').css('background-color','pink');