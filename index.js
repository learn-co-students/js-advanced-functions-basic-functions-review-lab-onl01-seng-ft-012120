// Your code here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrap = '*'){
    let innerFunction = function(adj = 'special'){
        return `You are ${wrap}${adj}${wrap}!`;
    };
    return innerFunction;
};

let Calculator = {
    add: function(a, b){
        return a + b;
    },
    subtract: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    }
};

function actionApplyer(int, array){
    for(const fn of array){
        int = fn(int);
    };
    return int;
}