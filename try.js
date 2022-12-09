let user = document.getElementById('UserName');
let date = document.getElementById('date');
let umur = document.getElementById('Umur');
let btn = document.getElementById('btn');
var sugi = document.getElementById('Gambar3')
var seko = document.getElementById('Gambar2')
var bocil = document.getElementById('Gambar1')

bocil.style.display = 'none'
sugi.style.display = 'none'
seko.style.display = 'none'

function UserInput(){
    console.log(user.value);
    console.log(date.value);
    if(umur.value < 10 && umur.value > 0){
        document.getElementById('textumur').innerText = 'Hahaha Bocil';
        user.style.display = 'none';
        date.style.display = 'none';
        umur.style.display = 'none';
        btn.style.display = 'none';
        bocil.style.display = ''

    } else if(umur.value > 10 && umur.value < 18){
        document.getElementById('textumur').innerText = 'Kamu adalah Pemuda';
        user.style.display = 'none';
        date.style.display = 'none';
        umur.style.display = 'none';
        btn.style.display = 'none';
        seko.style.display = ''
    }
    else{
        document.getElementById('textumur').innerText = 'Tua Banget';
        user.style.display = 'none';
        date.style.display = 'none';
        umur.style.display = 'none';
        btn.style.display = 'none';
        sugi.style.display = ''
    }
    document.getElementById('body').innerText = user.value + ' ' + 'telah log in pada' + ' ' + date.value
}