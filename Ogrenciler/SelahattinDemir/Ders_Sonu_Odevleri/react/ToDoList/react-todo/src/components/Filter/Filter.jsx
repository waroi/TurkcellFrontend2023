/* eslint-disable react/prop-types */
// import {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Filter = ({filter, setFilter}) => {



  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Age"
          onChange={(e) => setFilter(e.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="uncompleted">Uncompleted</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default Filter