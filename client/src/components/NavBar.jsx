import { Box, Typography } from '@mui/material'
import React from 'react'

const NavBar = () => {
  return (
    <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '10vh', backgroundColor: 'transparent', display:'flex' }}>
      <Typography variant="h4" sx={{
        fontSize: '1.8rem', fontVariant: 'petite-caps', letterSpacing: 3, margin: '20px', width: 'fit-content', textShadow: '0 0 1px #03e9f4, 0 0 1px #03e9f4, 0 0 5px #03e9f4, 0 0 5px #03e9f4', transition: 'all .5s',
        '&:hover': { textShadow: '0 0 15px #03e9f4, 0 0 35px #03e9f4, 0 0 60px #03e9f4, 0 0 110px #03e9f4', cursor: 'pointer' }
      }}>RU-Studio</Typography>

<Typography variant="h4" sx={{textAlign:'center', margin:'auto', color:'bisque', '&:hover':{color:'aqua'}}}>About</Typography>

    </Box>
  )
}

export default NavBar