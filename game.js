//create a snake,water,gun game.
let user=prompt("eneter s,w or g");
let cpui=Math.floor(Math.random()* 3);
let cpu=["s","w","g"][cpui]

const match=(cpu,user)=>{
    if(cpu===user){return "Nobody is winner, match tied";}
    else if(cpu==="s" && user==="w"){
        return "cpu"
    }
    else if(cpu==="s" && user==="g"){
        return "user"
    }
    else if(cpu==="g" && user==="w"){
        return "user"
    
    }
    else if(cpu==="g" && user==="s"){
        return "cpu"
    }
    else if(cpu==="w" && user==="g"){
        return "cpu"
    }
    else if(cpu==="w" && user==="s"){
        return "user"
    }

}
let res=match(cpu,user)
document.write("winner is "+res)