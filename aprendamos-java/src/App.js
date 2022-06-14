import './App.css';
import {ProgresoContext} from './Contextos/ProgressContext';
import ThemeContextPersonalizado from './Contextos/ThemeContext';
import { UsuariosContext } from './Contextos/UserContext';
import Rutas from './Rutas/Rutas';

function App() {
  return (
    <div className="App">
      <ThemeContextPersonalizado>
        <ProgresoContext>
          <UsuariosContext>
            <Rutas></Rutas>
          </UsuariosContext>
        </ProgresoContext>
      </ThemeContextPersonalizado>
    </div>
  );
}

export default App;
