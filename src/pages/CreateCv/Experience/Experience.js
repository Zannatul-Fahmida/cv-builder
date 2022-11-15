import { Box, Checkbox, FormControlLabel, FormGroup, Stack, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ExperienceEditor from "./ExperienceEditor";

const Experience = () => {
  const [startValue, setStartValue] = React.useState(null);
  const [endValue, setEndValue] = React.useState(null);
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <TextField id="title" label="Job title" variant="outlined" />
      <TextField id="employer" label="Employer" variant="outlined" />
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
      <Typography
        variant="caption"
        sx={{ textAlign: "start" }}
        display="block"
        gutterBottom
      >
        Description
      </Typography>
      <ExperienceEditor />
    </Stack>
  );
};

export default Experience;
