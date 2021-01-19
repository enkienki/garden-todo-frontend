const calculatePrice = (order) => {
  return order
    .map((a) => {
      if (a.length === 1) {
        return a[0].price;
      } else {
        return a.reduce((acc, curr) => acc + curr.price, 0);
      }
    })
    .reduce((a, b) => a + b);
};

export default calculatePrice;
