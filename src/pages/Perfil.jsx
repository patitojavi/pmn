import '../components/Perfil.css';

function Perfil() {
  return (
    <div className="perfil-container">
      <div className="perfil-card">
        <img
          className="avatar"
          src="https://i.pravatar.cc/150?img=12"
          alt="Foto de perfil"
        />

        <h2 className="nombre">Juan Sepulveda</h2>
        <p className="correo">juanma@capacitapp.com</p>
        <p className="rol">Rol: Estudiante</p>
        <p className="registro">Miembro desde: enero 2024</p>

        <div className="resumen">
          <div>
            <strong>5</strong>
            <span>Cursos inscritos</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Capacitaciones completas</span>
          </div>
        </div>

        <button className="editar-btn">Editar perfil</button>
      </div>
    </div>
  );
}

export default Perfil;

  