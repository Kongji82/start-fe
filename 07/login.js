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
    const successMsg = document.createElement('div');
    successMsg.classList.add('success');
    successMsg.textContent = 'Success';
    result.innerHTML = '';
    result.appendChild(successMsg);
  } else {
    const errorMsg = document.createElement('div');
    errorMsg.classList.add('error');
    errorMsg.textContent = 'Error';
    result.innerHTML = '';
    result.appendChild(errorMsg);
  }
});
