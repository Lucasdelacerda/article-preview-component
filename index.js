
const iconContainer = document.querySelector(".share-icon-container")
const iconShare = document.querySelector(".share-icon path")
const shareContainer = document.querySelector(".share-container")

iconContainer.addEventListener('mouseenter', () => {
	iconShare.setAttribute('fill', 'white')
	iconContainer.style.background = 'hsl(214, 17%, 51%)'
	shareContainer.style.display = 'flex'
});

shareContainer.addEventListener('mouseenter', () => {
	iconShare.setAttribute('fill', 'white')
	iconContainer.style.background = 'hsl(214, 17%, 51%)'
	shareContainer.style.display = 'flex'
});

shareContainer.addEventListener('mouseleave', () => {
	iconShare.setAttribute('fill', '#6E8098')
	iconContainer.style.background = '#EDF1FA'
	shareContainer.style.display = 'none'
});
 
 iconContainer.addEventListener('mouseleave', () => {
	iconShare.setAttribute('fill', '#6E8098')
	iconContainer.style.background = '#EDF1FA'
	shareContainer.style.display = 'none'
});
