const toggleBtn = document.querySelector('.bars');
const list = document.querySelector('.mobile-list-items');
const hero = document.querySelector('.hero');
const navBar = document.querySelector('.navbar');

document.addEventListener('DOMContentLoaded', function(){
   toggleBtn.addEventListener('click', function(){
           list.classList.toggle('active');
           hero.classList.toggle('show');
   })
});

window.addEventListener('scroll', function(){
        if(window.scrollY > 0){
          navBar.classList.add('nav-scroll');
        }else{
                navBar.classList.remove('nav-scroll');
        }
   })
