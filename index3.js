const superhero = {
  name: "Bruce Wayne",
  alias: "Batman",
  universe: "DC",
  happy: false,
  enemies: ["Joker", "Catwoman", "Bane"],
  bestMovie: { title: "The Dark Knight", rating: 95 },
};

// create a copy of superhero INCLUDING COPIES of enemies array and bestMovie object
const totalCopy = {
  ...superhero,
  enemies: [...superhero.enemies, "Poison Ivy"],
  bestMovie: { ...superhero.bestMovie, year: 2008 },
};

console.log("superhero", superhero);

console.log("totalCopy", totalCopy);
