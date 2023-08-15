// step-1 
document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('btn-submit');
    // step-2
    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;

    // console.log(email);
    // step-3
    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;
    console.log(email, password);
    if (email === 's@gmail.com' && password === 'zxcvbnm') {
        // console.log('valid user');
        window.location.href = 'bank.html';
    }
    else {
        console.log('inviled user');
        alert('TUI KALI AY BASAY AY TOR AJKE KOBOR ASE !!!!!!!!!!!!!!')
    }
})