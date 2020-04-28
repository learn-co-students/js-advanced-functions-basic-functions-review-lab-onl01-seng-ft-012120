// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = "*") {
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!` 
    }
}

const Calculator = {
    add: function(n1, n2) {
        return n1 + n2
    },
    subtract: function(n1, n2) {
        return n1 - n2
    },
    multiply: function(n1, n2) {
        return n1 * n2
    },
    divide: function(n1, n2) {
        return n1 / n2 
    }
}

function actionApplyer(startInteger, functionArray) {
    let num = startInteger;
    functionArray.forEach(function(element) {
        num = element(num)
    })
    return num 
}