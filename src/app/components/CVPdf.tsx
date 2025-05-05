import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%'
  },
  section: {
    margin: 5,
    padding: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    color: '#4831D4',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 3,
    color: '#4831D4'
  },
  text: {
    fontSize: 10,
    marginBottom: 3,
    color: '#374151'
  },
  listItem: {
    fontSize: 9,
    marginBottom: 2,
    color: '#374151'
  },
  header: {
    marginBottom: 10
  },
  contact: {
    marginBottom: 5
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  aside: {
    width: '35%'
  },
  main: {
    width: '65%'
  },
  experienceItem: {
    marginBottom: 8
  },
  experienceTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#4831D4',
    marginBottom: 6
  },
  experienceDate: {
    fontSize: 9,
    color: '#6B7280',
    marginBottom: 2
  },
  experienceDescription: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 2
  },
  experienceList: {
    marginLeft: 5
  },
  experienceListItem: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 2
  }
});

export const CVPdf = () => (
  <Document>
    <Page size="A4" orientation="portrait" style={styles.page}>
      <View style={styles.grid}>
        <View style={styles.aside}>
          <View style={styles.section}>
            <Text style={styles.title}>Suleiman.dev</Text>
            <Text style={styles.text}>Badalona, España</Text>
            <Text style={styles.text}>sulat3821@gmail.com</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Tecnologías</Text>
            {[
              "JavaScript", "TypeScript", "PHP", "HTML", "CSS", "Sass", "Java", "Python", "C++",
              "React", "Next.js", "Vite", "Tailwind CSS", "Material UI", "Bootstrap", "Bulma", "Shadcn",
              "Node.JS", "Express.js", "Laravel", "Symfony",
              "MySQL", "PostgreSQL", "Supabase",
              "Git", "GitHub",
              "Vercel", "Railway", "Netlify"
            ].map((tech, index) => (
              <Text key={index} style={styles.listItem}>• {tech}</Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Certificaciones</Text>
            {[
              "Curso de Introducción al diseño de interfaz de usuarios (UI)",
              "Curso Python",
              "Curso de JavaScript avanzado",
              "Curso de HTML5 Y CSS3",
              "Curso de JavaScript intermedio",
              "Curso de JavaScript para principantes"
            ].map((cert, index) => (
              <Text key={index} style={styles.listItem}>• {cert}</Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Formación</Text>
            <View style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>Centro FP Llefia</Text>
              <Text style={styles.text}>Técnico superior de desarrollo de aplicaciones web</Text>
              <Text style={styles.experienceDate}>Septiembre 2023 - Junio 2025</Text>
            </View>
            <View style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>Centro FP Llefia</Text>
              <Text style={styles.text}>Técnico de sistemas microinformáticos y redes</Text>
              <Text style={styles.experienceDate}>Septiembre 2021 - Junio 2023</Text>
            </View>
            <View style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>Maregassa CEE</Text>
              <Text style={styles.text}>Técnico auxiliar en establecimientos hoteleros y restauración</Text>
              <Text style={styles.experienceDate}>Septiembre 2018 - Junio 2020</Text>
            </View>
            <View style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>Salesians Badalona</Text>
              <Text style={styles.text}>Educación secundaria obligatoria (ESO)</Text>
              <Text style={styles.experienceDate}>Septiembre 2014 - Junio 2018</Text>
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
              "Aprendizaje continuo"
            ].map((skill, index) => (
              <Text key={index} style={styles.listItem}>• {skill}</Text>
            ))}
          </View>
        </View>

        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.title}>Suleiman</Text>
            <Text style={styles.title}>El Taha Santos</Text>
            <Text style={styles.subtitle}>Trainee Fullstack Developer</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.text}>
              Soy un desarrollador web apasionado por crear experiencias digitales excepcionales. 
              Con una sólida formación en desarrollo frontend y backend, me esfuerzo por construir 
              aplicaciones web rápidas, accesibles y fáciles de usar. Siempre estoy buscando 
              aprender nuevas tecnologías y mejorar mis habilidades.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Experiencia</Text>
            
            <View style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>SM Sistemas medioambientales — Trainee fullstack developer</Text>
              <Text style={styles.experienceDate}>Junio 2024 - Presente</Text>
              <Text style={styles.experienceDescription}>
                Actualmente estoy trabajando como becario en SM Sistemas medioambientales, 
                donde estoy desarrollando una aplicación web para la gestión de datos medioambientales. 
                Estoy utilizando tecnologías como React, Tailwind/MaterialUI, Symfony y SQL.
              </Text>
              <View style={styles.experienceList}>
                {[
                  "Desarrollo de componentes reutilizables en React, mejorando la escalabilidad y mantenibilidad del código.",
                  "Adaptación del diseño de aplicaciones para garantizar una experiencia responsive en dispositivos móviles y de escritorio.",
                  "Collaborating with UX designers and researchers to inform the direction of products we craft",
                  "Rediseño integral de las interfaces de Login, Registro y Recuperación de Contraseña, mejorando la usabilidad y el atractivo visual",
                  "Implementación de la funcionalidad de recuperación de contraseña mediante EmailJS",
                  "Migración del sistema de estilos de Material UI a Tailwind CSS, obteniendo una interfaz más ligera y moderna.",
                  "Refactorización de código para optimizar su estructura, rendimiento y legibilidad",
                  "Uso eficiente de Git para la gestión de versiones y trabajo colaborativo en equipo",
                  "Identificación y solución de diversos problemas relacionados con la experiencia de usuario",
                  "Optimización de controladores y consultas en Symfony para mejorar el acceso a la web",
                  "Desarrollo de una lógica personalizada para la asignación automática de roles",
                  "Creación del sistema de jornada de distribución especial, permitiendo una distribución equitativa de horas y gestión flexible de vacaciones entre diferentes períodos."
                ].map((item, index) => (
                  <Text key={index} style={styles.experienceListItem}>• {item}</Text>
                ))}
              </View>
            </View>

            <View style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>Grupo Guarani — Backend Developer</Text>
              <Text style={styles.experienceDate}>Marzo 2025 - Abril 2025</Text>
              <Text style={styles.experienceDescription}>
                Trabajé como desarrollador backend en Grupo Guarani de manera autonoma, 
                donde desarrollé consultas para realizar un crud de facturacion en una base 
                de datos con PHP SQL y Tailwind.
              </Text>
              <View style={styles.experienceList}>
                {[
                  "Participé en la mejora de un CRUD para una página web en la que se implementaba un sistema de facturación.",
                  "El proyecto se llevó a cabo bajo la metodología Agile, colaborando estrechamente con un compañero.",
                  "Utilizamos PHP para la lógica del backend y Tailwind CSS para el diseño de la interfaz, asegurando un diseño limpio y moderno.",
                  "La generación de facturas se realizó con una librería PDF, y las consultas a la base de datos fueron gestionadas con MySQL para asegurar la correcta persistencia y manipulación de la información.",
                  "Este trabajo incluyó la optimización de la interfaz y la integración de funcionalidades adicionales que permitieron a los usuarios gestionar y visualizar sus facturas de forma más eficiente y amigable."
                ].map((item, index) => (
                  <Text key={index} style={styles.experienceListItem}>• {item}</Text>
                ))}
              </View>
            </View>

            <View style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>Centro FP Llefia — Técnico de sistemas</Text>
              <Text style={styles.experienceDate}>Mayo 2022 - Febrero 2023</Text>
              <Text style={styles.experienceDescription}>
                Realice practicas en el centro de formacion profesional en el que arregle 
                todo tipo de incidencias relacionas con software y hardware de los ordenadores del centro.
              </Text>
              <View style={styles.experienceList}>
                {[
                  "Identificación y Resolución de Problemas de Hardware: Resolución de fallos y montaje en procesadores, placas base, pilas (baterías), BIOS, discos duros, SSD y otros componentes. Comprobación y reparación de fallos en las ranuras de memoria.",
                  "Seguridad y cuotas: Realización de copias de seguridad utilizando periféricos para facilitar la transferencia de datos. Asignación de cuotas de espacio a usuarios según prioridades y necesidades.",
                  "Gestión de Permisos: Configuración de permisos en carpetas para evitar la modificación o eliminación de datos por usuarios no autorizados.",
                  "Implementación de Directivas: Creación de directivas para restringir específicas, como cambiar el fondo de pantalla, según roles de acciones del usuario.",
                  "Instalación de Software: Instalación de diversos software, incluyendo XAMPP, Office, Visual Studio, etc.",
                  "Gestión de Redes: Reemplazo de switch para mejorar la conectividad y resolver problemas. Configuración de direcciones IP locales para dispositivos como PLC, facilitando el acceso para usuarios sin permisos de cambio.",
                  "Gestión de Permisos y Archivos en Linux: chmod, ls, tail, head, cp, cd, cat, useradd. PowerShell: gpupdate /force. Documentación: Creación de manuales para la empresa."
                ].map((item, index) => (
                  <Text key={index} style={styles.experienceListItem}>• {item}</Text>
                ))}
              </View>
            </View>

            <View style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>Forn Marena — Prácticas de servicio de hosteleria</Text>
              <Text style={styles.experienceDate}>Octubre 2019 - Junio 2020</Text>
              <Text style={styles.experienceDescription}>
                Realice practicas en el Forn Marena, donde me encargue de
                atender a los clientes y servir comida y bebida. Aprendi a
                trabajar en equipo y a gestionar el tiempo de manera
                eficiente. Durante mi tiempo allí, desarrollé habilidades de
                atención al cliente y aprendí a trabajar en un entorno
                dinámico y de ritmo rápido.
              </Text>
              <View style={styles.experienceList}>
                {[
                  "Recogida de la basura.",
                  "Lavar las herramientas de trabajo y material del local.",
                  "Atención al cliente.",
                  "Ayuda al cocinero.",
                  "Servir cafés y comida."
                ].map((item, index) => (
                  <Text key={index} style={styles.experienceListItem}>• {item}</Text>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
); 