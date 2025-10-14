import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 15,
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
  },
  section: {
    margin: 3,
    padding: 3,
  },
  title: {
    fontSize: 17,
    marginBottom: 3,
    color: "#4831D4",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 13,
    marginBottom: 2,
    color: "#4831D4",
  },
  text: {
    fontSize: 9,
    marginBottom: 2,
    color: "#374151",
  },
  listItem: {
    fontSize: 9,
    marginBottom: 1,
    color: "#374151",
  },
  header: {
    marginBottom: 8,
  },
  contact: {
    marginBottom: 3,
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  aside: {
    width: "38%",
  },
  main: {
    width: "62%",
  },
  experienceItem: {
    marginBottom: 5,
  },
  experienceTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#4831D4",
    marginBottom: 3,
  },
  experienceDate: {
    fontSize: 7,
    color: "#6B7280",
    marginBottom: 1,
  },
  experienceDescription: {
    fontSize: 9,
    color: "#374151",
    marginBottom: 3,
  },
  experienceList: {
    marginLeft: 3,
  },
  experienceListItem: {
    fontSize: 9,
    color: "#374151",
    marginBottom: 1,
  },
  link: {
    fontSize: 9,
    color: "#4831D4",
    textDecoration: "underline",
    marginBottom: 1,
  },
});

export const CVPdf = () => (
  <Document>
    <Page size="A4" orientation="portrait" style={styles.page}>
      <View style={styles.grid}>
        <View style={styles.aside}>
          <View style={styles.section}>
            <Text style={styles.title}>sulaimaneltaha.com</Text>
            <Text style={styles.text}>Badalona, España</Text>
            <Text style={styles.text}>sulat3821@gmail.com</Text>
            <Text style={styles.text}>692 866 417</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Tecnologías</Text>
            
            <Text style={styles.experienceTitle}>
              Experiencia profesional / freelance:
            </Text>
            {[
              "JavaScript",
              "HTML5",
              "CSS3",
              "React",
              "Tailwind CSS",
              "Material UI",
              "PHP",
              "Symfony",
              "MySQL",
              "Git",
              "Agile",
            ].map((tech, index) => (
              <Text key={index} style={styles.listItem}>
                • {tech}
              </Text>
            ))}

            <Text style={[styles.experienceTitle, { marginTop: 5 }]}>
              Proyectos propios:
            </Text>
            {[
              "Next.js",
              "TypeScript",
              "Prisma",
              "AWS",
              "PostgreSQL",
              "Vercel",
              "Railway",
              "Laravel",
              "ShadCN",
              "Bootstrap",
              "Python",
              "Unreal Engine 5",
            ].map((tech, index) => (
              <Text key={index} style={styles.listItem}>
                • {tech}
              </Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Certificaciones</Text>
            <View style={{ marginBottom: 1 }}>
              <Text style={styles.listItem}>• Mejor Proyecto de Clase con Unreal Engine 5</Text>
              <Link src="https://ucarecdn.com/c88ac86c-9833-4993-95a2-97c485d990df/" style={styles.link}>
                  Ver certificado
              </Link>
            </View>
            <View style={{ marginBottom: 1 }}>
              <Text style={styles.listItem}>• Curso de Introducción al diseño de UI</Text>
              <Link src="https://openwebinars.net/cert/IYM0" style={styles.link}>
                  Ver certificado
              </Link>
            </View>
            <View style={{ marginBottom: 1 }}>
              <Text style={styles.listItem}>• Curso Python</Text>
              <Link src="https://ucarecdn.com/c8254922-37f0-4b5c-99e8-0f971c4cd684/" style={styles.link}>
                  Ver certificado
              </Link>
            </View>
            <View style={{ marginBottom: 1 }}>
              <Text style={styles.listItem}>• Curso de JavaScript avanzado</Text>
              <Link src="https://openwebinars.net/cert/mYNpD" style={styles.link}>
                  Ver certificado
              </Link>
            </View>
            <View style={{ marginBottom: 1 }}>
              <Text style={styles.listItem}>• Curso de HTML5 Y CSS3</Text>
              <Link src="https://openwebinars.net/cert/wEXpE" style={styles.link}>
                  Ver certificado
              </Link>
            </View>
            <View style={{ marginBottom: 1 }}>
              <Text style={styles.listItem}>• Curso de JavaScript intermedio</Text>
              <Link src="https://openwebinars.net/cert/Mymzr" style={styles.link}>
                  Ver certificado
              </Link>
            </View>
            <View style={{ marginBottom: 1 }}>
              <Text style={styles.listItem}>• Curso de JavaScript para principantes</Text>
              <Link src="https://openwebinars.net/cert/3OPYp" style={styles.link}>
                  Ver certificado
              </Link>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Formación</Text>
            <View style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>Centro FP Llefia</Text>
              <Text style={styles.text}>
                Técnico superior de desarrollo de aplicaciones web
              </Text>
              <Text style={styles.experienceDate}>
                Septiembre 2023 - Junio 2025
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Otros</Text>
            {[
              "Refactorización de código",
              "Diseño responsivo",
              "Trabajo en equipo",
              "Resolución autónoma de problemas",
              "Iniciativa",
              "Adaptabilidad",
              "Comunicación",
              "Aprendizaje continuo",
            ].map((skill, index) => (
              <Text key={index} style={styles.listItem}>
                • {skill}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.title}>Suleiman</Text>
            <Text style={styles.title}>El Taha Santos</Text>
            <Text style={styles.subtitle}>Junior Fullstack Developer</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.text}>
              Soy un desarrollador web apasionado por crear experiencias
              digitales excepcionales. Con una sólida formación en desarrollo
              frontend y backend, me esfuerzo por construir aplicaciones web
              rápidas, accesibles y fáciles de usar. Siempre estoy buscando
              aprender nuevas tecnologías y mejorar mis habilidades.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Experiencia</Text>

            <View style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>
                SM Sistemas medioambientales — Trainee fullstack developer
              </Text>
              <Text style={styles.experienceDate}>Junio 2024 - Junio 2025</Text>
              <Text style={styles.experienceDescription}>
                Trabajé como desarrollador fullstack en un equipo ágil,
                utilizando React, Material UI, Tailwind CSS, Symfony, MySQL y
                Git. Estas fueron algunas de mis principales responsabilidades:
              </Text>
              <View style={styles.experienceList}>
                {[
                  "Desarrollo de componentes escalables y reutilizables en React, migrando estilos de Material UI a Tailwind CSS.",
                  "Rediseño de interfaces clave (Login, Registro, Recuperación), mejorando usabilidad y experiencia móvil.",
                  "Implementación de funcionalidades como recuperación de contraseña vía EmailJS y fetch API personalizado",
                  "Refactorización de código, resolución de problemas de UX y estandarización de peticiones HTTP.",
                  "Optimización del backend en Symfony: controladores, consultas, asignación de roles y lógica de distribución horaria.",
                ].map((item, index) => (
                  <Text key={index} style={styles.experienceListItem}>
                    • {item}
                  </Text>
                ))}
              </View>
            </View>

            <View style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>
                Grupo Guarani — Backend Developer
              </Text>
              <Text style={styles.experienceDate}>Marzo 2025 - Abril 2025</Text>
              <Text style={styles.experienceDescription}>
                Trabajé de forma autónoma como desarrollador backend,
                colaborando en la implementación de un sistema de facturación
                para una web empresarial. El proyecto se desarrolló bajo
                metodología Agile en conjunto con otro desarrollador.
              </Text>
              <View style={styles.experienceList}>
                {[
                  "Mejoré un CRUD de facturación con PHP, MySQL y Tailwind CSS",
                  "Implementé generación de facturas en PDF.",
                  "Trabajé en metodología Agile junto a otro desarrollador.",
                  "Optimicé la interfaz para mejorar la experiencia de usuario.",
                ].map((item, index) => (
                  <Text key={index} style={styles.experienceListItem}>
                    • {item}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.subtitle}>Proyectos personales destacados</Text>

              <View style={styles.experienceItem}>
                <Text style={styles.experienceTitle}>Tetris</Text>
                <Link src="https://github.com/SulaimanTahaSantos/ProyectoTetrisSulaiman" style={styles.link}>
                  Repositorio en GitHub
                </Link>
                <Link src="https://proyecto-tetris-sulaiman.vercel.app/" style={styles.link}>
                  Ver proyecto web
                </Link>
              </View>

              <View style={styles.experienceItem}>
                <Text style={styles.experienceTitle}>
                  Sistema de gestión de incidencias
                </Text>
                <Link src="https://github.com/SulaimanTahaSantos/GestorIncidenciasSulaiman" style={styles.link}>
                  Repositorio en GitHub
                </Link>
                <Link src="https://gestor-incidencias-sulaiman.vercel.app" style={styles.link}>
                   Ver proyecto web
                </Link>
              </View>

              <View style={styles.experienceItem}>
                <Text style={styles.experienceTitle}>Uno Game</Text>
                <Link src="https://github.com/SulaimanTahaSantos/UnoGame" style={styles.link}>
                  Repositorio en GitHub
                </Link>
                <Link src="https://sulaiman.alwaysdata.net/UF2/jocUno/formulario.php" style={styles.link}>
                  Ver proyecto web
                </Link>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
