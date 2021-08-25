//chaining
const company = {
    name:"GP", 
    ceo:{id:1, name:'awlad',food:'fuchka'},
    web:{work:'website development', employee:22, framework:'react', 
    tech:{
        first:'html',
        second:'css',
        third:'js'}
    }
};
console.log(company.web.tech.third);
console.log(company?.backend?.tech.third);









//declare variable based on the name of an object property
const myObject = {x:2, y:34, z:89, a:21, b:98};
const {x,b} = myObject;
console.log(b);

//destructuring array
const [p,q] = [34, 21,34,22];
console.log(p,q);


const{sky,color,money}= {sky:'blue', soil: 'matti', color:'red', money: 500};