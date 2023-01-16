export function getCart() {
  const currentCart = JSON.parse(localStorage.getItem('shoppingCart'));
  return currentCart || [];
}

export function decreaseQty(itemId) {
  const currentList = getCart();
  const updatedList = currentList.map((product) => {
    if ((product.productId || '') === itemId && product.productQty > 1) {
      return {
        productId: product.productId,
        productName: product.productName,
        productImg: product.productImg,
        productPrice: product.productPrice,
        productQty: product.productQty - 1,
      };
    }
    return product;
  });
  localStorage.setItem('shoppingCart', JSON.stringify(updatedList));
  return updatedList;
}

export function removeFromCart(value) {
  const currentList = getCart();
  const updatedList = currentList.filter(({ productId }) => productId !== value);
  localStorage.setItem('shoppingCart', JSON.stringify(updatedList));
  return updatedList;
}

export function increaseQty(itemId) {
  const currentCart = getCart();
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
  return updateList;
}

export function addCart(value) {
  const currentCart = getCart();
  if (currentCart.some(({ productId }) => value.productId === productId)) {
    increaseQty(value.productId);
  } else {
    const updateList = [...currentCart, { ...value, productQty: 1 }];
    localStorage.setItem('shoppingCart', JSON.stringify(updateList));
  }
}

export function getReviews(id) {
  const savedReviews = localStorage.getItem(id);
  const result = JSON.parse(savedReviews);
  return result || [];
}

export function addReviews(id, review) {
  const savedReviews = getReviews(id);
  const updateReviews = [...savedReviews, review];
  localStorage.setItem(id, JSON.stringify(updateReviews));
  return updateReviews;
}
