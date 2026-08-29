const menu=document.querySelector('.hamb');const mobile=document.querySelector('.mobile-menu');if(menu&&mobile){menu.addEventListener('click',()=>mobile.classList.toggle('open'));document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')))}
const year=document.querySelectorAll('[data-year]');year.forEach(e=>e.textContent=new Date().getFullYear());

// Process cards use a simple staggered entrance animation; no distracting motion.
