import {List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { useContext } from "react";
import ProgressContext from "../../Contextos/ProgressContext";
import CheckBoxControlled from "./CheckBoxControlled";
import {Link} from 'react-router-dom';

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
                                <CheckBoxControlled Finalizado={data.Finalizado} indexTema={indexTema} SubTema={index}/>
                            }>
                            <ListItemButton LinkComponent={Link} to={data.Link}>
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