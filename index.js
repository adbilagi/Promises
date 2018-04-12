var fs = require("fs");
var path = require("path");

var myPromisFunction= function(){
    var p = new Promise(function(reslove, reject){
        fs.readFile(path.join(__dirname, "/header.html"), "utf8", function(err, data){
            if(err){
                reject(err);
            }else{
                reslove(data);
            }
        })
    }).then(function(result){
        var p = new Promise(function(reslove, reject){
            fs.readFile(path.join(__dirname, "/index.html"), "utf8", function(err, data){
                if(err){
                    reject(err);
                }else{
                    reslove( result +  data);
                }
            })

        })
        return p;
    }).then(function(result){
        var p = new Promise(function(reslove, reject){
            fs.readFile(path.join(__dirname, "/footer.html"), "utf8", function(err, data){
                if(err){
                    reject(err);
                }else{
                    reslove( result +  data);
                }
            })

        })
        return p;
    }).then(function(result){
        console.log(result)
    }).catch(function(err){
        console.log(err);
    })

}()

