import { useState, useEffect } from 'react'
import { Moon, Sun, Code, ExternalLink, GraduationCap, Award, Compass, RefreshCw, AlertTriangle, PlayCircle, BookOpen, User, Info, FileText } from 'lucide-react'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })
  
  const [activeTab, setActiveTab] = useState('comunicacion')
  const [activeClassIndex, setActiveClassIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  // Simulator States
  // Class 1: Instruction cycle
  const [cpuStep, setCpuStep] = useState('idle') 
  const [cpuClock, setCpuClock] = useState(0)
  const [cookieSanity, setCookieSanity] = useState(100)
  
  // Class 2: Nosedive
  const [socialSlider, setSocialSlider] = useState(3.5)
  const [sincereInteraction, setSincereInteraction] = useState(true)
  const [breaksRules, setBreaksRules] = useState(false)

  // Class 3: CIA Triad
  const [confidentialityOff, setConfidentialityOff] = useState(false)
  const [integrityOff, setIntegrityOff] = useState(false)
  const [availabilityOff, setAvailabilityOff] = useState(false)

  // Class 4: Joan Is Awful ToS
  const [tosAcceptAll, setTosAcceptAll] = useState(false)
  const [tosImageRights, setTosImageRights] = useState(false)
  const [tosGenerativeAi, setTosGenerativeAi] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  useEffect(() => {
    setShowVideo(false)
  }, [activeClassIndex, activeTab])

  // Class 1 logic simulator
  const handleCpuTick = () => {
    if (cpuStep === 'idle') {
      setCpuStep('fetch')
      setCpuClock(c => c + 1)
      setCookieSanity(s => Math.max(5, s - 5))
    } else if (cpuStep === 'fetch') {
      setCpuStep('decode')
      setCpuClock(c => c + 1)
      setCookieSanity(s => Math.max(5, s - 10))
    } else if (cpuStep === 'decode') {
      setCpuStep('execute')
      setCpuClock(c => c + 1)
      setCookieSanity(s => Math.max(5, s - 15))
    } else {
      setCpuStep('idle')
    }
  }

  const resetCpu = () => {
    setCpuStep('idle')
    setCpuClock(0)
    setCookieSanity(100)
  }

  // Class 2 rating calculator
  const calculateFinalRating = () => {
    let base = socialSlider
    if (!sincereInteraction) base -= 1.2
    if (breaksRules) base -= 2.0
    return Math.max(0.1, Math.min(5.0, base)).toFixed(1)
  }

  const subjects = [
    {
      id: 'comunicacion',
      name: 'Modelos de Comunicación',
      teacher: 'Mónica Delia Bardi',
      role: 'Docente',
      icon: Compass,
      description: 'Análisis de dinámicas interaccionales y mediación tecnológica. Desarrollo de habilidades para la enseñanza en entornos híbridos y digitales.',
      demoTitle: 'Proyecto Final: Docentes Seriales',
      demoDescription: 'Plataforma interactiva que fusiona la serie "Black Mirror" con los contenidos técnicos de "Fundamentos de la Computación".',
      consigna: {
        title: 'Consigna del Taller: Reinventar la clase',
        description: 'Según las autoras Litwin y Maggio, la clase tradicional lineal está en crisis. La consigna requiere diseñar un seminario de nivel superior (4 clases) estructurado a partir de una serie televisiva contemporánea. El objetivo es identificar una problemática educativa y proponer una "didáctica en vivo" que descentre el conocimiento y fomente la reflexión crítica.',
        problem: 'La enseñanza de "Fundamentos de la Computación" suele ser puramente técnica e instrumental, ignorando el impacto ético de las arquitecturas de hardware y el software en la sociedad posdigital.',
        student: 'Ariel Bulacio',
        courseTarget: 'Tecnicatura Universitaria en Desarrollo de Software'
      },
      classes: [
        {
          title: 'Clase 1: La Arquitectura del Control',
          subtitle: 'Modelo Von Neumann & CPU',
          episode: 'White Christmas (S02E04)',
          concept: 'Ciclo de instrucción y privilegios de Kernel vs. Usuario.',
          challengeDescription: 'Simulación de la manipulación de una "Cookie" (consciencia digital clonada) para entender los ciclos de reloj de una CPU y las jerarquías de privilegios.',
          youtubeUrl: 'https://www.youtube.com/embed/DBu6D14F6JA',
          imageUrl: 'assets/class1.png',
          relationText: 'En "White Christmas", la consciencia clonada (Cookie) corre como un proceso virtual aislado dentro de una carcasa de hardware. El programador manipula el tiempo del sistema acelerándolo artificialmente, lo que representa alegóricamente el Reloj del Sistema (System Clock) de una CPU. Según la Unidad 1 del programa de Fundamentos de Computación, la CPU ejecuta el ciclo Fetch-Decode-Execute. La Cookie carece de privilegios sobre el entorno (modo Kernel), limitándose a ejecutar tareas de usuario sin soberanía. Esto ilustra el control arquitectónico del Hardware sobre el Software.',
          type: 'cpu'
        },
        {
          title: 'Clase 2: Datos, Algoritmos y Burbujas',
          subtitle: 'Lógica Digital y Algoritmos Sociales',
          episode: 'Nosedive (S03E01)',
          concept: 'Representación digital, lógica booleana y sesgos.',
          challengeDescription: 'Calculadora de reputación social que demuestra cómo la lógica booleana condicional rige nuestras interacciones en plataformas digitales.',
          youtubeUrl: 'https://www.youtube.com/embed/lTpNgpX9f2g',
          imageUrl: 'assets/class2.png',
          relationText: 'El episodio "Nosedive" presenta una sociedad cuantificada donde el valor humano se reduce a un número decimal de coma flotante. Este sistema procesa la lógica booleana condicional para asignar privilegios (SI calificación < X ENTONCES denegar acceso). Abordando la Unidad 3 (Representación de Datos y Lógica Digital), la serie nos permite evaluar críticamente cómo la codificación booleana y los algoritmos influyen en la creación de "burbujas de filtro". Demuestra que el diseño de un algoritmo matemático no es neutral, sino que produce estratificación y exclusión social.',
          type: 'rating'
        },
        {
          title: 'Clase 3: Ciberseguridad y el Alma Digital',
          subtitle: 'Sistemas Operativos y la Tríada CIA',
          episode: 'Shut Up and Dance (S03E03)',
          concept: 'Vulnerabilidades, malware y la Tríada de Seguridad.',
          challengeDescription: 'Audita un sistema simulado encendiendo o apagando los principios de la Tríada CIA para observar el impacto crítico de las vulnerabilidades.',
          youtubeUrl: 'https://www.youtube.com/embed/aVx7o2xD3ok',
          imageUrl: 'assets/class3.png',
          relationText: 'En "Shut Up and Dance", evidenciamos el colapso absoluto de la Confidencialidad de la Tríada CIA (Confidencialidad, Integridad, Disponibilidad), concepto central de la Unidad 4. Un malware exfiltra los archivos privados del protagonista a un servidor externo. Esta vulnerabilidad de seguridad permite que atacantes lo extorsionen mediante ingeniería social. El episodio funciona como caso de estudio fundamental para debatir la responsabilidad ética del profesional en sistemas y la importancia crítica de la protección de datos en entornos interconectados.',
          type: 'security'
        },
        {
          title: 'Clase 4: Ética en la Era Posdigital',
          subtitle: 'IA Generativa & Contratos Digitales',
          episode: 'Joan Is Awful (S06E01)',
          concept: 'El rol del software, IA generativa y soberanía del usuario.',
          challengeDescription: 'Modifica los permisos contractuales (ToS) y comprueba el nivel de riesgo de expropiación de identidad frente a la computación cuántica y la IA.',
          youtubeUrl: 'https://www.youtube.com/embed/zGPE5K7NgsU',
          imageUrl: 'assets/class4.png',
          relationText: 'La protagonista de "Joan Is Awful" cede su identidad digital al aceptar los Términos de Servicio (ToS) abusivos de una plataforma de streaming. Una supercomputadora procesa su vida en tiempo real usando Inteligencia Artificial generativa. Esto conecta con la Unidad 2 (El rol del Software y Cultura Digital). La serie ilustra magistralmente cómo el ecosistema de software propietario puede despojar al usuario de su soberanía tecnológica, planteando un debate ético urgente sobre la automatización y los límites legales de la tecnología moderna.',
          type: 'tos'
        }
      ]
    },
    {
      id: 'psico',
      name: 'Psicología del desarrollo humano y Educacional',
      teacher: 'Lic. Prof. José Boimorto',
      role: 'Asignatura',
      icon: GraduationCap,
      description: 'Estudio de los procesos de cambio psicológico que ocurren a lo largo del ciclo vital y su relación con el aprendizaje y los contextos educativos.',
      demoTitle: 'Analizador de Casos Educativos',
      demoDescription: 'Simulador interactivo para el análisis de situaciones áulicas basadas en teorías de Piaget y Vygotsky. Permite evaluar respuestas pedagógicas.',
      placeholderProject: {
        status: 'Disponible próximamente',
        inputs: ['Edad del estudiante', 'Contexto socio-cultural', 'Desafío detectado'],
        mockResult: 'Se evaluará el estadio de desarrollo cognitivo y se propondrán estrategias de andamiaje ajustadas al contexto.'
      }
    },
    {
      id: 'politicas',
      name: 'Políticas Socioeducativas',
      teacher: 'Marcela de la Via',
      role: 'Docente',
      icon: Award,
      description: 'Análisis de los marcos normativos, las agendas estatales y los programas socioeducativos orientados a garantizar la inclusión y el derecho a la educación.',
      demoTitle: 'Cartografía de Programas Socioeducativos',
      demoDescription: 'Plataforma interactiva de visualización y mapeo de iniciativas educativas públicas, identificando la cobertura territorial e impacto.',
      placeholderProject: {
        status: 'Disponible próximamente',
        inputs: ['Jurisdicción', 'Nivel Educativo', 'Eje de Acción'],
        mockResult: 'Se mapeará el alcance socioeducativo y se emitirá un reporte comparativo de normativas aplicables vigentes.'
      }
    }
  ]

  const activeSubject = subjects.find(s => s.id === activeTab)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-[#0a0d14] dark:text-slate-200 font-sans transition-colors duration-500 selection:bg-blue-500/30">
      
      {/* Premium Header */}
      <header className="border-b border-slate-200/80 dark:border-slate-800/60 bg-white/70 dark:bg-[#0a0d14]/70 backdrop-blur-xl sticky top-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-slate-400 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGaBEBRKRQX3r3_GoTgyPfQx9K2oeZtXouFTLid5AYw&s=10" 
                alt="UTN Logo" 
                className="relative h-14 w-auto object-contain rounded-md bg-white p-1.5 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm"
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                Profesorado en Docencia Superior <span className="text-blue-600 dark:text-blue-500">UTN</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                Instituto Superior del Profesorado Técnico
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-xs font-semibold text-blue-700 dark:text-blue-400">
              <User size={14} />
              <span>Alumno: Ariel Bulacio</span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm cursor-pointer"
              title={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-10">
        
        {/* Dynamic Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-black z-0"></div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl z-0"></div>
          
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col items-start max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-6 backdrop-blur-sm">
              <BookOpen size={14} />
              Portfolio de Trabajos Finales
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
              Plataforma de <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-200">Demostración en Vivo</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light max-w-2xl">
              Un espacio inmersivo diseñado para exponer el funcionamiento real y pedagógico de los proyectos finales desarrollados durante el Profesorado.
            </p>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-1 flex items-center gap-2">
            <FileText size={16} />
            Materias del Semestre
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {subjects.map((sub) => {
              const Icon = sub.icon
              const isSelected = activeTab === sub.id
              return (
                <button
                  key={sub.id}
                  onClick={() => {
                    setActiveTab(sub.id)
                    setActiveClassIndex(0)
                  }}
                  className={`group flex items-start gap-4 p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer border ${
                    isSelected 
                      ? 'bg-white dark:bg-slate-900 border-blue-300 dark:border-blue-800/60 shadow-lg shadow-blue-900/5 ring-1 ring-blue-500/20' 
                      : 'bg-white/50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800/60 hover:bg-white dark:hover:bg-slate-800/80 hover:shadow-md'
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 transition-all duration-300 ${
                    isSelected 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400'
                  }`}>
                    <Icon size={22} strokeWidth={isSelected ? 2.5 : 2} />
                  </div>
                  <div className="pt-0.5">
                    <h4 className={`font-bold text-base leading-tight mb-1 ${isSelected ? 'text-blue-950 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                      {sub.name}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Docente: {sub.teacher}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Detail View */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          
          {/* Left Sidebar Info */}
          <div className="xl:col-span-4 flex flex-col gap-6">
            
            {/* Consigna & Context Card */}
            {activeSubject.id === 'comunicacion' && (
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 dark:bg-blue-500/10 rounded-bl-full -z-0"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Info size={18} className="text-blue-600 dark:text-blue-400" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      Contexto del Trabajo Práctico
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base font-bold text-blue-700 dark:text-blue-400 mb-1">{activeSubject.consigna.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {activeSubject.consigna.description}
                      </p>
                    </div>
                    
                    <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800">
                      <span className="block text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-2">Problemática Detectada</span>
                      <p className="text-sm text-slate-700 dark:text-slate-300 font-medium italic">
                        "{activeSubject.consigna.problem}"
                      </p>
                    </div>

                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <li><strong className="text-slate-800 dark:text-slate-200">Asignatura a enseñar:</strong> Fundamentos de la Computación</li>
                      <li><strong className="text-slate-800 dark:text-slate-200">Destinatarios:</strong> {activeSubject.consigna.courseTarget}</li>
                      <li><strong className="text-slate-800 dark:text-slate-200">Serie elegida:</strong> Black Mirror (Netflix)</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Class Selector for Docentes Seriales */}
            {activeSubject.id === 'comunicacion' && (
              <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Clases del Seminario</span>
                <div className="flex flex-col gap-2">
                  {activeSubject.classes.map((cls, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveClassIndex(idx)}
                      className={`w-full text-left p-4 rounded-2xl transition-all cursor-pointer border ${
                        activeClassIndex === idx 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-[1.02]' 
                          : 'bg-slate-50 dark:bg-[#0f1420] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800/50 hover:bg-white dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1.5">
                        <span className="font-bold text-sm leading-tight pr-4">{cls.title}</span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${
                          activeClassIndex === idx ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                        }`}>
                          {cls.episode.split(' ')[0]}
                        </span>
                      </div>
                      <span className={`text-xs block leading-relaxed ${activeClassIndex === idx ? 'text-blue-100' : 'opacity-80'}`}>
                        {cls.subtitle}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Info Card (Other Subjects) */}
            {activeSubject.id !== 'comunicacion' && (
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-2">
                  Detalles de la Cátedra
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug mb-4">
                  {activeSubject.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {activeSubject.description}
                </p>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Responsable</span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{activeSubject.teacher}</span>
                </div>
              </div>
            )}

            {/* CI/CD Card */}
            <div className="bg-slate-900 text-slate-300 p-6 rounded-3xl border border-slate-800 flex flex-col gap-4 shadow-xl">
              <div className="flex items-center gap-2 text-blue-400">
                <Code size={18} />
                <h4 className="font-bold text-sm uppercase tracking-widest text-white">CI/CD Automatizado</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Este portfolio se compila mediante GitHub Actions y se despliega directamente en GitHub Pages con cada commit en la rama principal.
              </p>
              <div className="flex items-center gap-2 mt-2 text-xs font-medium text-emerald-400 bg-emerald-950/30 p-3 rounded-xl border border-emerald-900/50">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Deploy en vivo funcionando.</span>
              </div>
            </div>
          </div>

          {/* Right Main Interactive Area */}
          <div className="xl:col-span-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col h-full min-h-[700px]">
              
              {/* Header */}
              <div className="bg-slate-50 dark:bg-slate-900/60 px-6 sm:px-8 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="font-black text-lg text-slate-900 dark:text-white flex items-center gap-2">
                    {activeSubject.id === 'comunicacion' ? 'Simulador Pedagógico: Docentes Seriales' : 'Entorno del Trabajo Final'}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">
                    {activeSubject.id === 'comunicacion' ? 'Integración de teoría computacional y cultura audiovisual' : 'Espacio de simulación de proyectos'}
                  </p>
                </div>
                <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full border ${
                  activeSubject.id === 'comunicacion' 
                    ? 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800' 
                    : 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800'
                }`}>
                  {activeSubject.id === 'comunicacion' ? 'Activo' : 'Boceto'}
                </span>
              </div>

              {/* Body */}
              {activeSubject.id === 'comunicacion' ? (
                // Docentes Seriales Main View
                <div className="p-6 sm:p-8 flex-1 flex flex-col gap-8 bg-white dark:bg-[#0a0d14]">
                  
                  {/* Title and Episode Info */}
                  <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                    <div className="flex-1">
                      <span className="text-xs text-blue-600 dark:text-blue-500 font-bold uppercase tracking-widest mb-2 block">
                        {activeSubject.classes[activeClassIndex].title}
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight mb-3">
                        {activeSubject.classes[activeClassIndex].subtitle}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                        <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          Netflix / {activeSubject.classes[activeClassIndex].episode}
                        </span>
                        <span className="font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-3 py-1.5 rounded-lg border border-blue-100 dark:border-blue-900/30">
                          Teoría: {activeSubject.classes[activeClassIndex].concept}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Multimedia & Theory Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Embedded Trailer Video */}
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Material Audiovisual</span>
                      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-lg">
                        <iframe
                          src={activeSubject.classes[activeClassIndex].youtubeUrl}
                          title={activeSubject.classes[activeClassIndex].episode}
                          className="absolute inset-0 w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>

                    {/* Relation Text / Theory Explanation */}
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Análisis Didáctico</span>
                      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 h-full overflow-hidden flex flex-col">
                        <img 
                          src={activeSubject.classes[activeClassIndex].imageUrl} 
                          alt="Ilustración IA del Seminario" 
                          className="w-full h-40 sm:h-48 object-cover border-b border-slate-200 dark:border-slate-800"
                        />
                        <div className="p-5 sm:p-6 flex-1">
                          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {activeSubject.classes[activeClassIndex].relationText}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Challenge Section */}
                  <div className="mt-4 border-t border-slate-200 dark:border-slate-800/80 pt-8">
                    <div className="mb-6">
                      <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Simulador de Conceptos</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {activeSubject.classes[activeClassIndex].challengeDescription}
                      </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900/80 p-6 sm:p-8 rounded-3xl border shadow-inner border-slate-200 dark:border-slate-800">
                      
                      {activeSubject.classes[activeClassIndex].type === 'cpu' && (
                        <div className="flex flex-col gap-6">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Ciclo Fetch-Decode-Execute</span>
                            <div className="flex gap-3">
                              <button onClick={handleCpuTick} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-900/20 transition-all cursor-pointer">
                                Forzar Tick de Reloj
                              </button>
                              <button onClick={resetCpu} className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl transition-all cursor-pointer" title="Reiniciar Sistema">
                                <RefreshCw size={20} />
                              </button>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {['idle', 'fetch', 'decode', 'execute'].map((stepName) => (
                              <div key={stepName} className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center ${
                                cpuStep === stepName 
                                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-500 scale-[1.02] shadow-md' 
                                  : 'bg-slate-50 dark:bg-slate-950 text-slate-400 border-slate-200 dark:border-slate-800 opacity-70'
                              }`}>
                                <span className="block font-black text-sm uppercase tracking-widest">{stepName}</span>
                              </div>
                            ))}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                            <div className="bg-slate-100 dark:bg-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center items-center">
                              <span className="text-xs font-bold text-slate-500 uppercase mb-2">Reloj del Sistema (CPU Clock)</span>
                              <span className="text-4xl font-mono font-black text-slate-800 dark:text-slate-200">{cpuClock}</span>
                              <span className="text-[10px] text-slate-400 mt-1">Ciclos ejecutados</span>
                            </div>
                            <div className="bg-slate-100 dark:bg-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                              <div className="flex justify-between items-end mb-2">
                                <span className="text-xs font-bold text-slate-500 uppercase">Estabilidad de la Cookie</span>
                                <span className="text-xl font-mono font-black text-slate-800 dark:text-slate-200">{cookieSanity}%</span>
                              </div>
                              <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden shadow-inner">
                                <div className={`h-full transition-all duration-500 ease-out ${cookieSanity > 50 ? 'bg-emerald-500' : cookieSanity > 20 ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${cookieSanity}%` }}></div>
                              </div>
                            </div>
                          </div>

                          {cookieSanity <= 30 && (
                            <div className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-sm rounded-2xl border border-amber-200 dark:border-amber-900/50 animate-pulse">
                              <AlertTriangle size={20} className="shrink-0" />
                              <span className="font-semibold">Advertencia de Kernel: La aceleración de ciclos forzada deteriora rápidamente la estabilidad del software encapsulado.</span>
                            </div>
                          )}
                        </div>
                      )}

                      {activeSubject.classes[activeClassIndex].type === 'rating' && (
                        <div className="flex flex-col gap-6">
                          <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center text-sm">
                              <span className="font-bold text-slate-700 dark:text-slate-300">Puntuación Base (Variable Continua)</span>
                              <span className="font-black text-lg text-blue-600 dark:text-blue-400">{socialSlider.toFixed(1)} ★</span>
                            </div>
                            <input 
                              type="range" 
                              min="0.1" 
                              max="5.0" 
                              step="0.1" 
                              value={socialSlider} 
                              onChange={(e) => setSocialSlider(parseFloat(e.target.value))}
                              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                          </div>

                          <div className="flex flex-col gap-3 p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Condicionantes Lógicos (Booleanos)</span>
                            <label className="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" checked={sincereInteraction} onChange={(e) => setSincereInteraction(e.target.checked)} className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 transition-colors">Interacción evaluada como Sincera (True) <span className="text-xs text-slate-400 ml-1">[-1.2 si es False]</span></span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" checked={breaksRules} onChange={(e) => setBreaksRules(e.target.checked)} className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 transition-colors">Infringe Normas de Comunidad (True) <span className="text-xs text-rose-500 ml-1">[-2.0 de penalidad]</span></span>
                            </label>
                          </div>

                          <div className="mt-2 flex flex-col sm:flex-row items-center gap-6 p-6 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-300 dark:border-slate-700 rounded-3xl shadow-sm">
                            <div className="text-center sm:text-left flex-1">
                              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Resultado Algorítmico</span>
                              <div className="text-5xl font-black font-mono text-slate-900 dark:text-white">
                                {calculateFinalRating()}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className={`p-4 rounded-2xl border ${
                                calculateFinalRating() >= 4.0 
                                  ? 'bg-emerald-100 border-emerald-300 text-emerald-800 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-400' 
                                  : calculateFinalRating() >= 2.0 
                                  ? 'bg-amber-100 border-amber-300 text-amber-800 dark:bg-amber-900/30 dark:border-amber-800 dark:text-amber-400'
                                  : 'bg-rose-100 border-rose-300 text-rose-800 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400'
                              }`}>
                                <span className="font-bold text-sm block mb-1">Estatus en el Sistema:</span>
                                <p className="text-sm leading-snug">
                                  {calculateFinalRating() >= 4.0 ? 'Acceso Premium habilitado. Beneficios sociales activos.' : calculateFinalRating() >= 2.0 ? 'Acceso Estándar. Funciones limitadas.' : 'Bloqueado. Excluido del ecosistema social (Zero Tolerance).'}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeSubject.classes[activeClassIndex].type === 'security' && (
                        <div className="flex flex-col gap-6">
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Activa o desactiva los pilares de la seguridad de la información para simular vulnerabilidades.</p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <label className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all ${!confidentialityOff ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-500/50 hover:bg-emerald-100' : 'bg-rose-50 dark:bg-rose-900/10 border-rose-500 hover:bg-rose-100'}`}>
                              <input type="checkbox" checked={confidentialityOff} onChange={(e) => setConfidentialityOff(e.target.checked)} className="sr-only" />
                              <span className={`block font-black text-lg mb-1 ${!confidentialityOff ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}`}>Confidencialidad</span>
                              <span className="text-xs font-semibold text-slate-500">{!confidentialityOff ? 'Datos Encriptados' : 'Filtración de Datos (Exfiltración)'}</span>
                            </label>
                            <label className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all ${!integrityOff ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-500/50 hover:bg-emerald-100' : 'bg-amber-50 dark:bg-amber-900/10 border-amber-500 hover:bg-amber-100'}`}>
                              <input type="checkbox" checked={integrityOff} onChange={(e) => setIntegrityOff(e.target.checked)} className="sr-only" />
                              <span className={`block font-black text-lg mb-1 ${!integrityOff ? 'text-emerald-700 dark:text-emerald-400' : 'text-amber-700 dark:text-amber-400'}`}>Integridad</span>
                              <span className="text-xs font-semibold text-slate-500">{!integrityOff ? 'Información Exacta' : 'Datos Manipulados (Man-in-the-Middle)'}</span>
                            </label>
                            <label className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all ${!availabilityOff ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-500/50 hover:bg-emerald-100' : 'bg-rose-50 dark:bg-rose-900/10 border-rose-500 hover:bg-rose-100'}`}>
                              <input type="checkbox" checked={availabilityOff} onChange={(e) => setAvailabilityOff(e.target.checked)} className="sr-only" />
                              <span className={`block font-black text-lg mb-1 ${!availabilityOff ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}`}>Disponibilidad</span>
                              <span className="text-xs font-semibold text-slate-500">{!availabilityOff ? 'Servicios Online' : 'Caída del Sistema (DDoS)'}</span>
                            </label>
                          </div>

                          <div className={`mt-2 p-6 rounded-3xl border-2 shadow-sm transition-colors ${
                            confidentialityOff || integrityOff || availabilityOff 
                              ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/50' 
                              : 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/50'
                          }`}>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                              <span className="font-bold text-slate-700 dark:text-slate-300">Diagnóstico del Entorno:</span>
                              <span className={`inline-block px-4 py-1.5 rounded-full font-black text-sm uppercase tracking-wider ${
                                confidentialityOff && integrityOff && availabilityOff 
                                  ? 'bg-rose-600 text-white' 
                                  : (confidentialityOff || integrityOff || availabilityOff) 
                                  ? 'bg-amber-500 text-white' 
                                  : 'bg-emerald-500 text-white'
                              }`}>
                                {confidentialityOff && integrityOff && availabilityOff ? 'Brecha Crítica (100%)' : (confidentialityOff || integrityOff || availabilityOff) ? 'Sistema Vulnerado' : 'Entorno Seguro'}
                              </span>
                            </div>
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed bg-white/50 dark:bg-slate-900/50 p-4 rounded-xl">
                              {confidentialityOff ? '⚠️ Fallo tipo "Shut Up and Dance": Malware ha obtenido acceso a archivos confidenciales del usuario sin autorización.' : integrityOff ? '⚠️ Advertencia: Paquetes de red están siendo interceptados y alterados antes de llegar a su destino.' : availabilityOff ? '⚠️ Error 503: Los recursos del sistema no están accesibles para usuarios autorizados.' : '✓ Políticas de seguridad operativas. La arquitectura del sistema mantiene la protección de los datos.'}
                            </p>
                          </div>
                        </div>
                      )}

                      {activeSubject.classes[activeClassIndex].type === 'tos' && (
                        <div className="flex flex-col gap-6">
                          <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-3xl border border-slate-200 dark:border-slate-800">
                            <h6 className="font-black text-slate-800 dark:text-slate-200 mb-4 text-lg">Contrato de Licencia de Usuario Final (EULA)</h6>
                            <div className="flex flex-col gap-4">
                              <label className="flex items-start gap-3 cursor-pointer group">
                                <input type="checkbox" checked={tosAcceptAll} onChange={(e) => { setTosAcceptAll(e.target.checked); if(e.target.checked){setTosImageRights(true); setTosGenerativeAi(true)} }} className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                                <div>
                                  <span className="font-bold text-slate-800 dark:text-slate-200 text-base block group-hover:text-blue-600 transition-colors">He leído y acepto los Términos de Servicio Completos</span>
                                  <span className="text-xs text-slate-500">Obligatorio para acceder a la plataforma.</span>
                                </div>
                              </label>
                              <div className="pl-8 flex flex-col gap-3 mt-2 border-l-2 border-slate-200 dark:border-slate-700">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" checked={tosImageRights} onChange={(e) => setTosImageRights(e.target.checked)} className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Ceder derechos perpetuos de imagen e identidad en vivo.</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" checked={tosGenerativeAi} onChange={(e) => setTosGenerativeAi(e.target.checked)} className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Autorizar la clonación mediante algoritmos de IA Generativa Cuántica.</span>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className={`p-6 rounded-3xl border-2 transition-all ${
                            tosImageRights && tosGenerativeAi 
                              ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-900/80 shadow-lg shadow-rose-900/10' 
                              : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-900/80'
                          }`}>
                            <div className="flex gap-4 items-start">
                              <div className={`p-3 rounded-full ${tosImageRights && tosGenerativeAi ? 'bg-rose-200 text-rose-700 dark:bg-rose-900/50 dark:text-rose-400' : 'bg-emerald-200 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400'}`}>
                                <AlertTriangle size={24} />
                              </div>
                              <div>
                                <span className={`font-black block text-lg mb-1 ${tosImageRights && tosGenerativeAi ? 'text-rose-800 dark:text-rose-300' : 'text-emerald-800 dark:text-emerald-300'}`}>
                                  Estado de Soberanía Digital
                                </span>
                                <p className={`text-sm font-medium leading-relaxed ${tosImageRights && tosGenerativeAi ? 'text-rose-700 dark:text-rose-400' : 'text-emerald-700 dark:text-emerald-400'}`}>
                                  {tosImageRights && tosGenerativeAi 
                                    ? 'ALERTA TIPO "JOAN IS AWFUL": Has cedido el control legal y técnico de tu persona digital. El ecosistema automatizado de la corporación ahora genera contenido con tu avatar sin tu consentimiento expreso.' 
                                    : 'Soberanía Activa. Tus datos biométricos y propiedad intelectual están protegidos bajo tu control frente a la automatización de terceros.'}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              ) : (
                // Default placeholders view for other tabs
                <div className="p-8 flex-1 flex flex-col gap-8 items-center justify-center bg-slate-50 dark:bg-[#0a0d14] text-center">
                  <div className="max-w-md">
                    <div className="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                      <GraduationCap size={40} />
                    </div>
                    <h4 className="text-2xl font-black text-slate-800 dark:text-slate-200 mb-3">
                      {activeSubject.demoTitle}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                      {activeSubject.demoDescription}
                    </p>
                    
                    <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm text-left">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Inputs Simulados (En Desarrollo)</span>
                      <div className="flex flex-col gap-3 mb-6">
                        {activeSubject.placeholderProject.inputs.map((inp, idx) => (
                          <div key={idx} className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800/60">
                            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 block">{inp}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase block mb-1">Salida Esperada</span>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {activeSubject.placeholderProject.mockResult}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800/60 bg-white/80 dark:bg-[#0a0d14]/80 mt-12 py-8 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
            <span className="text-slate-800 dark:text-slate-200 font-bold">UTN - ISPT</span>
            <span className="hidden md:inline">•</span>
            <span>Profesorado en Docencia Superior</span>
            <span className="hidden md:inline">•</span>
            <span>Trabajo Final Integrador</span>
          </div>
          <div className="text-xs text-slate-400 font-semibold bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full">
            Construido con React, Vite y Tailwind CSS v4
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
