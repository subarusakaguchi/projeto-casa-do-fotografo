const btn = window.document.getElementById('BTN')

function menu() {
    const nav = window.document.getElementById('nav')

    nav.classList.toggle('active')
}

btn.addEventListener('click', menu)