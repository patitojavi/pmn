import '../components/Certificados.css'

const certificados = [
  {
    id: 1,
    titulo: 'Certificado de Prevención de Riesgos',
    curso: 'Prevención de Riesgos Laborales',
    fecha: '12 de abril de 2025',
  },
  {
    id: 2,
    titulo: 'Certificado de Gestión del Tiempo',
    curso: 'Gestión del Tiempo',
    fecha: '2 de abril de 2025',
  },
];

function Certificados() {
  return (
    <div className="certificados-container">
      <h2>Mis Certificados</h2>
      <div className="certificados-grid">
        {certificados.map((cert) => (
          <div key={cert.id} className="cert-card">
            <h3>{cert.titulo}</h3>
            <p><strong>Curso:</strong> {cert.curso}</p>
            <p><strong>Fecha:</strong> {cert.fecha}</p>
            <button>Ver certificado</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificados;
