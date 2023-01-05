const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = input.value;
  const item = document.createElement('li');
  item.innerHTML = `
    <input type="checkbox"><span>${task}</span>
    <button class="delete">Delete</button>
  `;
  list.appendChild(item);
  input.value = '';
});

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'INPUT') {
    const checkbox = event.target;
    const li = checkbox.parentNode;
    if (checkbox.checked) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  } else if (event.target.className === 'delete') {
    const button = event.target;
    const li = button.parentNode;
    list.removeChild(li);
  }
});