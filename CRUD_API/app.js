const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/e-comm"); //database path saved in mongodb compass

//designing products schema
const productSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        brand: String,
        category: String
    }
);

//products model
const saveData = async () => {
    const Products = mongoose.model("products", productSchema);
    let data = new Products({
        name: "m8",
        price: 1000,
        brand: "maxx",
        category: 'Mobile'
    });
    let result = await data.save();
    console.log(result);
}

saveData();

const updateData = async () => {
    const Products = mongoose.model("products", productSchema);
    let data = await Products.updateOne(
        { name: "note 5 pro" },
        {
            $set: { price: 1234, name: "tingtong" }
        }
    )

    console.log(data);
}
updateData();


const deleteData = async () => {
    const Products = mongoose.model("products", productSchema);
    let data = await Products.deleteMany(
        { name: 'note 1' }
    )
    console.log(data);
}
deleteData();

const SearchData = async () => {
    const Products = mongoose.model("products", productSchema);
    let data = await Products.find({name:"note 0" });
    console.log(data);
}

SearchData();













//Schemas:they are basically the fields how many fields we'll have and which type
//Models:- by using these schemas,model will connects node.js and mongodb