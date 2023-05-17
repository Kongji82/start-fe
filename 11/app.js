import { openModal } from './modal.js';

const $btn = document.querySelector('#btn');
$btn.addEventListener('click', () => {
  console.log('test');
  openModal({
    text: '모달입니다.',
  });
});
