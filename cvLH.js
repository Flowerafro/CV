/* // få tak i elementer fra document
const container = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const arrLeft = document.querySelector('.arrow__left');
const arrRight = document.querySelector('.arrow__right');

// sett verdi for slider container
let offset = 0;
// slide ID på økning
let slideIncrement = 0;
// slide ID på reduksjon
let slideDecrement = slides.lenght - 1;

// legg til eventlistner til høyreknapp
arrRight.addEventListener('click', () => {
    // disable høyre pil-knapp, slik at flere klikking av bruker mens animasjonen går ikke fungerer. Flere klikk vil forstyrre animasjonen. Knappen blir enabled igjen.
    arrRight.disabled = true;
    // sett offset til slide bredde
    offset = slides[0].offsetWidth;
    // sett transition animasjon på container
    container.style.transition = "left ease-in-out 500ms";
    //slide container skal bevege seg til venstre, utenfor offset-vidden (derfor negativ)
    container.style.left = -offset + 'px';
    // sett en timeout 
    setTimeout(() => {
        // fjern container transition
        container.style.transition = "none";
        // flytt den gjeldende sliden til den siste posisjonen
        slides[slideIncrement].style.order = slides.length - 1;
        //flytt container til sin egentlige posisjon, som skjer usett siden vi har fjernet animasjonen
        container.style.left = 0;
        // øke slide ID på økning
        slideIncrement++;
        // sett reduksjon ID på forrige økningd ID
        slideDecrement = slideIncrement - 1;
        // if-test: hvis slide ID økning når slides length 
        if (slideIncrement === slides.length) {
            // sett slide økning til null
            slideIncrement = 0;
            // velg alle slides
            slides.forEach(slide => {
                slide.style.order = "initial";
            });
        }
        // enable høyre pil knapp
        arrRight.disabled = false;
    }, 500);
});

// legg til klikk event på venstre-knapp
arrLeft.addEventListener('click', () => {
    // disable venstre knapp
    arrLeft.disabled = true;
    // sett offset to slide width
    offset = slides[0].offsetWidth;
    container.style.transition = "none";
    if(slideDecrement < 0) {
        slides.forEach(slide => {
            slide.style.order = "initial";
        });
        slideDecrement = slides.length - 1;
    }

    slides[slideDecrement].style.order = "-1";
    container.style.left = -offset + 'px';

    setTimeout(() => {
        container.style.transition = "left ease-in-out 500ms";
        container.style.left = 0;
    }, 1);
    setTimeout(() => {
        slideDecrement--;
        slideIncrement = slideDecrement + 1;
        arrLeft.disabled = false;
    }, 500);

});
 */
