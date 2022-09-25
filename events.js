function checkUsername()
{
    var el=document.getElementById('feedback');
    if(this.value.length<5)
    {
        el.textContent='Username must be 5 character or more';

    }else{
        el.textContent='';

    }

}
var elusername=document.getElementById('username');
elusername.onblur=checkUsername;