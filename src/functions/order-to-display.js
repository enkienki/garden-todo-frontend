import groupBy from "../functions/group-by";

const orderToDisplay = (order) => {
  const groupedOrder = order.map((a) => {
    return groupBy(a, "type");
  });
  return groupedOrder;
};

export default orderToDisplay;
