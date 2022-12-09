let user = document.getElementById('UserName');
let date = document.getElementById('date');
let umur = document.getElementById('Umur')

function UserInput(){
    console.log(user.value);
    console.log(date.value);
    if(umur.value < 10 && umur.value > 0){
        document.getElementById('textumur').innerText = 'Hahaha Bocil'
    } else if(umur.value > 10 && umur.value < 18){
        document.getElementById('textumur').innerText = 'Kamu adalah Pemuda'
    }
    else{
        document.getElementById('textumur').innerText = 'Tua Banget'
    }
    document.getElementById('body').innerText = user.value + ' ' + 'telah log in pada' + ' ' + date.value
}