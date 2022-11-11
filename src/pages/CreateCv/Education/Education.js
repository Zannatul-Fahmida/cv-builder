import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import EduEditor from "./EduEditor";

const Education = () => {
  const [startValue, setStartValue] = React.useState(null);
  const [endValue, setEndValue] = React.useState(null);
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <TextField id="degree" label="Degree" variant="outlined" />
      <TextField id="school" label="School/ University" variant="outlined" />
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
    </Stack>
  );
};

export default Education;
