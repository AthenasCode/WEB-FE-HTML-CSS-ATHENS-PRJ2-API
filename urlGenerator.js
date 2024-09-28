function generateFullUrl(req) {
  const protocol = req.protocol;
  const host = req.hostname;
  const url = req.originalUrl;
  const port = process.env.PORT || 3000;
  return `${protocol}://${host}:${port}${url}`;
}

function updateImageUrls(products, fullUrl) {
  return products.map(category => ({
    ...category,
    products: category.products.map(product => ({
      ...product,
      image: `${fullUrl}/${product.image}`
    }))
  }));
}

module.exports = { generateFullUrl, updateImageUrls };
