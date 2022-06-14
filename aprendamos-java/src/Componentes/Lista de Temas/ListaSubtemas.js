import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { useContext } from "react";
import ProgressContext from "../../Contextos/ProgressContext";

function ListaSubtemas({ indexTema }) {
    const Temas = useContext(ProgressContext);
    return (
        <>
            <List>
                {Temas.DataProgress[indexTema].Subtemas.map((data,index) => {
                    return (
                        <ListItem
                            disablePadding
                            key={"Subtema" +indexTema+ index}
                            secondaryAction={
                                <Checkbox
                                    color="boticelli"
                                    edge="end"
                                    checked={data.Finalizado}
                                     />
                            }>
                            <ListItemButton>
                                <ListItemText sx={{ color: "stratos.main" }} primary={data.Subtema} />
                                <ListItemIcon>
                                    <PlayArrowRoundedIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </>
    );
}

export default ListaSubtemas;