import { Box } from '@mui/material'
import "./icon.css"
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const IconList = () => {
  return (
    <Box className="iconList">
        <a href="https://www.instagram.com/yahya.ilhaam/" target="_blank" rel="noopener noreferrer">
        <div className='iconContainer'><InstagramIcon fontSize='large' /> </div>
        </a>
        <a href="http://www.linkedin.com/in/yahyair" target="_blank" rel="noopener noreferrer">
        <div className='iconContainer'><LinkedInIcon fontSize='large' /> </div>
        </a>
        <a href="https://github.com/walooni" target="_blank" rel="noopener noreferrer">
        <div className='iconContainer'><GitHubIcon fontSize='large' /> </div>
        </a>
    </Box>
  )
}

export default IconList