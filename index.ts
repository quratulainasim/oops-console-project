#! /usr/bin/env node
import inquirer from "inquirer";

class children {
    name:string;
constructor(name:string) {
    this.name=name;
}
}
class Father{
     childrens:children[]=[];
     addchildren(obj:children){
        this.childrens.push(obj);
     }  
}
const father=new Father();
   console.log (`\n Wellcome to personal talking\n`)
const programeRun=async(father:Father)=>{
do{
const ans= await inquirer.prompt([
    {
          name: "select",
          type:"list",
          message:"whom would you talk with:",
          choices:["Mother","Children","Exit"],
    }
]);
    if (ans.select==="Mother"){
        console.log("I am good how is feeling now");
    }
    if (ans.select==="Children"){
   const ans=await inquirer.prompt([
    {
        name:"child",
        type:"input",
        message:"whom would you talk with child",     
    }
   ]);
      const child=father.childrens.find(val=>val.name===ans.child) 
      if(!child){
        const name=new children(ans.child)
        father.addchildren(name);
        console.log(`I am ${name.name},and i am new one`);
        console.log(father.childrens);  
    }
      if(child){
        console.log(`I am ${child.name}, i am part of family`)
        console.log(father.childrens);
    }
    }
       else if (ans.select==="Exit"){
        console.log("Exiting the program...");
        process.exit();
       }
}while(true)
};
programeRun(father);