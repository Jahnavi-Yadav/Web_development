console.log("Ajax Tutorial"); 
let fetchbtn=document.getElementById('fetchbtn');
fetchbtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler()
{
    console.log('button clicked');
    const xhr=new XMLHttpRequest();
    //open the object
    //post request
    //xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','json');

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
    params='{"name":"test6","salary":8685,"age":"23"}';
    //send the request
    xhr.send(params);
   

}