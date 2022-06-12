import './App.css';
import ThemeContextPersonalizado from './Contextos/ThemeContext';
import {UsuariosContext} from './Contextos/UserContext';
import Rutas from './Rutas/Rutas';

function App() {
  return (
    <div className="App">
      <ThemeContextPersonalizado>
        <UsuariosContext>
          <Rutas></Rutas>
        </UsuariosContext>
      </ThemeContextPersonalizado>
    </div>
  );
}

export default App;
