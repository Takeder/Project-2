new Splide('.splide').mount();

new Splide('.splide1', {
    type: 'loop',
    perPage: 4,
    breakpoints: {
        768: {
            perPage: 1,
        }
    }
}).mount();

const head = document.querySelector('.header')
const burger = document.querySelector('.menu__burger')
const menu = document.querySelector('.menu__mobile .nav__list')
// const exit = document.querySelector('.menu__mobile .nav__list.open')
// const cross = document.querySelector('.menu__mobile .nav__list.open')

// menu.onclick = function() {
//     menu.classList.toggle('close');
//     if (menu.className !== "close") {
//         list.style.display = 'flex';
//         list.style.right = '70px';
//     } else {
//         list.style.display = 'none';
//         list.style.right = '-170px';
//     }
// }

let flag = true

burger.addEventListener('click', () => {
    if(flag) {
        // menu.classList.add('open');
        menu.style.display = 'flex';
        setTimeout(() => {
            menu.style.right = '0';
            head.style.zIndex = '5000'
            document.body.style.overflow = 'hidden'
        })
        flag = false
    } else {
        // menu.classList.remove('open');
        menu.style.right = '-100%';
        setTimeout(()=> {
            menu.style.display = 'none';
            head.style.zIndex = '0'
            document.body.style.overflow = 'auto'
        },500)
        flag = true
    }
    burger.classList.toggle('close');

})




