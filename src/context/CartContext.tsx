import React, { useEffect, useState } from 'react';
import Cookie from '../util/cookie';
import { COOKIE_NAME } from '../util/typeConstant';

type productTypes = { productID: string };

type cartContextTypes = {
  carts: productTypes[];
  cartCount: number;
  total: object;
  addProductToCart: (id: string) => void;
  deleteProduct: (id: string) => void;
  setTotal: React.Dispatch<React.SetStateAction<{}>>;
};

const CartContext = React.createContext<cartContextTypes>({
  carts: [],
  cartCount: 0,
  total: {},
  addProductToCart: () => {},
  deleteProduct: () => {},
  setTotal: () => {},
});

const CartProvider = (props: { children: React.ReactChild }) => {
  const getProductIds = Cookie.get(COOKIE_NAME.PRODUCT_IDS, 0);
  const [total, setTotal] = useState({});

  const parseProductIds: productTypes[] | [] =
    typeof getProductIds === 'string' ? JSON.parse(getProductIds) : [];

  const [carts, setCarts] = useState<productTypes[]>(parseProductIds);

  const addProductToCart = (productID: string) => {
    const isExist = carts.some((cart) => cart.productID === productID);

    !isExist && setCarts((cart) => [...cart, { productID }]);
  };

  const deleteProduct = (productID: string) => {
    const filteredCarts = carts.filter((cart) => cart.productID !== productID);

    setCarts(filteredCarts);
  };

  useEffect(() => {
    const stringifyCart = JSON.stringify(carts);
    Cookie.set(COOKIE_NAME.PRODUCT_IDS, stringifyCart);
  }, [carts]);

  const implementation: cartContextTypes = {
    carts,
    cartCount: carts.length,
    total,
    addProductToCart,
    deleteProduct,
    setTotal,
  };

  return (
    <CartContext.Provider value={implementation}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
