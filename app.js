let menu = document.querySelector('#menu');
let nav = document.querySelector('#nav');
let exit = document.querySelector('#exit');

menu.addEventListener('click', function (e) {
    nav.classList.toggle('hide-mobile')
});

exit.addEventListener('click', function (e) {
    nav.classList.toggle('hide-mobile');
});
