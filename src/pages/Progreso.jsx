import '../components/Progreso.css';

const cursosEnProgreso = [
  {
    id: 1,
    nombre: 'Gestión del Tiempo',
    progreso: 75,
    estado: 'En curso',
  },
  {
    id: 2,
    nombre: 'Ergonomía en el Trabajo',
    progreso: 100,
    estado: 'Completado',
  },
  {
    id: 3,
    nombre: 'Comunicación Efectiva',
    progreso: 40,
    estado: 'En curso',
  },
];

function Progreso() {
  return (
    <div className="progreso-container">
      <h2>Mi Progreso</h2>
      <div className="progreso-lista">
        {cursosEnProgreso.map((curso) => (
          <div key={curso.id} className="progreso-item">
            <div className="progreso-header">
              <h4>{curso.nombre}</h4>
              <span className={`estado ${curso.estado === 'Completado' ? 'completado' : 'encurso'}`}>
                {curso.estado}
              </span>
            </div>
            <div className="barra">
              <div className="relleno" style={{ width: `${curso.progreso}%` }}></div>
            </div>
            <p>{curso.progreso}% completado</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Progreso;
