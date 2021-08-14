const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '5%';
    openMenu.style.display='none';
    closeMenu.style.display='block';
    openMenu.style.transition='display 1s ease;';
    // closeMenu.style.display='block';
    // closeMenu.style.top='0';
    // closeMenu.style.right='0';
    // closeMenu.style.fontSize='20px';
    // console.log(mainMenu.style);
}
function close(){
    openMenu.style.display='block';
    closeMenu.style.display='none';
    openMenu.style.transition='display 1s ease;';
    mainMenu.style.top = '-110%';
}