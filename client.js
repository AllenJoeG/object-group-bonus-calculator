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

function loopEmployees(array){
  for (let employee of array){
    console.log(employee);
    console.log(finalCalculation(employee));

  }
};


function finalCalculation(employee){
  //final goal is to generate and return this new object info
  let calculatedEmployee = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0,
  }

    //Conditional logic for old employees (per README l.60) ✅
    if (employee.employeeNumber.length = 4 ){
      employee.bonusPercentage += 5
    }
    
        //Conditional logic to determine Base Bonus (per README l.56-59)
    //evaluate their employee.reviewRating, and assign that multiplier to employee.annualSalary
    if (employee.reviewRating = 3){
      employee.bonusPercentage += 4
    } else if (employee.reviewRating = 4){
      employee.bonusPercentage += 6

    } else if (employee.reviewRating = 5){
      employee.bonusPercentage += 10
    }

    //Check annual income (per README l.62)
    

    //Check that bonus is >0 and <13 (per README l.63)
  
  
// calculatedEmployee.totalCompensation = employee.annualSalary + calculatedEmployee.totalBonus


  //RETURN a new object with .name, .bonusPercentage, .totalCompensation, .totalBonus
  return calculatedEmployee
}


console.log( employees );
loopEmployees(employees);