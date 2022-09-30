import React from 'react'
import { Box, Container, Typography} from "@mui/material"
import MainBox from './component/MainBox'

const AppCss =
{      display:"flex",
       flexDirection:"column",
       justifyContent:"center",
       alignItems:"center",
       height:"90vh",
}


function App() {
  return (
    <>
     
      <Container maxWidth="xl"
       sx={AppCss}>
      <Box sx={{padding:"50px",textAlign:"center"}}>
      <Typography sx={{fontSize:"30px",letterSpacing:'10px',fontWeight:"700",color:"#426768"}}>SPLI</Typography>
      <Typography sx={{fontSize:"30px",letterSpacing:'10px',fontWeight:"700",color:"#426768"}}>TTER</Typography>
      </Box>
      <MainBox/>
      </Container>
    </>
  )
}

export default App