const swiper = new Swiper(".swiper", {
    // direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    // autoHeight: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});