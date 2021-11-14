const slider = document.getElementById('slider');
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-rigth');

let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

const moveNext = () => {
  let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
  slider.style.marginLeft = '-200%';
  slider.style.transition = 'all .5s';
  setTimeout(() => {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = '-100%';
  }, 500);
}

const moveBefore = () => {
  let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = '0';
  slider.style.transition = 'all .7s';
  setTimeout(() => {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = '-100%';
  }, 700);
}

buttonRight.addEventListener('click', (e) => {
  moveNext();
});


buttonLeft.addEventListener('click', (e) => {
  moveBefore();
});

setInterval(() => {
  moveNext();
}, 6000);