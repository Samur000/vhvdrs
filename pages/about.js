// Counter animation for stats


// Intersection Observer for counter animation
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		 if (entry.isIntersecting) {
			  observer.unobserve(entry.target);
		 }
	});
}, { threshold: 0.5 });

document.querySelectorAll('.about-company-stats').forEach(section => {
	observer.observe(section);
});

// Team member hover effect
document.querySelectorAll('.team-member').forEach(member => {
	member.addEventListener('mouseenter', function() {
		 this.querySelector('.member-social').style.transform = 'translateY(0)';
	});
	
	member.addEventListener('mouseleave', function() {
		 this.querySelector('.member-social').style.transform = 'translateY(100%)';
	});
});

// Process step animation
document.querySelectorAll('.process-step').forEach((step, index) => {
	step.style.transitionDelay = `${index * 0.1}s`;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
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

// Animated counters with circle progress
function animateCounters() {
	const statItems = document.querySelectorAll('.stat-item');
	
	statItems.forEach(item => {
		 const numberElement = item.querySelector('.stat-number');
		 const progressCircle = item.querySelector('.stat-circle-progress');
		 const target = parseInt(numberElement.getAttribute('data-count'));
		 const duration = 2000; // Animation duration in ms
		 const startTime = performance.now();
		 
		 const animate = (currentTime) => {
			  const elapsedTime = currentTime - startTime;
			  const progress = Math.min(elapsedTime / duration, 1);
			  
			  // Update number
			  const currentValue = Math.floor(progress * target);
			  numberElement.textContent = currentValue;
			  
			  // Update circle progress
			  const dashValue = progress * 100;
			  progressCircle.style.strokeDasharray = `${dashValue}, 100`;
			  
			  if (progress < 1) {
					requestAnimationFrame(animate);
			  }
		 };
		 
		 // Start animation when element is in view
		 const observer = new IntersectionObserver((entries) => {
			  entries.forEach(entry => {
					if (entry.isIntersecting) {
						 requestAnimationFrame(animate);
						 observer.unobserve(entry.target);
					}
			  });
		 }, { threshold: 0.5 });
		 
		 observer.observe(item);
	});
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', animateCounters);