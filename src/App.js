import './App.css';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { CssBaseline, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from './Assets/Logo/LogoTransparent.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {
  Route,
  NavLink,
  HashRouter,
  Routes
} from "react-router-dom";

import Home from './Modules/home/home'

const Leaguefont = createTheme({
  typography: {
    fontFamily: ['League Spartan', 'sans-serif'].join(",")
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
    <div className='Main-content'>
      <HashRouter>
      <div className='NavBar'>
        <ThemeProvider theme={Leaguefont}>
          <CssBaseline />
          <NavLink to="/F.A.Q">
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
        <IconButton>
          <GitHubIcon fontSize='large'></GitHubIcon>
        </IconButton>
        <IconButton>
          <LinkedInIcon fontSize='large'></LinkedInIcon>
        </IconButton>
      </div>
      <Divider sx={{ width: '95%', borderBottomWidth: 2, bgcolor: '#6C757D' }}></Divider>
      <div className='clickableLogo'><NavLink to="/"><img src={logo} alt='Userly Logo' className='logo'></img></NavLink></div>
      <div className='body'>
        <Divider orientation="horizontal" sx={{
          marginLeft: 4, borderRightWidth: 2,
          bgcolor: '#6C757D'
        }} />
          <div className="content">
            <Routes>
              <Route path='/' element={<Home></Home>}/>
              <Route path="/F.A.Q" element={<div></div>} />
              <Route path="/Purchase" element={<div></div>} />
              <Route path="/Contact" element={<div></div>} />
            </Routes>
          </div>
      </div>
      </HashRouter>
    </div >
  );
}

export default App;
