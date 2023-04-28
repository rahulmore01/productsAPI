// these are the fuctions/actions created to give responce on the route
const { urlencoded } = require("express");
const Product = require("../models/product.js");

const getAllProducts = async (req, res) => {
  // req.query gives us the query inside url after "?" --:8000/api/products?name=watch10
  // if we found compant,name,featured,sort then get the whole query after "?" and do below operations for respected key
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }
  if (featured) {
    queryObject.featured = featured;
  }
  // mongodb regex for proper filter
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  let apiData = Product.find(queryObject);

  if (sort) {
    // unlike filter where we can use & to get a combine result through url
    //but in case of sort we use "," --/api/products?sort=name,price
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }
  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }
  // pagination
  let page = Number(req.query.page) || 1; //object to string - Number()
  let limit = Number(req.query.limit) || 3; //3 products is limit for 1 page
  let skip = (page - 1) * limit; //to skip certain products on chossing a page number. eg. choose page 3 thats why skipped 6 products as 1 page has limit of 3 products
  //main formulae
  apiData = apiData.skip(skip).limit(limit);

  const myData = await apiData;
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query);
  res.status(200).json({ myData });
};
module.exports = { getAllProducts, getAllProductsTesting };
