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
    
      return  `You are ${wrapper}${adj} ${wrapper}!`
      
    }
  )
}
// "You are %a dedicated programmer%!"