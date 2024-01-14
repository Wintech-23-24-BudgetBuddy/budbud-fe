import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import PropTypes from 'prop-types';

export const Message = ({ message }) => {
    const isUser = message.role === "user";
  
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: isUser ? "flex-end" : "flex-start",
          mb: 2,
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            p: 1,
            backgroundColor: isUser ? "secondary.light" : "primary.light",
          }}
        >
          <Typography variant="body1">{message.content}</Typography>
        </Paper>
      </Box>
    );
  };

  Message.propTypes = {
    message: PropTypes.object.isRequired,
};

export default Message;
