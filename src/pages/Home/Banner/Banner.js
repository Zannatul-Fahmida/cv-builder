import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import bannerImg from "../../../images/banner.png";

const Banner = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ pt: 4, px: 4, alignItems: "center", backgroundColor: "#F5ECFF" }}
    >
      <Stack
        sx={{
          textAlign: "start",
        }}
      >
        <Typography variant="h2">Want to make a resume or cv??</Typography>
        <Typography sx={{ mt: 4, mb: 3 }}>
          This is the perfect platform for you. Aneone can make their cv or
          resume in a second. Want to try it !!!
        </Typography>
        <Button
          sx={{
            borderRadius: "50px",
            py: 2,
            backgroundColor: "#FF9787",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#FF9787",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Try it now
        </Button>
      </Stack>
      <Box sx={{ width: "100%" }}>
        <img style={{ width: "100%" }} src={bannerImg} alt="Banner Image" />
      </Box>
    </Stack>
  );
};

export default Banner;
