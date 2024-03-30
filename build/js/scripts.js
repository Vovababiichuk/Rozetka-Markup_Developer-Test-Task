// Custom Scripts
function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')
	burger.addEventListener('click', () => {
		if (!menu.classList.contains('active')) {
			menu.classList.add('active')
			burger.classList.add('active')
			body.classList.add('locked')
		} else {
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
		}
	})
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
		}
	})
}
burgerMenu()


const navbar = document.querySelector('.navbar');

window.onscroll = () => {
	if (window.scrollY > 200) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
};

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 50,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		200: {
			slidesPerView: 1,
			spaceBetween: 15,
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 15,
		},
		375: {
			slidesPerView: 1,
			spaceBetween: 15,
		},
		590: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		868: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1440: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		1920: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
	},
});

const footerFormBtn =document.getElementById('form-btn');

footerFormBtn.addEventListener('click', () => {
	alert('Сайт знаходиться в розробці')
})

