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
        console.log(result);
    }).catch(function(err){
        console.log(err);
    })
}();