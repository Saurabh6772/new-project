import Product from "./Product";
import "./ProductStore.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "./Context";
import { DashBoard, CountBox } from "./Components";
import { Card, Button } from "@rippling/ui";
// function clickHandler(event) {
//     console.log(event);
//     console.log(event.currentTarget);
// }

function ProductShowcase({ cartCount, products }) {
  return (
    <>
      <DashBoard>
        <>
          {" "}
          <div className="Title">Shoe Store</div>
          <div className="Cart">
            <Link to={`/cart`}>
              {" "}
              <div style={{ display: "inline-block" }}>Cart</div>{" "}
            </Link>
            <CountBox num={cartCount} />
          </div>{" "}
        </>
      </DashBoard>
      <div className="ProductShowcaseGrid">
        {products.map((product, index) => {
          return <Product key={index} index={index} />;
        })}
      </div>
      {/* <Card.Layout>
        <Button>Hello</Button>
      </Card.Layout> */}
      {/* <Button>Helo</Button> */}
      {/* <Button></Button> */}
      {/* <div>hello</div> */}
    </>
  );
}

export default function ProductStore() {
  //const productJSON = JSON.stringify(products)
  const { cartCount, products } = useAppContext();
  //console.log(products);
  return <ProductShowcase cartCount={cartCount} products={products} />;
}

// 1. Naming convention1
// 2. Move business logic out of generic components (Select Panel)
// 3. Try to combine props into one (pass shoe instaed of name, count, img)

// improve CSS.
// api integration.
