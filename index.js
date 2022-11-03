const http=require("http");
const server=http.createServer((req,res)=>{
    //console.log(req.url)
    if(req.url=="/"){
    res.end("Hello, from home!");}
    else if(req.url=="/about"){
        res.end("Hello from about us");
    }
    else if(req.url=="/contact"){
        res.end("Hello from contact us");
    }
    else 
        res.end("oops! Page doesnot exist");
    
});
server.listen(8000,'localhost',()=>{
    console.log('server running at http://localhost:8000');
});
