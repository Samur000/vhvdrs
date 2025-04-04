// case-detail.js
document.addEventListener('DOMContentLoaded', () => {
	const urlParams = new URLSearchParams(window.location.search);
	const caseId = parseInt(urlParams.get('id'));
	const currentCase = casesData.find(c => c.id === caseId);

	// Заполнение данных
	document.getElementById('case-title').textContent = currentCase.title;
	document.getElementById('case-main-title').textContent = currentCase.title;
	document.getElementById('case-client').textContent = currentCase.client;
	document.getElementById('case-task').textContent = currentCase.task;

	// Технологии
	const stackContainer = document.getElementById('case-stack');
	currentCase.stack.forEach(tech => {
		stackContainer.insertAdjacentHTML('beforeend',
			`<span>${tech}</span>`
		);
	});

	// Этапы
	const stagesContainer = document.getElementById('stages-container');
	// В части генерации этапов
	stagesContainer.innerHTML = currentCase.stages.map((stage, index) => `
		<div class="stage-card animate-on-scroll ${index % 2 ? 'reverse-order' : ''}" 
			  style="transition-delay: ${0.1 * index}s">
		  <div class="stage-image">
			 <img src="${stage.img}?w=800&auto=format" alt="${stage.title}">
		  </div>
		  <div class="stage-content">
			 <span class="stage-number">0${index + 1}</span>
			 <h3>${stage.title}</h3>
			 <p>${stage.desc}</p>
		  </div>
		</div>
`).join('');

	// Анимации
	const animateOnScroll = () => {
		document.querySelectorAll('.animate-on-scroll').forEach(el => {
			const rect = el.getBoundingClientRect();
			if (rect.top < window.innerHeight * 0.8) {
				el.classList.add('animated');
			}
		});
	};

	window.addEventListener('scroll', animateOnScroll);
	animateOnScroll();
});

// Обработка формы
document.getElementById('caseContactForm').addEventListener('submit', function (e) {
	e.preventDefault();

	const form = this;
	const successBlock = document.querySelector('.form-success');

	// Эмуляция отправки
	setTimeout(() => {
		form.reset();
		successBlock.classList.add('active');

		setTimeout(() => {
			successBlock.classList.remove('active');
		}, 3000);
	}, 1000);
});

// Анимация полей при скролле
document.querySelectorAll('.input-wrapper').forEach(wrapper => {
	const input = wrapper.querySelector('input, textarea');

	input.addEventListener('focus', () => {
		wrapper.classList.add('focused');
	});

	input.addEventListener('blur', () => {
		if (!input.value) wrapper.classList.remove('focused');
	});
});