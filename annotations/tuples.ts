const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ["brown", true, 40]; //-------> tuple
const sprite: Drink = ["clear", true, 40]; //-------> tuple
const tea: Drink = ["drink", false, 0]; //-------> tuple
