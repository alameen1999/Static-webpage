
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


window.onscroll = () =>{
    
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

let countDate = new Date('nov 30, 2032 10:00:00').getTime();

function countDown(){
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    
    let d = Math.floor(gap/(day));
    let h = Math.floor((gap%(day))/(hour));
    let m = Math.floor((gap%(hour))/(minute));
    let s = Math.floor((gap%(minute))/(second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('min').innerText = m;
    document.getElementById('second').innerText = s;

    if (gap<0){
        clearInterval(counter);
    }
}


let counter = setInterval(countDown, 1000)






