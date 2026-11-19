// Editar solo este archivo para cambiar el contenido del portafolio.
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
    },
    
  {
      title: "Estimador de puntaje SCA para café",
      date: "2026",
  
      description:
          "Aplicación de Machine Learning para estimar el puntaje de taza de café a partir de características del grano verde y atributos de origen.",
  
      details: [
          {
              label: "Datos",
              text: "Dataset de Coffee Quality Institute (CQI) con 1309 lotes de café arábica, previamente limpiado y preparado en Python."
          },
          {
              label: "Machine Learning",
              text: "Se compararon modelos Ridge, Random Forest y Gradient Boosting mediante validación cruzada. El modelo seleccionado fue Random Forest Regressor, con MAE de 1.56 y R² de 0.239."
          },
          {
              label: "Preprocesamiento",
              text: "Imputación de valores faltantes, transformación One-Hot Encoding para variables categóricas y pipeline de Scikit-Learn."
          },
          {
              label: "Despliegue",
              text: "Modelo serializado en formato PKL e integrado en una aplicación interactiva desarrollada con Streamlit."
          }
      ],
  
      technologies: [
          "Python",
          "Pandas",
          "NumPy",
          "Scikit-Learn",
          "Google Colab",
          "Streamlit"
      ],
  
      url: "https://sca-coffee-predictor.streamlit.app",
  
      github: "https://github.com/YoferML/sca-coffee-predictor"
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
      url: "https://docs.google.com/gview?embedded=true&url=https://yoferml.github.io/portafolio/assets/el_percentron.pdf", // Ruta a tu archivo PDF o enlace externo
      image: "assets/portada_perceptron.jpg"
    }
  ]
};
