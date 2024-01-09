const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__btn--right');
const prevButton = document.querySelector('.carousel__btn--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);


const slideWidth = slides[0].getBoundingClientRect().width;

// arrange slides next to one another

/* slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth * 1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px'; */

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'transformX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide')
}

prevButton.addEventListener('click', e => {
    const currentSlide = track.document.querySelector('.currentSlide');
    const prevSlide = currentSlide.previoustElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
})

// click left, motve slides to left
// click right, move slides to right
nextButton.addEventListener('click', e => {
    const currentSlide = track.document.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;
    /* const amountToMove = nextSlide.style.left;
    // move to the next slide
    track.style.transform = 'transformX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide') */
    moveToSlide(track, currentSlide, nextSlide);
})

// click nav indicators, move to current slide
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, nextSlide);
})