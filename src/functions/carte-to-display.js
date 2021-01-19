export default function carteToDisplay(place, array) {
  switch (place) {
    case "sur place":
      return [
        array.filter((a) => a.type === "sandwich"),
        array.filter((a) => a.type === "sandwich frites"),
        array.filter((a) => a.type === "assiette"),
        array.filter((a) => a.type === "menu"),
        array.filter((a) => a.type === "portion"),
        array.filter((a) => a.type === "soda sur place"),
        array.filter((a) => a.type === "entrees"),
        array.filter((a) => a.type === "boisson chaude"),
        array.filter((a) => a.type === "petite assiette"),
        array.filter((a) => a.type === "formule"),
        array.filter((a) => a.type === "dessert"),
        array.filter((a) => a.type === "biere"),
        array.filter((a) => a.type === "aperitif"),
        array.filter((a) => a.type === "vin rouge"),
        array.filter((a) => a.type === "vin rose"),
        array.filter((a) => a.type === "vin blanc"),
      ];
    case "emporter":
      return [
        array.filter((a) => a.type === "sandwich"),
        array.filter((a) => a.type === "sandwich frites"),
        array.filter((a) => a.type === "assiette"),
        array.filter((a) => a.type === "menu"),
        array.filter((a) => a.type === "portion"),
        array.filter((a) => a.type === "soda à emporter"),
        array.filter((a) => a.type === "entrees"),
        array.filter((a) => a.type === "boisson chaude"),
        array.filter((a) => a.type === "petite assiette"),
        array.filter((a) => a.type === "formule"),
        array.filter((a) => a.type === "dessert"),
        array.filter((a) => a.type === "biere"),
        array.filter((a) => a.type === "aperitif"),
        array.filter((a) => a.type === "vin rouge"),
        array.filter((a) => a.type === "vin rose"),
        array.filter((a) => a.type === "vin blanc"),
      ];
    case "terrasse":
      return [
        array.filter((a) => a.type === "sandwich"),
        array.filter((a) => a.type === "sandwich frites"),
        array.filter((a) => a.type === "assiette"),
        array.filter((a) => a.type === "menu"),
        array.filter((a) => a.type === "portion"),
        array.filter((a) => a.type === "soda terrasse"),
        array.filter((a) => a.type === "entrees"),
        array.filter((a) => a.type === "boisson chaude"),
        array.filter((a) => a.type === "petite assiette"),
        array.filter((a) => a.type === "formule"),
        array.filter((a) => a.type === "dessert"),
        array.filter((a) => a.type === "biere"),
        array.filter((a) => a.type === "aperitif"),
        array.filter((a) => a.type === "vin rouge"),
        array.filter((a) => a.type === "vin rose"),
        array.filter((a) => a.type === "vin blanc"),
      ];
    default:
      return [
        array.filter((a) => a.type === "sandwich"),
        array.filter((a) => a.type === "sandwich frites"),
        array.filter((a) => a.type === "assiette"),
        array.filter((a) => a.type === "menu"),
        array.filter((a) => a.type === "portion"),
        array.filter((a) => a.type === "soda sur place"),
        array.filter((a) => a.type === "entrees"),
        array.filter((a) => a.type === "boisson chaude"),
        array.filter((a) => a.type === "petite assiette"),
        array.filter((a) => a.type === "formule"),
        array.filter((a) => a.type === "dessert"),
        array.filter((a) => a.type === "biere"),
        array.filter((a) => a.type === "aperitif"),
        array.filter((a) => a.type === "vin rouge"),
        array.filter((a) => a.type === "vin rose"),
        array.filter((a) => a.type === "vin blanc"),
      ];
  }
}
