const open = document.getElementById("open")
const close = document.getElementById("close")
const conatiner = document.querySelector(".conatiner")

open.addEventListener('click', () => conatiner.classList.add('show-nav'))

close.addEventListener('click', () => conatiner.classList.remove('show-nav'))

