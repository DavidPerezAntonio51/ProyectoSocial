import { AppBar, Toolbar, Typography } from "@mui/material";
import JavaIcon from "../IconosPersonalizados/JavaIcon";
import { Box } from "@mui/system";
import NombreUsuario from "./NombreUsusario";
import { Outlet } from "react-router-dom";

function NavBar() {
    return (
        <>
            <AppBar color="stratos" position="fixed">
                <Toolbar variant="regular">
                    <Box sx={{ flexGrow: 1 }}>
                        <JavaIcon color="boticelli"
                            width="48"
                            height="48"
                            data-name="Layer 1"
                            viewBox="0 0 48 48"
                            sx={{ fontSize: 60 }} />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, textAlign: 'left' }}>
                        <Typography variant="h5">
                            Aprendamos Java
                        </Typography>
                    </Box>
                    <NombreUsuario />
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Outlet />
        </>
    );
}

export default NavBar;