// Header scroll effect
window.addEventListener('scroll', function () {
	const header = document.getElementById('header');
	if (window.scrollY > 50) {
		 header.classList.add('scrolled');
	} else {
		 header.classList.remove('scrolled');
	}
});

// Animation on scroll
function animateOnScroll() {
	const elements = document.querySelectorAll('.animate-on-scroll');

	elements.forEach(element => {
		 const elementPosition = element.getBoundingClientRect().top;
		 const screenPosition = window.innerHeight / 1.2;

		 if (elementPosition < screenPosition) {
			  element.classList.add('animated');
		 }
	});
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		 e.preventDefault();

		 const targetId = this.getAttribute('href');
		 if (targetId === '#') return;

		 const targetElement = document.querySelector(targetId);
		 if (targetElement) {
			  window.scrollTo({
					top: targetElement.offsetTop - 80,
					behavior: 'smooth'
			  });
		 }
	});
});

// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav ul');
const menuOverlay = document.querySelector('.menu-overlay');
const html = document.documentElement;
let scrollPosition = 0;

function toggleMenu() {
	if (html.classList.contains('menu-open')) {
		 closeMenu();
	} else {
		 openMenu();
	}
}

function openMenu() {
	scrollPosition = window.pageYOffset;
	html.classList.add('menu-open');
	html.style.top = `-${scrollPosition}px`;
	mobileMenuBtn.classList.add('active');
	nav.classList.add('active');
	menuOverlay.classList.add('active');
}

function closeMenu() {
	html.classList.remove('menu-open');
	window.scrollTo(0, scrollPosition);
	html.style.top = '';
	mobileMenuBtn.classList.remove('active');
	nav.classList.remove('active');
	menuOverlay.classList.remove('active');
}

document.querySelectorAll('nav ul li').forEach((li, index) => {
	li.style.setProperty('--i', index);
});

mobileMenuBtn.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', closeMenu);

document.querySelectorAll('nav ul li a').forEach(link => {
	link.addEventListener('click', function (e) {
		 closeMenu();
		 if (this.getAttribute('href').startsWith('#')) {
			  e.preventDefault();
			  const targetId = this.getAttribute('href');
			  if (targetId !== '#') {
					setTimeout(() => {
						 const targetElement = document.querySelector(targetId);
						 if (targetElement) {
							  window.scrollTo({
									top: targetElement.offsetTop - 80,
									behavior: 'smooth'
							  });
						 }
					}, 300);
			  }
		 }
	});
});

window.addEventListener('resize', function () {
	if (window.innerWidth > 768) {
		 closeMenu();
	}
});

 // Advanced typewriter effect
document.addEventListener('DOMContentLoaded', function() {
	const texts = ["Инновационные", "Эффективные", "Современные"];
	const typewriterElement = document.querySelector('.typewriter-text');
	let textIndex = 0;
	let charIndex = 0;
	let isDeleting = false;
	let isEnd = false;
	
	function typeWriter() {
	  const currentText = texts[textIndex];
	  
	  if (isDeleting) {
		 // Удаление текста
		 typewriterElement.textContent = currentText.substring(0, charIndex - 1);
		 charIndex--;
	  } else {
		 // Печать текста
		 typewriterElement.textContent = currentText.substring(0, charIndex + 1);
		 charIndex++;
	  }
	  
	  // Определяем скорость анимации
	  let typeSpeed = 150;
	  
	  if (isDeleting) {
		 typeSpeed /= 2; // Удаление быстрее
	  }
	  
	  // Если текст напечатан полностью
	  if (!isDeleting && charIndex === currentText.length) {
		 isEnd = true;
		 typeSpeed = 2000; // Пауза перед удалением
		 isDeleting = true;
	  } else if (isDeleting && charIndex === 0) {
		 isDeleting = false;
		 isEnd = false;
		 // Переход к следующему тексту
		 textIndex = (textIndex + 1) % texts.length;
	  }
	  
	  setTimeout(typeWriter, typeSpeed);
	}
	
	// Запускаем анимацию после небольшой задержки
	setTimeout(typeWriter, 500);
 });
 // FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
	button.addEventListener('click', () => {
		 const faqItem = button.parentElement;
		 const isActive = faqItem.classList.contains('active');
		 const faqAnswer = faqItem.querySelector('.faq-answer');
		 
		 // Закрываем все другие открытые элементы
		 document.querySelectorAll('.faq-item').forEach(item => {
			  if (item !== faqItem && item.classList.contains('active')) {
					const otherAnswer = item.querySelector('.faq-answer');
					item.classList.remove('active');
					item.querySelector('.faq-question').classList.remove('active');
					otherAnswer.style.maxHeight = '0';
					otherAnswer.style.paddingBottom = '0';
			  }
		 });
		 
		 // Переключаем текущий элемент
		 if (isActive) {
			  // Закрываем текущий элемент
			  faqItem.classList.remove('active');
			  button.classList.remove('active');
			  faqAnswer.style.maxHeight = '0';
			  faqAnswer.style.paddingBottom = '0';
		 } else {
			  // Открываем текущий элемент
			  faqItem.classList.add('active');
			  button.classList.add('active');
			  faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
			  faqAnswer.style.paddingBottom = '20px';
		 }
	});
});

// Обновление высоты при изменении размера окна
window.addEventListener('resize', () => {
	document.querySelectorAll('.faq-item.active').forEach(item => {
		 const answer = item.querySelector('.faq-answer');
		 answer.style.maxHeight = answer.scrollHeight + 'px';
	});
});