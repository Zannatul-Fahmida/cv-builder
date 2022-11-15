import {
  Box,
  Button,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const Skill = () => {
  function valuetext(value) {
    return `${value}`;
  }
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <TextField id="skill" label="Skill" variant="outlined" />
      <Box>
        <Typography sx={{ textAlign: "start" }}>Level</Typography>
        <Slider
          aria-label="Small steps"
          defaultValue={5}
          getAriaValueText={valuetext}
          step={1}
          min={1}
          max={10}
          valueLabelDisplay="auto"
        />
      </Box>
      <Stack direction="row" spacing={2}>
        <Button sx={{ border: "1px solid #D9D9D9" }}>
          <DeleteIcon sx={{ color: "red" }} />
        </Button>
        <Button
          sx={{
            backgroundColor: "#FF9787",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#FF9787",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Done
        </Button>
      </Stack>
      <Button
        style={{
          backgroundColor: "white",
          color: "#6D129D",
          fontWeight: "bold",
          border: "1px dashed #D9D9D9",
          height: "120px",
        }}
      >
        <AddIcon /> Add Skill
      </Button>
    </Stack>
  );
};

export default Skill;
