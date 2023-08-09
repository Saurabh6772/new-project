import axios from "axios";

axios.get("https://fakestoreapi.com/products").then((res) => {
  console.log(res.data);
});
