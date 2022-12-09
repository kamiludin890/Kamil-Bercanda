let user = document.getElementById('UserName');
let date = document.getElementById('date');
let umur = document.getElementById('Umur');
let btn = document.getElementById('btn');
let btnBocil = document.getElementById('btnBocil');
let btnPemuda = document.getElementById('btnPemuda');
let btnOrtu = document.getElementById('btnOrtu');
var sugi = document.getElementById('Gambar3');
var seko = document.getElementById('Gambar2');
var bocil = document.getElementById('Gambar1');

function UserInput(){
    console.log(user.value);
    console.log(date.value);
    if(umur.value < 10 && umur.value > 0){
        document.getElementById('textumur').innerText = 'Hahaha Bocil';
        user.style.display = 'none';
        date.style.display = 'none';
        umur.style.display = 'none';
        btn.style.display = 'none';
        bocil.style.display = '';
        btnBocil.style.display = '';

    } else if(umur.value > 10 && umur.value < 18){
        document.getElementById('textumur').innerText = 'Kamu adalah Pemuda';
        user.style.display = 'none';
        date.style.display = 'none';
        umur.style.display = 'none';
        btn.style.display = 'none';
        seko.style.display = ''
        btnPemuda.style.display = ''
    }
    else{
        document.getElementById('textumur').innerText = 'Tua Banget hahaha';
        user.style.display = 'none';
        date.style.display = 'none';
        umur.style.display = 'none';
        btn.style.display = 'none';
        btnOrtu.style.display = ''
    }
    document.getElementById('body').innerText = user.value + ' ' + 'telah log in pada' + ' ' + date.value
}

function Bocil(){
    location.replace('/Bocil.html')
}
function Pemuda(){
    location.replace('/Bocil.html')
}
function Ortu(){
    location.replace('/Bocil.html')
}