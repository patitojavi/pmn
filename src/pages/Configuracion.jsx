import '../components/Configuracion.css';
import Swal from 'sweetalert2';

function Configuracion() {
  const handleSave = () => {
    Swal.fire({
      icon: 'success',
      title: '¡Cambios guardados!',
      text: 'Tus preferencias se han actualizado (visualización solamente).',
      confirmButtonText: 'Aceptar'
    });
  };

  const handleCancel = () => {
    Swal.fire({
      icon: 'info',
      title: 'Cambios cancelados',
      text: 'No se ha realizado ninguna modificación.',
      confirmButtonText: 'Entendido'
    });
  };

  return (
    <div className="config-container">
      <h2>Configuración de la cuenta</h2>
      <p>Modifica tus preferencias personales (visual solamente).</p>

      <form className="config-form">
        <label>
          Nombre completo
          <input type="text" placeholder="Juan Pérez" />
        </label>

        <label>
          Correo electrónico
          <input type="email" placeholder="juan.perez@email.com" />
        </label>

        <label>
          Contraseña
          <input type="password" placeholder="********" />
        </label>

        <label>
          Notificaciones
          <select>
            <option>Activadas</option>
            <option>Desactivadas</option>
          </select>
        </label>

        <label>
          Tema
          <select>
            <option>Claro</option>
            <option>Oscuro</option>
          </select>
        </label>

        <div className="botones">
          <button type="button" onClick={handleSave}>Guardar cambios</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>

      <p className="nota">Esta sección es solo de ejemplo y no guarda datos reales.</p>
    </div>
  );
}

export default Configuracion;
