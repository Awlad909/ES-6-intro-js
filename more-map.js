const friends = ['tom hanks', 'tom cruise', 'tom brady', 'tom solaiman'];
const fLengths = friends.map(friend =>friend.length);
console.log(fLengths);


const products =[
    {name:'water bottle', price: 50, color:'yellow'},
    {name:'smart phone', price: 3000, color:'red'},
    {name:'mobile phone', price: 15000, color:'black'},
    {name:'sticky note', price: 30, color:'pink'},
    {name:'water glass', price: 30, color:'white'}
];

const productName = products.map(product =>product.name);
const productPrices = products.map(product =>product.price);
// products.map(product =>console.log(product))
products.forEach(product =>console.log(product));
// console.log(productPrices);