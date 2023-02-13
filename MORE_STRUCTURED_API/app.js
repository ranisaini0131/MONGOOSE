const express = require("express");
require("./config");
const Products = require("./product");

const app = express();

app.use(express.json());//middleware for json data


app.post("/", async (req, res) => {
    let data = new Products(req.body);
    let response = await data.save();
    console.log(response);
    res.send(req.body);
});

app.get("/", async (req, res) => {
    let data = await Products.find();
    console.log(data);
    res.send(data);
});

app.delete("/"), async (req, res) => {
    let data = await Products.deleteOne(req.params);
    res.send(data);
}

app.put("/"), async (req, res) => {
    let data = await Products.updateOne(
        req.params,
        {
            $set: req.body
        }
    );
    res.send(data);
}

app.listen(3000);