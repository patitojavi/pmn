import { useNavigate } from 'react-router-dom';
import '../components/Login.css'; // para que puedas agregar estilos separados si prefieres

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home/perfil');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Bienvenido a <span className="brand">CapacitApp</span></h1>
        <p className="subtitle">Ingresa tus datos para continuar</p>

        <div className="input-group">
          <label>Correo electrónico</label>
          <input type="email" value="usuario@ejemplo.com" readOnly />
        </div>

        <div className="input-group">
          <label>Contraseña</label>
          <input type="password" value="********" readOnly />
        </div>

        <button onClick={handleLogin} className="login-button">Iniciar sesión</button>
      </div>
    </div>
  );
}

export default Login;
