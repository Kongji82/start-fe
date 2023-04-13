// 입력한 id,pw가 맞을경우엔 success , 아니면 error출력

const $btn = document.querySelector('#btn');
const $id = document.querySelector('.id');
const $pw = document.querySelector('.pw');
const $result = document.querySelector('#result');

const id = 'hello';
const pw = 'world';

$btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (id === $id.value && pw === $pw.value) {
    $result.innerHTML = `<div class="success">Success</div>`;
  } else {
    $result.innerHTML = `<div class="error">Error</div>`;
  }
});
