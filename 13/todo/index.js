import todos from './todos';

const $result = document.querySelector('#result');
let data = [];

$result.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    const { index } = e.target.parentElement.dataset;
    data.splice(index, 1);
    todos.render(data);
  } else if (e.target.className === 'toggle-checked') {
    const { index } = e.target.parentElement.dataset;
    data[index].check = !data[index].check;
    todos.render(data);
  }
});

todos.init(data);
