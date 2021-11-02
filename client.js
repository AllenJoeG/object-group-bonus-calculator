const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function jqReady(){
  console.log('JQuery sourced')
  $('#giveMePayroll').on('click', loopEmployees);
}

function loopEmployees(){
  let employeeBonuses = [];
  for (let employee of employees){
    //console.log(employee);
    //console.log(bonusCalculation(employee));
    employeeBonuses.push(bonusCalculation(employee));
  }
  console.log(`Logging bonuses array 'employeeBonuses':`, employeeBonuses);
};

function bonusCalculation(employee){
  //final goal is to generate and return this new object info
  let calculatedEmployee = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0,
  }

    //Conditional logic for old employees (per README l.60) ✅
    if (employee.employeeNumber.length === 4 ){
      calculatedEmployee.bonusPercentage += 5;
    };
        //Conditional logic to determine Base Bonus (per README l.56-59) ✅
    //evaluate their employee.reviewRating, and assign that multiplier to employee.annualSalary
    if (employee.reviewRating === 3){
      calculatedEmployee.bonusPercentage += 4;
    } else if (employee.reviewRating === 4){
      calculatedEmployee.bonusPercentage += 6;
    } else if (employee.reviewRating === 5){
      calculatedEmployee.bonusPercentage += 10;
    };

    //Check annual income (per README l.62) ✅
    if (employee.annualSalary >= 65000){
      calculatedEmployee.bonusPercentage -= 1;
    };

    //Check that bonus is >0 and <13 (per README l.63) ✅
    if (calculatedEmployee.bonusPercentage < 0){
      calculatedEmployee.bonusPercentage = 0;
    } else if (calculatedEmployee.bonusPercentage > 13){
      calculatedEmployee.bonusPercentage = 13;
    };
    //console.log(`${employee.name}'s bonus percentage: ${calculatedEmployee.bonusPercentage}`);
    
    // Calculate Total Bonus in $$ (per README l.53) ✅
    calculatedEmployee.totalBonus = employee.annualSalary * (calculatedEmployee.bonusPercentage / 100);
    //console.log(calculatedEmployee.totalBonus);

    // Calculate Total Compensation in $$ (per README l.52)
    calculatedEmployee.totalCompensation = Number(employee.annualSalary) + calculatedEmployee.totalBonus;
    //console.log(calculatedEmployee.totalCompensation);

  return calculatedEmployee;
}

///BIG OLD CODE HAPPEN TIME

$(document).ready(jqReady);

console.log(`Logging initial array 'employees':`, employees);
//loopEmployees(employees);