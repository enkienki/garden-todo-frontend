const fetchProducts = async (setData) => {
  try {
    const response = await fetch(
      `https://commande-kebab-backend.herokuapp.com/api/fetchproducts`
    );
    const data = await response.json();
    setData(data.products);
  } catch (error) {
    console.log(error);
  }
};
export default fetchProducts;
