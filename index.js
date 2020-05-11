// Your code here

function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`;
  };
}

const Calculator = {
  add: function(num1, num2) {
    return num1+num2;
  },
  
  subtract: function(num1, num2) {
    return num1-num2;
  },
  
  multiply: function(num1, num2) {
    return num1*num2;
  },
  
  divide: function(num1, num2) {
    return num1/num2;
  }
};

function actionApplyer(startingNum, myArray) {
  let num = startingNum;
  
  for (let i = 0; i < myArray.length; i++) {
    num = myArray[i](num);
  }
  
  return num;
}