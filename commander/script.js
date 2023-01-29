let index = 1;

const moveTo = (e, cat_slide) => {
    showSlide(index = e, cat_slide)
}

const changeSlide = (e, cat_slide) => {
    showSlide(index += e, cat_slide)
}

const showSlide = (e, cat_slide) => {

    if (cat_slide == 1) {
        imagespath = '.slider1 .slider-items-1';
        indicatorspath = '.slider1';
    }
    else if (cat_slide == 2) {
        imagespath = '.slider2 .slider-items-2';
        indicatorspath = '.slider2';
    }
    else if (cat_slide == 3) {
        imagespath = '.slider3 .slider-items-3';
        indicatorspath = '.slider3';
    }


    const images = document.querySelector(imagespath).querySelectorAll('img');
    const indicators = document.querySelector(indicatorspath).querySelectorAll('.slider-indicators span');
    // const contents = document.querySelectorAll('.slider-content h3');

    (e > images.length) ? (index = 1) : null;
    (e < 1) ? (index = images.length) : null;

    for (let image of images) {
        image.style.opacity = '0';
    }

    for (let indicator of indicators) {
        indicator.style.width = '8px';
        indicator.style.background = '#ffffffaf';
    }

    // for (let content of contents) {
    //     content.style.scale = '0';
    //     content.style.opacity = '0';
    //     content.style.transitionDelay = '.2s';
    // }
    images[index - 1].style.opacity = '1';
    indicators[index - 1].style.width = '26px';
    indicators[index - 1].style.background = '#fff';
    // contents[index - 1].style.scale = '1';
    // contents[index - 1].style.opacity = '1';
}

showSlide();