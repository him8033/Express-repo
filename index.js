const express= require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listning on port ${port}`);
})

app.use((req,res) => {
    console.log("request received...");
    let data="this is a basic response";
    let data2 = {
        name : "apple",
        color : "red"
    }
    let data3 = "<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li></ul>"
    res.send(data3);
})