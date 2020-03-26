let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

let items = [
    {name: "item1", des: "item1"},
    {name: "item2", des: "item2"},
    {name: "item3", des: "item3"},
];

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/add", (req, res) => {
    res.render("add");
});

app.get("/items", (req, res) => {
    res.render("items", {items: items});
});

app.post("/items", (req, res) => {
    let itemName = req.body.name;
    let itemDes = req.body.des;
    items.push({name: itemName, des: itemDes});
    res.redirect("/items");
});

app.listen(3000, ()=> console.log("server listen on port 3000"));