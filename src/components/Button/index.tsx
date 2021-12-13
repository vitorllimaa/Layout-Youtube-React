import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react";

function Butao() {
    return (
        <Button sx={{ display: { xs: 'none', sm: 'none', md: 'inline-flex',  } }} startIcon={<AccountCircleIcon />} color="secondary" variant="outlined" disableElevation>Fazer Login</Button>
    )
}

export default Butao;