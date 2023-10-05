import Divider from '@mui/material/Divider';
import { Box} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { Slide } from "react-awesome-reveal";
import './F.A.Q.css'

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
export default function FAQ() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <Divider orientation="horizontal" sx={{
                marginLeft: 4, borderRightWidth: 2,
                bgcolor: '#6C757D'
            }} />
            <div id='dot6' className='backroundHoversU'></div>
            <div id='dot7' className='backroundHoversM'></div>
            <div id='dot8' className='backroundHoversL'></div>
            <div id='dot9' className='backroundHoversH'></div>
            <div id='dot10' className='backroundHoversU'></div>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignContent: 'center', mt: '5em', mr:4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <ThemeProvider theme={Leaguefont}><Typography fontSize={'66px'}>Questions?</Typography></ThemeProvider>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mb: '5em' }}>
                    <LoadingButton variant='contained' sx={{
                        borderRadius: 6,
                        backgroundColor: pallete.darkBlue,
                        ':hover': {
                            bgcolor: '#06080A',
                            color: 'white'
                        }, fontSize: 100, width: 175, height: 50
                    }}><ThemeProvider theme={Leaguefont}>
                            <Typography>Submit</Typography> </ThemeProvider>
                    </LoadingButton>
                </Box>
                <Slide cascade={true} damping={0.02}>
                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', alignContent: 'center', justifyContent: 'center', }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', bgcolor: pallete.aqua, justifyContent: 'center', borderRadius: '5px', maxWidth: '1100px', alignContent: 'center', mb: '1em', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
                            <ThemeProvider theme={Leaguefont}><Typography align='center' sx={{ margin: '1em', flexShrink: '1', width:'200px' }} fontSize='30px' color='white'>
                                What accounts can I use with Userly?
                            </Typography>
                            </ThemeProvider>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
                            <ThemeProvider theme={OnestFont}><Typography sx={{ margin: '1em' }} fontSize='20px' color='white'>
                                So, right now only NA(North American) Riot accounts work with the current version(1.2). It can be easily branched out if enough people want support for other regions.
                            </Typography>
                            </ThemeProvider>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', alignContent: 'center', justifyContent: 'center', }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', bgcolor: pallete.aqua, justifyContent: 'center', borderRadius: '5px', maxWidth: '1100px', alignContent: 'center', mb: '1em', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                            <ThemeProvider theme={Leaguefont}><Typography align='center' sx={{ margin: '1em', flexShrink: '1', width:'200px' }} fontSize='30px' color='white'>
                                How do I submit my RIOT account?
                            </Typography>
                            </ThemeProvider>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
                            <ThemeProvider theme={OnestFont}><Typography sx={{ margin: '1em' }} fontSize='20px' color='white'>
                                The first two boxes are your username and tagline (glisby#gamer) you DO NOT have to include the hastag and you would input as glisby (next box) gamer.
                                Your login name and password are yours so you would input your loginname and password into the next two boxes so you do not have to remember them,
                                THE LAST TWO BOXES ARE NOT required to access your data associated with said account.
                            </Typography>
                            </ThemeProvider>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', alignContent: 'center', justifyContent: 'center', }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', bgcolor: pallete.aqua, justifyContent: 'center', borderRadius: '5px', maxWidth: '1100px', alignContent: 'center', mb: '1em', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
                            <ThemeProvider theme={Leaguefont}><Typography align='center' sx={{ margin: '1em', flexShrink: '1', width:'200px' }} fontSize='30px' color='white'>
                                Can i get hacked?
                            </Typography>
                            </ThemeProvider>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
                            <ThemeProvider theme={OnestFont}><Typography sx={{ margin: '1em' }} fontSize='20px' color='white'>
                                All your accounts are encrypted as soon as they are inputted into our app. The Userly app also runs locally, the only api it has connections too is through Riot.
                                So as long as you are responsible on your computer your data should not get hacked and you should not lose your information.
                            </Typography>
                            </ThemeProvider>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', alignContent: 'center', justifyContent: 'center', mb: '5em' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', bgcolor: pallete.aqua, justifyContent: 'center', borderRadius: '5px', maxWidth: '1100px', alignContent: 'center', mb: '1em', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
                            <ThemeProvider theme={Leaguefont}><Typography align='center' sx={{ margin: '1em', flexShrink: '1', width:'200px' }} fontSize='30px' color='white'>
                                Do you work for Riot?
                            </Typography>
                            </ThemeProvider>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
                            <ThemeProvider theme={OnestFont}><Typography sx={{ margin: '1em' }} fontSize='20px' color='white'>
                                The only affiliation we have to Riot is using their API, we are not a child company or a partnered company,
                                they are aware of our company but do not wish to collaberate. We are able to use their API as long as we follow guidelines pertaining to their game and their IP.
                            </Typography>
                            </ThemeProvider>
                        </Box>
                    </Box>
                </Box>
                </Slide>
            </Box>
        </Box >
    )
}