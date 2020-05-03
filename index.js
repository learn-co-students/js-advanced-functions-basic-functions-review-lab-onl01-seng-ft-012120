// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
//function exists
//  2) uses the default activity 'roller-skate' when no arguments are passed
//  3) permits the default activity to be overriden

//defines mondayWork function expression as specified
//  1) function exists
//  2) uses the default activity 'go to the office' when no arguments are passed
//3) permits the default activity to be overriden
function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

//defines wrapAdjective function according to the specification
// 1) function exists
// 2) when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
// 3) when initialized with '||' creates a function that, when called, wraps an adjective in a highlight
function wrapAdjective(style="*"){
    return function(name="special"){
        return `You are ${style}${name}${style}!`
    }

}


//defines an object called Calculator

const Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },

    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
}
function actionApplyer(integer, array){
    let a = integer

    for (let i = 0; i < array.length; i++) {
        a = array[i](a)

    }
    return a
}