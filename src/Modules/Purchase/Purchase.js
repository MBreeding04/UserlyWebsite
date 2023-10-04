import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import WhiteLogo from '../../Assets/Logo/Logo(White).png'
import InfoIcon from '@mui/icons-material/Info';
import './Purchase.css'
import { useState } from 'react';
const options = { method: 'GET' };

async function checkEmailValidity(email) {
    let response = await fetch(`https://emailvalidation.abstractapi.com/v1?api_key=${process.env.REACT_APP_ABSTRACT_API_KEY}&email=${email}`, options);
    let emailData = await response.json();
    emailData = JSON.stringify(emailData);
    emailData = JSON.parse(emailData);
    return emailData;
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
export default function Purchase() {
    const [isLoading, setisLoading] = useState(false)
    
    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    }
    async function validatePurchaseData() {
        setisLoading(true)
        var data = Array.from(document.querySelectorAll('#purchaseForm input'))
        let emailData = await checkEmailValidity(data[0].value)
        console.log(emailData.deliverability)
        if(emailData.deliverability==="DELIVERABLE"){
            setisLoading(false)
        }
        else{
            await delay(2000)
            setisLoading(false)
        }
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <Divider orientation="horizontal" sx={{
                marginLeft: 4, borderRightWidth: 2,
                bgcolor: '#6C757D'
            }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', mt: '5em', mr: 4  }}>
                <Box sx={{
                    display: 'flex', flexDirection: 'row',
                    bgcolor: '#16202B', width: '40em', height: '10em', justifyContent: 'space-around', borderRadius: 2, alignItems: 'center'
                }}>
                    <img className='logoWhite' src={WhiteLogo} alt='Userly(white)'></img><ThemeProvider theme={Leaguefont}><Typography sx={{ fontSize: '2em', mt: '0.3em' }} color='white'>$5.00</Typography></ThemeProvider>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <InfoIcon sx={{ mt: 1, mr: 1, mb: 1, fontSize: '1.5em' }}></InfoIcon><ThemeProvider theme={OnestFont}><Typography sx={{ mt: 1 }}>
                        After purchase has been made email will be sent for download</Typography></ThemeProvider>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#95AEAF', width: '30em', height: '30em', justifyContent: 'space-evenly', alignContent: 'space-evenly' }}>
                    <form id='purchaseForm' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignContent: 'space-evenly', height: '100%' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <ThemeProvider theme={Leaguefont}><Typography fontSize={'25px'}>Email Address:</Typography></ThemeProvider>
                            <TextField variant='standard' name='email' id="email" className='styledInput' placeholder='johndoe@gmail.com'
                                
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <ThemeProvider theme={Leaguefont}><Typography fontSize={'25px'}>Card Number:</Typography></ThemeProvider>
                            <TextField variant='standard' name='cardNum' id="cardNum" className='styledInput'
                                type="tel" pattern="[0-9\s]{13,19}" placeholder="xxxx xxxx xxxx xxxx" ></TextField>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <ThemeProvider theme={Leaguefont}><Typography fontSize={'25px'}>Exp Date:</Typography></ThemeProvider>
                            <TextField sx={{maxWidth: '100px'}} variant='standard' name='expDate' id="expDate" className='styledInputLimited' placeholder='xx/xxxx'
                                
                            />

                            <ThemeProvider theme={Leaguefont}><Typography fontSize={'25px'}>CCV:</Typography></ThemeProvider>
                            <TextField sx={{maxWidth: '100px'}} variant='standard' name='CCV' id="CCV" className='styledInputLimited' placeholder='xxx'
                                
                            />

                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <LoadingButton variant='contained' sx={{
                                borderRadius: 6,
                                backgroundColor: pallete.darkBlue,
                                ':hover': {
                                    bgcolor: '#06080A',
                                    color: 'white'
                                }, fontSize: 100, width: 225, height: 70
                            }} onClick={validatePurchaseData} loading={isLoading}><ThemeProvider theme={Leaguefont}>
                                    <Typography>Purchase</Typography> </ThemeProvider></LoadingButton>
                        </Box>
                    </form>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', mb: '5em', }}>
                    <InfoIcon sx={{ mt: 1, mr: 1, mb: 1, fontSize: '1.5em' }}></InfoIcon><ThemeProvider theme={OnestFont}><Typography sx={{ mt: 1 }}>
                        May take a little bit, if card is valid, email will be sent</Typography></ThemeProvider>
                </Box>
            </Box>
        </Box>
    )
};