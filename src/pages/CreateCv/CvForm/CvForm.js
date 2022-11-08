import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Profile from "../Profile/Profile";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  width: "100%",
}));

const CvForm = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Navbar />
      <Stack
        sx={{ backgroundColor: "#F5ECFF", p: 2, pb: 0 }}
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          sx={{ width: "100%", height: "100vh", overflowY: "scroll" }}
          spacing={2}
        >
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Button
              sx={{
                backgroundColor: "#ffffff",
                color: "black",
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                px: 2,
              }}
            >
              content
            </Button>
            <Button
              sx={{
                backgroundColor: "#ffffff",
                color: "black",
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                px: 2,
              }}
            >
              customize
            </Button>
            <Button
              sx={{
                backgroundColor: "#ffffff",
                color: "black",
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                px: 2,
              }}
            >
              download
            </Button>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{ backgroundColor: "#ffffff", my: 2, p: 2 }}
          >
            <Typography sx={{ fontWeight: "bold" }}>CV 1</Typography>
            <Button>
              <EditIcon sx={{ color: "#6D129D" }} />
            </Button>
          </Stack>
          <Accordion
            sx={{ boxShadow: "none", border: "none" }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel1" ? <KeyboardArrowUpIcon /> : <AddIcon />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#6D129D",
                  textAlign: "start",
                  fontWeight: "bold",
                }}
              >
                Edit personal details
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <PersonalInfo />
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ boxShadow: "none", border: "none" }}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel2" ? <KeyboardArrowUpIcon /> : <AddIcon />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#6D129D",
                  textAlign: "start",
                  fontWeight: "bold",
                }}
              >
                Create profile
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Profile />
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ boxShadow: "none", border: "none" }}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel3" ? <KeyboardArrowUpIcon /> : <AddIcon />
              }
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#6D129D",
                  textAlign: "start",
                  fontWeight: "bold",
                }}
              >
                Create education
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <PersonalInfo />
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ boxShadow: "none", border: "none" }}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel4" ? <KeyboardArrowUpIcon /> : <AddIcon />
              }
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#6D129D",
                  textAlign: "start",
                  fontWeight: "bold",
                }}
              >
                Create professional experience
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <PersonalInfo />
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ boxShadow: "none", border: "none" }}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel5" ? <KeyboardArrowUpIcon /> : <AddIcon />
              }
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#6D129D",
                  textAlign: "start",
                  fontWeight: "bold",
                }}
              >
                Create skill
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <PersonalInfo />
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ boxShadow: "none", border: "none" }}
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel6" ? <KeyboardArrowUpIcon /> : <AddIcon />
              }
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#6D129D",
                  textAlign: "start",
                  fontWeight: "bold",
                }}
              >
                Create languages
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <PersonalInfo />
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ boxShadow: "none", border: "none" }}
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel7" ? <KeyboardArrowUpIcon /> : <AddIcon />
              }
              aria-controls="panel7a-content"
              id="panel7a-header"
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#6D129D",
                  textAlign: "start",
                  fontWeight: "bold",
                }}
              >
                Create hobbies
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <PersonalInfo />
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ boxShadow: "none", border: "none" }}
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel8" ? <KeyboardArrowUpIcon /> : <AddIcon />
              }
              aria-controls="panel8a-content"
              id="panel8a-header"
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#6D129D",
                  textAlign: "start",
                  fontWeight: "bold",
                }}
              >
                Create custom
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <PersonalInfo />
            </AccordionDetails>
          </Accordion>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{ backgroundColor: "#ffffff", my: 2, p: 2 }}
          >
            <Button
              sx={{
                backgroundColor: "#6D129D",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#6D129D",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              Save
            </Button>
            <Button
              sx={{
                backgroundColor: "#FD5A5A",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#FD5A5A",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
        <Item style={{ minHeight: "100vh" }}></Item>
      </Stack>
    </div>
  );
};

export default CvForm;
