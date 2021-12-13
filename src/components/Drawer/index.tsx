import React from "react";
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Box  } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Butao from '../Button/';
import useStyles from './style';
import Main from '../Main/';


interface Props {
    onThemeChange: () => void
}

const NavDrawer: React.FC<Props> = ({onThemeChange}): JSX.Element => {
    const classes = useStyles();

    return (
        <Box display='flex' >
            <Drawer sx={{ display: { md: 'block', xs: 'none' } }}
                        className={classes.drawer}
                        variant="permanent"
                        anchor="left"
                        classes={{
                            paper: classes.drawerPaper
                        }}>

                        <Toolbar />
                        <List>
                            <ListItem button>  
                                <ListItemIcon classes={{
                                    root: classes.listIcon
                                }}>
                                    <HomeOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Home'} />
                            </ListItem>
                            <ListItem button>  
                                <ListItemIcon classes={{
                                    root: classes.listIcon
                                }}>
                                    <LocalFireDepartmentOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Em alta'} />
                            </ListItem>
                            <ListItem button >  
                                <ListItemIcon classes={{
                                    root: classes.listIcon
                                }}>
                                    <SubscriptionsIcon />
                                </ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Inscrições'} />
                            </ListItem>
                            <Divider />
                            <ListItem button >  
                                <ListItemIcon classes={{
                                    root: classes.listIcon
                                }}>
                                    <VideoLibraryIcon />
                                </ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Biblioteca'} />
                            </ListItem>
                            <ListItem button >  
                                <ListItemIcon classes={{
                                    root: classes.listIcon
                                }}>
                                    <HistoryIcon />
                                </ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Histórico'} />
                            </ListItem>
                        </List>
                        <Divider />
                        <Box p={4} pb={0}>
                            <Typography variant='body2' className={classes.listItemText} >Faça login para curtir vídeos, comentar e se inscrever.</Typography>
                        </Box>
                        <Box p={2}>
                            <Butao />
                        </Box>
                        <Box p={2}>
                            <Typography variant='body2' className={classes.listItemText} >O MELHOR DO YOUTUBE</Typography>
                        </Box>
                        <ListItem button >  
                            <ListItemIcon classes={{
                                    root: classes.listIcon
                                }}>
                                    <LibraryMusicIcon />
                                </ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Músicas'} />
                        </ListItem>
                        <ListItem button >  
                                <ListItemIcon classes={{
                                    root: classes.listIcon
                                }}>
                                    <SportsSoccerIcon />
                                </ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Esportes'} />
                        </ListItem>
                        <ListItem button >  
                                <ListItemIcon classes={{
                                    root: classes.listIcon
                                }}>
                                    <SportsEsportsIcon />
                                </ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Jogos'} />
                        </ListItem>
                        <ListItem button >  
                                <ListItemIcon classes={{
                                    root: classes.listIcon
                                }}>
                                    <MovieCreationIcon />
                                </ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Filmes'} />
                        </ListItem>
                        <ListItem button >  
                                <ListItemIcon classes={{
                                    root: classes.listIcon
                                }}>
                                    <NewspaperIcon />
                                </ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Notícias'} />
                        </ListItem>
                        <ListItem button >  
                                <ListItemIcon classes={{
                                    root: classes.listIcon
                                }}>
                                    <LiveTvIcon />
                                </ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Ao vivo'} />
                        </ListItem>
                        <ListItem button >  
                                <ListItemIcon classes={{
                                    root: classes.listIcon
                                }}>
                                    <LocalFireDepartmentOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Destaques'} />
                        </ListItem>
                        <ListItem button >  
                                <ListItemIcon classes={{
                                    root: classes.listIcon
                                }}>
                                    <SlowMotionVideoIcon />
                                </ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Video em 360º'} />
                        </ListItem>
                    <Divider />
                        <ListItem sx={{ pl: 2 }} >  
                                <ListItemIcon classes={{
                                    root: classes.listIcon
                                }}>
                                    <AddCircleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Procurar Canais'} />
                        </ListItem>  
                        <Divider />
                        <Box p={2}>
                            <Typography variant='body2' className={classes.listItemText} >MAIS DO YOUTUBE</Typography>
                        </Box>
                        <ListItem button >  
                                <ListItemIcon classes={{
                                    root: classes.listIcon
                                }}>
                                    <YouTubeIcon />
                                </ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Youtube Premium'} />
                        </ListItem>  
            </Drawer>
            <Main onThemeChange={onThemeChange} />
        </Box>
    )
}

export default NavDrawer;