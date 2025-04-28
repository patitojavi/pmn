import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';

function Login() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (correo.trim() === '' || password.trim() === '') {
      Swal.fire({
        title: 'Campos vacíos',
        text: 'Por favor completa ambos campos.',
        icon: 'warning',
        confirmButtonText: 'Ok'
      });
    } else {
      Swal.fire({
        title: '¡Bienvenido!',
        text: `Has iniciado sesión como ${correo}`,
        icon: 'success',
        confirmButtonText: 'Continuar'
      }).then(() => {
        navigate('/home/perfil');
      });
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#f0f2f5', height: '100vh' }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        display: 'inline-block',
        width: '300px'
      }}>
        <h1 style={{ marginBottom: '1rem' }}>Bienvenido a <span style={{ color: '#4CAF50' }}>CapacitApp</span></h1>

        <div style={{ marginBottom: '1rem' }}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            style={{
              padding: '0.5rem',
              width: '100%',
              marginBottom: '1rem',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '0.5rem',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          style={{
            padding: '0.7rem 2rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}

export default Login;
