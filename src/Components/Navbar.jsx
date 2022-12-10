import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { routes } from '../navigation/Routes';
import { ContextGlobal } from './utils/global.context';
import { useContext, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const Navbar = (props) => {

  const { window } = props;
  const { state, dispatch } = useContext(ContextGlobal);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List sx={state.theme === "light" ? 
      {backgroundColor: "white"} : 
      {backgroundColor: "black"}}>
        {routes.map((item) => {
          if (item.title !== "Detail") {
            return (
            <Link key={item.id} to={item.path} style={{textDecoration: "none", fontSize: "1.2rem", color: "black"}}>
              <ListItem  disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item.title} sx={state.theme === "light" ? {color: "black"} : {color: "white"}}/>
                  </ListItemButton>
              </ListItem>
            </Link>
            )
          }
        })}
        <Button variant="contained" 
          onClick={() => dispatch({type: state.theme})}
          sx={state.theme === "light" ? 
          {backgroundColor: "black", "&:hover": {backgroundColor: "white", color: "black"}} : 
          {backgroundColor: "white", color: "black", "&:hover": {backgroundColor: "black", color: "white"}}}
          >
          {state.theme === "light" ? "🌙" : "☀"}
        </Button>
      </List>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{width: "100%"}}>
      <AppBar position='static' sx={{width: "100%"}}>
        <Toolbar sx={{display: "flex", color: "white", justifyContent: "space-between"}}>
          <Typography
            variant="h4"
            component="div"
          >
            <span style={{color: "red"}}>D</span>H Odonto
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: "center", justifyContent: "space-around", width: "50%"}}>
            {routes.map(({ id, path, title }) => title !== "Detail" ?
             <Link key={id} to={path}
             style={{textDecoration: "none", fontSize: "1.2rem", color: "white"}}
             >
              {title}
              </Link> 
             : "")}
            <Button variant="contained" 
            onClick={() => dispatch({type: state.theme})}
            sx={state.theme === "light" ? 
            {backgroundColor: "black", "&:hover": {backgroundColor: "white", color: "black"}} : 
            {backgroundColor: "white", color: "black", "&:hover": {backgroundColor: "black", color: "white"}}}
            >
              {state.theme === "light" ? "🌙" : "☀"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{keepMounted: true}}
        sx={state.theme === "light" ? 
        {display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }} : 
        {display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "black" }}
        }
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
export default Navbar;