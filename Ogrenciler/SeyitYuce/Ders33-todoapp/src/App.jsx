import * as React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getData = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("http://localhost:3000/tasks", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleAdd = () => {
    const task = {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      image: document.getElementById("image").value,
      dueDate: document.getElementById("dueDate").value,
      priority: document.getElementById("priority").value,
      completed: false,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    };
    fetch("http://localhost:3000/tasks", requestOptions)
      .then((response) => response.json())
      .then((data) => setPosts([...posts, data]))
      .catch((error) => console.log(error));

    handleClose();
  };

  const handleComplete = (id) => {
    const post = posts.find((post) => post.id === id);
    const updatedCompleted = !post.completed;

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: updatedCompleted }),
    };
    fetch(`http://localhost:3000/tasks/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const updatedPosts = posts.map((post) => {
          if (post.id === id) {
            return { ...post, completed: updatedCompleted };
          }
          return post;
        });

        const cardContent = document.querySelectorAll(".cardContent");
        cardContent.forEach((card) => {
          const itemId = card.getAttribute("data-id");
          if (updatedCompleted === true && itemId == id) {
            card.classList.add("completed");
          }
        });
        setPosts(updatedPosts);
      })
      .catch((error) => console.log(error));
  };
  const handleDelete = (id) => {
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/tasks/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = (id) => {
    handleOpen();
    const requestOptions = {
      method: "GET",
    };
    fetch(`http://localhost:3000/tasks/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("addTaskModalBtn").remove();
        const editClientBtn = document.createElement("button");
        editClientBtn.innerHTML = "Edit";
        document
          .getElementById("modal-modal-description")
          .appendChild(editClientBtn);

        document.getElementById("title").value = data.title;
        document.getElementById("description").value = data.description;
        document.getElementById("image").value = data.image;
        document.getElementById("dueDate").value = data.dueDate;
        document.getElementById("priority").value = data.priority;

        editClientBtn.addEventListener("click", () => {
          fetch(`http://localhost:3000/tasks/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: document.getElementById("title").value,
              description: document.getElementById("description").value,
              image: document.getElementById("image").value,
              dueDate: document.getElementById("dueDate").value,
              priority: document.getElementById("priority").value,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              setPosts(posts.map((post) => (post.id === id ? data : post)));
            })
            .catch((error) => console.log(error));

          handleClose();
        });
      });
  };

  return (
    <>
      <nav className="navbar">
        <h1>Todo App</h1>
        <button className="addTaskBtn" onClick={handleOpen}>
          Add New Task
        </button>
      </nav>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "20px",
        }}
      >
        {posts.map((post) => (
          <Card
            sx={{
              display: "flex",
              marginBottom: "10px",
            }}
          >
            <CardMedia
              component="img"
              className="cardImage"
              image={post.image}
            />
            <div className="card-content">
              <CardContent
                className={`cardContent ${post.completed ? "completed" : ""}`}
                data-id={post.id}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.dueDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.priority}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  // size="small"
                  className="editCardBtn"
                  onClick={() => handleEdit(post.id)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
                <Button
                  // size="small"
                  className="deleteCardBtn"
                  onClick={() => handleDelete(post.id)}
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </Button>
                <Button
                  // size="small"
                  className="completeCardBtn"
                  onClick={() => handleComplete(post.id)}
                >
                  <FontAwesomeIcon icon={faCircleCheck} />
                </Button>
              </CardActions>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalBox">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Task
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Title" id="title" />
            <label htmlFor="description">Description</label>
            <input type="text" placeholder="Description" id="description" />
            <label htmlFor="image">Image</label>
            <input type="url" placeholder="Image" id="image" />
            <label htmlFor="dueDate">Due Date</label>
            <input type="date" placeholder="Due Date" id="dueDate" />
            <label htmlFor="priority">Priority</label>
            <select name="priority" id="priority">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <button id="addTaskModalBtn" onClick={handleAdd}>
              Add
            </button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default App;
