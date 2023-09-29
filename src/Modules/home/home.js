import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import Screenshot from '../../Assets/screenshots/Userly Demo.png'

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
                <Box sx={{ backgroundColor: pallete.offprismarine, p: 1, borderRadius: 2 }}>
                    <img className='demo' src={Screenshot} alt='Userly Demo'></img>
                </Box>
            </div>
            <div className='carousal'>
                <ThemeProvider theme={OnestFont}>

                    <Box sx={{
                        p: '1em', backgroundColor: pallete.offWhiteBlue, borderRadius: 2, maxWidth: '14em', display: 'flex',
                        flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxHeight: '15em'
                    }}>
                        <ThemeProvider theme={Leaguefont}><Typography variant='h4' color='#F5F5F5'> What
                        </Typography></ThemeProvider><Typography variant="subtitle1" align='center' color='#F5F5F5'>
                            A local app designed in React, Electron, and MUI to show accounts and corresponding data associated with each account.
                        </Typography>
                    </Box >
                    <ForwardIcon sx={{ mt: '1.5em' }} style={{fontSize: 60}}></ForwardIcon>
                    <Box sx={{
                        p: '1em', backgroundColor: pallete.aqua, borderRadius: 2, maxWidth: '14em', display: 'flex',
                        flexDirection: 'column', justifyContent: 'top', alignItems: 'center', maxHeight: '15em'
                    }}>
                        <ThemeProvider theme={Leaguefont}><Typography color='#F5F5F5'variant='h4'> When
                        </Typography></ThemeProvider><Typography color='#F5F5F5' variant="subtitle1" align='center'>
                            Established in 2022 in a github repository by two individuals just trying to store their alt accounts.
                        </Typography>
                    </Box>
                    <ForwardIcon sx={{ mt: '1.5em' }} style={{fontSize: 60}}></ForwardIcon>
                    <Box sx={{
                        p: '1em', backgroundColor: pallete.darkBlue, borderRadius: 2, maxWidth: '14em', display: 'flex',
                        flexDirection: 'column', justifyContent: 'top', alignItems: 'center', maxHeight: '15em'
                    }}>
                        <ThemeProvider theme={Leaguefont}><Typography color='#F5F5F5' variant='h4'> Why
                        </Typography></ThemeProvider><Typography color='#F5F5F5' variant="subtitle1" align='center'>
                            We want to provide a way for users to enjoy multiple accounts and see their data in an easy and accessible way.
                        </Typography>
                    </Box>
                </ThemeProvider>
            </div>
        </div>
    )
};