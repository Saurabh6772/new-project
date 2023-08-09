import { useParams } from "react-router-dom";
import CartElement from "./CartElement";
import { useAppContext } from "./Context";

export default function CartDetails() {
  const {
    cartCount,
    updateCartCount,
    products,
    updateProducts,
    productsCount,
    updateProductsCount,
  } = useAppContext();
  return (
    <>
      <div className="Dashboard">
        <div className="Title">Cart</div>
      </div>
      <div className="CartDetails">
        {productsCount.map((count, index) => {
          if (count > 0) {
            return (
              <CartElement
                key={index}
                item={products[index].title}
                quantity={count}
              />
            );
          }
        })}
        <div>
          Total Items in Cart: <div className="Bluetext">{cartCount}</div>
        </div>
      </div>
    </>
  );
}
