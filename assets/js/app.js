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

// The typewriter element
var typeWriterElement = document.getElementById('typewriter');

// The TextArray: 
var textArray = ["Tasty","Salad","Restaurant"];


// function to generate the backspace effect 
function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
		// generate a random Number to emulate backspace hitting.
 		var rndBack = 10 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack); 
	} else if (typeof cb == 'function') {
		setTimeout(cb,1000);
	}
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
		// generate a random Number to emulate Typing on the Keyboard.
		var rndTyping = 250 - Math.random() * 100;
		setTimeout( function () { 
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			delWriter(text, i, cb)
		},1000);
	}
};

// the main writer function
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},1000);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
		});
	}  
};
// wait one second then start the typewriter
setTimeout( function () {
	StartWriter(0);
},1000);
	
// // Reveal on Scroll

//  ScrollReveal({
// 	reset: true,
// 	distance: '60px',
// 	duration: 2500,
// 	delay: 400
//  });
//  ScrollReveal().reveal('.rightReveal', {delay:400, origin:'right'});
//  ScrollReveal().reveal('.leftReveal', {delay:300, origin:'left'});
//  ScrollReveal().reveal('.bottomReveal', {delay:400, origin:'bottom'});
//  ScrollReveal().reveal('.topReveal', {delay:300, origin:'top'});
//  ScrollReveal().reveal('.liReveal img', {delay:400, origin:'top', interval:200});


 // Dark & light mode toggle
const toggleButton = document.getElementById('themeToggle');
toggleButton.addEventListener('click', handleToggleTheme);

function handleToggleTheme() {
alert('Dark Mode is not avaliable at the moment, Please Contact Admin')

}
