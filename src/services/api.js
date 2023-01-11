const urlBase = 'https://api.mercadolibre.com/sites/MLB';
export async function getCategories() {
  const URL = `${urlBase}/categories`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL = `${urlBase}/search?category=${categoryId}&q=${query}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function getProductById(productId) {
  const URL = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
