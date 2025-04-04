
document.addEventListener('DOMContentLoaded', function () {
	const caseCardsContainer = document.querySelector('.cases-grid');

	// Генерация карточек
	casesData.forEach((caseItem, index) => {
		const cardHTML = `
		 <div class="case-card animate-on-scroll" data-category="${caseItem.category}"
				style="transition-delay: ${0.1 * index}s">
			<div class="case-image">
			  <img src="${caseItem.stages[0].img}?auto=format&fit=crop&w=1000&q=80" 
					 alt="${caseItem.title}">
			  <div class="case-overlay">
				 <a href="case-detail.html?id=${caseItem.id}" class="case-link">
					<svg viewBox="0 0 24 24"><path d="M15 12l-7-7v4H3v6h5v4l7-7z"/></svg>
				 </a>
			  </div>
			</div>
			<div class="case-content">
			  <span class="case-category">${caseItem.category}</span>
			  <h3>${caseItem.title}</h3>
			  <p>${caseItem.task}</p>
			  <div class="case-stats">
				 ${Object.entries(caseItem.stats).map(([key, val]) => `
					<div class="stat">
					  <span>${val}</span>
					  <small>${key}</small>
					</div>`).join('')}
			  </div>
			</div>
		 </div>`;

		caseCardsContainer.insertAdjacentHTML('beforeend', cardHTML);
	});
	// Constants
	const CASES_PER_LOAD = 3;
	let visibleCasesCount = CASES_PER_LOAD;

	// DOM elements
	const filterButtons = document.querySelectorAll('.filter-btn');
	const caseCards = document.querySelectorAll('.case-card');
	const loadMoreBtn = document.querySelector('.btn-load-more');

	// Initially hide all cases except first 3
	caseCards.forEach((card, index) => {
		if (index >= CASES_PER_LOAD) {
			card.classList.add('hidden-case');
		}
	});

	// Update load more button visibility
	function updateLoadMoreButton() {
		if (!loadMoreBtn) return;

		const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
		const filteredCards = Array.from(caseCards).filter(card => {
			return activeFilter === 'all' || card.getAttribute('data-category') === activeFilter;
		});

		const visibleCards = filteredCards.filter(card => !card.classList.contains('hidden-case'));

		if (visibleCards.length >= filteredCards.length) {
			loadMoreBtn.style.display = 'none';
		} else {
			loadMoreBtn.style.display = 'inline-block';
			loadMoreBtn.textContent = 'Показать еще';
			loadMoreBtn.disabled = false;
		}
	}

	// Filter cases
	filterButtons.forEach(button => {
		button.addEventListener('click', function () {
			// Reset visible cases count when filtering
			visibleCasesCount = CASES_PER_LOAD;

			// Update active button
			filterButtons.forEach(btn => btn.classList.remove('active'));
			this.classList.add('active');

			const filterValue = this.getAttribute('data-filter');

			// Filter and show cases
			caseCards.forEach((card, index) => {
				const matchesFilter = filterValue === 'all' || card.getAttribute('data-category') === filterValue;

				if (matchesFilter && index < visibleCasesCount) {
					card.classList.remove('hidden-case');
					card.classList.add('animate__animated', 'animate__fadeIn');
				} else {
					card.classList.add('hidden-case');
				}
			});

			updateLoadMoreButton();
		});
	});

	// Load more cases
	if (loadMoreBtn) {
		loadMoreBtn.addEventListener('click', function (e) {
			e.preventDefault();

			this.textContent = 'Загрузка...';
			this.disabled = true;

			setTimeout(() => {
				visibleCasesCount += CASES_PER_LOAD;
				const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');

				caseCards.forEach((card, index) => {
					const matchesFilter = activeFilter === 'all' || card.getAttribute('data-category') === activeFilter;

					if (matchesFilter && index < visibleCasesCount) {
						card.classList.remove('hidden-case');
						card.classList.add('animate__animated', 'animate__fadeIn');
					}
				});

				updateLoadMoreButton();

				// Scroll to newly loaded items
				const lastVisibleCard = document.querySelector('.case-card:not(.hidden-case):last-child');
				if (lastVisibleCard) {
					lastVisibleCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
				}
			}, 500);
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

	// Case card hover effect
	caseCards.forEach(card => {
		card.addEventListener('mouseenter', function () {
			this.style.transform = 'translateY(-10px)';
			this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
		});

		card.addEventListener('mouseleave', function () {
			this.style.transform = 'translateY(0)';
			this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
		});
	});

	// Initial update of load more button
	updateLoadMoreButton();
});