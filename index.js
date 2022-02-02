const data = require('./data.json');

const task11Result = (animals) => {
  const temp = animals.reduce((acc, el) => {
    el.type === 'cat' ? acc.cats += 1 : acc.dogs += 1;
    acc.age += el.age;
    return acc;
  }, { cats: 0, dogs: 0, age: 0 });
  return { ...temp, age: Math.floor(temp.age / data.length) };
};

console.log(task11Result(data));

const task12Result = (animals) => animals.reduce((acc, el) => {
  if (el.breed && el.type === 'dog' && el.features.includes('black')) { acc += 1; }
  return acc;
}, 0);

console.log(task12Result(data));

const task13Result = (animals) => animals.filter((el) => {
  if (
    (el.type === 'dog' && el.features.includes('black'))
      || (el.type === 'cat' && el.features.includes('white'))) return el;
  return null;
});

console.log(task13Result(data));

const task14Result = (animals) => {
  const dogs = animals.filter((el) => el.type === 'dog').sort((a, b) => a.age - b.age);
  const cats = animals.filter((el) => el.type === 'cat').sort((a, b) => b.age - a.age);
  return [...cats, ...dogs];
};

console.log(task14Result(data));

const myPowFunc = (number, n) => {
  let result = number;
  for (let i = 0; i < n - 1; i += 1) {
    const temp = result * number;
    result = temp;
  }
  return result;
};

console.log(myPowFunc(3, 4));

const myFlatFunc = (inputArray) => JSON.stringify(inputArray)
  .replace(/\[|\]|"/g, '')
  .split(',')
  .map((element) => {
    if (isNaN(Number(element))) return element;
    return Number(element);
  });

console.log(myFlatFunc([1, 3, 5, [1, [4, 5], 'asdf', [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
