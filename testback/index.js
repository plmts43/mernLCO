const express = require("express");

const app = express();

const port = 8192;

app.get("/",(req,res) => {
    return res.send("Home Page !! ");
});

app.get("/signout",(req,res) => {
    return res.send("you are signed out ... ");
});

app.get("/hitesh",(req,res) => {
    return res.send("hitesh uses instagram***");
});

app.get("/signup",(req,res) => {
    return res.send("You are on sign up route***");
});

app.get("/login",(req,res) => {
    return res.send("HELLO 2024!! 😃 Now you are visiting 😃 login route");
});

app.listen(port,() => {
    console.log("Server is up and working fine***")
})

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })