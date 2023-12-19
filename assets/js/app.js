const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () =>{
   if(this.scrollY > 0){
      navbar.classList.remove('py-3')
      navbar.classList.add('shadow', 'py-2', 'bgColor')
   } else{
      navbar.classList.add('py-3')
      navbar.classList.remove('shadow', 'py-2', 'bgColor')
   }
});


