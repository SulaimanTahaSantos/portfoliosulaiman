import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";

const PURPLE = "#4831D4";
const DARK = "#1f2937";
const GRAY = "#374151";
const LIGHT_GRAY = "#6B7280";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    paddingTop: 18,
    backgroundColor: "#ffffff",
  },
  headerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: DARK,
    marginBottom: 1,
  },
  headerTitle: {
    fontSize: 10,
    color: PURPLE,
    marginBottom: 4,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 6,
    paddingBottom: 5,
    borderBottomColor: PURPLE,
    borderBottomWidth: 1,
  },
  contactText: {
    fontSize: 8,
    color: GRAY,
  },
  link: {
    fontSize: 8,
    color: PURPLE,
    textDecoration: "underline",
  },
  section: {
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: PURPLE,
    textTransform: "uppercase",
    borderBottomColor: "#e5e7eb",
    borderBottomWidth: 0.5,
    paddingBottom: 1,
    marginBottom: 3,
  },
  summaryText: {
    fontSize: 8,
    color: GRAY,
    lineHeight: 1.3,
  },
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
  },
  skillTag: {
    fontSize: 7.5,
    color: GRAY,
    borderColor: "#d1d5db",
    borderWidth: 0.5,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
    marginBottom: 2,
  },
  expItem: {
    marginBottom: 5,
  },
  expTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  expRole: {
    fontSize: 8.5,
    fontWeight: "bold",
    color: DARK,
    flex: 1,
    marginRight: 8,
  },
  expDate: {
    fontSize: 7,
    color: LIGHT_GRAY,
  },
  expCompany: {
    fontSize: 8,
    color: PURPLE,
    marginBottom: 2,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 1,
    paddingLeft: 2,
  },
  bulletDot: {
    fontSize: 8,
    color: GRAY,
    marginRight: 4,
    width: 7,
  },
  bulletText: {
    fontSize: 8,
    color: GRAY,
    flex: 1,
    lineHeight: 1.2,
  },
  eduItem: {
    marginBottom: 3,
  },
  eduTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  eduDegree: {
    fontSize: 8.5,
    fontWeight: "bold",
    color: DARK,
    flex: 1,
    marginRight: 8,
  },
  eduDate: {
    fontSize: 7,
    color: LIGHT_GRAY,
  },
  eduSchool: {
    fontSize: 8,
    color: GRAY,
  },
  certRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  certItem: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 2,
    paddingRight: 4,
  },
  certText: {
    fontSize: 8,
    color: GRAY,
  },
  certLink: {
    fontSize: 7.5,
    color: PURPLE,
    textDecoration: "underline",
  },
});

export const CVPdf = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* HEADER */}
      <Text style={styles.headerName}>Suleiman El Taha Santos</Text>
      <Text style={styles.headerTitle}>Junior Fullstack Developer</Text>
      <View style={styles.contactRow}>
        <Text style={styles.contactText}>Badalona, España</Text>
        <Text style={styles.contactText}>sulat3821@gmail.com</Text>
        <Text style={styles.contactText}>692 866 417</Text>
        <Link
          src="https://www.linkedin.com/in/suleiman-el-taha-santos-6b0054254/"
          style={styles.link}
        >
          linkedin.com/in/suleiman-el-taha-santos-6b0054254
        </Link>
        <Link src="https://github.com/SulaimanTahaSantos" style={styles.link}>
          github.com/SulaimanTahaSantos
        </Link>
      </View>

      {/* RESUMEN */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumen</Text>
        <Text style={styles.summaryText}>
          Desarrollador Fullstack Junior con 2 años de experiencia profesional
          en entornos empresariales. Especializado en JavaScript, TypeScript,
          React y Next.js en frontend; Node.js, Express.js, PHP y Symfony en
          backend. Historial demostrado de migración de stacks tecnológicos (PHP
          a Ruby on Rails, React a Next.js), desarrollo de +20 dashboards en
          Qlik Sense Enterprise y Power BI, y optimización de consultas Oracle
          SQL reduciendo tiempos de carga en un 22%.
        </Text>
      </View>

      {/* HABILIDADES TÉCNICAS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
        <View style={styles.skillsRow}>
          {[
            "TypeScript",
            "React",
            "Next.js",
            "Express.js",
            "PHP",
            "Symfony",
            "MySQL",
            "Oracle SQL",
            "Git",
            "Tailwind CSS",
            "Material UI",
            "Qlik Sense Enterprise",
            "Power BI",
            "Linux",
            "Windows",
            "Active Directory",
            "PowerShell",
          ].map((skill, i) => (
            <Text key={i} style={styles.skillTag}>
              {skill}
            </Text>
          ))}
        </View>
      </View>

      {/* EXPERIENCIA PROFESIONAL */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiencia Profesional</Text>

        <View style={styles.expItem}>
          <View style={styles.expTopRow}>
            <Text style={styles.expRole}>
              Junior Fullstack Developer & IT Técnico
            </Text>
            <Text style={styles.expDate}>Nov 2025 – Mar 2026</Text>
          </View>
          <Text style={styles.expCompany}>Experis España & Famatel Spain</Text>
          {[
            "Migración completa del backend (PHP → Ruby on Rails) y frontend (React → Next.js + TypeScript), reduciendo el tiempo de despliegue en un 35%.",
            "Desarrollo y mantenimiento de +20 dashboards en Qlik Sense Enterprise y Power BI, mejorando la visibilidad de KPIs para 3 departamentos.",
            "Optimización de +15 consultas Oracle SQL reduciendo el tiempo de generación de informes en un 40%.",
            "Implementación de cargas automáticas de datos cada 30 minutos con exportación a Excel; datos procesados: +10.000 registros diarios.",
            "Desarrollo de APIs RESTful con Node.js y Express.js; controladores optimizados en Symfony con gestión de roles para 4 tipos de usuario.",
            "Gestión del ERP JD Edwards: pedidos, precios, forecast (Symfony) y cargas masivas vía Excel (+500 líneas por carga).",
            "Refactorización con Next.js, TypeScript y Prisma mejorando el rendimiento de páginas en un 30%.",
            "Administración de servidores Linux y Windows, incluyendo Active Directory, PowerShell y gestión de backups.",
            "Soporte a usuarios: resolución de incidencias de software y hardware, formación y documentación técnica.",
            "Gestión de incidencias de hardware: procesadores, placas base, BIOS, discos duros, SSD y memoria.",
            "Permisos segun departamentos en Qlik sense Enterprise y Power BI, asegurando la confidencialidad de los datos.",
            "Implementacion de indices en Oracle SQL mejorando el tiempo de respuesta de consultas complejas en un 22%.",
          ].map((item, i) => (
            <View key={i} style={styles.bullet}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.expItem}>
          <View style={styles.expTopRow}>
            <Text style={styles.expRole}>Trainee Fullstack Developer</Text>
            <Text style={styles.expDate}>Jun 2024 – Jun 2025</Text>
          </View>
          <Text style={styles.expCompany}>SM Sistemas Medioambientales</Text>
          {[
            "Desarrollo de +10 componentes reutilizables en React, reduciendo el tiempo de desarrollo de nuevas vistas en un 30%.",
            "Migración de Material UI a Tailwind CSS reduciendo el bundle CSS en un 35% y mejorando los tiempos de carga.",
            "Rediseño de Login, Registro y Recuperación de Contraseña aumentando la tasa de conversión del onboarding en un 20%.",
            "Creación de un fetch personalizado para consumo de APIs, eliminando +200 líneas de código duplicado.",
            "Desarrollo de sistema de gestión de horas y vacaciones para 3 tipos de contrato con distribución automática.",
            "Optimización de controladores Symfony y consultas MySQL mejorando el tiempo de respuesta del backend en un 25%.",
          ].map((item, i) => (
            <View key={i} style={styles.bullet}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.expItem}>
          <View style={styles.expTopRow}>
            <Text style={styles.expRole}>Backend Developer (Freelance)</Text>
            <Text style={styles.expDate}>Mar 2025 – Abr 2025</Text>
          </View>
          <Text style={styles.expCompany}>Grupo Guarani</Text>
          {[
            "Desarrollo de un CRUD de facturación con PHP, MySQL y Tailwind CSS.",
            "Implementación de generación automática de facturas en PDF.",
            "Colaboración con otro desarrollador bajo metodología Agile.",
          ].map((item, i) => (
            <View key={i} style={styles.bullet}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.expItem}>
          <View style={styles.expTopRow}>
            <Text style={styles.expRole}>Técnico de soporte IT</Text>
            <Text style={styles.expDate}>May 2022 – Feb 2023</Text>
          </View>
          <Text style={styles.expCompany}>Centre d&apos;FP Llefià</Text>
          {[
            "Gestión de incidencias de hardware: procesadores, placas base, BIOS, discos duros, SSD y memoria.",
            "Configuración de redes: switches, IPs locales y dispositivos PLC.",
            "Administración con PowerShell (Active Directory, GPO) y Linux (chmod, useradd, etc.).",
            "Gestión de backups, cuotas de espacio, permisos de carpetas y directivas por rol de usuario.",
            "Documentación técnica: manuales de instalación, directivas, hardware, software y licencias.",
            "Mantenimiento de equipos y periféricos: impresoras, proyectores, monitores y portátiles.",
            "Resolución de incidencias de software: Windows, Linux, Office, navegadores y aplicaciones web.",
            "Soporte a usuarios: resolución de problemas, formación.",
            "Enseñar a otros como dar asistencia técnica a usuarios y como resolver problemas de software y hardware.",
          ].map((item, i) => (
            <View key={i} style={styles.bullet}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* FORMACIÓN */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Formación</Text>
        <View style={styles.eduItem}>
          <View style={styles.eduTopRow}>
            <Text style={styles.eduDegree}>
              Técnico Superior en Desarrollo de Aplicaciones Web (DAW)
            </Text>
            <Text style={styles.eduDate}>Sep 2023 – Jun 2025</Text>
          </View>
          <Text style={styles.eduSchool}>Centro FP Llefia, Badalona</Text>
        </View>
        <View style={styles.eduItem}>
          <View style={styles.eduTopRow}>
            <Text style={styles.eduDegree}>
              Técnico en Sistemas Microinformáticos y Redes (SMR)
            </Text>
            <Text style={styles.eduDate}>Sep 2021 – Jun 2023</Text>
          </View>
          <Text style={styles.eduSchool}>Centro FP Llefia, Badalona</Text>
        </View>
      </View>

      {/* CERTIFICACIONES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certificaciones</Text>
        <View style={styles.certRow}>
          {[
            {
              name: "Mejor Proyecto de Clase con Unreal Engine 5",
              url: "https://ucarecdn.com/c88ac86c-9833-4993-95a2-97c485d990df/",
            },
            {
              name: "Curso de Introducción al Diseño de UI",
              url: "https://openwebinars.net/cert/IYM0",
            },
            {
              name: "Curso de Python",
              url: "https://ucarecdn.com/c8254922-37f0-4b5c-99e8-0f971c4cd684/",
            },
            {
              name: "Curso de JavaScript Avanzado",
              url: "https://openwebinars.net/cert/mYNpD",
            },
            {
              name: "Curso de HTML5 y CSS3",
              url: "https://openwebinars.net/cert/wEXpE",
            },
            {
              name: "Curso de JavaScript Intermedio",
              url: "https://openwebinars.net/cert/Mymzr",
            },
            {
              name: "Curso de JavaScript para Principiantes",
              url: "https://openwebinars.net/cert/3OPYp",
            },
          ].map((cert, i) => (
            <View key={i} style={styles.certItem}>
              <Text style={styles.certText}>• {cert.name} —</Text>
              <Link src={cert.url} style={styles.certLink}>
                Ver certificado
              </Link>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);
