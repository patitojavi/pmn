import '../components/Soporte.css';

function Soporte() {
  return (
    <div className="soporte-container">
      <h2>Centro de Soporte</h2>
      <p>¿Tienes alguna duda o problema? ¡Estamos aquí para ayudarte!</p>

      <section className="contacto">
        <h3>Información de contacto</h3>
        <ul>
          <li>📧 Email: soporte@capacitapp.com</li>
          <li>📞 Teléfono: +56 9 1234 5678</li>
          <li>⏰ Horario: Lunes a Viernes, 9:00 - 18:00</li>
        </ul>
      </section>

      <section className="faq">
        <h3>Preguntas Frecuentes</h3>
        <details>
          <summary>¿Cómo accedo a mis cursos?</summary>
          <p>Una vez que inicias sesión, ve a la sección "Cursos" desde el menú principal.</p>
        </details>
        <details>
          <summary>¿Qué pasa si olvido mi contraseña?</summary>
          <p>Como es un prototipo, no necesitas preocuparte por contraseñas 😉</p>
        </details>
        <details>
          <summary>¿Recibiré certificados reales?</summary>
          <p>Este es solo un prototipo visual, no genera certificados reales.</p>
        </details>
      </section>

      <section className="formulario">
        <h3>Contáctanos</h3>
        <form>
          <input type="text" placeholder="Nombre completo" disabled />
          <input type="email" placeholder="Correo electrónico" disabled />
          <textarea placeholder="Escribe tu mensaje aquí..." disabled />
          <button disabled>Enviar mensaje</button>
        </form>
        <p className="nota">Este formulario es solo ilustrativo.</p>
      </section>
    </div>
  );
}

export default Soporte;
