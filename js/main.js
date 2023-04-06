// ===== Resize Navbar on Scroll =====
var navbar = document.querySelector(".navbar");
// when the scroll is higher than 20 viewport height, add the sticky class to the tag a class navbar
window.onscroll = () => {
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// Product Colors
var pic = document.querySelector("#main-shoe");
var cyan =document.querySelector(".jeans1");
var purple =document.querySelector(".jeans2");
var blue =document.querySelector(".jeans3");
var pink =document.querySelector(".jeans4");
var green =document.querySelector(".jeans5");
var red =document.querySelector(".jeans6");
const colors =document.querySelectorAll(".color");

// Store Product Info In Object
var info = [
	{
		src: "images/products/jeans1.png"
	},
	{
		src: "images/products/jeans2.png"
	},
	{
		src: "images/products/jeans3.png"
	},
	{
		src: "images/products/jeans4.png"
	},
	{
		src: "images/products/jeans5.png"
	},
	{
		src: "images/products/jeans6.png"
	}
]

// Change Color
cyan.addEventListener("click", function(){
	pic.src = info[0].src
})
purple.addEventListener("click", function(){
	pic.src = info[1].src
})
blue.addEventListener("click", function(){
	pic.src = info[2].src
})
pink.addEventListener("click", function(){
	pic.src = info[3].src
})
green.addEventListener("click", function(){
	pic.src = info[4].src
})
red.addEventListener("click", function(){
	pic.src = info[5].src
})
// active color
function color(){
	colors.forEach(c => c.classList.remove('active'));
	this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));

// Navbar Toggler
const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menu-btn");
if(navTogle){
	navTogle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
	})
}

// Closing Menu When Navlink is Clicked
const navLink = document.querySelectorAll(".nav-link");
function linkAction(){
	const navMenu = document.querySelector(".menu");
	navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))
