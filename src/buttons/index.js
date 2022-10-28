const button = document.querySelector('button')
const body = document.querySelector('body')

button.addEventListener('click', () => {
    const R = Math.random() * 255;
    const G = Math.random() * 255;
    const B = Math.random() * 255;

    body.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
})