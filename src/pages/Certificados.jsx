import '../components/Certificados.css';
import Swal from 'sweetalert2';

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
  const handleViewCertificate = (cert) => {
    Swal.fire({
      title: cert.titulo,
      text: `Fecha de emisión: ${cert.fecha}`,
      icon: 'info',
      confirmButtonText: 'Cerrar'
    });
  };

  return (
    <div className="certificados-container">
      <h2>Mis Certificados</h2>
      <div className="certificados-grid">
        {certificados.map((cert) => (
          <div key={cert.id} className="cert-card">
            <h3>{cert.titulo}</h3>
            <p><strong>Curso:</strong> {cert.curso}</p>
            <p><strong>Fecha:</strong> {cert.fecha}</p>
            <button onClick={() => handleViewCertificate(cert)}>Ver certificado</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificados;
