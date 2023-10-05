import Divider from '@mui/material/Divider';
import { Box, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import Matthew from '../../Assets/Avatar Photos/Screenshot-2023-07-23-042238.png'
import Slide from '@mui/material/Slide';
import './Contact.css'

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
export default function Contact() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', height: 973, mr: 4 }}>
            {/*height is only set because content does not fill up entire page, so we force it to fill up page*/}
            <Divider orientation="horizontal" sx={{
                marginLeft: 4, borderRightWidth: 2,
                bgcolor: '#6C757D', zIndex:1
            }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                <div id='dot11' className='backroundHoversU'></div>
                <div id='dot12' className='backroundHoversM'></div>
                <div id='dot13' className='backroundHoversL'></div>
                <div id='dot14' className='backroundHoversH'></div>
                <div id='dot15' className='backroundHoversU'></div>
                <Slide direction='down' in={true}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: pallete.offprismarine, borderRadius: 2, width: '1300px', justifyContent: 'center', alignContent: 'center', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px', zIndex:1 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                                <Box><img className='Avatars' src={Matthew} alt="Matthew"></img></Box>

                                <Box><ThemeProvider theme={Leaguefont}><Typography align='center' color='white' fontSize={'28px'} sx={{ width: 240, }}>Matthew Breeding</Typography></ThemeProvider></Box>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Divider sx={{ width: '95%', borderBottomWidth: '2px', bgcolor: '#2E3F4C', mt: '1em', }}></Divider>
                                </Box>
                                <ThemeProvider theme={OnestFont}><Typography sx={{ mr: '1em', mb: '1em', mt: '1em' }} fontSize={'22px'} color='white' align='center'>Gamer, Developer, and technology enthusiast.
                                    Main developer and thought process behind Userly. Born in Michigan and raised in rural Virginia.
                                    <br></br><br></br>
                                    <Typography sx={{ fontStyle: 'italic' }} fontSize={'22px'} color='white' align='center'>
                                        "I just wanted to create an easier way for users to play and interact with their friends."
                                    </Typography>
                                    <br></br>
                                    Happy to Connect!
                                </Typography></ThemeProvider>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <ThemeProvider theme={Leaguefont}>
                                <GitHubIcon sx={{ fontSize: '40px',m:1 }}></GitHubIcon><Typography color={'white'} sx={{ mt: '1.1em' }}>MBreeding04</Typography>
                                <LinkedInIcon sx={{ fontSize: '40px',m:1 }}></LinkedInIcon><Typography color={'white'} sx={{ mt: '1.1em' }}>Matthew Breeding</Typography>
                                <PhoneIcon sx={{ fontSize: '40px',m:1 }}></PhoneIcon><Typography color={'white'} sx={{ mt: '1.1em' }}>Available upon request</Typography>
                                <MailIcon sx={{ fontSize: '40px',m:1 }}></MailIcon><Typography color={'white'} sx={{ mt: '1.1em' }}>03mattman@gmail.com</Typography>
                            </ThemeProvider>
                        </Box>
                    </Box>

                </Slide>
            </Box>
        </Box>
    )
}