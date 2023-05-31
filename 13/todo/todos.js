import todoModel from './todoModel';

const $todoForm = document.querySelector('.new-task');
const $input = document.querySelector('#input');
const $result = document.querySelector('#result');

console.log('start');

function init(data) {
  $todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    data.push({
      ...todoModel,
      text: $input.value,
    });
    $input.value = '';
    render(data);
  });
}

function render(data) {
  const html = data.map((todo, index) => {
    return `
      <li data-index="${index}">
        <button class="delete">×</button>
        <input type="checkbox" class="toggle-checked" ${
          todo.check ? 'checked' : ''
        }/>
        <span class="text">${todo.text}</span>
      </li>
    `;
  });
  $result.innerHTML = `<ul>${html.join('')}</ul>`;
}

export default {
  init,
  render,
};
