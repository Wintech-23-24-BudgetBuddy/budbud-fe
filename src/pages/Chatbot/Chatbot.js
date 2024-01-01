import React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Message from './Message'



const messages = [
  { id: 1, text: "Hi there!", sender: "bot" },
  { id: 2, text: "Hello!", sender: "user" },
  { id: 3, text: "How can I assist you today?", sender: "bot" },
  { id: 4, text: "I need help with my budget", sender: "user" },
  { id: 5, text: "What do you need help with?", sender: "bot" },
  { id: 6, text: "I need help with my budget", sender: "user" },
  { id: 7, text: "I need help with my budget", sender: "user" },
  { id: 8, text: "What do you need help with?", sender: "bot" },
  { id: 9, text: "I need help with my budget", sender: "user" }
];


export default function Chatbot() {
  const [input, setInput] = React.useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      console.log(input);
      setInput("");
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  return (


    <Box sx={{ bgcolor:"#FFCCFF", display: "flex", flexDirection: "column", borderRadius: "10px", m:1}}>
      <Box sx={{  height: 550,overflow: "hidden", overflowY: "scroll",  p: 5 }}>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </Box>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              fullWidth
              placeholder="Type a message"
              value={input}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              size="large"
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSend}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>

  )
}



