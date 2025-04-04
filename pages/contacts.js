// Initialize the map
function initMap() {
	// Coordinates for the office (example: Moscow)
	const officeCoords = [42.982364, 47.501846];
	
	// Create the map
	const map = L.map('map').setView(officeCoords, 15);
	
	// Add OpenStreetMap tiles
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	
	// Add a marker
	const officeMarker = L.marker(officeCoords).addTo(map);
	officeMarker.bindPopup("<b>Lekks IT</b><br>г. Махачкала, ул. Комарова, 12").openPopup();
	
	// Add a circle around the marker
	L.circle(officeCoords, {
		 color: '#1e90ff',
		 fillColor: '#1e90ff',
		 fillOpacity: 0.2,
		 radius: 500
	}).addTo(map);
}

// Initialize the map when the page loads
document.addEventListener('DOMContentLoaded', function() {
	initMap();
	
	// Form submission
	const contactForm = document.querySelector('.contact-form');
	
	if (contactForm) {
		 contactForm.addEventListener('submit', function(e) {
			  e.preventDefault();
			  
			  // Get form values
			  const formData = {
					name: document.getElementById('name').value,
					email: document.getElementById('email').value,
					phone: document.getElementById('phone').value,
					subject: document.getElementById('subject').value,
					message: document.getElementById('message').value
			  };
			  
			  // Here you would typically send the data to your server
			  console.log('Form submitted:', formData);
			  
			  // Show success message
			  alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
			  
			  // Reset form
			  contactForm.reset();
		 });
	}
	
	// Animate elements on scroll
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
	animateOnScroll(); // Run once on page load
});