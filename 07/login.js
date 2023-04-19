// 입력한 id,pw가 맞을경우엔 success , 아니면 error출력

const $result = document.querySelector('#result');
const $form = document.querySelector('form');

const id = 'hello';
const pw = 'world';

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const $id = $form.elements.id.value;
  const $pw = $form.elements.pw.value;
  const msg = document.createElement('div');
  let judge = id === $id && pw === $pw ? 'success' : 'error';
  msg.classList.add(judge);
  msg.textContent = judge;
  $result.innerHTML = '';
  $result.appendChild(msg);
});
