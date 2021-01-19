const toggleIngredients = (a, data, setData) => {
  setData([...data, a]);
  const item = a._id;
  data.map(
    (x) => x._id === item && setData(() => data.filter((b) => b._id !== item))
  );
};

export default toggleIngredients;
