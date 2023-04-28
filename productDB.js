// hardcoded data in the json to store in the database collection through product db
// this file is different than whole project, this file is only crreated to add the json hardcoded data in the collection through this file --https://youtu.be/RxkgrRzLVhw

require("dotenv").config();
const connectDB = require("./db/connect.js");
const Product = require("./models/product.js");

const ProductJson = require("./products.json");
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    // .create method is to add json data to the database colleciton named product.product be converted into products
    await Product.deleteMany()//to delete repeted products, if u added ProductJson 2 times by mistake
    await Product.create(ProductJson);
    console.log("sucess");
  } catch (error) {
    console.log(error);
  }
};
start()