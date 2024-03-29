const openModal = ({ text }) => {
  const $modal = document.createElement('div');
  $modal.className = 'modal';

  $modal.innerHTML = `
    <div class="body">
    <div class="close" id = "cl">X</div>
    <div class="content">${text}</div>
    </div>
  `;

  $modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const removeModal = () => {
    $modal.remove();
  };

  $modal.querySelector('.close').addEventListener('click', removeModal);
  $modal.querySelector('.body').addEventListener('click', (event) => {
    removeModal();
  });

  document.body.appendChild($modal);
};

export { openModal };
