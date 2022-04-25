//Problem 1


let sam ={
  name:'Sam',
  department:'Tech',
  designmation:'Manager',
  salary:40000,
  raise:true,
};

let mary ={
  name:'Mary',
  department:'Finance',
  designmation:'Trainee',
  salary:18500,
  raise:true,
};
let bill ={
  name:'Bill',
  department:'HR',
  designmation:'Executive',
  salary:21200,
  raise:false,

};
console.log('Problem 1', sam, mary ,bill);




//Problem 2
const company= {
  companyName:'Tech Stars',
  website:'www.techstars.site',
  employees:[sam,mary,bill],

}

console.log('Problem 2',company);



//Probelm 3
let anna ={
  name:'Anna',
  department:'Tech',
  designmation:'Executive',
  salary:25600,
  raise:false,

};

company.employees.push(anna);
console.log('Problem3', company);



//Problem 4
let sum = 0;
for (var i = 0; i<company.employees.length;i++){
  sum += company.employees[1].salary;
}


console.log('Problem4', sum);


  //Problem 5


for(var i = 0; i<company.employees.length; i++){
  if(company.employees[i].raise){
    company.employees[i].salary *= 1.1;
    company.employees[i].salary = false;
  }
}

console.log('Problem5', company);


//Problem 6

const peopleWFH = ['Anna', 'Sam'];
for(var i = 0; i<company.employees.length; i++){
  company.employees[i].wfh = peopleWFH.includes(company.employees[i].name);

}

console.log('Problem6',company);
