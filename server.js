const http=require("http");
const server=http.createServer((req,res)=>{
    console.log(req.url)
    res.end("Hello, response from server!");
});
server.listen(8000,'localhost',()=>{
    console.log('server running at http://localhost:8000');
});
