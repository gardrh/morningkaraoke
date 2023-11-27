function toggleMenu() {
    console.log('Toggle menu function called');
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

document.querySelector('.menu-icon').addEventListener('click', function() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
});
