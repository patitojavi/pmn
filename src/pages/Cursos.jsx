import '../components/Cursos.css';

const cursos = [
  {
    id: 1,
    titulo: 'Introducción a React',
    descripcion: 'Aprende los fundamentos de React.js con ejemplos prácticos.',
    imagen: 'https://facialix.com/wp-content/uploads/2023/05/react-blog.jpg',
    estado: 'Inscrito',
  },
  {
    id: 2,
    titulo: 'Capacitación en Seguridad Laboral',
    descripcion: 'Conoce las mejores prácticas para mantener entornos seguros.',
    imagen: 'https://th.bing.com/th/id/OIP.PnZzjks8J5SQrDzBwPY3AAHaFL?rs=1&pid=ImgDetMain',
    estado: 'Disponible',
  },
  {
    id: 3,
    titulo: 'Comunicación Efectiva',
    descripcion: 'Desarrolla habilidades para comunicarte con claridad y empatía.',
    imagen: 'https://th.bing.com/th/id/OIP.rwGSAS159k_HDtdJj6bR2wAAAA?w=474&h=316&rs=1&pid=ImgDetMain',
    estado: 'Finalizado',
  },
];

function Cursos() {
  return (
    <div className="cursos-container">
      <h2>Mis Cursos</h2>
      <div className="cursos-grid">
        {cursos.map((curso) => (
          <div key={curso.id} className="curso-card">
            <img src={curso.imagen} alt={curso.titulo} />
            <h3>{curso.titulo}</h3>
            <p>{curso.descripcion}</p>
            <span className={`estado ${curso.estado.toLowerCase()}`}>
              {curso.estado}
            </span>
            <button>Ver curso</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cursos;
