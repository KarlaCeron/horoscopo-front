import './App.css';
import Form from './components/Form';
import UserHome from './components/UserHome';
import AdminHome from './components/AdminHome';
import ChangePassword from './components/ChangePassword';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <BrowserRouter>
      <Navigation /> {/* Componente de navegación */}
      <Routes>
        <Route index element={<Form callback={setUser} />} />
        <Route path='/userHome' element={<UserHome user={user} />} />
        <Route path='/adminHome' element={<AdminHome user={user} />} />
        <Route path='/changePassword' element={<ChangePassword />} /> {/* Nueva ruta */}
      </Routes>
    </BrowserRouter>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/userHome">User Home</Link>
        </li>
        <li>
          <Link to="/adminHome">Admin Home</Link>
        </li>
        <li>
          <Link to="/changePassword">Cambiar Contraseña</Link> {/* Enlace al componente de cambiar contraseña */}
        </li>
      </ul>
    </nav>
  );
}

export default App;
