import React from 'react'
import { Box, CssBaseline, CircularProgress, Typography} from '@mui/material'

//Where the user can see their budgets and create new budgets (e.g. for food, for savings, etc.)
export default function Budget() {
  const expectedSavings = 1000
  const actualSavings = 500
  const expectedSpendings = 1000
  const actualSpendings = 200
  const savingProgress = actualSavings/expectedSavings * 100
  const spendingProgress = actualSpendings/expectedSpendings * 100

  return (
    <Box sx={{ display: 'flex', pt:10, justifyContent:"center"}}>
      <CssBaseline />
      <Box
        component="main"
        sx={{display: 'flex', flexDirection:'column', flexGrow: 1, bgcolor: 'background.default', p: 3, alignItems:"center" }}
      >

        <CircularProgress size={300} variant="determinate" value={savingProgress} />
        <Typography pt={5} align="center" variant="h4" component="div" >
          Actual Savings: {actualSavings}
        </Typography>
        <Typography pt={2} align="center" variant="h4" component="div" >
          Expected Savings: {expectedSavings}
        </Typography>
        
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1,display: 'flex', flexDirection:'column',  bgcolor: 'background.default', p: 3, alignItems:"center" }}
      >
        <CircularProgress size={300} variant="determinate" value={spendingProgress} />
        <Typography pt={5} align="center" variant="h4" component="div" >
          Actual Spendings: {actualSpendings}
        </Typography>
        <Typography pt={2} align="center" variant="h4" component="div" >
          Expected Spendings: {expectedSpendings}
        </Typography>
        
      </Box>
    </Box>
  )
}
