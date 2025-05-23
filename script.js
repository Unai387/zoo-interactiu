const zooGrid = document.querySelector('.zoo-grid');
const toggleButton = document.getElementById('toggle-layout');
let isGrid = true;

toggleButton.addEventListener('click', () => {
  if (isGrid) {
    zooGrid.style.display = 'flex';
    zooGrid.style.flexDirection = 'row';
    zooGrid.style.flexWrap = 'wrap';
    zooGrid.style.justifyContent = 'center';
    toggleButton.textContent = 'Canvia a Grid';
  } else {
    zooGrid.style.display = 'grid';
    zooGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    toggleButton.textContent = 'Canvia a Flex';
  }
  isGrid = !isGrid;
});

// Modal interactivity
const modal = document.getElementById('animal-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.close-button');

document.querySelectorAll('.animal').forEach(animal => {
  animal.addEventListener('click', () => {
    const title = animal.querySelector('h2').textContent;
    const description = animal.querySelector('p').textContent;
    modalTitle.textContent = title;
    modalDescription.textContent = description + ' Més informació pròximament...';
    modal.classList.remove('hidden');
  });
});

closeButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});
