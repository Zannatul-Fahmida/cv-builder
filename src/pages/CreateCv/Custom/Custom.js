import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Custom = () => {
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <TextField
        id="custom"
        label="Custom"
        placeholder="Custom section name"
        variant="outlined"
      />
      <Typography
        variant="caption"
        sx={{ textAlign: "start", fontWeight: "bold" }}
      >
        Type
      </Typography>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Button
          sx={{
            backgroundColor: "#FF9787",
            width: "100%",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#FF9787",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Normal
        </Button>
        <Button
          sx={{
            backgroundColor: "#FF9787",
            width: "100%",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#FF9787",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Skill
        </Button>
        <Button
          sx={{
            backgroundColor: "#FF9787",
            width: "100%",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#FF9787",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          List
        </Button>
      </Stack>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <TextField id="title" label="Title" variant="outlined" />
        <TextField id="subtitle" label="Subtitle" variant="outlined" />
        <Stack direction="row" spacing={2}>
          <TextField
            id="city"
            label="City"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack direction="row" spacing={2}>
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="caption"
                sx={{ textAlign: "start" }}
                display="block"
                gutterBottom
              >
                Start date
              </Typography>
              <DatePicker
                views={["year", "month"]}
                label="Year and Month"
                value={startValue}
                onChange={(newValue) => {
                  setStartValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    sx={{ width: "100%" }}
                    {...params}
                    helperText={null}
                  />
                )}
              />
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Only year" />
              </FormGroup>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="caption"
                sx={{ textAlign: "start" }}
                display="block"
                gutterBottom
              >
                End date
              </Typography>
              <DatePicker
                views={["year", "month"]}
                label="Year and Month"
                value={endValue}
                onChange={(newValue) => {
                  setEndValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    sx={{ width: "100%" }}
                    {...params}
                    helperText={null}
                  />
                )}
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Present(Current)"
                />
                <FormControlLabel control={<Checkbox />} label="Only year" />
              </FormGroup>
            </Box>
          </Stack>
        </LocalizationProvider>
      </Stack>
    </Stack>
  );
};

export default Custom;
