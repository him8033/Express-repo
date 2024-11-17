const express= require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listning on port ${port}`);
})

app.get("/:username/:id", (req,res) => {
    let {username,id} = req.params;
    res.send(`Welcome to the page @${username}`);
})