# CapacitApp 🧠💼

**CapacitApp** es un Prototipo Mínimo Navegable (PMN) de una plataforma web para capacitaciones online. Este prototipo fue desarrollado con React y Vite, y desplegado en Vercel. El objetivo es mostrar la estructura y navegación básica de una aplicación web enfocada en el aprendizaje y el desarrollo profesional.

---

## 🚀 Demo en línea

👉 Puedes ver el proyecto funcionando en Vercel:  
👉[React PMN Patricio Benavides](https://pmn-patricio-benavides-projects.vercel.app/)

---

## 📚 Tecnologías utilizadas

- ⚛️ **React** – Librería de JavaScript para construir interfaces de usuario.
- ⚡ **Vite** – Herramienta moderna de desarrollo rápido para proyectos frontend.
- 🧭 **React Router DOM** – Para la navegación entre páginas.
- 🎨 **CSS** – Para el diseño y estilo visual (no se usó Tailwind en esta versión).
- ☁️ **Vercel** – Para el despliegue automático desde GitHub.

---

## 🗂️ Estructura general de páginas

### 🟢 `Login`
- Página de inicio donde el usuario puede "iniciar sesión".
- Al presionar el botón, se redirige al home.
- Visualmente muestra campos de ejemplo como correo y contraseña (no funcional).

### 🏠 `Home`
- Punto de inicio tras iniciar sesión.
- Contiene una barra de navegación a todas las secciones.

### 👤 `Perfil`
- Muestra información del usuario.
- Incluye campos visuales como nombre, correo, tipo de usuario, etc.

### 📚 `Cursos`
- Lista de cursos disponibles.
- Cada curso muestra nombre, descripción y botón simulado de inscripción.

### 🎓 `Capacitaciones`
- Área que muestra las capacitaciones activas.
- Visual con tarjetas de ejemplo.

### 📄 `Certificados`
- Página con lista de certificados obtenidos por el usuario (de manera simulada).

### 📈 `Progreso`
- Representa gráficamente el progreso del usuario en su proceso de capacitación.

### 🆘 `Soporte`
- Información de contacto para recibir ayuda o soporte técnico.

### ⚙️ `Configuración`
- Página visual donde el usuario puede ver (sin editar) su información de cuenta y preferencias.

---

## 🧭 Navegación

- El proyecto cuenta con una barra de navegación simple hecha con `react-router-dom`.
- Se evita que las rutas se acumulen repetidamente al navegar (como `/perfil/perfil/perfil`).

---

## 💡 Notas importantes

- Este proyecto **no tiene funcionalidades reales** (login, bases de datos, lógica de inscripción, etc.).
- Fue creado con fines educativos para demostrar la estructura y navegación de una plataforma web.

---

## 🛠️ Instalación local

Si deseas ejecutarlo en tu máquina local:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
npm install
npm run dev
