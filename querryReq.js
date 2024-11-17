const express= require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listning on port ${port}`);
})

//      for getting value as querry form just run "req.querry" and store their values in any variable and use their values

app.get("/searcdh", (req,res) => {
    let {q} = req.query;
    if(!q){
        res.send("no qurerry found");
    }
    console.log(q);
    res.send(`search result for: ${q}`);
})