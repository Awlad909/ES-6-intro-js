class TeamMember{
    name;
    address = 'Australia';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time){
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession(){
        console.log('start a new support session')
    }
}

class StudentCare extends TeamMember{
    designation = 'Care Web Dev';
    buildARoutine(student){
        console.log(this.name, 'Build a routine of', student);
    }
}
class NeptuneDev extends TeamMember{
    codeEditor;
    designation = 'Neptune app Dev';
    constructor(name, address, editor){
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version){
        console.log(this.name, 'release app a version', version);
    }
}
const awlad = new Support('Awlad', 'New-zeland', 11);
const abir = new Support('Abir', 'Bangladesh', 4)
// console.log(awlad,abir)
const alia = new StudentCare('Alia Bhatt', 'Mumbai');
const ali = new NeptuneDev('Ali', 'India', 'Andriod studio');
ali.releaseApp('1.4.5');
console.log(ali.name);