// ============================================================
//  DATOS DE OPERADORES — Planta Óxidos · Volcán Cía. Minera
//  Para agregar un operador nuevo: copia un bloque { } y rellena
//  Para cambiar un dato: edita el valor entre comillas
// ============================================================

const PINES = {
  "0000": { rol: "maestro" },           // PIN maestro (tú) — cámbialo
  "1111": { rol: "supervisor" },        // PIN supervisores  — cámbialo
  "2201": { rol: "operador", id: "OP-00100" },  // PIN Juan Pérez
  "2202": { rol: "operador", id: "OP-00200" },  // PIN María García
  "2203": { rol: "operador", id: "OP-00300" },  // PIN Carlos Rodríguez
};

const AREAS = {
  "100": "Chancado",
  "200": "Molienda",
  "300": "Lixiviación",
};

const OPERADORES = [
  {
    id: "OP-00100",
    nombre: "Pérez Quispe, Juan Carlos",
    area: "Chancado",
    cargo: "Operador de Chancado",
    fechaIngresoEmpresa: "01/03/2019",
    fechaIngresoPuesto: "15/06/2022",
    foto: "https://drive.google.com/file/d/1DC9-_-DbnWpZnKqY0KljF-SQgS9kEwH7/view?usp=sharing",
    riesgos: [
      "Trabajo en altura",
      "Equipos en movimiento",
      "Manipulación de Cargas",
    ],
    documentos: [
      {
        tipo: "Certificación",
        nombre: "Trabajo en altura",
        emision: "10/01/2023",
        vencimiento: "10/01/2025",
        estado: "VENCIDO",
        pdf: "https://drive.google.com/file/d/1gN0q0P61JnsoJXfoYWjCl0OwXp7JVoQ1/view?usp=sharing",
      },
      {
        tipo: "Capacitación",
        nombre: "Equipos en movimiento",
        emision: "05/03/2024",
        vencimiento: "05/03/2026",
        estado: "VIGENTE",
        pdf: "https://drive.google.com/file/d/1xFNjBN7fTkgaCvlm-z0fKeOOVDYchFoG/view?usp=sharing",
      },
      {
        tipo: "Capacitación",
        nombre: "Manipulación de Cargas",
        emision: "15/10/2024",
        vencimiento: "15/04/2025",
        estado: "POR VENCER",
        pdf: "https://drive.google.com/file/d/19wnkKp7I60kyw3QX3-_DFiLMeXESMIWk/view?usp=sharing",
      },
    ],
    medico_epp: [
      {
        tipo: "Examen Médico",
        nombre: "Examen Ocupacional Anual",
        emision: "01/06/2024",
        vencimiento: "01/06/2026",
        estado: "VIGENTE",
        pdf: "https://drive.google.com/file/d/1CdKuWXzAap8j2KBxY-Gk-_L-yeMfFOsP/view?usp=sharing",
      },
    ],
  },

  {
    id: "OP-00200",
    nombre: "García Torres, María Elena",
    area: "Molienda",
    cargo: "Operadora de Molienda",
    fechaIngresoEmpresa: "10/07/2020",
    fechaIngresoPuesto: "10/07/2020",
    foto: "https://drive.google.com/file/d/1QhsIgQrtBqFJ_7d3W6aJml_-eMAj0iEY/view?usp=sharing",
    riesgos: [
      "Riesgo eléctrico",
      "Trabajo en espacios confinados",
    ],
    documentos: [
      {
        tipo: "Certificación",
        nombre: "Riesgo eléctrico",
        emision: "20/06/2024",
        vencimiento: "20/06/2026",
        estado: "VIGENTE",
        pdf: "https://drive.google.com/file/d/1FA_OKghXi-_rcDofBavcziQB9FMwOM9H/view?usp=sharing",
      },
      {
        tipo: "Capacitación",
        nombre: "Trabajo en espacios confinados",
        emision: "01/11/2023",
        vencimiento: "01/11/2025",
        estado: "VIGENTE",
        pdf: "https://drive.google.com/file/d/1Q8R6aZcNm71giE2dgoSwfAzyxxsR3WoT/view?usp=sharing",
      },
    ],
    medico_epp: [
      {
        tipo: "Examen Médico",
        nombre: "Examen Ocupacional Anual",
        emision: "15/08/2024",
        vencimiento: "15/08/2026",
        estado: "VIGENTE",
        pdf: "https://drive.google.com/file/d/1CdKuWXzAap8j2KBxY-Gk-_L-yeMfFOsP/view?usp=sharing",
      },
    ],
  },

  {
    id: "OP-00300",
    nombre: "Rodríguez Lima, Carlos A.",
    area: "Lixiviación",
    cargo: "Operador de Lixiviación",
    fechaIngresoEmpresa: "05/01/2018",
    fechaIngresoPuesto: "01/03/2021",
    foto: "https://drive.google.com/file/d/1JIRM62dhmycSRZxfvQZ6CokBBHUA7i9m/view?usp=sharing",
    riesgos: [
      "Manipulación de Sustancias Químicas",
      "Caída de objetos",
    ],
    documentos: [
      {
        tipo: "Certificación",
        nombre: "Manipulación de Sustancias Químicas",
        emision: "12/04/2024",
        vencimiento: "12/04/2026",
        estado: "VIGENTE",
        pdf: "https://drive.google.com/file/d/1PI3DCC7WMDosOy2dvex8X2Dpld9cr0Kr/view?usp=sharing",
      },
    ],
    medico_epp: [
      {
        tipo: "Examen Médico",
        nombre: "Examen Ocupacional Anual",
        emision: "01/02/2025",
        vencimiento: "01/02/2027",
        estado: "VIGENTE",
        pdf: "https://drive.google.com/file/d/1CdKuWXzAap8j2KBxY-Gk-_L-yeMfFOsP/view?usp=sharing",
      },
    ],
  },
];

// Convierte link de Drive a link directo para mostrar imagen
function driveDirecto(url) {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w400`;
  return url;
}

// Convierte link de Drive a link de preview para PDF
function drivePreview(url) {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://drive.google.com/file/d/${match[1]}/preview`;
  return url;
}

// Calcula años y meses desde una fecha
function tiempoDesde(fechaStr) {
  const [d, m, y] = fechaStr.split("/").map(Number);
  const desde = new Date(y, m - 1, d);
  const hoy = new Date();
  let anios = hoy.getFullYear() - desde.getFullYear();
  let meses = hoy.getMonth() - desde.getMonth();
  if (meses < 0) { anios--; meses += 12; }
  if (anios > 0 && meses > 0) return `${anios} año${anios > 1 ? "s" : ""} ${meses} mes${meses > 1 ? "es" : ""}`;
  if (anios > 0) return `${anios} año${anios > 1 ? "s" : ""}`;
  return `${meses} mes${meses > 1 ? "es" : ""}`;
}
