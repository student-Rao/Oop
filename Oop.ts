import inquirer from "inquirer";

class Person {
    public _personality?:string
    
    constructor(
        _personality?: string
        
    ) {
        this._personality = _personality
        
    }
    public Person() {
        this._personality =this._personality
    }
    async asking() {
        let ques = await inquirer.prompt(
            {
                message: "Type 1 if you like to talk otherand type 2 if you would rather keep to yourself :",
                type: "number",
                name: "asks",
            }
        )
        if (ques.asks == 1) {
           console.log("you are :", this._personality= "Extravert");
           

        } else if (ques.asks == 2) {
            console.log("you are :", this._personality="Introvert");
            

        } else {
            console.log("you are :",this._personality= "You are still a mystery");
            

        }
    }
   


}

let personOne = new Person()
// //console.log(personOne);
// personOne.asking()

class Student extends Person {
    // public   personality:string;
    constructor( 
        
        personality?:string
    ){
        super(personality)
        
    }
    async  name(){
        let asks= await inquirer.prompt(
            {
                message:"What is your name :",
                type:"input",
                name:"personName"
               
            } 
         );
         
         console.log(`Your Name is :${asks.personName} and your personality is:`,personOne._personality);
    }

    
}

//newStudent.name().then(()=>personOne.asking())
// setTimeout(() => {
    //     newStudent.name()
    // },3000);
let newStudent=new Student()
personOne.asking().then(()=>newStudent.name())