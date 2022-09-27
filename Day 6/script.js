const boxes=document.querySelector('.box')
window.addEventListener('scroll', checkboxes)
checkboxes()
function checkboxes(){
const triggerBottom=window.innerHeight/3*1
boxes.forEach(box => {
    const boxTop=box.getBoundingClientRect().top
if(boxTop<triggerBottom){
    box.classList.add('show')
}else{
    box.classList.remove('show')
}
})
}