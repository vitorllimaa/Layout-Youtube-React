import React from "react";
import { AppBar, IconButton, Toolbar, Typography  } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded';
import AppsIcon from '@mui/icons-material/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import Box from '@mui/material/Box';
import Butao from '../Button/';
import useStyles from './style';
import NavDrawer from '../Drawer/';


interface Props {
    onThemeChange: () => void,
    themeMode: string,
}

const NavBar: React.FC<Props> = ({onThemeChange, themeMode}): JSX.Element => {
    const classes = useStyles();

    return (
        <Box className={classes.root}  sx={{
            backgroundColor: 'background.default'
        }} >
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className={classes.AppBar} color="inherit">
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <img src={themeMode == 'dark' ? './img/branco.png' : './img/preto.png'} alt="Youtube" className={classes.logo} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                    </Typography>
                    <Brightness4OutlinedIcon color="secondary" onClick={onThemeChange} sx={{ p:2, cursor: 'pointer'}} />
                    <VideoCallRoundedIcon
                            className={classes.IconsNav}
                            color="inherit"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                    </VideoCallRoundedIcon>
                    <AppsIcon
                        className={classes.IconsNav}
                        sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </AppsIcon>
                    <MoreVertIcon
                        className={classes.IconsNav}
                        sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </MoreVertIcon>
                    <Butao />
                </Toolbar>
                </AppBar>
            </Box>
            <Toolbar />
            <NavDrawer onThemeChange={onThemeChange} />
        </Box>
        

    )
}

export default NavBar;