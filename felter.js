const numbers = [10, 12, 13, 14, 15, 20, 56, 18, 1, 7, 6, 5];
const bigNums = numbers.filter(x => x > 20);
const tiny = numbers.filter(y => y < 10);
console.log(tiny);
console.log(bigNums);


const products = [
    { id: 1, name: 'Mobile', Price: 25000 },
    { id: 1, name: 'Computer', Price: 125000 },
    { id: 1, name: 'Laptop', Price: 250000 },
    { id: 1, name: 'bike', Price: 250000 },
    { id: 1, name: 'sofa', Price: 50000 },
];
const expansiveItem = products.filter(t => t.Price > 150000);
// const division = products.filter(z => z.Price);
console.log(expansiveItem);