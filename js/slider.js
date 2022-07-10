const slider = document.querySelector('.slider')
const sliderTrack = document.querySelector('.slider-track')
const slides = document.querySelectorAll('.slider-item')
let width;
let count = 1;

function init (){
    width = document.querySelector('.slider').offsetWidth;
    totalWidth = 500 * slides.length;
    sliderTrack.style.width = totalWidth + 'px';
    
    for(let i = 0; i < slides.length; i++) {
        let item = slides[i];
        item.style.width = 500 + "px";
    }

    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider-prev-btn').addEventListener('click',function(){
    slides[count].classList.remove('slider-active')
    count--;
    if(count < 0){
        count = slides.length - 1;
    }
    rollSlider();
    slides[count].classList.add('slider-active')
});

document.querySelector('.slider-next-btn').addEventListener('click',function(){
    slides[count].classList.remove('slider-active')
    count++;
    if(count >= slides.length){
        count = 0;
    }
    rollSlider();
    slides[count].classList.add('slider-active')
});

function rollSlider(){
    sliderTrack.style.transform = 'translate(-' + count * 500 + 'px)';
}