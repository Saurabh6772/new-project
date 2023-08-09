import { createContext, useContext } from "react";

export const CartContext = createContext({
  cartCount: 0,
  updateCartCount: () => {},
});

export const ProductsContext = createContext({
  products: [],
  updateProducts: () => {},
});

export const ProductsCountContext = createContext({
  productsCount: [],
  updateProductsCount: () => {},
});

export function AppContextProvider({
  cartCount,
  updateCartCount,
  products,
  updateProducts,
  productsCount,
  updateProductsCount,
  children,
}) {
  return (
    <CartContext.Provider
      value={{
        cartCount: cartCount,
        updateCartCount: updateCartCount,
      }}
    >
      <ProductsContext.Provider
        value={{
          products: products,
          updateProducts: updateProducts,
        }}
      >
        <ProductsCountContext.Provider
          value={{
            productsCount: productsCount,
            updateProductsCount: updateProductsCount,
          }}
        >
          {children}
        </ProductsCountContext.Provider>
      </ProductsContext.Provider>
    </CartContext.Provider>
  );
}

export function useAppContext() {
  const { cartCount, updateCartCount } = useContext(CartContext);
  const { products, updateProducts } = useContext(ProductsContext);
  const { productsCount, updateProductsCount } =
    useContext(ProductsCountContext);
  return {
    cartCount: cartCount,
    updateCartCount: updateCartCount,
    products: products,
    updateProducts: updateProducts,
    productsCount: productsCount,
    updateProductsCount: updateProductsCount,
  };
}
