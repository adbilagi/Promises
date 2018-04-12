const fs = require("fs");
const path  = require("path");

var p1 = function(){
    return new Promise(function(reslove, reject){
        fs.readFile(path.join(__dirname, "/header.html"), "utf8", function(err, data){
            if(err){
                reject (err);
            }else{
                reslove(data);
            }
        });
    })
}

var p2 = function(){
    return new Promise(function(reslove, reject){
        fs.readFile(path.join(__dirname, "/index.html"), "utf8", function(err, data){
            if(err){
                reject (err);
            }else{
                reslove(data);
            }
        });
    })
}

var p3 = function(){
    return new Promise(function(reslove, reject){
        fs.readFile(path.join(__dirname, "/footer.html"), "utf8", function(err, data){
            if(err){
                reject (err);
            }else{
                reslove(data);
            }
        });
    })
}

async function myfun(){
    try {
        const a1 = await p1();
        const a2 = await p2();
        const a3 = await p3();
        console.log( a1 + a2 + a3);
        
    } catch (error) {
        console.log(error);
        
    }


}

myfun();


