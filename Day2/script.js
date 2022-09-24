const progress =document.getElementById('progress');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const circles=document.querySelectorAll('.circle');
let currentActve=1;
next.addEventListener('click',() =>{
    currentActve++
 if(currentActve>circles.length) {
currentActve=circles.length
 }
 update()
})
prev.addEventListener('click',() =>{
    currentActve--
 if(currentActve<1) {
currentActve=1
 }
 update()
})
function update(){
    circles.forEach((circle,idx) => {
if(idx<currentActve){
circle.classList.add('active')}
else{
circle.classList.remove('active')
}
    })
    const actives=document.querySelectorAll('.active')
   progress.style.width=((actives.length-1)/(circles.length-1))*100 +'%'
   if(currentActve===1){
    prev.disabled=true;
   }else if(currentActve===circles.length) {
    next.disabled=true
   } else {
 prev.disabled=false
next.disabled=false
   }
}