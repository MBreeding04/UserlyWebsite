import './App.css';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { CssBaseline, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from './Assets/Logo/LogoTransparent.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Leaguefont = createTheme({
  typography: {
    fontFamily: ['League Spartan', 'sans-serif'].join(",")
  },
});

const OnestFont = createTheme({
  typography: {
    fontFamily: ['Onest', 'sans-serif'].join(",")
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
      <div className='NavBar'>
        <Typography></Typography>
        <ThemeProvider theme={Leaguefont}>
          <CssBaseline />
          <Button variant="contained" sx={{
            backgroundColor: pallete.aqua,
            ':hover': {
              bgcolor: pallete.darkBlue,
              color: 'white'
            },
            margin: 2
          }}> <Typography fontSize={20}>F.A.Q</Typography></Button>
          <Button variant="contained" sx={{
            backgroundColor: pallete.aqua,
            ':hover': {
              bgcolor: pallete.darkBlue,
              color: 'white'
            },
            margin: 2
          }}><Typography fontSize={20}>Contact</Typography></Button>
          <Button variant="contained" sx={{
            backgroundColor: pallete.aqua,
            ':hover': {
              bgcolor: pallete.darkBlue,
              color: 'white'
            },
            margin: 2
          }}><Typography fontSize={20}>Purchase</Typography></Button>
        </ThemeProvider>
        <IconButton>
          <GitHubIcon fontSize='large'></GitHubIcon>
        </IconButton>
        <IconButton>
          <LinkedInIcon fontSize='large'></LinkedInIcon>
        </IconButton>
      </div>
      <Divider sx={{ width: '95%', borderBottomWidth: 2, bgcolor: '#6C757D' }}></Divider>
      <img src={logo} alt='Userly Logo' className='logo'></img>
      <div className='body'>
        <Divider orientation="horizontal" sx={{
          marginLeft: 4, borderRightWidth: 2,
          bgcolor: '#6C757D'
        }} />
        <div className='download'>
          <Button variant='contained' sx={{
            borderRadius: 6, ml: '13%',
            mt: '10%', backgroundColor: pallete.darkBlue,
            ':hover': {
              bgcolor: '#06080A',
              color: 'white'
            }, height: '30%', width: "15%", fontSize: '100%'
          }}><ThemeProvider theme={Leaguefont}> <Typography>Download</Typography> </ThemeProvider></Button>
        </div>

      </div>
    </div >
  );
}

export default App;
