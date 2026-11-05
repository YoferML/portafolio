// Edita solo este archivo para cambiar el contenido del portafolio.
// Las secciones con lista vacía no se muestran.
const DATA = {
  name: "Yofer Ticliahuanca Herrera",
  initials: "YT",
  avatar: "assets/foto.jpg", // ej. "assets/foto.jpg" (si queda vacío se muestran las iniciales)
  role: "Matemático orientado a la Ingeniería de Machine Learning",
  location: "Piura, Perú",
  links: [
    { icon: "mail", label: "Correo", url: "mailto:yoferivanticliahuanca@email.com" },
    { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/yofer-ivan-ticliahuanca-731870274/" },
    { icon: "github", label: "GitHub", url: "https://github.com/YoferML" },
    { icon: "file", label: "Descargar CV", url: "assets/cv.pdf" }
  ],
  about: [
    "Soy matemático en formación con orientación a la computación. Mi base en ciencias puras me permite entender el funcionamiento interno, la optimización y el comportamiento de los algoritmos de IA, en lugar de tratarlos como una caja negra.",
    "Me interesa cerrar la brecha entre la ciencia de datos y el software listo para producción: tomar un modelo, exponerlo con una API asíncrona en FastAPI y desplegarlo en la nube con Docker."
  ],
  technologies: [
    { group: "Fundamentos matemáticos", items: ["Álgebra lineal", "Cálculo", "Probabilidad y modelado estocástico", "Optimización", "Lógica difusa"] },
    { group: "Lenguajes y librerías", items: ["Python", "JavaScript", "NumPy", "SciPy", "Scikit-Learn", "Scikit-Fuzzy", "PyTorch"] },
    { group: "Backend y despliegue", items: ["FastAPI", "Flask", "Docker", "Render", "Git y GitHub", "CI/CD"] }
  ],
  experience: [
    // { title: "Cargo", place: "Empresa", date: "2025 - Actualidad", description: "Qué hiciste y con qué resultado." }
  ],
  projects: [
    {
      title: "Clasificador de vidrio con lógica difusa",
      date: "2026",
      description: "Sistema de inferencia difusa que clasifica tipos de vidrio según 9 propiedades físico-químicas, desplegado como API.",
      details: [
        { label: "Datos", text: "Dataset de Kaggle, limpiado y preparado." },
        { label: "Matemática", text: "Sistema difuso con scikit-fuzzy y reglas obtenidas con FISPRO." },
        { label: "Ingeniería", text: "API asíncrona con FastAPI, en Docker y desplegada en Render." }
      ],
      technologies: ["Python", "FastAPI", "Scikit-Fuzzy", "FISPRO", "Docker", "Render"],
      url: "https://clasificador-vidrio.onrender.com",
      github: "https://github.com/YoferML/clasificador-vidrio"
    }
  ],
  training: [
    { title: "Licenciatura en Matemática Pura", place: "Universidad Nacional de Piura", date: "2023 - En curso", description: "" },
    { title: "Formación en Inteligencia Artificial y Machine Learning", place: "Cursos de fundamentos matemáticos de IA y machine learning", date: "", description: "" }
  ],
  extra: [
    // { title: "Kaggle", text: "Describe aquí competencias, artículos o apuntes." }
    {
      title: "El Perceptrón",
      text: "Fundamentos matemáticos del modelo del Perceptrón.",
      url: "assets/el_percentron.pdf", // Ruta a tu archivo PDF o enlace externo
      image: "assets/portada_perceptron.jpg"
    }
  ]
};
