export function getCart() {
  const currentCart = JSON.parse(localStorage.getItem('shoppingCart'));
  return currentCart || [];
}

export async function increaseQty(itemId) {
  const currentCart = await getCart();
  const updateList = currentCart.map((product) => {
    if (product.productId === itemId) {
      return {
        productId: product.productId,
        productName: product.productName,
        productImg: product.productImg,
        productPrice: product.productPrice,
        productQty: product.productQty + 1,
      };
    }
    return product;
  });
  localStorage.setItem('shoppingCart', JSON.stringify(updateList));
}

export async function addCart(value) {
  const currentCart = await getCart();
  if (currentCart.some(({ productId }) => value.productId === productId)) {
    increaseQty(value.productId);
  } else {
    const updateList = [...currentCart, { ...value, productQty: 1 }];
    localStorage.setItem('shoppingCart', JSON.stringify(updateList));
  }
}
