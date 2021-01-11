
// Calling the function after click event occurs
window.onload = function(){

    const burger = document.querySelector('.hamburger i');
    const nav = document.querySelector('.nav');

    // Defining a function
    function toggleNav() {
        burger.classList.toggle('fa-bars');
        burger.classList.toggle('fa-times');
        nav.classList.toggle('nav-active');
    }
    burger.addEventListener('click', function() {
    toggleNav();
});
}