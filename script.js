const images = document.querySelectorAll('.slider-line img');
const sliderLine = document.querySelector('.slider-line');
const currentSlide = document.querySelector('.count_now');
const totalSlide = document.querySelector('.count_total');
const btnNext = document.querySelector('.slider-next');
const btnPrev = document.querySelector('.slider-prev');
const dots = document.querySelectorAll('.slider__panel_dot');

let count = 0;
let offset = 0;
let indexSlide = 1;
let width;
function countSliders(){
    if (images.length < 5) {
        currentSlide.textContent = `0${indexSlide}`;
        totalSlide.textContent = `0${images.length}`; 
    }else{
        currentSlide.textContent = `0${indexSlide}`;
        totalSlide.textContent = `0${images.length}`;
    }
}
function activeDot(){
    dots.forEach(item=>{
        item.classList.remove('slider__panel_dot-active');
    })
    dots[indexSlide-1].classList.add('slider__panel_dot-active');
}
function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

btnNext.addEventListener('click', function () {
    count++;
    indexSlide++;
    if (count >= images.length) {
        count = 0;
        indexSlide = 1;
    }
    countSliders();
    activeDot();
    rollSlider();
});

btnPrev.addEventListener('click', function () {
    count--;
    indexSlide--;
    if (count < 0) {
        count = images.length - 1;
        indexSlide = images.length;
    }
    countSliders();
    activeDot();
    rollSlider();
});
dots.forEach((item, z) => {
    for (let i = 0; i <= z; i++) {
        item.setAttribute('data-slide-to', i + 1);
    }
});
dots.forEach(dot => {
    dot.addEventListener('click', (e)=>{
        const slideTo = e.target.getAttribute('data-slide-to');
        indexSlide = slideTo;
        count = slideTo - 1;
        console.log(slideTo);
        countSliders();
        activeDot();
        rollSlider();
    })
})


function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}



