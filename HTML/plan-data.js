export const tiers = ['essential', 'business', 'enterprise'];
export const tierNames = ['Essential', 'Business', 'Enterprise'];
export const lines = [
  { id: 'soporte', label: 'Soporte', name: 'Soporte y Operación TI', icon: 'fa-headset', description: 'Su equipo trabaja sin interrupciones, con atención y seguimiento para resolver los problemas del día a día.', plans: [
    { price: 400, audience: 'Pequeña empresa con necesidades básicas', features: ['Hasta 15 usuarios, 1 sede', 'Lunes a viernes, 8:00 a 18:00', 'Atención por correo y ticket', 'Resolución de incidencias comunes'] },
    { price: 900, audience: 'Pyme que depende de su tecnología a diario', features: ['16 a 50 usuarios, hasta 2 sedes', 'Lunes a sábado, 7:00 a 20:00', 'Chat, correo, ticket y teléfono', 'Prioridad y escalamiento'] },
    { price: 2000, audience: 'Empresa mediana que no puede detenerse', features: ['51 a 150 usuarios, varias sedes', 'Atención 24/7', 'Todos los canales y técnico asignado', 'Monitoreo proactivo'] }
  ] },
  { id: 'seguridad', label: 'Seguridad', name: 'Seguridad y Redes', icon: 'fa-shield-halved', description: 'Protegemos su red y su información contra accesos no autorizados y ataques, usando los equipos que ya tiene.', plans: [
    { price: 300, audience: 'Empresa sin gestión de seguridad', features: ['1 sede, 1 firewall', 'Configuración básica de seguridad', 'Antivirus y parches críticos', 'Gestión simple de accesos'] },
    { price: 700, audience: 'Pyme con trabajo remoto o datos de clientes', features: ['Hasta 2 sedes', 'Reglas avanzadas de firewall', 'Hardening básico de equipos', 'Roles, MFA y VPN'] },
    { price: 1800, audience: 'Empresa con información crítica o regulada', features: ['Varias sedes', 'Segmentación avanzada (VLANs)', 'Gestión continua de vulnerabilidades', 'Auditoría y trazabilidad'] }
  ] },
  { id: 'automatizacion', label: 'Automatización', name: 'Optimización y Automatización', icon: 'fa-gears', description: 'Menos horas en tareas manuales y menos errores, para que su equipo se dedique a lo que genera ingresos.', plans: [
    { price: 350, audience: 'Empresa con tareas repetitivas puntuales', features: ['1 automatización simple al mes', 'Optimización puntual de procesos', 'Scripts y tareas programadas', 'Integraciones básicas entre herramientas'] },
    { price: 800, audience: 'Pyme con procesos entre áreas', features: ['2 automatizaciones o 1 integración al mes', 'Flujos de aprobación', 'RPA ligero', 'Integraciones por APIs básicas'] },
    { price: 1800, audience: 'Empresa con datos y procesos integrados', features: ['Bolsa de horas dedicada', 'Arquitectura integral', 'RPA avanzado', 'Integraciones complejas (ERP, CRM)'] }
  ] },
  { id: 'consultoria', label: 'Consultoría', name: 'Consultoría y Cumplimiento', icon: 'fa-clipboard-check', description: 'Sabrá dónde está expuesta su empresa y llegará preparada a una auditoría o a la exigencia de un cliente grande.', plans: [
    { price: 250, audience: 'Empresa que nunca ha revisado su TI', features: ['Revisión anual', 'Revisión general de TI', 'Checklist básico', 'Documentación mínima de sistemas'] },
    { price: 600, audience: 'Pyme a la que le piden políticas', features: ['Auditoría anual y seguimiento semestral', 'Análisis de riesgos básico', 'Soporte ISO 27001 básico', 'Políticas de seguridad y TI'] },
    { price: 1500, audience: 'Empresa regulada o que busca ISO 27001', features: ['Auditorías continuas y comité trimestral', 'Gestión de riesgos corporativos', 'Acompañamiento completo: ISO 27001 e ISO 20000', 'Sistema documental con evidencias'] }
  ] },
  { id: 'medida', label: 'A la Medida', name: 'Soluciones a la Medida', icon: 'fa-code', description: 'Tecnología hecha para su negocio cuando lo estándar no alcanza, con un equipo que la mantiene y la hace crecer.', plans: [
    { price: 400, hours: 10, audience: 'Empresa con un sistema propio que necesita ajustes', features: ['Bolsa de 10 h al mes', 'Pequeños desarrollos', 'Correcciones menores', 'Atención por solicitud'] },
    { price: 1050, hours: 30, audience: 'Pyme que quiere ampliar sus aplicaciones', features: ['Bolsa de 30 h al mes', 'Módulos y automatizaciones', 'Mejora e integración', 'Plan de trabajo mensual'] },
    { price: 2600, hours: 80, audience: 'Empresa con proyectos estratégicos', features: ['Equipo dedicado, desde 80 h al mes', 'Soluciones de principio a fin', 'Arquitectura empresarial', 'Gestión de proyectos y soporte evolutivo'] }
  ] }
];

export function resolveSelection(search, hash = '') {
  const params = new URLSearchParams(search);
  const line = lines.find(item => item.id === params.get('linea')) || lines[0];
  const candidate = hash.replace('#', '');
  return { line, tier: tiers.includes(candidate) ? candidate : null };
}

export function contactUrl(lineId, tier) {
  return `contact.html?linea=${encodeURIComponent(lineId)}&plan=${encodeURIComponent(tier)}`;
}

export function contactSubject(search) {
  const params = new URLSearchParams(search);
  const line = lines.find(item => item.id === params.get('linea'));
  const tierIndex = tiers.indexOf(params.get('plan'));
  return line && tierIndex >= 0 ? `Solicitud de plan ${tierNames[tierIndex]} — ${line.name}` : '';
}