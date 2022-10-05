console.log("Ajax Tutorial"); 
let fetchbtn=document.getElementById('fetchbtn');
fetchbtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler()
{
    console.log('button clicked');
    const xhr=new XMLHttpRequest();
    //open the object
    xhr.open('GET','text3.txt',true);
    //when progressing(optional)
    xhr.onprogress=function(){
        console.log('on progress');
    }
    xhr.onload=function()
    {
        if(this.status===200)
        {
            console.log(this.responseText);
        }
        else{

            console.error('some error occured')
        }
        
    }
    //send the request
    xhr.send();
   

}