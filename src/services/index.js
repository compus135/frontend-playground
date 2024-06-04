export function doGetUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "John" },
        { id: 2, name: "Mary" },
        { id: 3, name: "Bob" },
      ]);
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
