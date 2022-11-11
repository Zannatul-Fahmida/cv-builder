import { Typography } from "@mui/material";
import React from "react";
import ProfileEditor from "./ProfileEditor";

const Profile = () => {
  return (
    <div>
      <Typography
        variant="caption"
        sx={{ textAlign: "start" }}
        display="block"
        gutterBottom
      >
        text
      </Typography>
      <ProfileEditor />
    </div>
  );
};

export default Profile;
