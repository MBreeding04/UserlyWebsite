import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import WhiteLogo from '../../Assets/Logo/Logo(White).png'
import InfoIcon from '@mui/icons-material/Info';
import TextField from '@mui/material/TextField';
import MaskedInput from 'react-text-mask'
import './Purchase.css'

const options = { method: 'GET' };

function checkEmailValidity(email) {
    var url = `https://emailvalidation.abstractapi.com/v1?api_key=84ec8530f1014db4b49556d9243424f2&email=${email}`
    //function works just need to link it too "email" input on purchase page 
    //fetch('https://emailvalidation.abstractapi.com/v1?api_key=84ec8530f1014db4b49556d9243424f2&email=' + {email}, options)
        //make into a function and call upon email textfield so you can verify emial if not a valid email through up an error
        //.then(response => response.json())
        //.then(response => console.log(response))
        //.catch(err => console.error(err));
}
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
var tempMail = '03mattman@gmail.com'; ///edit this out once done with emial input box and the frunction call to checkemailavailability
export default function Purchase() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            {
                checkEmailValidity(tempMail)}
            <Divider orientation="horizontal" sx={{
                marginLeft: 4, borderRightWidth: 2,
                bgcolor: '#6C757D'
            }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', mt: '5em' }}>
                <Box sx={{
                    display: 'flex', flexDirection: 'row',
                    bgcolor: '#16202B', width: '40em', height: '10em', mr: 4, justifyContent: 'space-around', borderRadius: 2, alignItems: 'center'
                }}>
                    <img className='logoWhite' src={WhiteLogo} alt='Userly(white)'></img><ThemeProvider theme={Leaguefont}><Typography sx={{ fontSize: '2em', mt: '0.3em' }} color='white'>$5.00</Typography></ThemeProvider>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <InfoIcon sx={{ mt: 1, mr: 1, mb: 1, fontSize: '1.5em' }}></InfoIcon><ThemeProvider theme={OnestFont}><Typography sx={{ mt: 1 }}>
                        After purchase has been made email will be sent for download</Typography></ThemeProvider>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#95AEAF', width: '30em', height: '30em', justifyContent: 'space-evenly' }}>

                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <ThemeProvider theme={Leaguefont}><Typography fontSize={'25px'}>Email Address:</Typography></ThemeProvider>
                        <MaskedInput className='styledInput'
                            mask={false}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <ThemeProvider theme={Leaguefont}><Typography fontSize={'25px'}>Card Number:</Typography></ThemeProvider>
                        <MaskedInput className='styledInput'
                            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <ThemeProvider theme={Leaguefont}><Typography fontSize={'25px'}>Exp Date:</Typography></ThemeProvider>
                        <MaskedInput className='styledInputLimited'
                            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        />

                        <ThemeProvider theme={Leaguefont}><Typography fontSize={'25px'}>CCV:</Typography></ThemeProvider>
                        <MaskedInput className='styledInputLimited'
                            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        />

                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Button variant='contained' sx={{
                            borderRadius: 6,
                            backgroundColor: pallete.darkBlue,
                            ':hover': {
                                bgcolor: '#06080A',
                                color: 'white'
                            }, fontSize: 100, width: 225, height: 70
                        }}><ThemeProvider theme={Leaguefont}>
                                <Typography>Purchase</Typography> </ThemeProvider></Button>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', mb: '5em', }}>
                    <InfoIcon sx={{ mt: 1, mr: 1, mb: 1, fontSize: '1.5em' }}></InfoIcon><ThemeProvider theme={OnestFont}><Typography sx={{ mt: 1 }}>
                        May take a little bit, if card is valid, email will be sent</Typography></ThemeProvider>
                </Box>
            </Box>
        </Box>
    )
};