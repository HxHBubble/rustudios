import React from 'react'
import { Box, Typography } from '@mui/material'

const Home = () => {
    return (

            <Box id='home-page' sx={{ width: '100vw', height: '100vh' }}>
                <Typography variant="h1" sx={{ paddingTop: '100px' }}>3D - Models</Typography>
                <Typography variant="subtitle1" sx={{ textAlign: 'center', width: '250px', margin: 'auto' }}>Customize 3d- Models/Objects for Gaming, Product Design, Architectural Designs</Typography>

            </Box>
    )
}

export default Home