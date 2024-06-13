const items = [];

export default async (req, res) => {
  console.log("doRequest...");
  await new Promise((r) => setTimeout(r, 1000));

  if (req.method === "POST") {
    const { text } = req.body;

    // sometimes it will fail, this will cause a regression on the UI

    if (Math.random() > 0.7) {
      return new Promise((resolve, reject) => {
        reject({ message: "Could not add item!" });
      });
    }

    const newTodo = { id: Math.random().toString(), text: text.toUpperCase() };
    items.push(newTodo);
    return newTodo;
  } else {
    return {
      ts: Date.now(),
      items,
    };
  }
};
