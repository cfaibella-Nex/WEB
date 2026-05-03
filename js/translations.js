/**
 * translations.js — NexSocial
 * Sistema d'internacionalització CA / ES
 * Ús: applyLang('es') / applyLang('ca')
 * Els elements HTML han de tenir l'atribut data-i18n="clau"
 * Per a placeholders: data-i18n-placeholder="clau"
 * Per a aria-label:   data-i18n-aria="clau"
 */

const translations = {

  // ─── GLOBAL: Topbar ───────────────────────────────────────────────────────
  "topbar.tagline":        { ca: "Nexe de Suport i Acompanyament Sociovital",    es: "Nexo de Apoyo y Acompañamiento Sociovital" },
  "topbar.soc_persona":    { ca: "Soc una persona",                              es: "Soy una persona" },
  "topbar.soc_entitat":    { ca: "Soc una entitat",                              es: "Soy una entidad" },
  "topbar.contacte":       { ca: "Contacte",                                     es: "Contacto" },

  // ─── GLOBAL: Sidebar ──────────────────────────────────────────────────────
  "sidebar.logo_sub":      { ca: "Cooperativa d'Acompanyament\nSociovital",      es: "Cooperativa de Acompañamiento\nSociovital" },
  "nav.inici":             { ca: "Inici",                                         es: "Inicio" },
  "nav.qui_som":           { ca: "Qui som",                                       es: "Quiénes somos" },
  "nav.servei_persones":   { ca: "Servei a Persones",                             es: "Servicio a Personas" },
  "nav.nexacompanya":      { ca: "NexAcompanya",                                  es: "NexAcompanya" },
  "nav.sessions_gestalt":  { ca: "Sessions Gestalt",                              es: "Sesiones Gestalt" },
  "nav.nexgestio":         { ca: "NexGestió",                                     es: "NexGestión" },
  "nav.nexlicitia":        { ca: "NexlicitIA",                                    es: "NexlicitIA" },
  "nav.cas_a_cas":         { ca: "Consulta Cas a Cas",                            es: "Consulta Caso a Caso" },
  "nav.servei_entitats":   { ca: "Servei a Entitats",                             es: "Servicio a Entidades" },
  "nav.collaboracions":    { ca: "Col·laboracions",                               es: "Colaboraciones" },
  "nav.contacte":          { ca: "Contacte",                                      es: "Contacto" },

  // ─── GLOBAL: Footer ───────────────────────────────────────────────────────
  "footer.desc":           { ca: "Cooperativa d'Acompanyament Sociovital a persones i entitats.", es: "Cooperativa de Acompañamiento Sociovital a personas y entidades." },
  "footer.col_serveis":    { ca: "Serveis",                                       es: "Servicios" },
  "footer.cas_a_cas":      { ca: "Cas a Cas",                                     es: "Caso a Caso" },
  "footer.servei_entitats":{ ca: "Servei a Entitats",                             es: "Servicio a Entidades" },
  "footer.col_gestalt":    { ca: "Acompanyament Gestalt",                         es: "Acompañamiento Gestalt" },
  "footer.metode_gestalt": { ca: "Mètode Gestalt",                                es: "Método Gestalt" },
  "footer.demana_cita":    { ca: "Demana cita",                                   es: "Solicita cita" },
  "footer.consulta_preus": { ca: "Consulta preus",                                es: "Consulta precios" },
  "footer.col_empresa":    { ca: "Empresa",                                       es: "Empresa" },
  "footer.qui_som":        { ca: "Qui som",                                       es: "Quiénes somos" },
  "footer.col_segueix":    { ca: "Segueix-nos",                                   es: "Síguenos" },
  "footer.avis_legal":     { ca: "Avís legal",                                    es: "Aviso legal" },
  "footer.privacitat":     { ca: "Política de privacitat",                        es: "Política de privacidad" },
  "footer.cookies":        { ca: "Cookies",                                       es: "Cookies" },
  "footer.registre":       { ca: "Registre de Cooperatives de Catalunya",         es: "Registro de Cooperativas de Cataluña" },
  "footer.copyright":      { ca: "© 2026 NexSocial Cooperativa d'Acompanyament Sociovital —", es: "© 2026 NexSocial Cooperativa de Acompañamiento Sociovital —" },

  // ─── INDEX: Hero ──────────────────────────────────────────────────────────
  "index.hero_tag":        { ca: "Cooperativa d'Acompanyament Sociovital",        es: "Cooperativa de Acompañamiento Sociovital" },
  "index.hero_title1":     { ca: "Al servei de",                                  es: "Al servicio de" },
  "index.hero_title2":     { ca: "les persones",                                  es: "las personas" },
  "index.hero_sub":        { ca: "Acompanyament · Gestió · Transformació",        es: "Acompañamiento · Gestión · Transformación" },
  "index.hero_desc":       { ca: "NexSocial és una cooperativa que neix amb la voluntat de ser un nexe de suport i acompanyament global. Treballem per a la comunitat i per a les persones que necessiten suport en algun moment del seu cicle vital.", es: "NexSocial es una cooperativa que nace con la voluntad de ser un nexo de apoyo y acompañamiento global. Trabajamos para la comunidad y para las personas que necesitan apoyo en algún momento de su ciclo vital." },
  "index.hero_btn_serveis":{ ca: "Els nostres serveis",                            es: "Nuestros servicios" },
  "index.hero_btn_cta":    { ca: "Comencem l'acompanyament →",                    es: "Empecemos el acompañamiento →" },
  "index.stat1_num":       { ca: "+10",                                            es: "+10" },
  "index.stat1_label":     { ca: "Anys d'Experiència",                             es: "Años de Experiencia" },
  "index.stat2_num":       { ca: "100%",                                            es: "100%" },
  "index.stat2_label":     { ca: "Valors Cooperatius",                             es: "Valores Cooperativos" },
  "index.stat3_num":       { ca: "100%",                                            es: "100%" },
  "index.stat3_label":     { ca: "Adaptabilitat Serveis",                          es: "Adaptabilidad Servicios" },
  "index.stat4_label":     { ca: "Atenció personalitzada",                         es: "Atención personalizada" },

  // ─── INDEX: Serveis ───────────────────────────────────────────────────────
  "index.serveis_title":   { ca: "Els nostres serveis",                            es: "Nuestros servicios" },
  "index.serveis_lead1":   { ca: "Dos àmbits d'actuació amb un mateix objectiu:",  es: "Dos ámbitos de actuación con un mismo objetivo:" },
  "index.serveis_lead2":   { ca: "el teu benestar",                                es: "tu bienestar" },
  "index.serveis_desc":    { ca: "Acompanyament sociovital i gestoria social. Dos serveis que poden actuar per separat o de manera coordinada, adaptats a cada persona, família o entitat.", es: "Acompañamiento sociovital y gestión social. Dos servicios que pueden actuar por separado o de forma coordinada, adaptados a cada persona, familia o entidad." },
  "index.acomp_tag":       { ca: "Àrea d'Acompanyament",                           es: "Área de Acompañamiento" },
  "index.acomp_desc":      { ca: "Acompanyem persones i famílies en moments de dificultat. Suport social, emocional i terapèutic adaptat a cada situació i persona.", es: "Acompañamos a personas y familias en momentos de dificultad. Apoyo social, emocional y terapéutico adaptado a cada situación y persona." },
  "index.acomp_li1":       { ca: "Acompanyament Sociovital",                       es: "Acompañamiento Sociovital" },
  "index.acomp_li2":       { ca: "Acompanyament Emocional i Terapèutic",           es: "Acompañamiento Emocional y Terapéutico" },
  "index.acomp_li3":       { ca: "Coach, Gestalt, Psicologia i altres enfocaments",es: "Coach, Gestalt, Psicología y otros enfoques" },
  "index.acomp_li4":       { ca: "Retirs de desconnexió: 2-3 dies",                es: "Retiros de desconexión: 2-3 días" },
  "index.acomp_btn":       { ca: "Descobrir més →",                                es: "Descubrir más →" },
  "index.gestio_tag":      { ca: "Gestoria Social · Ajudes · Mediació",            es: "Gestión Social · Ayudas · Mediación" },
  "index.gestio_desc":     { ca: "Gestoria social cooperativa: gestionem íntegrament en el teu nom, detectem ajudes vigents amb la nostra eina pròpia NexlicitIA, i mediem quan cal.", es: "Gestión social cooperativa: gestionamos íntegramente en tu nombre, detectamos ayudas vigentes con nuestra herramienta propia NexlicitIA, y mediamos cuando es necesario." },
  "index.gestio_li1":      { ca: "Detecció i informació d'ajudes vigents",         es: "Detección e información de ayudas vigentes" },
  "index.gestio_li2":      { ca: "Gestió i tramitació d'ajudes i prestacions socials", es: "Gestión y tramitación de ayudas y prestaciones sociales" },
  "index.gestio_li3":      { ca: "Àmbits: ajudes socials i tràmits migratoris",    es: "Ámbitos: ayudas sociales y trámites migratorios" },
  "index.gestio_li4":      { ca: "Mediació i assessorament social",                es: "Mediación y asesoramiento social" },
  "index.gestio_btn":      { ca: "Descobrir més →",                                es: "Descubrir más →" },
  "index.cta_text":        { ca: "Vols saber quin servei s'adapta millor a la teva situació?", es: "¿Quieres saber qué servicio se adapta mejor a tu situación?" },
  "index.cta_btn":         { ca: "Consulta gratuïta →",                            es: "Consulta gratuita →" },

  // ─── INDEX: Bloc emocional ────────────────────────────────────────────────
  "index.emocional_tag":   { ca: "✦ Destaquem",                                   es: "✦ Destacamos" },
  "index.emocional_title1":{ ca: "Acompanyament",                                  es: "Acompañamiento" },
  "index.emocional_title2":{ ca: "Emocional i Terapèutic",                         es: "Emocional y Terapéutico" },
  "index.emocional_desc":  { ca: "Un espai de suport proper, segur i empàtic per expressar, comprendre i gestionar emocions a partir d'un acompanyament personalitzat. Treballem amb diferents metodologies: Coaching, Gestalt, Psicologia Clínica, Acompanyament Emocional, entre altres — adaptades a cada persona i moment vital.", es: "Un espacio de apoyo cercano, seguro y empático para expresar, comprender y gestionar emociones a partir de un acompañamiento personalizado. Trabajamos con diferentes metodologías: Coaching, Gestalt, Psicología Clínica, Acompañamiento Emocional, entre otras — adaptadas a cada persona y momento vital." },
  "index.emocional_li1":   { ca: "Sessions individuals online i presencials",      es: "Sesiones individuales online y presenciales" },
  "index.emocional_li2":   { ca: "Grups de creixement personal",                   es: "Grupos de crecimiento personal" },
  "index.emocional_li3":   { ca: "Retirs en la natura",                            es: "Retiros en la naturaleza" },
  "index.emocional_ben":   { ca: "Beneficis de l'acompanyament emocional",         es: "Beneficios del acompañamiento emocional" },
  "index.emocional_b1":    { ca: "Millora en la gestió emocional",                 es: "Mejora en la gestión emocional" },
  "index.emocional_b2":    { ca: "Augment d'eines pròpies pel dia a dia",          es: "Aumento de herramientas propias para el día a día" },
  "index.emocional_b3":    { ca: "Millora de l'Autoestima",                        es: "Mejora de la Autoestima" },
  "index.emocional_b4":    { ca: "Desenvolupament personal",                       es: "Desarrollo personal" },
  "index.emocional_b5":    { ca: "Millora social i vital",                         es: "Mejora social y vital" },
  "index.emocional_btn":   { ca: "Saber-ne més →",                                 es: "Saber más →" },

  // ─── NEXACOMPANYA ─────────────────────────────────────────────────────────
  "nacomp.back":           { ca: "← Tornar a Serveis",                             es: "← Volver a Servicios" },
  "nacomp.tag_senior":     { ca: "· Col·lectiu Senior",                            es: "· Colectivo Senior" },
  "nacomp.title_senior":   { ca: "Acompanyament Sociovital a Grans Persones",       es: "Acompañamiento Sociovital a Personas Mayores" },
  "nacomp.desc_senior":    { ca: "Creem vincle, fem barri i acompanyem la persona gran de manera continuada —des de la proximitat i el respecte a la seva autonomia— combinant intervenció individual, grupal i comunitària. Quan la situació ho requereix, connectem directament amb NexGestió per gestionar dependència, ajuts socials o qualsevol tràmit administratiu.", es: "Creamos vínculo, hacemos barrio y acompañamos a la persona mayor de manera continuada —desde la proximidad y el respeto a su autonomía— combinando intervención individual, grupal y comunitaria. Cuando la situación lo requiere, conectamos directamente con NexGestión para gestionar dependencia, ayudas sociales o cualquier trámite administrativo." },
  "nacomp.individual_h":   { ca: "Suport individual i quotidià",                   es: "Apoyo individual y cotidiano" },
  "nacomp.ind_li1":        { ca: "Visites de proximitat i trucades de seguiment periòdic", es: "Visitas de proximidad y llamadas de seguimiento periódico" },
  "nacomp.ind_li2":        { ca: "Acompanyament a cites mèdiques i gestions presencials", es: "Acompañamiento a citas médicas y gestiones presenciales" },
  "nacomp.ind_li3":        { ca: "Comprensió de documents oficials, cartes i notificacions", es: "Comprensión de documentos oficiales, cartas y notificaciones" },
  "nacomp.ind_li4":        { ca: "Suport a la bretxa digital: gestions en línia i app de salut", es: "Apoyo a la brecha digital: gestiones en línea y app de salud" },
  "nacomp.ind_li5":        { ca: "Escolta activa i detecció de necessitats emergents", es: "Escucha activa y detección de necesidades emergentes" },
  "nacomp.grup_h":         { ca: "Activitats grupals i de barri",                  es: "Actividades grupales y de barrio" },
  "nacomp.grup_li1":       { ca: "Club de lectura i tertúlies intergeneracionals", es: "Club de lectura y tertulias intergeneracionales" },
  "nacomp.grup_li2":       { ca: "Tallers emocionals i de connexió amb el present", es: "Talleres emocionales y de conexión con el presente" },
  "nacomp.grup_li3":       { ca: "Grups de relació i construcció de vincles veïnals", es: "Grupos de relación y construcción de vínculos vecinales" },
  "nacomp.grup_li4":       { ca: "Activitats comunitàries per fer barri i reduir l'aïllament", es: "Actividades comunitarias para hacer barrio y reducir el aislamiento" },
  "nacomp.grup_li5":       { ca: "Connexió amb el servei d'acompanyament emocional grupal", es: "Conexión con el servicio de acompañamiento emocional grupal" },
  "nacomp.gestio_h":       { ca: "Connexió amb NexGestió",                         es: "Conexión con NexGestión" },
  "nacomp.gestio_li1":     { ca: "Gestió de la dependència i la prestació per cuidador", es: "Gestión de la dependencia y la prestación por cuidador" },
  "nacomp.gestio_li2":     { ca: "Ajuts socials per a persones en situació de vulnerabilitat", es: "Ayudas sociales para personas en situación de vulnerabilidad" },
  "nacomp.gestio_li3":     { ca: "Bons socials de llum, gas i internet",           es: "Bonos sociales de luz, gas e internet" },
  "nacomp.gestio_li4":     { ca: "Pensió no contributiva i complements a mínims",  es: "Pensión no contributiva y complementos a mínimos" },
  "nacomp.gestio_li5":     { ca: "Coordinació amb serveis socials i entitats del territori", es: "Coordinación con servicios sociales y entidades del territorio" },
  "nacomp.cta1_title":     { ca: "Necessites ajuda amb tràmits?",                  es: "¿Necesitas ayuda con trámites?" },
  "nacomp.cta1_desc":      { ca: "NexGestió gestiona dependència, ajuts i prestacions.", es: "NexGestión gestiona dependencia, ayudas y prestaciones." },
  "nacomp.cta1_btn":       { ca: "Veure →",                                        es: "Ver →" },
  "nacomp.cta2_title":     { ca: "Vols aprofundir en l'àrea emocional?",           es: "¿Quieres profundizar en el área emocional?" },
  "nacomp.cta2_desc":      { ca: "Tallers grupals i acompanyament terapèutic amb Gestalt.", es: "Talleres grupales y acompañamiento terapéutico con Gestalt." },
  "nacomp.cta2_btn":       { ca: "Veure →",                                        es: "Ver →" },
  "nacomp.tag_emocional":  { ca: "· Espai de Suport Emocional i Terapèutic",       es: "· Espacio de Apoyo Emocional y Terapéutico" },
  "nacomp.title_emocional":{ ca: "Acompanyament Emocional i Terapèutic",           es: "Acompañamiento Emocional y Terapéutico" },
  "nacomp.desc_emocional": { ca: "Quan la vida ens posa davant de moments que no sabem com gestionar sols, l'acompanyament emocional i terapèutic obre un espai de suport, escolta i creixement. Des de NexAcompanya, oferim teràpies individualitzades i de grup amb mètodes avalats per més de 10 anys d'experiència clínica i vivencial, sempre en un entorn segur, lliure de judicis i orientat al teu benestar real.", es: "Cuando la vida nos pone ante momentos que no sabemos cómo gestionar solos, el acompañamiento emocional y terapéutico abre un espacio de apoyo, escucha y crecimiento. Desde NexAcompanya, ofrecemos terapias individualizadas y de grupo con métodos avalados por más de 10 años de experiencia clínica y vivencial, siempre en un entorno seguro, libre de juicios y orientado a tu bienestar real." },
  "nacomp.cartera":        { ca: "Cartera de Serveis",                             es: "Cartera de Servicios" },
  "nacomp.cartera_li1":    { ca: "Acompanyament gestàltic integratiu",             es: "Acompañamiento gestáltico integrativo" },
  "nacomp.cartera_li2":    { ca: "Espai segur i empàtic per expressar i comprendre emocions", es: "Espacio seguro y empático para expresar y comprender emociones" },
  "nacomp.cartera_li3":    { ca: "Acompanyament personalitzat adaptat a cada persona i moment vital", es: "Acompañamiento personalizado adaptado a cada persona y momento vital" },
  "nacomp.cartera_li4":    { ca: "Metodologies integratives per a un treball profund i significatiu", es: "Metodologías integrativas para un trabajo profundo y significativo" },
  "nacomp.cartera_li5":    { ca: "Reforcem la resiliència personal",                es: "Reforzamos la resiliencia personal" },
  "nacomp.cartera_li6":    { ca: "Orientació cap a objectius vitals",               es: "Orientación hacia objetivos vitales" },
  "nacomp.gestalt_h":      { ca: "Acompanyament Gestàltic",                        es: "Acompañamiento Gestáltico" },
  "nacomp.gestalt_li1":    { ca: "Terapeuta Gestalt formada i en pràctica activa", es: "Terapeuta Gestalt formada y en práctica activa" },
  "nacomp.gestalt_li2":    { ca: "Enfocament humanista i vivencial",               es: "Enfoque humanista y vivencial" },
  "nacomp.gestalt_li3":    { ca: "Treball des del contacte, el cos i l'aquí i ara", es: "Trabajo desde el contacto, el cuerpo y el aquí y ahora" },
  "nacomp.gestalt_li4":    { ca: "Processos emocionals: dol, vincle, identitat i canvi", es: "Procesos emocionales: duelo, vínculo, identidad y cambio" },
  "nacomp.gestalt_li5":    { ca: "Acompanyament individual de fons, no tractament clínic", es: "Acompañamiento individual de fondo, no tratamiento clínico" },
  "nacomp.format_h":       { ca: "Format i Accés",                                 es: "Formato y Acceso" },
  "nacomp.format_li1":     { ca: "Sessions individuals presencials",               es: "Sesiones individuales presenciales" },
  "nacomp.format_li2":     { ca: "Disponibilitat sessions online",                 es: "Disponibilidad sesiones online" },
  "nacomp.format_li3":     { ca: "Freqüència adaptable: puntual / setmanal / quinzenal", es: "Frecuencia adaptable: puntual / semanal / quincenal" },
  "nacomp.format_li4":     { ca: "Primera trucada de presentació gratuïta",        es: "Primera llamada de presentación gratuita" },
  "nacomp.grup2_h":        { ca: "Grups de creixement personal",                   es: "Grupos de crecimiento personal" },
  "nacomp.preus_tag":      { ca: "Sessions de teràpia · NexAcompanya",             es: "Sesiones de terapia · NexAcompanya" },
  "nacomp.preus_trucada":  { ca: "Primera trucada gratuïta · 15 min",              es: "Primera llamada gratuita · 15 min" },
  "nacomp.preus_des":      { ca: "— Sessions des de 33€",                          es: "— Sesiones desde 33€" },
  "nacomp.preus_ind":      { ca: "Individual 55€",                                 es: "Individual 55€" },
  "nacomp.preus_grup":     { ca: "Grup 33€",                                       es: "Grupo 33€" },
  "nacomp.preus_trim":     { ca: "Trimestral des de 45€",                          es: "Trimestral desde 45€" },
  "nacomp.preus_btn":      { ca: "Veure sessions i preus →",                       es: "Ver sesiones y precios →" },
  "nacomp.estand_h":       { ca: "Estàndards dels nostres serveis",                es: "Estándares de nuestros servicios" },
  "nacomp.estand_conf":    { ca: "Confidencialitat",                               es: "Confidencialidad" },
  "nacomp.estand_conf_d":  { ca: "Espai segur i privat en cada sessió.",           es: "Espacio seguro y privado en cada sesión." },
  "nacomp.estand_seg":     { ca: "Seguretat",                                      es: "Seguridad" },
  "nacomp.estand_seg_d":   { ca: "Entorn de confiança i protecció.",               es: "Entorno de confianza y protección." },
  "nacomp.estand_jud":     { ca: "Sense judicis",                                  es: "Sin juicios" },
  "nacomp.estand_jud_d":   { ca: "Acollida i respecte incondicional.",             es: "Acogida y respeto incondicional." },
  "nacomp.estand_pres":    { ca: "Presència",                                      es: "Presencia" },
  "nacomp.estand_pres_d":  { ca: "Acompanyament real, persona a persona.",         es: "Acompañamiento real, persona a persona." },
  "nacomp.estand_esc":     { ca: "Escolta activa",                                 es: "Escucha activa" },
  "nacomp.estand_esc_d":   { ca: "T'escoltem abans de proposar res.",              es: "Te escuchamos antes de proponer nada." },

  // ─── NEXGESTIÓ ────────────────────────────────────────────────────────────
  "ngestio.tag":           { ca: "Àrea de Gestió",                                 es: "Área de Gestión" },
  "ngestio.hero_desc":     { ca: "Acompanyament en la gestió de tràmits socials, accessible per a tothom. Gestionem, Mediem i Oferim Orientació Jurídica Social amb una visió centrada en la persona i els seus drets.", es: "Acompañamiento en la gestión de trámites sociales, accesible para todos. Gestionamos, Mediamos y Ofrecemos Orientación Jurídica Social con una visión centrada en la persona y sus derechos." },
  "ngestio.back":          { ca: "← Tornar a Serveis",                             es: "← Volver a Servicios" },
  "ngestio.b1_title":      { ca: "Acompanyament en la Gestió de Tràmits Socials",  es: "Acompañamiento en la Gestión de Trámites Sociales" },
  "ngestio.b1_desc":       { ca: "Acompanyem persones i famílies en la gestió de tràmits socials de caire social i administratiu. Coneixem de primera mà la realitat de les persones que acompanyem: gestionem conjuntament en el seu nom, amb traçabilitat total i transparència en els costos, des de la sol·licitud fins a la resolució.", es: "Acompañamos a personas y familias en la gestión de trámites sociales de carácter social y administrativo. Conocemos de primera mano la realidad de las personas que acompañamos: gestionamos conjuntamente en su nombre, con trazabilidad total y transparencia en los costes, desde la solicitud hasta la resolución." },
  "ngestio.tarifes":       { ca: "Tarifes orientatives",                           es: "Tarifas orientativas" },
  "ngestio.tier1_tag":     { ca: "Tràmits socials habituals",                      es: "Trámites sociales habituales" },
  "ngestio.tier1_des":     { ca: "a partir de · preu orientatiu",                  es: "a partir de · precio orientativo" },
  "ngestio.tier1_li1":     { ca: "IMV · RGC · Subsidis SEPE",                      es: "IMV · RGC · Subsidios SEPE" },
  "ngestio.tier1_li2":     { ca: "Ajudes de lloguer i habitatge social",           es: "Ayudas de alquiler y vivienda social" },
  "ngestio.tier1_li3":     { ca: "Bons socials llum, gas, internet",               es: "Bonos sociales luz, gas, internet" },
  "ngestio.tier1_li4":     { ca: "Famílies monoparentals · nombroses",             es: "Familias monoparentales · numerosas" },
  "ngestio.tier1_li5":     { ca: "Pensió no contributiva · complements",           es: "Pensión no contributiva · complementos" },
  "ngestio.tier1_nota":    { ca: "Gestió completa del tràmit, seguiment i notificació de resolució inclosos.", es: "Gestión completa del trámite, seguimiento y notificación de resolución incluidos." },
  "ngestio.tier2_tag":     { ca: "Tràmits complexos i dependència",                es: "Trámites complejos y dependencia" },
  "ngestio.tier2_des":     { ca: "a partir de · preu orientatiu",                  es: "a partir de · precio orientativo" },
  "ngestio.tier2_li1":     { ca: "Dependència · PIA · expedient complet",          es: "Dependencia · PIA · expediente completo" },
  "ngestio.tier2_li2":     { ca: "Arrelament social, laboral i familiar",          es: "Arraigo social, laboral y familiar" },
  "ngestio.tier2_li3":     { ca: "Reagrupament familiar",                          es: "Reagrupación familiar" },
  "ngestio.tier2_li4":     { ca: "Recursos habitatge social · VPO",                es: "Recursos vivienda social · VPO" },
  "ngestio.tier2_li5":     { ca: "Seguiment perllongat · coordinació",             es: "Seguimiento prolongado · coordinación" },
  "ngestio.tier2_nota":    { ca: "Valorem el cas conjuntament. Primera orientació gratuïta i sense compromís.", es: "Valoramos el caso conjuntamente. Primera orientación gratuita y sin compromiso." },
  "ngestio.strip_sub":     { ca: "Cooperativa d'Acompanyament Sociovital",         es: "Cooperativa de Acompañamiento Sociovital" },
  "ngestio.strip_desc":    { ca: "Gestió social amb mirada cooperativa: rigor en el tràmit, proximitat en l'acompanyament.", es: "Gestión social con mirada cooperativa: rigor en el trámite, proximidad en el acompañamiento." },
  "ngestio.strip_btn":     { ca: "Consulta el teu cas →",                          es: "Consulta tu caso →" },
  "ngestio.b2_tag":        { ca: "Servei Estrella",                                es: "Servicio Estrella" },
  "ngestio.b2_title":      { ca: "Detecció, Informació i Gestió d'Ajudes Vigents", es: "Detección, Información y Gestión de Ayudas Vigentes" },
  "ngestio.b2_desc":       { ca: "Estem al dia de totes les convocatòries obertes. Et detectem si et pots acollir a alguna ajuda, t'informem de les condicions i, si és el teu cas, ho gestionem íntegrament en el teu nom fins a la resolució. Un servei clau per a persones que no saben que existeixen ajudes o no tenen temps ni eines per tramitar-les.", es: "Estamos al día de todas las convocatorias abiertas. Detectamos si puedes acogerte a alguna ayuda, te informamos de las condiciones y, si es tu caso, lo gestionamos íntegramente en tu nombre hasta la resolución. Un servicio clave para personas que no saben que existen ayudas o no tienen tiempo ni herramientas para tramitarlas." },
  "ngestio.ambit1":        { ca: "Ajudes de caire social",                         es: "Ayudas de carácter social" },
  "ngestio.ambit1_desc":   { ca: "Prestacions, dependència, IMV, RGC i tràmits de benestar social.", es: "Prestaciones, dependencia, IMV, RGC y trámites de bienestar social." },
  "ngestio.ambit2":        { ca: "Ajudes d'habitatge",                             es: "Ayudas de vivienda" },
  "ngestio.ambit2_desc":   { ca: "Lloguer, borsa social, convocatòries obertes i accés a habitatge protegit.", es: "Alquiler, bolsa social, convocatorias abiertas y acceso a vivienda protegida." },
  "ngestio.ambit3":        { ca: "Tràmits migratoris",                             es: "Trámites migratorios" },
  "ngestio.ambit3_desc":   { ca: "Arrelament, residència, reagrupament familiar i renovacions.", es: "Arraigo, residencia, reagrupación familiar y renovaciones." },
  "ngestio.ambit4":        { ca: "Suport en gestions del dia a dia",               es: "Apoyo en gestiones del día a día" },
  "ngestio.ambit4_desc":   { ca: "Cuidadors, persones amb càrregues familiars, o qualsevol que necessiti ajuda per fer tràmits bàsics.", es: "Cuidadores, personas con cargas familiares, o cualquiera que necesite ayuda para hacer trámites básicos." },
  "ngestio.nexlicitia_priv":{ ca: "Àrea privada dels socis",                       es: "Área privada de los socios" },
  "ngestio.nexlicitia_pan": { ca: "Ajudes-IA i Licitacions-IA",                    es: "Ayudas-IA y Licitaciones-IA" },
  "ngestio.nexlicitia_tag": { ca: "Alimentat per NexlicitIA",                      es: "Alimentado por NexlicitIA" },
  "ngestio.nexlicitia_desc":{ ca: "La nostra eina pròpia detecta automàticament convocatòries obertes de la Generalitat, BDNS i DIBA cada dia.", es: "Nuestra herramienta propia detecta automáticamente convocatorias abiertas de la Generalitat, BDNS y DIBA cada día." },
  "ngestio.nexlicitia_btn": { ca: "Veure NexlicitIA →",                            es: "Ver NexlicitIA →" },
  "ngestio.mediacio_title": { ca: "Mediació i Orientació Jurídica Social",         es: "Mediación y Orientación Jurídica Social" },
  "ngestio.mediacio_desc":  { ca: "Quan sorgeixen conflictes o situacions complexes, la mediació i l'orientació jurídica social obren vies de resolució consensuada, evitant processos llargs i desgastants. Des de NexSocial acompanyem persones i famílies perquè coneguin els seus drets i trobin la millor sortida possible a la seva situació.", es: "Cuando surgen conflictos o situaciones complejas, la mediación y la orientación jurídica social abren vías de resolución consensuada, evitando procesos largos y desgastantes. Desde NexSocial acompañamos a personas y familias para que conozcan sus derechos y encuentren la mejor salida posible a su situación." },
  "ngestio.med_col1_h":    { ca: "Mediació",                                       es: "Mediación" },
  "ngestio.med_li1":       { ca: "Mediació familiar i interpersonal",              es: "Mediación familiar e interpersonal" },
  "ngestio.med_li2":       { ca: "Mediació comunitària i entre veïns",             es: "Mediación comunitaria y entre vecinos" },
  "ngestio.med_li3":       { ca: "Processos de negociació facilitada",             es: "Procesos de negociación facilitada" },
  "ngestio.med_li4":       { ca: "Acords i seguiment dels compromisos",            es: "Acuerdos y seguimiento de los compromisos" },
  "ngestio.med_col2_h":    { ca: "Orientació Jurídica Social",                     es: "Orientación Jurídica Social" },
  "ngestio.jur_li1":       { ca: "Orientació sobre drets i recursos socials",      es: "Orientación sobre derechos y recursos sociales" },
  "ngestio.jur_li2":       { ca: "Situacions de deute i vulnerabilitat econòmica", es: "Situaciones de deuda y vulnerabilidad económica" },
  "ngestio.jur_li3":       { ca: "Acompanyament en processos administratius",      es: "Acompañamiento en procesos administrativos" },
  "ngestio.jur_li4":       { ca: "Derivació a serveis especialitzats",             es: "Derivación a servicios especializados" },
  "ngestio.com_treballem": { ca: "Com treballem",                                  es: "Cómo trabajamos" },
  "ngestio.com_desc":      { ca: "Transparència en el cost del servei, traçabilitat total i acompanyament real fins a la resolució.", es: "Transparencia en el coste del servicio, trazabilidad total y acompañamiento real hasta la resolución." },
  "ngestio.com_p":         { ca: "Ens expliques el teu cas. Valorem conjuntament les accions a realitzar, el cost estimat i el temps previst. Tu decideixes, nosaltres gestionem.", es: "Nos explicas tu caso. Valoramos conjuntamente las acciones a realizar, el coste estimado y el tiempo previsto. Tú decides, nosotros gestionamos." },
  "ngestio.com_cita":      { ca: "\"Primer t'escoltem. Després t'acompanyem.\"",   es: "\"Primero te escuchamos. Después te acompañamos.\"" },
  "ngestio.cta_desc":      { ca: "Explica'ns el teu cas i mirem quines accions podem realitzar per donar-te suport o gestionar-ho íntegrament, amb traçabilitat i confiança.", es: "Cuéntanos tu caso y veamos qué acciones podemos realizar para apoyarte o gestionarlo íntegramente, con trazabilidad y confianza." },
  "ngestio.cta_sub":       { ca: "Primera orientació sense compromís.",             es: "Primera orientación sin compromiso." },
  "ngestio.cta_btn":       { ca: "Contactar →",                                    es: "Contactar →" },

  // ─── NEXLICITIA ───────────────────────────────────────────────────────────
  "nlicit.tag":            { ca: "Eina pròpia · NexSocial",                        es: "Herramienta propia · NexSocial" },
  "nlicit.login_title":    { ca: "Ets membre de NexSocial?",                       es: "¿Eres miembro de NexSocial?" },
  "nlicit.login_desc":     { ca: "Introdueix la contrasenya per accedir a l'eina completa.", es: "Introduce la contraseña para acceder a la herramienta completa." },
  "nlicit.login_btn":      { ca: "🔒 Accedir a NexlicitIA →",                      es: "🔒 Acceder a NexlicitIA →" },

  // ─── SESSIONS GESTALT ─────────────────────────────────────────────────────
  "gestalt.tag":           { ca: "Acompanyament Gestalt · NexAcompanya",           es: "Acompañamiento Gestalt · NexAcompanya" },

  // ─── PERSONES ─────────────────────────────────────────────────────────────
  "persones.acomp_tag":    { ca: "Àrea d'Acompanyament",                           es: "Área de Acompañamiento" },
  "persones.acomp_title":  { ca: "Acompanyament Sociovital",                       es: "Acompañamiento Sociovital" },
  "persones.acomp_desc":   { ca: "Acompanyem persones i famílies en moments de dificultat. Suport social, emocional i terapèutic adaptat a cada situació i persona.", es: "Acompañamos a personas y familias en momentos de dificultad. Apoyo social, emocional y terapéutico adaptado a cada situación y persona." },
  "persones.acomp_btn":    { ca: "Veure tots els serveis →",                       es: "Ver todos los servicios →" },
  "persones.gestio_tag":   { ca: "Tràmits Socials · Ajudes · Mediació",            es: "Trámites Sociales · Ayudas · Mediación" },
  "persones.gestio_title1":{ ca: "Acompanyament en la gestió de",                  es: "Acompañamiento en la gestión de" },
  "persones.gestio_title2":{ ca: "tràmits socials",                                es: "trámites sociales" },
  "persones.gestio_desc":  { ca: "T'assessorem i gestionem tràmits socials amb un enfocament cooperativista. Detectem ajudes vigents amb la nostra eina pròpia NexlicitIA, gestionem en el teu nom i oferim Orientació Jurídica Social quan cal.", es: "Te asesoramos y gestionamos trámites sociales con un enfoque cooperativista. Detectamos ayudas vigentes con nuestra herramienta propia NexlicitIA, gestionamos en tu nombre y ofrecemos Orientación Jurídica Social cuando es necesario." },
  "persones.gestio_li1":   { ca: "Detecció i informació d'ajudes vigents",         es: "Detección e información de ayudas vigentes" },
  "persones.gestio_li2":   { ca: "Gestió i tramitació d'ajudes i prestacions socials", es: "Gestión y tramitación de ayudas y prestaciones sociales" },
  "persones.gestio_li3":   { ca: "Àmbits: habitatge, dependència, estrangeria i prestacions", es: "Ámbitos: vivienda, dependencia, extranjería y prestaciones" },
  "persones.gestio_li4":   { ca: "Mediació i orientació jurídica social",          es: "Mediación y orientación jurídica social" },
  "persones.gestio_btn":   { ca: "Veure tots els serveis →",                       es: "Ver todos los servicios →" },
  "persones.cas_tag":      { ca: "Orientació personalitzada · Gratuïta",           es: "Orientación personalizada · Gratuita" },
  "persones.cas_title":    { ca: "No saps quin servei necessites?",                es: "¿No sabes qué servicio necesitas?" },
  "persones.cas_desc":     { ca: "T'ajudem a identificar quin servei s'adapta millor a la teva situació personal o la de la teva entitat. Analitzem el teu cas de manera individualitzada i t'orientem sense compromís.", es: "Te ayudamos a identificar qué servicio se adapta mejor a tu situación personal o la de tu entidad. Analizamos tu caso de manera individualizada y te orientamos sin compromiso." },
  "persones.cas_li1":      { ca: "Trucada gratuïta, el temps que necessitis",      es: "Llamada gratuita, el tiempo que necesites" },
  "persones.cas_li2":      { ca: "T'orientem cap al servei de NexSocial que s'adapti al teu cas", es: "Te orientamos hacia el servicio de NexSocial que se adapte a tu caso" },
  "persones.cas_li3":      { ca: "Atenció a persones, famílies i entitats",        es: "Atención a personas, familias y entidades" },
  "persones.cas_li4":      { ca: "Resposta en menys de 24h en dies laborables",    es: "Respuesta en menos de 24h en días laborables" },
  "persones.cas_btn":      { ca: "Sol·licitar consulta →",                         es: "Solicitar consulta →" },

  // ─── CONTACTE ─────────────────────────────────────────────────────────────
  "contacte.tag":          { ca: "Parla amb nosaltres",                            es: "Habla con nosotros" },
  "contacte.title":        { ca: "Posem-nos en contacte",                          es: "Pongámonos en contacto" },
  "contacte.h2_1":         { ca: "Estem aquí per",                                 es: "Estamos aquí para" },
  "contacte.h2_2":         { ca: "ajudar-te",                                      es: "ayudarte" },
  "contacte.intro":        { ca: "Tant si necessites acompanyament personal com si ets una entitat que vol col·laborar, explica'ns la teva situació i t'orientem sense cap compromis.", es: "Tanto si necesitas acompañamiento personal como si eres una entidad que quiere colaborar, cuéntanos tu situación y te orientamos sin ningún compromiso." },
  "contacte.email_label":  { ca: "Email",                                          es: "Email" },
  "contacte.web_label":    { ca: "Web",                                            es: "Web" },
  "contacte.ubicacio_label":{ ca: "Ubicació",                                      es: "Ubicación" },
  "contacte.ubicacio_val": { ca: "Barcelona, Catalunya",                           es: "Barcelona, Cataluña" },
  "contacte.horari_label": { ca: "Horari",                                         es: "Horario" },
  "contacte.horari_val":   { ca: "Dilluns a dijous · 10h–18h · Divendres · 10h–15h", es: "Lunes a jueves · 10h–18h · Viernes · 10h–15h" },
  "contacte.form_title":   { ca: "Escriu-nos un missatge",                         es: "Escríbenos un mensaje" },
  "contacte.nom_label":    { ca: "Nom *",                                          es: "Nombre *" },
  "contacte.nom_ph":       { ca: "El teu nom i cognoms",                           es: "Tu nombre y apellidos" },
  "contacte.email2_label": { ca: "Email *",                                        es: "Email *" },
  "contacte.tel_label":    { ca: "Telèfon",                                        es: "Teléfono" },
  "contacte.motiu_label":  { ca: "Motiu",                                          es: "Motivo" },
  "contacte.motiu_sel":    { ca: "Selecciona el motiu...",                         es: "Selecciona el motivo..." },
  "contacte.opt_sociovital":{ ca: "Acompanyament Sociovital (grans persones, soledat)", es: "Acompañamiento Sociovital (personas mayores, soledad)" },
  "contacte.opt_gestalt":  { ca: "Acompanyament Emocional i Gestàltic",            es: "Acompañamiento Emocional y Gestáltico" },
  "contacte.opt_retirs":   { ca: "Retirs de Creixement Personal",                  es: "Retiros de Crecimiento Personal" },
  "contacte.opt_tramits":  { ca: "Acompanyament en la Gestió de Tràmits Socials",  es: "Acompañamiento en la Gestión de Trámites Sociales" },
  "contacte.opt_mediacio": { ca: "Mediació i Orientació Jurídica Social",          es: "Mediación y Orientación Jurídica Social" },
  "contacte.opt_info":     { ca: "Informació General sobre Serveis",               es: "Información General sobre Servicios" },
  "contacte.opt_altres":   { ca: "Altres consultes",                               es: "Otras consultas" },
  "contacte.msg_label":    { ca: "Missatge *",                                     es: "Mensaje *" },
  "contacte.msg_ph":       { ca: "Explica'ns en què podem ajudar-te...",           es: "Cuéntanos en qué podemos ayudarte..." },
  "contacte.rgpd":         { ca: "He llegit i accepto la política de privacitat i autoritzo el tractament de les meves dades per atendre la meva consulta.", es: "He leído y acepto la política de privacidad y autorizo el tratamiento de mis datos para atender mi consulta." },
  "contacte.rgpd_link":    { ca: "política de privacitat",                         es: "política de privacidad" },
  "contacte.success":      { ca: "✓ Missatge enviat! Et respondrem en menys de 24h.", es: "✓ ¡Mensaje enviado! Te responderemos en menos de 24h." },
  "contacte.btn_enviar":   { ca: "Enviar missatge",                                es: "Enviar mensaje" },

  // ─── COL·LABORACIONS ──────────────────────────────────────────────────────
  "collab.tag":            { ca: "Col·labora amb nosaltres",                       es: "Colabora con nosotros" },
  "collab.title":          { ca: "Col·laboracions amb NexSocial",                  es: "Colaboraciones con NexSocial" },
  "collab.desc":           { ca: "Si comparteixes els nostres valors i vols col·laborar amb el projecte, ens encantarà conèixer-te.", es: "Si compartes nuestros valores y quieres colaborar con el proyecto, nos encantará conocerte." },
  "collab.val1_h":         { ca: "Creixement",                                     es: "Crecimiento" },
  "collab.val1_d":         { ca: "Formació contínua i espai per créixer",          es: "Formación continua y espacio para crecer" },
  "collab.val2_h":         { ca: "Cooperació",                                     es: "Cooperación" },
  "collab.val2_d":         { ca: "Model cooperatiu real, amb veu i vot",           es: "Modelo cooperativo real, con voz y voto" },
  "collab.val3_h":         { ca: "Equilibri",                                      es: "Equilibrio" },
  "collab.val3_d":         { ca: "Flexibilitat i conciliació de veritat",          es: "Flexibilidad y conciliación de verdad" },
  "collab.val4_h":         { ca: "Impacte",                                        es: "Impacto" },
  "collab.val4_d":         { ca: "Feina que transforma vides cada dia",            es: "Trabajo que transforma vidas cada día" },
  "collab.form_title":     { ca: "Forma part de NexSocial",                        es: "Forma parte de NexSocial" },
  "collab.form_desc":      { ca: "Si comparteixes els nostres valors i creus que pots aportar valor al projecte, ens encantarà conèixer-te. Envia'ns la teva candidatura espontània o proposta de col·laboració.", es: "Si compartes nuestros valores y crees que puedes aportar valor al proyecto, nos encantará conocerte. Envíanos tu candidatura espontánea o propuesta de colaboración." },
  "collab.nom_label":      { ca: "Nom complet *",                                  es: "Nombre completo *" },
  "collab.nom_ph":         { ca: "El teu nom",                                     es: "Tu nombre" },
  "collab.email_label":    { ca: "Email *",                                        es: "Email *" },
  "collab.tel_label":      { ca: "Telèfon",                                        es: "Teléfono" },
  "collab.area_label":     { ca: "Àrea d'interès *",                               es: "Área de interés *" },
  "collab.area_sel":       { ca: "Selecciona una àrea",                            es: "Selecciona un área" },
  "collab.area_any":       { ca: "Qualsevol àrea",                                 es: "Cualquier área" },
  "collab.motiv_label":    { ca: "Motivació *",                                    es: "Motivación *" },
  "collab.motiv_ph":       { ca: "Per què vols formar part de NexSocial?",         es: "¿Por qué quieres formar parte de NexSocial?" },
  "collab.rgpd":           { ca: "He llegit i accepto la política de privacitat i autoritzo el tractament de les meves dades.", es: "He leído y acepto la política de privacidad y autorizo el tratamiento de mis datos." },
  "collab.ok":             { ca: "✓ Candidatura enviada! Et contactarem aviat.",   es: "✓ ¡Candidatura enviada! Te contactaremos pronto." },
  "collab.btn":            { ca: "Enviar candidatura / proposta →",                es: "Enviar candidatura / propuesta →" },

  // ─── QUI SOM ──────────────────────────────────────────────────────────────
  "quisom.missio_tag":     { ca: "Per què existim",                                es: "Por qué existimos" },
  "quisom.missio_h":       { ca: "Missió",                                         es: "Misión" },
  "quisom.missio_desc":    { ca: "NexSocial és una cooperativa d'acompanyament sociovital. Acompanyem processos de vida coordinant diferents àrees d'intervenció per aconseguir una millora significativa en les persones, famílies i entitats que acompanyem.", es: "NexSocial es una cooperativa de acompañamiento sociovital. Acompañamos procesos de vida coordinando diferentes áreas de intervención para conseguir una mejora significativa en las personas, familias y entidades que acompañamos." },
  "quisom.visio_tag":      { ca: "On volem arribar",                               es: "Adónde queremos llegar" },
  "quisom.visio_h":        { ca: "Visió",                                          es: "Visión" },
  "quisom.visio_desc":     { ca: "Contribuir a una comunitat més humana, cohesionada i sostenible, esdevenint un nexe d'acompanyament sociovital per a persones i entitats, i un referent en el desenvolupament personal, social i organitzacional.", es: "Contribuir a una comunidad más humana, cohesionada y sostenible, convirtiéndonos en un nexo de acompañamiento sociovital para personas y entidades, y un referente en el desarrollo personal, social y organizacional." },
  "quisom.valors_tag":     { ca: "Com actuem",                                     es: "Cómo actuamos" },
  "quisom.valors_h":       { ca: "Valors",                                         es: "Valores" },
  "quisom.valors_desc":    { ca: "Flexibilitat, compromís, col·laboració, respecte, adaptabilitat i professionalitat. Creiem en els principis d'economia sostenible i solidària i respectem els criteris cooperativistes tradicionals.", es: "Flexibilidad, compromiso, colaboración, respeto, adaptabilidad y profesionalidad. Creemos en los principios de economía sostenible y solidaria y respetamos los criterios cooperativistas tradicionales." },
  "quisom.hist_tag":       { ca: "D'on venim",                                     es: "De dónde venimos" },
  "quisom.hist_h":         { ca: "Història",                                       es: "Historia" },
  "quisom.hist_desc":      { ca: "Diferents professionals multidisciplinars vam coincidir i, sota la mateixa premissa, vam crear un projecte en comú on es valorés a les persones, en un entorn modern, actual i col·laboratiu.", es: "Diferentes profesionales multidisciplinares coincidimos y, bajo la misma premisa, creamos un proyecto en común donde se valorara a las personas, en un entorno moderno, actual y colaborativo." },
  "quisom.mv_persones":    { ca: "Persones i famílies",                             es: "Personas y familias" },
  "quisom.mv_comunitat":   { ca: "Comunitat i entorn",                             es: "Comunidad y entorno" },
  "quisom.mv_creixement":  { ca: "Creixement vital",                               es: "Crecimiento vital" },
  "quisom.necessaria_tag": { ca: "Per què neix NexSocial · Benestar Emocional i Acompanyament", es: "Por qué nace NexSocial · Bienestar Emocional y Acompañamiento" },
  "quisom.necessaria_title1":{ ca: "Per què és necessària Nex",                    es: "Por qué es necesaria Nex" },
  "quisom.necessaria_title2":{ ca: ", la cooperativa creada per acompanyar-te en el", es: ", la cooperativa creada para acompañarte en el" },
  "quisom.necessaria_camí":{ ca: "camí de sanar",                                  es: "camino de sanar" },
  "quisom.necessaria_desc":{ ca: "L'accés a un acompanyament emocional de qualitat continua sent un privilegi. NexSocial neix per apropar aquest acompanyament a les persones que més ho necessiten, des de la proximitat, l'accessibilitat i el treball cooperatiu.", es: "El acceso a un acompañamiento emocional de calidad sigue siendo un privilegio. NexSocial nace para acercar este acompañamiento a las personas que más lo necesitan, desde la proximidad, la accesibilidad y el trabajo cooperativo." },
  "quisom.stat1_label":    { ca: "persones viurà en algun moment una crisi emocional significativa al llarg de la seva vida (OMS)", es: "personas vivirá en algún momento una crisis emocional significativa a lo largo de su vida (OMS)" },
  "quisom.stat2_label":    { ca: "de les persones que necessiten acompanyament emocional no arriben mai a demanar ajuda professional", es: "de las personas que necesitan acompañamiento emocional nunca llegan a pedir ayuda profesional" },
  "quisom.stat3_label":    { ca: "de les baixes laborals a Catalunya s'associen a causes emocionals o de benestar personal", es: "de las bajas laborales en Cataluña se asocian a causas emocionales o de bienestar personal" },
  "quisom.senior_tag":     { ca: "Per què neix NexSocial · Col·lectiu Senior",     es: "Por qué nace NexSocial · Colectivo Senior" },
  "quisom.senior_desc":    { ca: "La soledat no volguda és un risc real per al benestar. A Catalunya, és una emergència silenciosa.", es: "La soledad no deseada es un riesgo real para el bienestar. En Cataluña, es una emergencia silenciosa." },
  "quisom.senior_text":    { ca: "L'envelliment accelerat, la feminització de la vellesa i el creixement dels llars unipersonals de persones majors de 65 anys configuren un escenari en el qual la cohesió social i el benestar comunitari requereixen respostes concretes i de proximitat. NexSocial neix, en part, per donar aquesta resposta.", es: "El envejecimiento acelerado, la feminización de la vejez y el crecimiento de los hogares unipersonales de personas mayores de 65 años configuran un escenario en el que la cohesión social y el bienestar comunitario requieren respuestas concretas y de proximidad. NexSocial nace, en parte, para dar esta respuesta." },
  "quisom.stat4_label":    { ca: "de la població catalana té 65 anys o més — un envelliment en acceleració constant · Idescat 2025", es: "de la población catalana tiene 65 años o más — un envejecimiento en aceleración constante · Idescat 2025" },
  "quisom.stat5_label":    { ca: "de les persones majors de 65 anys estan en risc de pobresa o exclusió social · AROPE / Idescat 2025", es: "de las personas mayores de 65 años están en riesgo de pobreza o exclusión social · AROPE / Idescat 2025" },
  "quisom.stat6_label":    { ca: "dels adults a Catalunya se senten sols — xifra que s'eleva al ~20% en majors de 75 anys · ECV 2025", es: "de los adultos en Cataluña se sienten solos — cifra que se eleva al ~20% en mayores de 75 años · ECV 2025" },
  "quisom.cita":           { ca: "\"Treballem per a la comunitat i per a les persones que necessiten suport en algun moment del seu cicle vital.\"", es: "\"Trabajamos para la comunidad y para las personas que necesitan apoyo en algún momento de su ciclo vital.\"" },
  "quisom.cta_btn":        { ca: "Descobreix els nostres serveis →",               es: "Descubre nuestros servicios →" },

  // ─── ENTITATS ─────────────────────────────────────────────────────────────
  "entitats.tag":          { ca: "Servei a Entitats",                              es: "Servicio a Entidades" },
  "entitats.title":        { ca: "Consultoria Social per Entitats",                es: "Consultoría Social para Entidades" },
  "entitats.desc":         { ca: "Acompanyament per a organitzacions, equips i entitats que busquen transformació i impacte social.", es: "Acompañamiento para organizaciones, equipos y entidades que buscan transformación e impacto social." },
  "entitats.prog_tag":     { ca: "Entitats · Administracions · Licitacions",       es: "Entidades · Administraciones · Licitaciones" },
  "entitats.prog_title":   { ca: "Programes d'Acompanyament",                     es: "Programas de Acompañamiento" },
  "entitats.prog_desc":    { ca: "Orientem i avaluem per dissenyar o posar en marxa programes d'acompanyament social. Treballem amb entitats i administracions que volen crear o licitar un programa, acompanyant-les des de la diagnosi inicial fins a la implantació.", es: "Orientamos y evaluamos para diseñar o poner en marcha programas de acompañamiento social. Trabajamos con entidades y administraciones que quieren crear o licitar un programa, acompañándolas desde el diagnóstico inicial hasta la implantación." },
  "entitats.prog_li1":     { ca: "Diagnosi inicial i avaluació de necessitats",    es: "Diagnóstico inicial y evaluación de necesidades" },
  "entitats.prog_li2":     { ca: "Disseny del programa adaptat al context i objectius", es: "Diseño del programa adaptado al contexto y objetivos" },
  "entitats.prog_li3":     { ca: "Suport en licitacions i projectes per a administracions", es: "Apoyo en licitaciones y proyectos para administraciones" },
  "entitats.prog_li4":     { ca: "Implantació, seguiment i memòria d'impacte",     es: "Implantación, seguimiento y memoria de impacto" },
  "entitats.transf_tag":   { ca: "Equips i Organització",                          es: "Equipos y Organización" },
  "entitats.transf_title": { ca: "Transformació Organitzacional",                  es: "Transformación Organizacional" },
  "entitats.transf_desc":  { ca: "Acompanyem organitzacions en processos de canvi intern, des de situacions crítiques fins al desenvolupament estratègic dels equips.", es: "Acompañamos organizaciones en procesos de cambio interno, desde situaciones críticas hasta el desarrollo estratégico de los equipos." },
  "entitats.transf_li1":   { ca: "Equips en crisi, alta rotació o baixa cohesió",  es: "Equipos en crisis, alta rotación o baja cohesión" },
  "entitats.transf_li2":   { ca: "Lideratge, comunicació i cultura organitzacional",es: "Liderazgo, comunicación y cultura organizacional" },
  "entitats.transf_li3":   { ca: "Acompanyament de direcció i propòsit comú",      es: "Acompañamiento de dirección y propósito común" },
  "entitats.cta_tag":      { ca: "Treballem amb entitats, cooperatives i administracions", es: "Trabajamos con entidades, cooperativas y administraciones" },
  "entitats.cta_title":    { ca: "Vols que t'expliquem com podem ajudar la teva organització?", es: "¿Quieres que te expliquemos cómo podemos ayudar a tu organización?" },
  "entitats.cta_desc":     { ca: "Explica'ns el vostre projecte o necessitat i us orientem sense compromís. Primera conversa gratuïta.", es: "Cuéntanos vuestro proyecto o necesidad y os orientamos sin compromiso. Primera conversación gratuita." },
  "entitats.cta_btn":      { ca: "Contacta'ns →",                                  es: "Contáctanos →" },

  // ─── CAS A CAS ────────────────────────────────────────────────────────────
  "cas.tag":               { ca: "Consulta Cas a Cas",                             es: "Consulta Caso a Caso" },
  "cas.title":             { ca: "Orientació personalitzada, gratuïta i sense compromís", es: "Orientación personalizada, gratuita y sin compromiso" },
  "cas.pas1_num":          { ca: "Pas 01",                                          es: "Paso 01" },
  "cas.pas1_title":        { ca: "Explica'ns el teu cas",                           es: "Cuéntanos tu caso" },
  "cas.pas1_desc":         { ca: "Omple el formulari de contacte explicant breument la teva situació o necessitat. Ens poses en context per poder-te ajudar millor.", es: "Rellena el formulario de contacto explicando brevemente tu situación o necesidad. Nos pones en contexto para poder ayudarte mejor." },
  "cas.pas2_num":          { ca: "Pas 02",                                          es: "Paso 02" },
  "cas.pas2_title":        { ca: "Trucada gratuïta",                                es: "Llamada gratuita" },
  "cas.pas2_desc":         { ca: "Concertem una trucada per conèixer-te millor, sense pressa i sense cap compromís. El temps que necessitis.", es: "Concertamos una llamada para conocerte mejor, sin prisas y sin ningún compromiso. El tiempo que necesites." },
  "cas.pas3_num":          { ca: "Pas 03",                                          es: "Paso 03" },
  "cas.pas3_title":        { ca: "Orientació personalitzada",                       es: "Orientación personalizada" },
  "cas.pas3_desc":         { ca: "Analitzem la teva situació i t'expliquem quin servei de NexSocial s'adapta millor al teu cas, amb tota la transparència i sense tecnicismes.", es: "Analizamos tu situación y te explicamos qué servicio de NexSocial se adapta mejor a tu caso, con toda la transparencia y sin tecnicismos." },
  "cas.pas4_num":          { ca: "Pas 04",                                          es: "Paso 04" },
  "cas.pas4_title":        { ca: "Proposta d'acompanyament",                        es: "Propuesta de acompañamiento" },
  "cas.pas4_desc":         { ca: "Si hi ha encaix, et presentem una proposta concreta adaptada a les teves necessitats i possibilitats reals.", es: "Si hay encaje, te presentamos una propuesta concreta adaptada a tus necesidades y posibilidades reales." },
  "cas.adrec_h":           { ca: "A qui va adreçat",                               es: "A quién va dirigido" },
  "cas.adrec_persones_h":  { ca: "Persones",                                        es: "Personas" },
  "cas.adrec_persones_d":  { ca: "Qualsevol persona que no sap per on començar o quin servei necessita.", es: "Cualquier persona que no sabe por dónde empezar o qué servicio necesita." },
  "cas.adrec_families_h":  { ca: "Famílies",                                        es: "Familias" },
  "cas.adrec_families_d":  { ca: "Famílies en situació de dificultat que necessiten orientació global.", es: "Familias en situación de dificultad que necesitan orientación global." },
  "cas.adrec_entitats_h":  { ca: "Entitats",                                        es: "Entidades" },
  "cas.adrec_entitats_d":  { ca: "ONG, cooperatives o empreses que volen col·laborar o derivar casos.", es: "ONG, cooperativas o empresas que quieren colaborar o derivar casos." },
  "cas.prim_cons":         { ca: "Primera consulta",                                es: "Primera consulta" },
  "cas.prim_grat":         { ca: "Gratuïta",                                        es: "Gratuita" },
  "cas.prim_comp":         { ca: "i sense compromís",                               es: "y sin compromiso" },
  "cas.feat1_h":           { ca: "Trucada gratuïta",                                es: "Llamada gratuita" },
  "cas.feat1_d":           { ca: "El temps que necessitis, sense pressa",           es: "El tiempo que necesites, sin prisa" },
  "cas.feat2_h":           { ca: "Resposta en menys de 24h",                        es: "Respuesta en menos de 24h" },
  "cas.feat2_d":           { ca: "En dies laborables",                              es: "En días laborables" },
  "cas.feat3_h":           { ca: "Persones, famílies i entitats",                   es: "Personas, familias y entidades" },
  "cas.feat3_d":           { ca: "T'orientem cap al servei que s'adapti al teu cas",es: "Te orientamos hacia el servicio que se adapte a tu caso" },
  "cas.feat4_h":           { ca: "Confidencialitat",                                es: "Confidencialidad" },
  "cas.feat4_d":           { ca: "Tota la informació és tractada amb total discreció", es: "Toda la información es tratada con total discreción" },
  "cas.btn":               { ca: "Sol·licitar trucada gratuïta →",                  es: "Solicitar llamada gratuita →" },

};

/**
 * Aplica l'idioma indicat a tots els elements amb data-i18n
 * @param {string} lang - 'ca' o 'es'
 */
function applyLang(lang) {
  if (!translations) return;

  // Textos normals
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang] !== undefined) {
      el.textContent = translations[key][lang];
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (translations[key] && translations[key][lang] !== undefined) {
      el.placeholder = translations[key][lang];
    }
  });

  // aria-label
  document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-aria');
    if (translations[key] && translations[key][lang] !== undefined) {
      el.setAttribute('aria-label', translations[key][lang]);
    }
  });

  // innerHTML (per elements amb HTML intern, com em, strong)
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (translations[key] && translations[key][lang] !== undefined) {
      el.innerHTML = translations[key][lang];
    }
  });

  // Actualitzar lang attribute del html
  document.documentElement.lang = lang;

  // Persistir preferència
  try { localStorage.setItem('nexsocial_lang', lang); } catch(e) {}

  // Actualitzar selector visual
  var sel = document.querySelector('.lang-select');
  if (sel) sel.value = lang;
}

/**
 * Inicialitza l'idioma en carregar la pàgina
 * Llegeix de localStorage; per defecte CA
 */
function initLang() {
  var saved;
  try { saved = localStorage.getItem('nexsocial_lang'); } catch(e) {}
  applyLang(saved === 'es' ? 'es' : 'ca');
}

// Auto-init quan el DOM estigui llest
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLang);
} else {
  initLang();
}
