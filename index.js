// Your code here
function saturdayFun(name = 'roller-skate'){

return `This Saturday, I want to ${name}!`

}
let mondayWork = function(act ='go to the office'){
  return `This Monday, I will ${act}.`

}

function wrapAdjective(wrapper= "*"){

  return (
    function (adj= "special"){
    
      return  `You are ${wrapper}${adj}${wrapper}!`
      
    }
  )
}
let Calculator = {

add : function(num1,num2){

  return num1 + num2
},
subtract : function(num1,num2){

  return num1 - num2
},
multiply : 
function(num1,num2){

  return num1 * num2
},
divide : 
function(num1,num2){

  return num1 / num2
},

}

function actionApplyer(integer,array){
for (let i = 0; i < array.length; i++){
   integer = array[i](integer) 

}

return integer
}