let images=document.querySelector('.middle-4 ul');
let back=document.querySelector('#backward');
let next=document.querySelector('#forward');

images.addEventListener('wheel',(evt)=>{
    evt.preventDefault();
    images.scrollLeft += evt.deltaX;
    images.style.scrollBehavior='smooth';
   bar();
    
});
back.addEventListener('click',()=>{
images.scrollLeft -=420;
images.style.scrollBehavior='smooth';

bar();
console.log(images.scrollLeft);

});
next.addEventListener('click',()=>{
images.scrollLeft +=450;
images.style.scrollBehavior='smooth';

bar();



});
function bar(){
    if(images.scrollLeft>=850){
        next.classList.add('active-1');
        back.classList.add('active');
    
     }
   else if(images.scrollLeft<=450){
      back.classList.remove('active');
      next.classList.remove('active-1');
   }
   else if(images.scrollLeft<=1000){
      back.classList.add('active');
      next.classList.remove('active-1');
   }
   else if(images.scrollLeft<=850){
      back.classList.add('active');
      next.classList.remove('active-1');
   }
  
}

const option=document.querySelector('.option-1 ul');
const iocb=document.getElementById('ion-back');
const ionf=document.getElementById('ion-front');
 option.addEventListener('click',(evt)=>{
   evt.preventDefault();
   option.scrollLeft += evt.deltaX;
   option.style.scrollBehavior='smooth';
 })
iocb.addEventListener('click',()=>{
   option.scrollLeft -=1435;
   option.style.scrollBehavior='smooth';
})
ionf.addEventListener('click',()=>{
   option.scrollLeft +=1435;
   option.style.scrollBehavior='smooth';
})


const options=document.querySelector('.vid ul');
const ionb=document.getElementById('back');
const ionfront=document.getElementById('front');
options.addEventListener('click',(evt)=>{
   evt.preventDefault();
   option.scrollLeft += evt.deltaX;
   options.style.scrollBehavior='smooth';
 })
ionb.addEventListener('click',()=>{
   options.scrollLeft -=1435;
   options.style.scrollBehavior='smooth';
})
ionfront.addEventListener('click',()=>{
   options.scrollLeft +=1435;
   options.style.scrollBehavior='smooth';
})



const blue=document.querySelector('.blue ul');
const bback=document.getElementById('blue-back');
const bront=document.getElementById('blue-front');
blue.addEventListener('click',(evt)=>{
   evt.preventDefault();
   blue.scrollLeft += evt.deltaX;
   blue.style.scrollBehavior='smooth';
 })
bback.addEventListener('click',()=>{
   blue.scrollLeft -=1435;
   blue.style.scrollBehavior='smooth';
   bback.classList.add('active');
   bront.classList.remove('active')
})
bront.addEventListener('click',()=>{
   blue.scrollLeft +=1435;
   blue.style.scrollBehavior='smooth';
   bront.classList.add('active');
   bback.classList.remove('active');
})
