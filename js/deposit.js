document.getElementById('btn-deposit').addEventListener('click', function(){
    const defaltDeposit = document.getElementById('depositeFild');
    const ammountTotalString = defaltDeposit.value ;
    const ammountTotal =parseFloat(ammountTotalString);

    // console.log(ammountTotal);
    // strp-2
    const depositTotalElement =document.getElementById('depositUpdate');
    const courrantDepositString = depositTotalElement.innerText ;
    const courrantDeposit = parseFloat(courrantDepositString);
    // step-3
    const finalDepositTotal = courrantDeposit + ammountTotal ;
      depositTotalElement.innerText = finalDepositTotal ;
    // step-4
    const balanceTotalElement = document.getElementById('balanceTotal');
    const agerBalanceString = balanceTotalElement.innerText ;
    const agerBalanceTotal = parseFloat(agerBalanceString);
    const currentBalanceTotal = agerBalanceTotal + ammountTotal ;
    balanceTotalElement.innerText = currentBalanceTotal ;














      defaltDeposit.value ='';
})