import React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Message from './Message'

const API_KEY = process.env.REACT_APP_OPEN_API_KEY;



export default function Chatbot() {
  const systemMessage = [
    {
      id: 1,
      role: "system",
      content:
      "You're like a grammar-checking wizard, helping users fix grammar bloopers and jazz up their sentence structures.",
      }
  ];

  const initialMessage = [
    {
      id: 1,
      role: "assistant",
      content:
        "Hi there! I'm your personal assistant. How can I help you today?",
    },
  ];
  
  const [input, setInput] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const [messages, setMessages] = React.useState(initialMessage);

  const chatData = async (userMessage) => {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [systemMessage, ...messages, { role: "user", content: userMessage }],
            temperature: 0.7,
          }),
        }
      );
  
      if (!response.ok) {
        throw new Error("Oops! Something went wrong while processing your request.");
      }
  
      const responseData = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: responseData.choices[0].message.content,
        },
      ]);
      setIsTyping(false);
    } catch (error) {
      console.error("Error while fetching chat data:", error);
      setIsTyping(false);
    }
  };

  const handleSubmit = () => {
    if (input.trim() !== "") {
      handleSendMessage(input);
      setInput("");
    }
  }

  const handleSendMessage = (messageContent) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: messageContent },
    ]);
    chatData(messageContent);
    setIsTyping(true);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };
  
  return (


    <Box sx={{ bgcolor:"#FFCCFF", display: "flex", flexDirection: "column", borderRadius: "10px", m:1}}>
      <Box sx={{  height: 550,overflow: "hidden", overflowY: "scroll",  p: 5 }}>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        {isTyping && <Message message={{ role: "assistant", content: "..." }} />}
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
              onClick={handleSubmit}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>

  )
}



