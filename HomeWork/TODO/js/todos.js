const todos = {
  items: [],
  add(text) {
    const todo = {
      id: Date.now(),
      text,
    };
    this.items.push(todo);
    return todo;
  },
  delete(id) {
    this.items = this.items.filter((item) => item.id !== id);
  },
};

const editor = document.querySelector('.js-editor');
const todoList = document.querySelector('.js-todo-list');

editor.addEventListener('submit', handelEditorSubmit);
todoList.addEventListener('click', handleTodoListClick);

function handelEditorSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const inputValue = form.elements.text.value;
  if (!inputValue) {
    return;
  }
  const todo = todos.add(inputValue);
  const todoMarkup = buildTodoItem(todo);
  appendTodoItem(todoList, todoMarkup);
  form.reset();
}

function buildTodoItem(item) {
  return `<li class="todo-list__item" data-id="${item.id}">
  <div class="todo">
    <p class="todo__text">${item.text}</p>
    <div class="todo__actions">
      <button class="button" type="button">
        Delete
      </button>
    </div>
  </div>
</li>`;
}

function appendTodoItem(parentList, todoElem) {
  parentList.insertAdjacentHTML('beforeend', todoElem);
}

function handleTodoListClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const li = e.target.closest('li.todo-list__item');
  const todoId = li.dataset.id;
  todos.delete(+todoId);
  li.remove();
}
