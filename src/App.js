import './App.css';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Box, CssBaseline, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from './Assets/Logo/LogoTransparent.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import {
  Route,
  NavLink,
  HashRouter,
  Routes
} from "react-router-dom";

import Home from './Modules/home/home'
import Purchase from './Modules/Purchase/Purchase'
import FAQ from './Modules/F.A.Q/F.A.Q'
import Contact from './Modules/Contact/Contact'

const Leaguefont = createTheme({
  typography: {
    fontFamily: ['League Spartan', 'sans-serif'].join(",")
  },
});
const FiraCode = createTheme({
  typography: {
    fontFamily: ['Fira Code', 'monospace'].join(",")
  },
});
const pallete = {
  aqua: '#4B636D',
  prismarine: '#C2D1D0',
  darkBlue: '#16202B',
  offWhiteBlue: '#95AEAF'
}
function App() {
  return (
    <SimpleBar style={{ maxHeight: window.innerHeight }}>
      <div className='Main-content'>
        <HashRouter>
          <div className='NavBar'>
            <ThemeProvider theme={Leaguefont}>
              <CssBaseline />
              <NavLink to="/FAQ">
                <Button variant="contained" sx={{
                  backgroundColor: pallete.aqua,
                  ':hover': {
                    bgcolor: pallete.darkBlue,
                    color: 'white'
                  },
                  margin: 2,
                  paddingX: 3,
                  minWidth: 125
                }}> <Typography fontSize={20}>F.A.Q</Typography></Button></NavLink>
              <NavLink to="/Contact">
                <Button variant="contained" sx={{
                  backgroundColor: pallete.aqua,
                  ':hover': {
                    bgcolor: pallete.darkBlue,
                    color: 'white'
                  },
                  margin: 2,
                  paddingX: 3,
                  minWidth: 125
                }}><Typography fontSize={20}>Contact</Typography></Button></NavLink>
              <NavLink to="/Purchase">
                <Button variant="contained" sx={{
                  backgroundColor: pallete.aqua,
                  ':hover': {
                    bgcolor: pallete.darkBlue,
                    color: 'white'
                  },
                  margin: 2,
                  paddingX: 3,
                  minWidth: 125
                }}><Typography fontSize={20}>Purchase</Typography></Button></NavLink>
            </ThemeProvider>
            <IconButton href='https://github.com/MBreeding04'>
              <GitHubIcon fontSize='large'></GitHubIcon>
            </IconButton>
            <IconButton href='https://www.linkedin.com/in/matthew-breeding-1a5182289/'>
              <LinkedInIcon fontSize='large'></LinkedInIcon>
            </IconButton>
          </div>
          <Divider sx={{ width: '95%', borderBottomWidth: 2, bgcolor: '#6C757D',zIndex:1 }}></Divider>
          <div className='clickableLogo'><NavLink to="/"><img src={logo} alt='Userly Logo' className='logo'></img></NavLink></div>
          <div className='body'>
            <div></div>
            <div className="content">
              <Routes>
                <Route path='/' element={<Home></Home>} />
                <Route path="/FAQ" element={<FAQ></FAQ>} />
                <Route path="/Purchase" element={<Purchase></Purchase>} />
                <Route path="/Contact" element={<Contact></Contact>} />
              </Routes>
            </div>
          </div>

        </HashRouter>
        {/* Footer copyright etc. */}<Box sx={{ bgcolor: '#04060A', display: 'flex', flexDirection: 'row', zIndex:1 }}>
          <Divider orientation="horizontal" sx={{
            marginLeft: 4, marginBottom: '2em', borderRightWidth: 2,
            bgcolor: '#2E3F4C'
          }} /><ThemeProvider theme={FiraCode}><Typography color='white' sx={{ ml: '2em', marginY: '2em' }}>Copyright © Userly 2023. All Rights Reserved</Typography></ThemeProvider>
        </Box>
      </div >
    </SimpleBar>
  );
}

export default App;
