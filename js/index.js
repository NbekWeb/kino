var mainSlider = new Swiper('.main__slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1.4,
    centeredSlides: true,
    spaceBetween: 12,
});


const items = document.querySelectorAll('.wrap__janr__item');

items.forEach(item => {
    item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('active'));

        item.classList.add('active');
    });
});