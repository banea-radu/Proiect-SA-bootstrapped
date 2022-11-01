// Selectare toate slide-urile
const slides = document.querySelectorAll(".slide");

// Pentru fiecare slide, seteaza translateX = indexul slide-ului * 100% 
slides.forEach((slide, indx) => {
	slide.style.transform = `translateX(${indx * 100}%)`;
});

// Contorizarea slide-ului curent
let curSlide = 0;

// Numarul maxim de slide-uri
let maxSlide = slides.length - 1;

// Apasarea butonului next
const nextSlide = document.querySelector(".carousel-control-next");
nextSlide.addEventListener("click", function () {
	if (curSlide === maxSlide) {
		curSlide = 0;
	} else {
		curSlide++;
	}
	// Muta toate slide-urile cu -100%
	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
	});
});

// Apasarea butonului prev
const prevSlide = document.querySelector(".carousel-control-prev");
prevSlide.addEventListener("click", function () {
	if (curSlide === 0) {
		curSlide = maxSlide;
	} else {
		curSlide--;
	}
	// Muta toate slide-urile cu +100%
	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
	});
});