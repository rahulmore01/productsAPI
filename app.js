require("dotenv").config()

const express = require("express");
const app = express();
// importign databse connection
const connectDB = require("./db/connect.js");
const port = process.env.PORT || 8000;
// to import our routes
const products_routes = require("./routes/products.js");

// middleware or "use" to use the custom routes
app.use("/api/products", products_routes);


// we are wrapping the connectDB inside asynch function because connectDB returns a promise which async obj
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start()
