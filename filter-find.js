const number = [5, 13, 7, 41, 29, 40, 5, 19];
const bigNumbers = number.filter(number => number > 20);
const smallNumbers = number.filter(number => number < 10);
console.log(smallNumbers);


const products =[
    {name:'water bottle', price: 50, color:'yellow'},
    {name:'smart phone', price: 3000, color:'red'},
    {name:'mobile phone', price: 15000, color:'black'},
    {name:'sticky note', price: 30, color:'pink'},
    {name:'water glass', price: 30, color:'white'}
];
const expensive = products.filter(product => product.price > 100);
console.log(expensive);
const black = products.filter(product => product.color == 'black');
console.log(black);

const whiteItem = products.find(product => product.color == 'pink');
console.log(whiteItem);
