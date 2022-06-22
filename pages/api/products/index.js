import products from "../../../assets/products.json";

export default function handler(req, res) {
  res.json(products);
}
