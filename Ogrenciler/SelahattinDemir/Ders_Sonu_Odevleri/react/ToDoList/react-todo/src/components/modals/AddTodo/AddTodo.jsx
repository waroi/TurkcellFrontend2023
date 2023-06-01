import { useState } from "react";
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
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddTodo = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState({});
  const handleSubmit = () => {
    const newTodo = {
      text: text,
      deadline: deadline,
      completed: false,
    };
    fetch("http://localhost:3000/todos", {
      method: "POST",
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
      .catch((err) => console.log(err));
      setText("");
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Todo</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="outlined-basic"
            label="Todo"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker
                format="DD/MM/YYYY HH:mm"
                label="Deadline"
                ampm={false}
                onChange={(date) =>
                  setDeadline(Date.parse(date.format("YYYY-MM-DD HH:mm")))
                }
              />
            </DemoContainer>
          </LocalizationProvider>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
            <Button variant="contained" onClick={handleSubmit}>
              Add Todo
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default AddTodo;
