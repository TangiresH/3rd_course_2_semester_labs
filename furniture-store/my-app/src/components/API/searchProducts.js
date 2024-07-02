import products from '../ProductsList/ProductsList';

export const searchProducts = (query) => {
    const lowercasedQuery = query.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(lowercasedQuery) ||
      product.description.toLowerCase().includes(lowercasedQuery)
    );
  };

export default searchProducts;
