var mobileMenu = document.getElementById('mobile-menu');
var menuToggle = document.getElementById('menu-toggle');

// Listen for menu toggle click
menuToggle.addEventListener('click', function(){
    // Toggle class to mobile menu
    mobileMenu.classList.toggle('mobile_active');
});


// Smooth Scroll
var scrollLink = $('.scroll');

scrollLink.click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000)
});