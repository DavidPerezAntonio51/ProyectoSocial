import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/system';
import { useContext, useState } from 'react';
import ProgressContext from '../../Contextos/ProgressContext';
import ListaSubtemas from './ListaSubtemas';

function ListaTemas() {
  const [expanded, setExpanded] = useState(false);
  const Temas = useContext(ProgressContext);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={{paddingBottom:5}}>
      {
        Temas.DataProgress.map((data, index) => {
          return (
            <Accordion
              expanded={expanded === 'Tema' + index}
              onChange={handleChange('Tema' + index)}
              variant="outlined"
              key={"Tema" + index}
              sx={{bgcolor:"regalBlue.main"}}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={"panel" + index + "bh-content"}
                id={"panel" + index + "bh-header"}
              >
                <Typography sx={{ flexGrow: 1, flexShrink: 0, color: "text.secondary" }}>
                  {data.Tema}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>{data.Progreso+"/" + data.Subtemas.length}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{bgcolor:"bondiBlue.main"}}>
                <ListaSubtemas indexTema={index}/>
              </AccordionDetails>
            </Accordion>
          );
        })
      }
    </Container>
  );
}

export default ListaTemas;