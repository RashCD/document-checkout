export type productDetailsTypes = {
  productID: string;
  productName: string;
  price: string;
  currency: '$';
  image: {
    src: string;
    alt: string;
  };
};

export type promoTypes = {
  code: string;
  product: string;
  discountPrice: number;
  description: string;
  eligibility: {
    discount: number;
    purchaseItem: number;
  };
};

export const PRODUCT_DETAILS: productDetailsTypes[] = [
  {
    productID: 'wf',
    productName: 'workflow',
    price: '199.99',
    currency: '$',
    image: {
      src: './workflow.jpg',
      alt: 'workflow image',
    },
  },
  {
    productID: 'docgen',
    productName: 'Document Generation',
    price: '9.99',
    currency: '$',
    image: {
      src: './docgen.jpg',
      alt: 'document generating image',
    },
  },
  {
    productID: 'form',
    productName: 'Form',
    price: '99.99',
    currency: '$',
    image: {
      src: './form.jpg',
      alt: 'form image',
    },
  },
  {
    productID: 'tax',
    productName: 'Taxation',
    price: '20.10',
    currency: '$',
    image: {
      src: './tax.jpg',
      alt: 'taxation image',
    },
  },
];

export const PRODUCT_PROMOCODE: promoTypes = {
  code: 'FF9543D1',
  product: 'docgen',
  discountPrice: 8.99,
  description:
    'Reduces the docgen price to $8.99 a unit when at least 10 documents are purchased',
  eligibility: {
    discount: 1.0,
    purchaseItem: 10,
  },
};
