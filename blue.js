const bluebird = require("bluebird");
const fs =require("fs");
const bPromise = bluebird.promisify(require("fs").readFile);


// bPromise(__dirname+"/index.html", "utf8")
// .then(function(filetext){
//     console.log(filetext);
// })
// .catch(function(err){
//     console.log(err);
// })

// /*  =============================
//         promisifyAll
//     =============================
// */

// const promisifyAll = bluebird.promisifyAll(fs);

// promisifyAll.readFileAsync(__dirname+"/header.html", "utf8").then(function(filetext){
//     console.log(filetext)
// }).catch(function(err){
//     console.log(err);
// })
var p = ["header.html", "index.html", "footer.html"];
function mypromise(file){
    return new Promise(function(res, rej){
        fs.readFile(__dirname + `/${p[file]}`, "utf8", function(err, data){
            if(err){
                rej(err);
            }else{
                res(data);
            }
        })
    })
}
var text="";
async function myasync(){
for (let index = 0; index < p.length; index++) {
    text += await mypromise(index);
    
}
console.log(text);
}(myasync());

// myasync();




