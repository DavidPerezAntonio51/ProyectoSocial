import { Typography } from "@mui/material";
function ImpresionConsola(props){
    return(
        <>
            <Typography variant="body1" component="p">Bienvenid@ <b>{props.nombreUser}</b>, espero que te encentres muy bien el día de hoy, gracias por interesarte en el aprendizaje de un lenguaje de programación que tiene demasiadas aplicaciones y que será uno de los principales al momento de estar cursando la carrea.<br />Esta sección tiene como objetivo el presentar las sentencias condicionales del lenguaje de programación <b>Java</b>, partiendo desde lo básico para que puedas tener un mejor aprovechamiento en tus próximas asignaturas.</Typography>
        </>
    );
}

export default ImpresionConsola;