import { Button, IconButton, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react'
import { socialNetwork } from '../navigation/Routes';
import { ContextGlobal } from './utils/global.context'


const Footer = () => {

  const { state } = useContext(ContextGlobal);

  return (
    <Box>
      <Button 
      sx={{color: "white", padding: "10px 0",width: "100%", bgcolor: "red", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", "&:hover": {bgcolor: "#f02323"}}}
      onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}
      >
        Volver Arriba
      </Button>
      <Box 
      sx={state.theme === "light" ? 
      {display: "flex", alignItems: "center", justifyContent: "space-around"} : 
      {display: "flex", alignItems: "center", justifyContent: "space-around", backgroundColor: "black"}}
      >
        <a href="https://www.digitalhouse.com/ar" target="e_blank" rel="nonreferrer">
          <img src="./images/DH.png" alt="logo dh"
          style={ state.theme === "light" ?  {maxWidth: "300px"} : {maxWidth: "300px", filter: "invert(100%)"}}
          />
        </a>
        <Box>
          {socialNetwork.map(({ id, Element, path, title }) => (
            <Tooltip key={id} title={title}>
              <IconButton>
                <a href={path} target="e_blank" rel="nonreferrer" style={state.theme === "light" ? {color: "black"} : {color: "white"}}>
                  <Element />
                </a>
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  )

}

export default Footer
