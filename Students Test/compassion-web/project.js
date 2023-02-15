const humburger = document.querySelector('.humburger');
const navlink = document.querySelector('.nav_link');

humburger. addEventListener('click', () => { 
    navlink.classlist.toggle ('hide');
});

