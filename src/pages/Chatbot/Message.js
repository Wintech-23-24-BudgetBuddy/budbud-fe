import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import PropTypes from 'prop-types';

export const Message = ({ message }) => {
    const isBot = message.sender === "bot";
  
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: isBot ? "flex-start" : "flex-end",
          mb: 2,
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            p: 1,
            backgroundColor: isBot ? "primary.light" : "secondary.light",
          }}
        >
          <Typography variant="body1">{message.text}</Typography>
        </Paper>
      </Box>
    );
  };

  Message.propTypes = {
    message: PropTypes.object.isRequired,
};

export default Message;
