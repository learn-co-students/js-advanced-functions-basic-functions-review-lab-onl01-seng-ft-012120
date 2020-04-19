// Your code here
const saturdayFun = (activity="roller-skate") => {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity="go to the office") => {
    return `This Monday, I will ${activity}.`;
}

const wrapAdjective = (string="*") => {
    return (str = "special") => { return `You are ${string}${str}${string}!`};
}

const Calculator = {
    add: (a,b) => {
      return a + b;
    },
    subtract: (a,b) => {
      return a - b;
    },
    multiply: (a,b) => {
        return a * b;
    },
    divide: (a,b) => {
        return a / b;
    }
}

let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }