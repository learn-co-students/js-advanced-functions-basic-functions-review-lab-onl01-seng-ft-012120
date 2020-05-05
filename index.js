// Your code here
function saturdayFun(str="roller-skate"){
    return `This Saturday, I want to ${str}!`
}

let mondayWork = function(par = "go to the office") {
    return `This Monday, I will ${par}.`
}

function wrapAdjective(flair = '*') {
     let innerfunction = function(arg = 'special') {
        return `You are ${flair}${arg}${flair}!`
    }
    return innerfunction;
}

let Calculator = {
  add: function(a, b) {
      return a+b
  }, 
  subtract: function(a,b) {
      return a-b
  }, 
  multiply: function(a,b) {
      return a*b 
  }, 
  divide: function(a,b) {
      return a/b
  }
}

function actionApplyer(int, arr){
    for (const fn of arr) {
        int = fn(int)
    }
    return int
}