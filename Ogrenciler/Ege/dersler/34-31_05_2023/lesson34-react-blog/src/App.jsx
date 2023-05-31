// import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import FilterComponent from "./components/Filter/FilterComponent";
import { Grid } from "@mui/material";

// import FullPost from "./components/FullPost";

function App() {
  return (
    <>
      <Grid container>
        <Grid xs={8}>
          <Blogs />
        </Grid>
        <Grid xs={4}>
          <FilterComponent />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
