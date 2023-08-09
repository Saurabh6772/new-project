import "./ProductStore.css";
import { Link } from "react-router-dom";
import { useAppContext } from "./Context";
import { useContext } from "react";
import {
  ProductImg,
  ProductDetails,
  CountBox,
  ProductDetailsAndSelection,
} from "./Components";

export default function Product({ index }) {
  //   const { cartCount, updateCartCount } = useContext(CartContext);
  //   const { products } = useContext(ProductsContext);
  //   const { productsCount, updateProductsCount } =
  //     useContext(ProductsCountContext);

  const {
    cartCount,
    updateCartCount,
    products,
    updateProducts,
    productsCount,
    updateProductsCount,
  } = useAppContext();

  function addHandler(event) {
    let newProductsCount = [...productsCount];
    console.log(newProductsCount[index]);
    newProductsCount[index] = productsCount[index] + 1;
    console.log(newProductsCount[index]);
    console.log(newProductsCount[index]);
    console.log(newProductsCount[index]);
    updateProductsCount(newProductsCount);
    let newCartCount = cartCount + 1;
    updateCartCount(newCartCount);
  }

  function subtractHandler(event) {
    if (productsCount[index] === 0) {
      return;
    }
    let newProductsCount = [...productsCount];
    newProductsCount[index] = productsCount[index] - 1;
    updateProductsCount(newProductsCount);
    let newCartCount = cartCount - 1;
    updateCartCount(newCartCount);
  }

  return (
    <div className="Product">
      <ProductImg
        index={index}
        linkto={`/product/${index}`}
        img={products[index].image}
        clickHandler={addHandler}
        dblClickHandler={subtractHandler}
      />
      <ProductDetailsAndSelection
        index={index}
        product={products[index]}
        count={productsCount[index]}
        addButtonHandler={addHandler}
        subtractButtonHandler={subtractHandler}
      />
    </div>
  );
}
