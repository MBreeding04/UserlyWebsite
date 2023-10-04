import Divider from '@mui/material/Divider';
import { Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';

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
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <Divider orientation="horizontal" sx={{
                marginLeft: 4, borderRightWidth: 2,
                bgcolor: '#6C757D'
            }} />
            <Box sx={{}}>

            </Box>
        </Box>
    )
}