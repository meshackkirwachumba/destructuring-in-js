const views = [
  [5, 10, 20],
  [10, 20, 30],
];

const viewsCopy = [...views];

console.log(viewsCopy);

// add 40 to thr end of second array in vies copy
viewsCopy[1].push(40);
console.log(viewsCopy[1]);

// remove last element from the first array in views copy
viewsCopy[0].pop();
console.log(viewsCopy);

// add [100, 200] to the  views copy
viewsCopy.push([100, 200]);

console.log("viewsCopy", viewsCopy);
