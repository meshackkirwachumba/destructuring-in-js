const animal = {
  name: "Koala",
  kingdom: "Australia",
  cute: true,
  friends: [
    {
      name: "Kangaroo",
      kingdom: "Australia",
    },
  ],
};

const koala = { ...animal, tail: false };
// console.log(koala);
// console.log("anumal", animal);

animal.cute = false;
// console.log(animal);

//add cute property to animal friends array
animal.friends[0].cute = false;

// arrays and objects are shallow copied by default ie copied by reference
console.log("animal", animal); // friends: [ { name: 'Kangaroo', kingdom: 'Australia', cute: false } ],
console.log("koala", koala); // friends: [ { name: 'Kangaroo', kingdom: 'Australia', cute: false } ],
