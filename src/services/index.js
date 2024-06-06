const todos = [
  { id: 1, name: "todo1" },
  { id: 2, name: "todo112" },
  { id: 3, name: "todo1113" },
];

export function doGetTodos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("http request to get todos", todos);
      resolve(todos);
    }, 2000);
  });
}

export function doGetTodosByName(name) {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        const filterTodos = todos.filter((todo) => todo.name.includes(name));
        console.log("name---", name, filterTodos);
        resolve(filterTodos);
      },
      name.length === 1 ? 4000 : 1000
    );
  });
}

export function doAddTodo(todo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("http post todo", todo);
      todos.unshift(todo);
      resolve(todo);
    }, 2000);
  });
}

export function doGetUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(todos);
    }, 2000);
  });
}

export function doGetUsersError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("xxx");
    }, 2000);
  });
}
