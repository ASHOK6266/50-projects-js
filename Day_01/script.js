const AllPanels = document.querySelectorAll(".panel");

AllPanels.forEach((panel) =>{
    panel.addEventListener('click', ()=>{
        removeActive()
        panel.classList.add('active')
    })
})

function removeActive(){
    AllPanels.forEach(panel => {
        panel.classList.remove('active')
    })
}
