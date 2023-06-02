
export function getList() {
  return fetch('http://localhost:3000/todos')
    .then(data => data.json())
}

export function setItem(item) {
 return fetch('http://localhost:3000/todos', {
   method: 'POST',
   headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
   },
   body: JSON.stringify({
    "id": Date.now(),
    "todo": item,
    "checked": false
  })
 })
   .then(data => data.json())
}

export function deleteItem(id) {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => resolve("Veri silindi."))
      .catch((err) => reject(err));
  });
}
export function putItem(id, data) {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        "id": data.id,
        "todo": data.todo,
        "checked": data.checked
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}
