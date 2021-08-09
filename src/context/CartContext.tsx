import React, { useEffect, useState } from 'react';
import Cookie from '../util/cookie';
import { COOKIE_NAME } from '../util/typeConstant';

type productTypes = { productID: string };

type cartContextTypes = {
  carts: productTypes[];
  cartCount: number;
  addProductToCart: (id: string) => void;
};

const CartContext = React.createContext<cartContextTypes>({
  carts: [],
  cartCount: 0,
  addProductToCart: () => {},
});

const CartProvider = (props: { children: React.ReactChild }) => {
  const getProductIds = Cookie.get(COOKIE_NAME.PRODUCT_IDS, 0);

  const parseProductIds: productTypes[] | [] =
    typeof getProductIds === 'string' ? JSON.parse(getProductIds) : [];

  const [carts, setCarts] = useState<productTypes[]>(parseProductIds);

  const addProductToCart = (productID: string) => {
    const isExist = carts.some((cart) => cart.productID === productID);

    !isExist && setCarts((cart) => [...cart, { productID }]);
  };

  useEffect(() => {
    const stringifyCart = JSON.stringify(carts);
    Cookie.set(COOKIE_NAME.PRODUCT_IDS, stringifyCart);
  }, [carts]);

  const implementation: cartContextTypes = {
    carts,
    cartCount: carts.length,
    addProductToCart,
  };

  return (
    <CartContext.Provider value={implementation}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
