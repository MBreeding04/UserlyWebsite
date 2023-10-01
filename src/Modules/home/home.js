import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import Screenshot from '../../Assets/screenshots/Userly Demo.png'
import Divider from '@mui/material/Divider';
import './home.css'
const pallete = {
    aqua: '#4B636D',
    prismarine: '#C2D1D0',
    darkBlue: '#16202B',
    offWhiteBlue: '#95AEAF',
    offprismarine: '#6D898E'
}

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
export default function Home() {
    return (
        <div className='biggerheaderContainer'>
            <div className='dividercontainer'>
                <Divider orientation="horizontal" sx={{
                    marginLeft: 4, borderRightWidth: 2,
                    bgcolor: '#6C757D'
                }} />
                <div className='headerContainer'>
                    <div className='download'>
                        <Button variant='contained' sx={{
                            borderRadius: 6,
                            backgroundColor: pallete.darkBlue,
                            ':hover': {
                                bgcolor: '#06080A',
                                color: 'white'
                            }, fontSize: 100, width: 300, height: 70
                        }}><ThemeProvider theme={Leaguefont}>
                                <Typography>Buy Now</Typography> </ThemeProvider></Button>
                    </div>
                    <Box sx={{ backgroundColor: pallete.offprismarine, p: '1em', borderRadius: 2 }}>
                        <img className='demo' src={Screenshot} alt='Userly Demo'></img>
                    </Box>
                </div>
            </div>
            <div className='dividercontainer'>
                <Divider orientation="horizontal" sx={{
                    marginLeft: 4, borderRightWidth: 2,
                    bgcolor: '#6C757D'
                }} />
                <div className='carousal'>
                    <ThemeProvider theme={OnestFont}>

                        <Box sx={{
                            p: '1em', backgroundColor: pallete.offWhiteBlue, borderRadius: 2, maxWidth: '15em', display: 'flex',
                            flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                        }}>
                            <ThemeProvider theme={Leaguefont}><Typography variant='h3' color='#F5F5F5'> What
                            </Typography></ThemeProvider><Typography variant="h6" align='center' color='#F5F5F5'>
                                A local app designed in React, Electron, and MUI to show accounts and corresponding data associated with each account.
                            </Typography>
                        </Box >
                        <ForwardIcon  sx={{ mt: '2em', color:'white' }} style={{ fontSize: 60 }}></ForwardIcon>
                        <Box sx={{
                            p: '1em', backgroundColor: pallete.aqua, borderRadius: 2, maxWidth: '15em', display: 'flex',
                            flexDirection: 'column', justifyContent: 'top', alignItems: 'center',
                        }}>
                            <ThemeProvider theme={Leaguefont}><Typography color='#F5F5F5' variant='h3'> When
                            </Typography></ThemeProvider><Typography color='#F5F5F5' variant="h6" align='center'>
                                Established in 2022 in a github repository by two individuals just trying to store their alt accounts.
                            </Typography>
                        </Box>
                        <ForwardIcon sx={{ mt: '2em',color:'white' }} style={{ fontSize: 60 }}></ForwardIcon>
                        <Box sx={{
                            p: '1em', backgroundColor: pallete.darkBlue, borderRadius: 2, maxWidth: '15em', display: 'flex',
                            flexDirection: 'column', justifyContent: 'top', alignItems: 'center', mr: 4 
                        }}>
                            <ThemeProvider theme={Leaguefont}><Typography color='#F5F5F5' variant='h3'> Why
                            </Typography></ThemeProvider><Typography color='#F5F5F5' variant="h6" align='center'>
                                We want to provide a way for users to enjoy multiple accounts and see their data in an easy and accessible way.
                            </Typography>
                        </Box>
                    </ThemeProvider>
                </div>
            </div>
            <div className='lowerThird'>

                <Divider orientation="horizontal" sx={{
                    marginLeft: 4, borderRightWidth: 2,
                    bgcolor: '#587488'
                }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', mb: '5em' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '70em', mr: 4 }}>
                        <ThemeProvider theme={Leaguefont}><Typography variant='h2' align='center' sx={{ mt: 8.5, color: '#F5F5F5' }}>The Big Picture</Typography></ThemeProvider>
                        <ThemeProvider theme={OnestFont}><Typography variant='h6' align='center' sx={{ mt: 8.5, color: '#F5F5F5' }}>We all have been there,
                            you need an account to play with your friends and you're not sure what account is the correct rank. Is it account X, Y, Z?
                            We here at Userly are here to solve this issue by providing you with your one stop shop to store all of your accounts and their corresponding data!
                        </Typography></ThemeProvider>
                    </Box>
                </Box>
            </div>
        </div>
    )
};