function swiper1(){

    let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;
next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active =active + 1 >= countItem ? 0 : active + 1;
    other_1 =active - 1 < 0 ? countItem -1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
}
prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
}
const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if(itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if(itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if(itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();
    }, 5000);
}
let autoPlay = setInterval(() => {
    next.click();
}, 5000);

};

swiper1();

function cursoreffect(){


var screen= document.querySelector(".carousel");

screen.addEventListener("mousemove",function(e){
    gsap.to(".cursor",{
        x:e.x,
        y:e.y
    })

});

screen.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
        opacity: 1,
        scale: 1,
        transition: 250

    })

});


screen.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
        opacity: 0,
        scale: 0,
        transition: 250


    })
});






};


cursoreffect();

function loader(){


gsap.from(".loader #text-l", {

    y: -140,
    
    opacity: 0,
    stagger: 0.1,
    duration: 1.5,
    delay: 0
    

});

var loader = document.querySelector(".loader");

setTimeout(function () {


    loader.style.display = "none";
    



}, 4000);




gsap.from(".loader #hat-l", {


    stagger: 0.2,
    y: 150,
    opacity: 0,
    delay: 1.7,
    stagger: 0.1,
    duration: 1.5,
});

}

loader();