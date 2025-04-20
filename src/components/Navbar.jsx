import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css'; // para estilos personalizados


function Navbar() {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      navigate('/'); 
    };
  
    return (
      <nav className="navbar">
        <h1 className="logo">CapacitApp</h1>
        <ul className="nav-links">
          <li><NavLink to="/home/perfil">Perfil</NavLink></li>
          <li><NavLink to="/home/cursos">Cursos</NavLink></li>
          <li><NavLink to="/home/capacitaciones">Capacitaciones</NavLink></li>
          <li><NavLink to="/home/certificados">Certificados</NavLink></li>
          <li><NavLink to="/home/progreso">Progreso</NavLink></li>
          <li><NavLink to="/home/soporte">Soporte</NavLink></li>
          <li><NavLink to="/home/configuracion">Configuración</NavLink></li>
          <li>
            <button onClick={handleLogout} className="logout-button">Cerrar sesión</button>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;