// siep-1
document.getElementById('btn-withdrow').addEventListener('click', function(){
    // step-2
    const withdrowfiled =document.getElementById('withdrowFild');
    const newwithdrowfiledString = withdrowfiled.value ;
    const newwithdrowfiled =parseFloat(newwithdrowfiledString);
    // console.log(newwithdrowfiled);
    // clear filed 
    // step-7
    withdrowfiled.value = '';
    if(isNaN(newwithdrowfiled)){
        alert('PLEASE PROVIDE NUMBER !!!!')
        return;
    }
    // step-3
    const withdrowTOtalElement = document.getElementById('withdrowUpdate')
    const newwithdrowTotalString = withdrowTOtalElement.innerText ;
    const newwithdrowTotal = parseFloat(newwithdrowTotalString) ;
    // console.log(newwithdrowTotal);
    // step-5
    const balanceTotalElement =document.getElementById('balanceTotal')
    const previousbalanceTotalElementString = balanceTotalElement.innerText ;
    const previousbalanceTotal = parseFloat(previousbalanceTotalElementString);
 

    if(newwithdrowfiled >  previousbalanceTotal ){
        alert('OTO TAKA TOR BAPER BANK A NAI !!!!')
        return ;
    }
// step-4
    const currentWithdrowTotal = newwithdrowTotal + newwithdrowfiled ;
    withdrowTOtalElement.innerText =currentWithdrowTotal ;
// step-6
    const newBlanceTotal = previousbalanceTotal - newwithdrowfiled ;
    balanceTotalElement.innerText = newBlanceTotal ;


   
})