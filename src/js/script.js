$('.mobile-btn').on('click', function () {
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.header-menu').toggleClass('show-menu');
    $('.header-link').toggleClass('show-header-link');
    $('.header-link1').toggleClass('show-header-link');

});
$('.header_menu a').on('click', function () {
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.header-menu').removeClass('show-menu');
    $('.header-link').removeClass('show-menu');
    $('.header-link1').removeClass('show-menu');
});


$(document).ready(function () {
    $(".carousel").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });
});


let popupBg = document.querySelector('.popup-bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.header-btn',);
let closePopupButton = document.querySelector('.close-popup');


openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});




$(window).scroll(function () {
    if ($(this).scrollTop() > -1) {
        $('.header').addClass('header-fixed')
    } else {
        $('.header').removeClass('header-fixed')
    }
});
















