const todos = [
  { id: 1, name: "John" },
  { id: 2, name: "Mary" },
  { id: 3, name: "Bob" },
];

export function doGetTodos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("http request to get todos", todos);
      resolve(todos);
    }, 2000);
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
