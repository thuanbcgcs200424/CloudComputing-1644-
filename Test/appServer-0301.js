const express = require('express');
const app = express();
const fs = require("fs");
const hostname = 'localhost';
const port = 4000;
solan = 0;
//--
const router = express.Router();
router.get("/", (req, res) => {
    content = fs.readFileSync("./views/home.html");
    res.end(content);
});
router.get("/about", (req, res) => {
    content = fs.readFileSync("./views/about.html");
    res.end(content);
});
router.get("/profile", (req, res) => {
    content = fs.readFileSync("./views/profile.html");
    res.end(content);
});
router.get("/products", (req, res) => {
    content = fs.readFileSync("./views/products.html");
    res.end(content);
});
router.get("/cart", (req, res) => {
    content = fs.readFileSync("./views/cart.html");
    content += " " + req.url;
    console.log(req.query, req.params); 
    res.end(content);
});

//--
app.use("/", router);
app.use(express.static("public")); // khai bao public la thu muc tinh
app.listen(process.env.port | port);
console.log(`Sever running at http://${hostname}:${process.env.port | port}`)