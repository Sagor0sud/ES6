const bestFrined = ['Mahbub', 'Abir', 'Sadia', 'Dadi', 'Maa'];
const firstLetters = bestFrined.map(friend => friend[0]);
console.log(firstLetters);
const nameLengths = bestFrined.map(friend => friend.length);
console.log(nameLengths);


const products = [
    { id: 1, name: 'Mobile', Price: 25000 },
    { id: 1, name: 'Computer', Price: 125000 },
    { id: 1, name: 'Laptop', Price: 250000 },
    { id: 1, name: 'bike', Price: 250000 },
    { id: 1, name: 'sofa', Price: 50000 },
];
const item = products.map(product => console.log(product.name
));

