const products = [
    { id: 1, name: 'Mobile', Price: 25000 },
    { id: 1, name: 'Computer', Price: 125000 },
    { id: 1, name: 'Laptop', Price: 250000 },
    { id: 1, name: 'bike', Price: 250000 },
    { id: 1, name: 'sofa', Price: 50000 },
];
const numbers = [10, 12, 25, 30, 45, 49, 80, 150, 3, 5];
const fives = numbers.find(x => x % 5 === 0);
console.log(fives);
