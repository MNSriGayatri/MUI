import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
//import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

const Theme = () => {
const [theme,setTheme] = useState(lightTheme);

const [mode,setMode] = useState("#212121");
const updateMode = () => {
    setMode(prevState => (prevState === "#212121") ? "#fafafa" : "#212121");
}
const [icon,setIcon] = useState(<Brightness7Icon/>);
const updateIcon = () => {
    setIcon(prevState => (prevState.type === Brightness7Icon) ? <Brightness4Icon/> : <Brightness7Icon/>);
}
const updateTheme  = () => {
    setTheme(prevState => (prevState === lightTheme) ? darkTheme : lightTheme);
}
  return (

    <>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <IconButton   style={{ color: mode,position: 'absolute', top: 0, right: 0 }}
    onClick={ () => {updateTheme();updateMode();updateIcon();}} > { icon }
    </IconButton>
    </ThemeProvider>
  
    

     </>
     
      
  );
}

    
    

export default Theme;
