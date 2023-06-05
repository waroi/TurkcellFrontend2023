/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
};

const EditTodo = ({
  id,
  handleClose,
  open,
  todo,
  text,
  deadline,
  setText,
  setDeadline,
  setTodos
}) => {

  const fetchData = () => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  }


  const handleSubmit = () => {
    const newTodo = {
      text: text,
      deadline: deadline,
      completed: todo.completed,
    };
    console.log(id)

    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        handleClose();
      })
      .then(fetchData)
      .catch((err) => console.log(err));
    setText("");
    
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box sx={style}>
          <TextField
            id="outlined-basic"
            label="Todo"
            variant="outlined"
            className="modalBox"
            sx={{ input: { color: "gold" }, "label": {color: "gold"} }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker
                format="DD/MM/YYYY HH:mm"
                label="Deadline"
                ampm={false}
                sx={{ input: { color: "gold" }, "label": {color: "gold"} }}
                defaultValue={deadline}
                onChange={(date) =>
                  setDeadline(Date.parse(date.format("YYYY-MM-DD HH:mm")))
                }
              />
            </DemoContainer>
          </LocalizationProvider>
          <Stack spacing={2} sx={{mt: 2}} direction="row">
            <Button className="closeBtn" variant="outlined" onClick={handleClose}>
              Close
            </Button>
            <Button className="addToDoBtn" variant="contained" onClick={handleSubmit}>
              Edit Todo
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default EditTodo;
