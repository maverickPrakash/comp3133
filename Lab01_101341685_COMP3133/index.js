console.log("This is Lab01 by Prakash Kumar")

fs = require('fs')

fs.unlink("usa.txt", (err)=>{
    if(err){
        throw error;
    }
    console.log("Usa file deleted")
})

fs.unlink("canada.txt", (err)=>{
    if(err){
        throw error;
    }
    console.log("Canada file deleted")
})
let Canada = fs.createWriteStream('canada.txt')
let Usa = fs.createWriteStream('usa.txt')

fs.readFile("input_countries.csv", (err,data)=>{
    arrayData = data.toString().split("\n")
    for(let i of arrayData){
        splitData = i.split(",")
       if(splitData[0]=="Canada"){
        Canada.write(i)
       }

       if(splitData[0]=="United States"){
        Usa.write(i)

       }
        
    }
    console.log("USA and Canada File has been created")
    Canada.end();
    Usa.end();

})
