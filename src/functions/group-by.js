const groupBy = (tableauObjets, propriete) => {
  return tableauObjets.reduce(function (acc, obj) {
    var cle = obj[propriete];
    if (!acc[cle]) {
      acc[cle] = [];
    }
    acc[cle].push(obj);
    return acc;
  }, {});
};

export default groupBy;
