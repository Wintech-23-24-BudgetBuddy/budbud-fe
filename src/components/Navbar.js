import React from 'react'

import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import AppBar from '@mui/material/AppBar'
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';

const drawerWidth = 240;
export default function Navbar() {
  return (
    <AppBar
    position="fixed"
    sx={{ backgroundColor:"white", width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
  >
    <Toolbar sx={{justifyContent:"center"}}>
      <ChevronLeft fontSize="large" sx={{color:"#7F03A5"}}/>
      <Typography variant="h4" noWrap component="div" sx={{color:"#7F03A5"}}>
        THIS MONTH
      </Typography>
      <ChevronRight fontSize="large" sx={{color:"#7F03A5"}}/>
    </Toolbar>
  </AppBar>
  )
}
