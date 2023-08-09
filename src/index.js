import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Api_App from "./Api_App";
import MyPromise_Test from "./MyPromise_Test";
import ProductStore from "./ProductStore";
import CartDetails from "./CartDetails";
import ProductDetailedInformation from "./ProductDetailedInformation";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Navigate,
  Link,
  BrowserRouter,
  Outlet,
} from "react-router-dom";
import { AppContextProvider } from "./Context";
import useProductStates from "./useProductStates";
import axios from "axios";
import "@rippling/ui/index.scss";
import { Button, Icon } from "@rippling/ui";
import { useState, useEffect } from "react";
import FlowIndex from "./FlowDesign/index";
// import Flow from "../../rippling-webapp/app/modules/Core/components/flow";

function Index() {
  const [cartCount, setCartCount] = useState(0);
  const [productsCount, setProductsCount] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const count = res.data.length;
      const countArray = Array(count).fill(0);
      setProductsCount(countArray);
      setProducts(res.data);
    });
  }, []);
  //console.log(products);

  return (
    <AppContextProvider
      cartCount={cartCount}
      updateCartCount={setCartCount}
      productsCount={productsCount}
      updateProductsCount={setProductsCount}
      products={products}
      updateProducts={() => {}}
    >
      <Outlet />
    </AppContextProvider>
  );
}

// console.log("RenderUI");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="products" element={<ProductStore />} />
          <Route path="cart" element={<CartDetails />} />
          <Route
            path="product/:productid"
            element={<ProductDetailedInformation />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

//axios.get("https://fakestoreapi.com/products").then(renderUI);

// ReactDOM.render(
//   <BrowserRouter>
//     <Kindex />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Route component={Flow} path="level0" lable="Level 0">
//         <Route
//           path="level1"
//           label="Level 1"
//           description="Set up your company info"
//         >
//           <IndexRedirect to="index" />
//           <Route path="index" component={Interstitial} />
//           <Route path="level2" component={Basics} label="Level 2" />
//         </Route>
//       </Route>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// search more api options.
// find why the count update is not working.
// fix countbox css.
// use useEFFECT
// more uikit rendering
//
