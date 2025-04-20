import '../components/Capacitaciones.css';

const capacitaciones = [
  {
    id: 1,
    nombre: 'Prevención de Riesgos Laborales',
    duracion: '2 semanas',
    categoria: 'Seguridad',
    estado: 'Disponible',
  },
  {
    id: 2,
    nombre: 'Gestión del Tiempo',
    duracion: '1 semana',
    categoria: 'Desarrollo Personal',
    estado: 'En progreso',
  },
  {
    id: 3,
    nombre: 'Ergonomía en el Trabajo',
    duracion: '3 días',
    categoria: 'Salud Ocupacional',
    estado: 'Completada',
  },
];

function Capacitaciones() {
  return (
    <div className="capacitaciones-container">
      <h2>Capacitaciones</h2>
      <div className="capacitaciones-grid">
        {capacitaciones.map((cap) => (
          <div key={cap.id} className="cap-card">
            <h3>{cap.nombre}</h3>
            <p><strong>Duración:</strong> {cap.duracion}</p>
            <p><strong>Categoría:</strong> {cap.categoria}</p>
            <span className={`estado ${cap.estado.toLowerCase().replace(' ', '-')}`}>
              {cap.estado}
            </span>
            <button>
              {cap.estado === 'Disponible' ? 'Inscribirse' : 'Ver'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Capacitaciones;
