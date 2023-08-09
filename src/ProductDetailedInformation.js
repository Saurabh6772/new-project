import { useParams } from "react-router-dom";
import { useAppContext } from "./Context";
import {
  DashBoard,
  ProductImg,
  ProductDetails,
  ProductDetailsAndSelection,
} from "./Components";
import { Typography } from "@rippling/ui";

export default function ProductDetailedInformation() {
  const {
    cartCount,
    updateCartCount,
    products,
    updateProducts,
    productsCount,
    updateProductsCount,
  } = useAppContext();
  const { productid } = useParams();
  let index = productid;

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

  console.log(products);
  const product = products[productid];
  const productCount = productsCount[productid];
  return (
    <>
      <DashBoard>
        <div className="Title">{product.title}</div>
      </DashBoard>
      <div className="ProductDetailedInformation">
        <ProductImg index={productid} img={product.image}></ProductImg>
        <ProductDetailsAndSelection
          index={productid}
          product={product}
          count={productCount}
          addButtonHandler={addHandler}
          subtractButtonHandler={subtractHandler}
        >
          <Typography.Body2>{product.description}</Typography.Body2>
        </ProductDetailsAndSelection>
      </div>
    </>
  );
}
