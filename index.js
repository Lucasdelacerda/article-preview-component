
const iconContainer = document.querySelector(".share-icon-container")
const iconShare = document.querySelector(".share-icon path")

iconContainer.addEventListener('mouseenter', () => {
	iconShare.setAttribute('fill', 'white')
	iconContainer.style.background = 'hsl(217, 19%, 35%)'
});


