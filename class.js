class Support {
    name;
    designation = 'developer';
    id = 201;
    address = 'Australia';
    constructor(name,address,id){
        this.name = name;
        this.address = address;
        this.id = id;
    }
    startSession(){
        console.log('start a new support session')
    }
}
const awlad = new Support('Awlad', 'New-zeland', 201);
const abir = new Support('Abir', 'Bangladesh', 200)
console.log(awlad,abir)