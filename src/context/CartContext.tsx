import React, { useEffect, useState } from 'react';
import Cookie from '../util/cookie';
import { COOKIE_NAME } from '../util/typeConstant';

type productTypes = { productID: string };

type cartContextTypes = {
  cart: productTypes[];
  cartCount: number;
  addProductToCart: (id: string) => void;
};

const CartContext = React.createContext<cartContextTypes>({
  cart: [],
  cartCount: 0,
  addProductToCart: () => {},
});

const CartProvider = (props: { children: React.ReactChild }) => {
  const getProductIds = Cookie.get(COOKIE_NAME.PRODUCT_IDS, 0);

  const parseProductIds: productTypes[] | [] =
    typeof getProductIds === 'string' ? JSON.parse(getProductIds) : [];

  const [cart, setCart] = useState<productTypes[]>(parseProductIds);

  const addProductToCart = (productID: string) => {
    const isExist = cart.some((data) => data.productID === productID);

    !isExist && setCart((cart) => [...cart, { productID }]);
  };

  useEffect(() => {
    const stringifyCart = JSON.stringify(cart);
    Cookie.set(COOKIE_NAME.PRODUCT_IDS, stringifyCart);
  }, [cart]);

  const implementation: cartContextTypes = {
    cart,
    cartCount: cart.length,
    addProductToCart,
  };

  return (
    <CartContext.Provider value={implementation}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
