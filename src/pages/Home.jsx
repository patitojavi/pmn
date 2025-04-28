import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

import Perfil from './Perfil';
import Cursos from './Cursos';
import Capacitaciones from './Capacitaciones';
import Certificados from './Certificados';
import Progreso from './Progreso';
import Soporte from './Soporte';
import Configuracion from './Configuracion';
import Navbar from '../components/Navbar';

function Home() {
  useEffect(() => {
    Swal.fire({
      title: '¡Bienvenido!',
      text: 'Explora las secciones disponibles.',
      icon: 'success',
      confirmButtonText: 'Comenzar'
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="perfil" element={<Perfil />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="capacitaciones" element={<Capacitaciones />} />
          <Route path="certificados" element={<Certificados />} />
          <Route path="progreso" element={<Progreso />} />
          <Route path="soporte" element={<Soporte />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
