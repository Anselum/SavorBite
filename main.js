let hamburger = document.getElementById('hamburger');
let close = document.getElementById('close');
let nav = document.getElementById('nav');

hamburger.onclick = () => {
    nav.style.display = 'flex';
    console.log("flex")
    setTimeout(() => {
        nav.style.right = '0';
    }, 100);

}
close.onclick = () => {
    nav.style.right = '-100%';
    setTimeout(() => {
        nav.style.display = 'none';
        console.log("none")
    }, 300);
}