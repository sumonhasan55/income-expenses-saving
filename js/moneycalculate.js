
//Total Expenses calculate funtion

function getExpenseInput (expensesInput){
    
    const Input = document.getElementById(expensesInput);
    const AmountText = Input.value;
    const Amount = parseFloat(AmountText);
    Input.value = '';
    return Amount;
   

    

    
    
}

// Addeded evennt handeler for calculate button
document.getElementById('calculate-btn').addEventListener('click', function(){
    const foodAmount = getExpenseInput('food-input');
    const rentAmount = getExpenseInput('rent-input');
    const clothesAmount = getExpenseInput('clothes-input');
    
    const incomeInput = document.getElementById('income-total');
    const incomeTotalText = incomeInput.value;
    const incomeTotalAmount = parseFloat(incomeTotalText);
    
    const expensesTotal = document.getElementById('total-expenses');
    const expensesTotalText = expensesTotal.innerText;
    expensesTotal.innerText = foodAmount + rentAmount + clothesAmount;
    
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    blanceTotal.innerText = incomeTotalAmount - expensesTotal.innerText;
});

document.getElementById('save-btn').addEventListener('click', function(){
    const savepercentInput = document.getElementById('save-percent-input');
    const savepercentInputText = savepercentInput.value;
    const savepercentInputAmount = parseFloat(savepercentInputText);
    console.log(savepercentInputAmount);

    const incomeInput = document.getElementById('income-total');
    const incomeTotalText = incomeInput.value;
    const incomeTotalAmount = parseFloat(incomeTotalText);


    //saving total calculate

    const savingTotal = document.getElementById('save-total');
    const savingTotalText = savingTotal.innerText;
    
    savingTotal.innerText = incomeTotalAmount  / savepercentInputAmount ;

    //remaining blance update
    

})


