import React from "react";
import { Grid, Typography  } from "@mui/material";
import Box from '@mui/material/Box';
import useStyles from './style';


const videos = [
    {
      id: 1,
      title:
        'MATRIX 4 RESURRECTIONS Trailer Brasileiro Legendado 2 (2021)',
      channel: 'Melhores Trailers de Filmes',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: 'https://yt3.ggpht.com/ytc/AKedOLTihT15M9qAoig5xJgulTtoNjMJr_OvejeMqvBk8Q=s68-c-k-c0x00ffffff-no-rj',
      thumb: 'https://i.ytimg.com/vi/hFS8di2LWwo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcibPhY54PPmc6A-VA2wCyc65xeA',
    },
    {
      id: 2,
      title:
        'Matrix Resurrections – Trailer 2 Oficial',
      channel: 'Ingresso.com',
      views: '11,3 mi de visualizações •',
      date: ' há 3 dias',
      avatar: 'https://yt3.ggpht.com/ytc/AKedOLQ45NMlCYtdRasVyQVmDbvv0q5W4EHOPsVptatEbQ=s68-c-k-c0x00ffffff-no-rj',
      thumb: 'https://i.ytimg.com/vi/t_ULBP6V9bg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBn3JqsfxCQiz0W9UooOht2hckeA',
    },
    {
      id: 3,
      title:
        'Homem-Aranha: Sem Volta Para Casa | Trailer Oficial Dublado | 16 de dezembro nos cinemas',
      channel: 'Sony Pictures Brasil',
      views: '11,3 mi de visualizações •',
      date: ' há 3 dias',
      avatar: 'https://yt3.ggpht.com/ytc/AKedOLQVUcV1wb3lARrLtDiJXhAz3liX9jhKToTHozurHBU=s68-c-k-c0x00ffffff-no-rj',
      thumb: 'https://i.ytimg.com/vi/CyiiEJRZjSU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhLz_A5I14hcsJ8ee0NOKU67twGA',
    }
  ];

interface Props {
    onThemeChange: () => void
}

const Main: React.FC<Props> = ({onThemeChange}): JSX.Element => {
    const classes = useStyles();

    return (
        <Box 
        sx={{
            backgroundColor: 'background.default',
            p: 2,
        }}
        >
            <Typography className={classes.listItemText} color='textPrimary' sx={{ pb: 2}}>Recomendados</Typography>   
            <Grid container spacing={4} p={2}> 
            <Grid container spacing={4} p={2}> 
            { videos.map((item, index) => (
                <Grid item xs={12} sm={6} lg={4} xl={3} key={index} >
                        <Box>
                            <img src={item.thumb} alt="Img" width='100%' />
                            <Box                                        
                                    sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    }}>
                                <img src={item.avatar} className={classes.imgPerfil} />
                                <Typography variant="h3" color='textPrimary' className={classes.textList}>{item.title}</Typography>
                            </Box>
                            <Box
                                    sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    }}
                                >
                                <Typography color='textSecondary' className={classes.textDetail}>{item.channel}</Typography>
                                <Typography color='textSecondary' className={classes.textDetail}>{`${item.views}${item.date}`}</Typography>
                            </Box>
                        </Box>
                </Grid>
                    ))}
            </Grid>   
            </Grid>           
        </Box>
    )
}

export default Main;









