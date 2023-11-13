//variables defining
let navbar = document.querySelectorAll('#navbar ul li a');

for (let i = 0; i < navbar.length; i++) {
    navbar[i].addEventListener('click', function () {
        for (let j = 0; j < navbar.length; j++) {
            navbar[j].style.color = '';
        }
        navbar[i].style.color = '#2D9CDB';
    });
}


