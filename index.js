// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(s = "*"){
    return function (p = "special") {
        return `You are ${s}${p}${s}!`
    }
}
wrapAdjective("%")();

let Calculator = {
    add: (x, y) => {
        return x + y;
    },
    subtract: (x, y) => {
        return x - y;
    },
    multiply: (x,y) => {
        return x*y;
    },
    divide: (x, y) => {
        return x/y;
    }
};

function actionApplyer(int, arr) {
    let a = int

    for (let i = 0; i < arr.length; i++ ){
      a = arr[i](a)
    }
  
    return a
};