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
        fs.readFile(path.join(__dirname, "/inde.html"), "utf8", function(err, data){
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

Promise.all([p1(), p2(), p3()]).then(function(result){
    console.log(result[1]);
}).catch(function(err){
    console.log(err);
})