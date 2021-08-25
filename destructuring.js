const fish = {id: 54, name: 'king Hilsha', price: 9800, phone: '01234838', address: 'chandpur', dress:'silver'};
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const {phone,price,dress,id} = fish;

// console.log(phone,price);
// console.log(phone,id);
// console.log(phone,price);
console.log(phone,dress);


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
// const work = company.web.work;
// const framework = company.web.framework;
const {work,framework}=company.web;
const {food}= company.ceo;
const {second,third} = company.web.tech;
console.log(work,framework);