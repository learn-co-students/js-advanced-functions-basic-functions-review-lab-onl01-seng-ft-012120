// Your code here
 function saturdayFun(arg = "roller-skate") {
     return `This Saturday, I want to ${arg}!`
 }

 function mondayWork(arg = "go to the office") {
     return `This Monday, I will ${arg}.`
 }

 function wrapAdjective(flair = "*") {
     return function(string = "special") {
         return `You are ${flair}${string}${flair}!` 
     }

 }

 let Calculator = { add: function() {return 1+3},
                    subtract: function() {return 1-3},
                    multiply: function() {return 1*3},
                    divide: function() {return 10/5}
}
 

function actionApplyer(num, arr) {
   if (arr.length === 0) {
       return num
   } else {
    let result = num
    arr.forEach(element => {
       
        result = element(result)
        
    });
    return result
       
   }
}