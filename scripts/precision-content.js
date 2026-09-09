/**
 * Course resources content
 * Add new activities by appending one object to the activities array.
 */

window.precisionEngineeringContent = {
  schemaVersion: '2.0',
  generalTools: [
    {
      id: 'flight-instruments-sim',
      title: { en: 'Flight Instruments Simulator', es: 'Simulador de Instrumentos de Vuelo' },
      description: {
        en: 'Interactive analog cockpit panel for navigation and pilot training.',
        es: 'Panel analógico interactivo para navegación y entrenamiento de pilotos.'
      },
      url: '/projects/flight-instruments.html'
    },
    {
      id: 'garmin-g1000-sim',
      title: { en: 'Garmin G1000 System', es: 'Sistema Garmin G1000' },
      description: {
        en: 'Glass cockpit simulation with synchronized PFD and MFD displays.',
        es: 'Simulación de cabina digital con pantallas PFD y MFD sincronizadas.'
      },
      url: '/projects/garmin-g1000.html'
    },
    {
      id: 'fluid-dynamics-simulator',
      title: { en: 'Fluid Dynamics Simulator', es: 'Simulador de Dinámica de Fluidos' },
      description: {
        en: 'Interactive fluid models and parameter exploration for engineering classes.',
        es: 'Modelos interactivos de fluidos y exploración de parámetros para clases de ingeniería.'
      },
      url: '/projects/fluid-dynamics.html'
    },
    {
      id: 'aircraft-systems-visualizer',
      title: { en: 'Aircraft Systems Visualizer', es: 'Visualizador de Sistemas de Aeronave' },
      description: {
        en: 'Interactive overview of key aircraft subsystems and operating states.',
        es: 'Vista interactiva de subsistemas clave de aeronaves y estados de operación.'
      },
      url: '/projects/aircraft-systems.html'
    }
  ],
  activities: [
    {
      id: "ingpre-act4-factorial-doe",
      course: "precision-engineering",
      courseLabel: { en: "Precision Engineering", es: "Ingeniería de Precisión" },
      week: "act-04",
      weekLabel: { en: "Activity 04", es: "Actividad 04" },
      labType: "methodology",
      labTypeLabel: { en: "Methodology", es: "Metodología" },
      status: "published",
      statusLabel: { en: "Published", es: "Publicado" },
      title: {
        en: "Activity 4 — Factorial Experiment (2²) Route",
        es: "Actividad 4 — Ruta de Experimento Factorial (2²)"
      },
      description: {
        en: "Direct access to /curso/IngPre/Act4 with an editable methodology page powered by the Metodologia_Actividad4.html addon.",
        es: "Acceso directo a /curso/IngPre/Act4 con metodología editable basada en el addon Metodologia_Actividad4.html."
      },
      procedureUrl: "/curso/IngPre/Act4/",
      instructionUrl: "/addons/Metodologia_Actividad4.html",
      workingFiles: [
        {
          label: { en: "Course route /curso/IngPre/Act4", es: "Ruta del curso /curso/IngPre/Act4" },
          url: "/curso/IngPre/Act4/"
        },
        {
          label: { en: "Editable methodology source", es: "Fuente editable de metodología" },
          url: "/addons/Metodologia_Actividad4.html"
        }
      ]
    },
    {
      id: "metrology-i-week-01-dial-indicator",
      course: "metrology-i",
      courseLabel: { en: "Precision Metrology I", es: "Metrología de Precisión I" },
      week: "week-01",
      weekLabel: { en: "Week 01", es: "Semana 01" },
      labType: "calibration",
      labTypeLabel: { en: "Calibration", es: "Calibración" },
      status: "published",
      statusLabel: { en: "Published", es: "Publicado" },
      title: {
        en: "Dial Indicator Verification Procedure",
        es: "Procedimiento de Verificación de Reloj Comparador"
      },
      description: {
        en: "Step-by-step setup, verification points, and acceptance criteria for bench calibration.",
        es: "Configuración paso a paso, puntos de verificación y criterios de aceptación para calibración en banco."
      },
      instructionUrl: "https://drive.google.com/",
      procedureUrl: "https://notion.so/",
      workingFiles: [
        {
          label: { en: "Verification sheet template", es: "Plantilla de hoja de verificación" },
          url: "https://drive.google.com/"
        },
        {
          label: { en: "Reference tolerance table", es: "Tabla de tolerancias de referencia" },
          url: "https://drive.google.com/"
        }
      ]
    },
    {
      id: "metrology-i-week-03-cmm-datum",
      course: "metrology-i",
      courseLabel: { en: "Precision Metrology I", es: "Metrología de Precisión I" },
      week: "week-03",
      weekLabel: { en: "Week 03", es: "Semana 03" },
      labType: "cmm",
      labTypeLabel: { en: "CMM Inspection", es: "Inspección CMM" },
      status: "published",
      statusLabel: { en: "Published", es: "Publicado" },
      title: {
        en: "CMM Datum Strategy and Report Validation",
        es: "Estrategia de Datums en CMM y Validación de Reporte"
      },
      description: {
        en: "Apply datum selection rules and generate validated measurement reports for industrial parts.",
        es: "Aplicar reglas de selección de datums y generar reportes de medición validados para piezas industriales."
      },
      instructionUrl: "https://drive.google.com/",
      procedureUrl: "https://notion.so/",
      workingFiles: [
        {
          label: { en: "Part alignment checklist", es: "Checklist de alineación de pieza" },
          url: "https://drive.google.com/"
        },
        {
          label: { en: "Sample CMM report", es: "Reporte CMM de ejemplo" },
          url: "https://drive.google.com/"
        }
      ]
    },
    {
      id: "process-eng-week-05-spc-seal-integrity",
      course: "process-engineering",
      courseLabel: { en: "Process Engineering", es: "Ingeniería de Procesos" },
      week: "week-05",
      weekLabel: { en: "Week 05", es: "Semana 05" },
      labType: "spc",
      labTypeLabel: { en: "Statistical Process Control", es: "Control Estadístico de Proceso" },
      status: "draft",
      statusLabel: { en: "Draft", es: "Borrador" },
      title: {
        en: "Seal Integrity Activity Selection",
        es: "Selección de Actividades de Integridad de Sellado"
      },
      description: {
        en: "Internal activity set for selecting sampling plans and documenting process capability decisions.",
        es: "Conjunto interno de actividades para seleccionar planes de muestreo y documentar decisiones de capacidad de proceso."
      },
      instructionUrl: "https://drive.google.com/",
      procedureUrl: "https://notion.so/",
      workingFiles: [
        {
          label: { en: "SPC workbook", es: "Libro de trabajo SPC" },
          url: "https://drive.google.com/"
        }
      ]
    }
  ]
};
