const fs = require("fs");
const path = require("path");

var myfun = function(){
    try {
        var text = "";
        fs.readFile(path.join(__dirname, "/header.html"), "utf8", function(err, data){
            if(err){
                throw err;
            }else{
                text += data;
            }

            fs.readFile(path.join(__dirname, "/index.html"), "utf8", function(err, data){
                if(err){
                    throw err;
                }else{
                    text += data;
                }

                fs.readFile(path.join(__dirname, "/footer.html"), "utf8", function(err, data){
                    if(err){
                        throw err;
                    }else{
                        text += data;
                    }
                   
                })
                
                
            })
                        
        })
        
    } catch (error) {
        console.log(error);
    }
}();