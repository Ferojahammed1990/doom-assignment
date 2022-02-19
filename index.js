// document.getElementById('calcluter').addEventListener('click', function(){
//    const incomeValue = document.getElementById('income')
//    const newIncomeValue = incomeValue.value ;
   
//    const balanceInput = document.getElementById('balance')
//    const newBalanceInput = balanceInput.innerText
  
//    const totalBalance = parseFloat(newBalanceInput) + parseFloat(newIncomeValue);
//    balanceInput.innerText = totalBalance ;
//  expence 
//   const expanceValue = document.getElementById('expence')
//   const newExpenceValue = expanceValue.innerText;

//    const foodExpence = document.getElementById('food-expence')
//    const newFoodExpence = foodExpence.value;

//    const rentExpence = documendt.getElementById('rent-expence')
//    const newRentExpence = rentExpence.value 

//    const totalExpence = parseFloat( newExpenceValue) + parseFloat( newFoodExpence) + parseFloat(newRentExpence)
//    foodExpence.innerText = totalExpence
//    ;
//    console.log(totalExpence)

// //    const  otherExpence = document.getElementById('other-expence')
// //    const newOtherExpence = otherExpence.value ;
// //    const totalExpence = parseFloat(newExpenceValue) + parseFloat(newFoodExpence) + parseFloat(newRentExpence) + parseFloat(newOtherExpence);
    
  
// })

document.getElementById('calcluter').addEventListener('click', function(){
    const incomeValue = document.getElementById('income')
    const newIncomeValue = incomeValue.value ; 

     const balanceInput = document.getElementById('balance')
     const newBalanceInput = balanceInput.innerText

     const totalBalance = parseFloat(newBalanceInput) + parseFloat(newIncomeValue);
        balanceInput.innerText = totalBalance ;
     // expence
       const foodExpence =  document.getElementById('food-expence')
       const newFoodExpence= foodExpence.value ;

       const rentExpence =  document.getElementById('rent-enpence')
       const newRentExpence= rentExpence.value ; 

       const otherExpence =  document.getElementById('other-enpence')
       const newOtherExpence= otherExpence.value ; 

    const expenceValue = document.getElementById('expence')
    const newExpenceValue = expenceValue.innerText;
    const totalExpence = parseFloat(newExpenceValue) + parseFloat(newFoodExpence) + parseFloat(newRentExpence) + parseFloat(newOtherExpence);
    expenceValue.innerText = totalExpence;
    incomeValue.value = ''
    foodExpence.value = ''
    otherExpence.value = ''
    otherExpence.value = ''
    rentExpence.value = ''

    const totalupdate = parseInt(balanceInput.innerText) - parseInt(expenceValue.innerText)
    balanceInput.innerText = totalupdate ;

})

// const incomeValue = document.getElementById('income')
// const newIncomeValue = incomeValue.value ; 

//  const balanceInput = document.getElementById('balance')
//  const newBalanceInput = balanceInput.innerText

//  const totalBalance = parseFloat(newBalanceInput) + parseFloat(newIncomeValue);
//     balanceInput.innerText = totalBalance ;

