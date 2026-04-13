// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');

    mobileMenuBtn.addEventListener('click', function () {
        mainNav.classList.toggle('active');

        // Animate hamburger icon
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (mainNav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            mainNav.classList.remove('active');
            mobileMenuBtn.querySelectorAll('span')[0].style.transform = 'none';
            mobileMenuBtn.querySelectorAll('span')[1].style.opacity = '1';
            mobileMenuBtn.querySelectorAll('span')[2].style.transform = 'none';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});


// -------------Modo claro oscuro
// const html = document.documentElement;
// const toggleBtn = document.querySelector('#themeBtn');
// let logoDT = document.querySelector('.logo__img-dt');

// const setTheme = theme => {
//     html.setAttribute('data-theme',theme);
//     localStorage.setItem('theme',theme);
// }

// const savedTheme = localStorage.getItem('theme');

// if (savedTheme){
//     setTheme(savedTheme);
// }
// else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
//     setTheme('dark');
// }
// else{
//     setTheme('ligth');
// }

// toggleBtn.addEventListener('click', () =>{
//     const current = html.getAttribute('data-theme');
//     if(current==='dark'){
//         newTheme = 'light';
//         logoDT.src = 'img/orinoco tech.png';
//     }
//     else{
//         newTheme = 'dark';
//         logoDT.src = 'img/orinoco-tech__logoBlanco.png';
//     }

//     setTheme(newTheme)
// })


// -------------Modo claro oscuro
const html = document.documentElement;
const toggleBtn = document.querySelector('#themeBtn');
let logoDT = document.querySelector('.logo__img-dt');

const setTheme = (theme,img) => {
    html.setAttribute('data-theme',theme);
    logoDT.src = img;
    localStorage.setItem('theme',theme);
    localStorage.setItem('img',img);
}

const savedTheme = localStorage.getItem('theme');
const savedImg = localStorage.getItem('img');

if (savedTheme){
    setTheme(savedTheme,savedImg);
}
else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    setTheme('dark','img/orinoco-tech__logoBlanco.png');
}
else{
    setTheme('ligth','img/orinoco tech.png');
}

toggleBtn.addEventListener('click', () =>{
    const current = html.getAttribute('data-theme');
    if(current==='dark'){
        newTheme = 'light';
        newImg = 'img/orinoco tech.png';
    }
    else{
        newTheme = 'dark';
        newImg = 'img/orinoco-tech__logoBlanco.png';
    }

    setTheme(newTheme,newImg)
})


// lottie file

const player = document.querySelector('lottie-player');

player.addEventListener('ready', () => {
    // Supongamos que quieres que solo juegue del frame 0 al 120
    player.getLottie().playSegments([0, 60], true);
    });