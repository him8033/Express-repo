const express= require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listning on port ${port}`);
})

// app.use((req,res) => {
//     console.log("request received...");
//     let data="this is a basic response";
//     let data2 = {
//         name : "apple",
//         color : "red"
//     }
//     let data3 = "<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li></ul>"
//     res.send(data3);
// })

app.get("/", (req,res) => {
    res.send("You Contacted root path");
})
app.get("/apple", (req,res) => {
    res.send("You Contacted apple path");
})
app.get("/banana", (req,res) => {
    res.send("You Contacted banana path");
})
app.get("/mango", (req,res) => {
    res.send("You Contacted mango path");
})
app.get("/*", (req,res) => {
    res.send("This path does not exists");
})
app.post("/", (req,res) => {
    res.send("You sent a post request");
})