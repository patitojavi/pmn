import '../components/Configuracion.css'

function Configuracion() {
  return (
    <div className="config-container">
      <h2>Configuración de la cuenta</h2>
      <p>Modifica tus preferencias personales (visual solamente).</p>

      <form className="config-form">
        <label>
          Nombre completo
          <input type="text" placeholder="Juan Pérez" disabled />
        </label>

        <label>
          Correo electrónico
          <input type="email" placeholder="juan.perez@email.com" disabled />
        </label>

        <label>
          Contraseña
          <input type="password" placeholder="********" disabled />
        </label>

        <label>
          Notificaciones
          <select disabled>
            <option>Activadas</option>
            <option>Desactivadas</option>
          </select>
        </label>

        <label>
          Tema
          <select disabled>
            <option>Claro</option>
            <option>Oscuro</option>
          </select>
        </label>

        <div className="botones">
          <button disabled>Guardar cambios</button>
          <button disabled>Cancelar</button>
        </div>
      </form>

      <p className="nota">Esta sección es solo de ejemplo y no permite cambios reales.</p>
    </div>
  );
}

export default Configuracion;
