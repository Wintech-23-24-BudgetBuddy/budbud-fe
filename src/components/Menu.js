import React from 'react'
import Box from '@mui/material/Box'
//import Toolbar from '@mui/material/Toolbar'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SavingsIcon from '@mui/icons-material/Savings';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Typography } from '@mui/material'


const drawerWidth = 240;

const menuItems = [
  {
    text: 'Dashboard',
    icon: <DashboardIcon sx={{color:"white"}}/>,
    path: '/',
  },
  {
    text: 'Budget',
    icon: <SavingsIcon sx={{color:"white"}}/>,
    path: '/budget',
  },
  {
    text: 'Financial Advisor',
    icon: <QuestionAnswerIcon sx={{color:"white"}}/>,
    path: '/chatbot',
  },
  {
    text: 'Transactions',
    icon: <CurrencyExchangeIcon sx={{color:"white"}}/>,
    path: '/transactions',
  },
];


export default function Menu() {
  return (
    
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: "#7F03A5",
        color: "white",
      
      },
      
    }}
    variant="permanent"
    anchor="left"
  >
    
    <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: 2, paddingLeft:2, paddingBottom:1 }}>
      <AttachMoneyIcon sx={{color:"white"}}/>
      <Typography variant="h6" noWrap component="div">
        Financial Advisor
      </Typography>
    </Box>
    <List>
    
    <Divider />
      {menuItems.map((item) => (
        <Box key={item.text}>
        <ListItem key={item.text} to={item.path} component={ListItemButton} sx={{marginTop:2, marginBottom:2}}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
        <Divider />
        </Box>
      ))}
  
    </List>
  </Drawer>
  )
}
