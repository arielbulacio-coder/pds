import { useState, useEffect } from 'react'
import { BookOpen, Moon, Sun, Monitor, Code, ExternalLink, GraduationCap, Award, Compass, Shield, Cpu, RefreshCw, AlertTriangle, Eye, Sliders } from 'lucide-react'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })
  
  const [activeTab, setActiveTab] = useState('comunicacion') // Default to 'comunicacion' to showcase the work
  const [activeClassIndex, setActiveClassIndex] = useState(0)

  // Simulator States
  // Class 1: Instruction cycle
  const [cpuStep, setCpuStep] = useState('idle') // idle, fetch, decode, execute
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
        mockResult: 'Se evaluará el estadio de desarrollo y se propondrán estrategias de andamiaje ajustadas.'
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
        inputs: ['Jurisdicción', 'Nivel Educativo', 'Eje de Acción (Inclusión, Tecnología)'],
        mockResult: 'Se mapeará el alcance socioeducativo y se emitirá un reporte comparativo de normativas aplicables.'
      }
    },
    {
      id: 'comunicacion',
      name: 'Modelos de Comunicación',
      teacher: 'Mónica Delia Bardi',
      role: 'Docente',
      icon: Compass,
      description: 'Análisis de dinámicas interaccionales y mediación tecnológica. Proyecto "Docentes Seriales": Seminario de formación docente en la intersección de Black Mirror y Fundamentos de la Computación.',
      demoTitle: 'Entorno Interactivo: Docentes Seriales',
      demoDescription: 'Diseño curricular gamificado que hackea el método tradicional. Selecciona una clase para interactuar con los simuladores conceptuales.',
      classes: [
        {
          title: 'Clase 1: La Arquitectura del Control',
          subtitle: 'Modelo Von Neumann & CPU',
          episode: 'White Christmas (S02E04)',
          concept: 'Ciclo de instrucción y privilegios de Kernel vs. Usuario.',
          challengeDescription: 'Controla el simulador de CPU del dispositivo "Cookie". Ejecuta instrucciones y vigila el nivel de estabilidad cognitiva del clon digital.',
          type: 'cpu'
        },
        {
          title: 'Clase 2: Datos, Algoritmos y Burbujas',
          subtitle: 'Sistemas Numéricos & Sesgos',
          episode: 'Nosedive (S03E01)',
          concept: 'Representación binaria y lógica booleana aplicada a redes sociales.',
          challengeDescription: 'Configura las interacciones y calcula la puntuación en tiempo real. Observa cómo influye el sesgo del algoritmo.',
          type: 'rating'
        },
        {
          title: 'Clase 3: Ciberseguridad y Tríada CIA',
          subtitle: 'Confidencialidad, Integridad, Disponibilidad',
          episode: 'Shut Up and Dance (S03E03)',
          concept: 'Vulnerabilidades comunes, malware y pérdida de confidencialidad.',
          challengeDescription: 'Audita un sistema simulado apagando o encendiendo los principios de la Tríada CIA para observar las repercusiones.',
          type: 'security'
        },
        {
          title: 'Clase 4: Ética en la Era Posdigital',
          subtitle: 'IA Generativa & Términos de Servicio',
          episode: 'Joan Is Awful (S06E01)',
          concept: 'Automatización, IA, privacidad legal y soberanía del usuario.',
          challengeDescription: 'Modifica los permisos contractuales del usuario. Comprueba el nivel de riesgo de expropiación de identidad.',
          type: 'tos'
        }
      ]
    }
  ]

  const activeSubject = subjects.find(s => s.id === activeTab)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 flex flex-col transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGaBEBRKRQX3r3_GoTgyPfQx9K2oeZtXouFTLid5AYw&s=10" 
              alt="UTN Logo" 
              className="h-16 w-auto object-contain rounded-md bg-white p-1 shadow-sm border border-slate-200 dark:border-slate-700"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-blue-900 dark:text-blue-450">
                Profesorado en Docencia Superior UTN
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                Universidad Tecnológica Nacional · Instituto Superior del Profesorado Técnico
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm cursor-pointer"
              title={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 flex flex-col gap-8">
        
        {/* Intro Hero Section */}
        <section className="bg-gradient-to-r from-blue-900/10 via-slate-850/5 to-transparent dark:from-blue-950/40 dark:via-slate-900/20 dark:to-transparent rounded-2xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 mb-4">
              <BookOpen size={13} />
              Portfolio de Trabajos Finales
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Plataforma de Demostración en Vivo
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-350 leading-relaxed text-base sm:text-lg">
              Espacio curricular dedicado a exponer el funcionamiento real e interactivo de los proyectos finales elaborados para el Profesorado en Docencia Superior.
            </p>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1">
            Materias Seleccionadas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-slate-200/60 dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800/80">
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
                  className={`flex items-start gap-3 p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                    isSelected 
                      ? 'bg-white dark:bg-slate-800 text-blue-900 dark:text-white shadow-sm ring-1 ring-slate-200/50 dark:ring-slate-700/50' 
                      : 'hover:bg-white/50 dark:hover:bg-slate-850/50 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 transition-colors ${
                    isSelected 
                      ? 'bg-blue-100 dark:bg-blue-950/70 text-blue-950 dark:text-blue-300' 
                      : 'bg-slate-300/40 dark:bg-slate-850/70 text-slate-500'
                  }`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm leading-snug line-clamp-1">
                      {sub.name}
                    </h4>
                    <p className="text-xs mt-0.5 opacity-80 line-clamp-1">
                      {sub.teacher}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Detail view */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Info Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
              <div>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">
                  Detalles de la Cátedra
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                  {activeSubject.name}
                </h3>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 flex flex-col gap-3">
                <div>
                  <span className="text-xs text-slate-400 dark:text-slate-500 block">Docencia</span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{activeSubject.teacher}</span>
                </div>
                {activeSubject.id === 'comunicacion' && (
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 block">Proyecto Didáctico</span>
                    <span className="text-sm font-bold text-blue-700 dark:text-blue-400">Docentes Seriales</span>
                  </div>
                )}
                <div>
                  <span className="text-xs text-slate-400 dark:text-slate-500 block">Descripción Curricular</span>
                  <p className="text-xs mt-1 text-slate-500 dark:text-slate-400 leading-relaxed">
                    {activeSubject.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Class Selector for Docentes Seriales */}
            {activeSubject.id === 'comunicacion' && (
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">Clases del Seminario</span>
                {activeSubject.classes.map((cls, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveClassIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl transition-all text-xs cursor-pointer ${
                      activeClassIndex === idx 
                        ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300 border border-blue-200 dark:border-blue-900/40 font-semibold' 
                        : 'hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-600 dark:text-slate-400 border border-transparent'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-0.5">
                      <span>{cls.title}</span>
                      <span className="text-[10px] opacity-75 font-normal">{cls.episode.split(' ')[0]}</span>
                    </div>
                    <span className="text-[10px] opacity-70 block truncate">{cls.concept}</span>
                  </button>
                ))}
              </div>
            )}

            <div className="bg-slate-900 text-slate-350 p-6 rounded-2xl border border-slate-850 flex flex-col gap-4 shadow-sm">
              <div className="flex items-center gap-2 text-blue-400">
                <Code size={18} />
                <h4 className="font-bold text-sm uppercase tracking-wider text-white">CI/CD Automatizado</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Este sitio se compila mediante GitHub Actions y se despliega directamente en GitHub Pages con cada cambio detectado en la rama principal.
              </p>
              <div className="flex items-center gap-2 mt-1 text-[11px] text-blue-300 bg-blue-950/60 p-2 rounded-lg border border-blue-900/30">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Deploy en vivo funcionando.</span>
              </div>
            </div>
          </div>

          {/* Interactive Live Demo Area */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden flex flex-col h-full min-h-[480px]">
              {/* Demo Header */}
              <div className="bg-slate-50 dark:bg-slate-900/60 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Monitor size={18} className="text-blue-600 dark:text-blue-400" />
                  <span className="font-bold text-sm text-slate-700 dark:text-slate-300">
                    {activeSubject.id === 'comunicacion' ? 'Simulador Didáctico: Docentes Seriales' : 'Entorno del Trabajo Final'}
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-250 dark:border-emerald-900/30">
                  {activeSubject.id === 'comunicacion' ? 'Simulador Activo' : 'Próximamente'}
                </span>
              </div>

              {/* Demo body */}
              {activeSubject.id === 'comunicacion' ? (
                // Docentes Seriales Dashboard View
                <div className="p-6 flex-1 flex flex-col gap-6">
                  {/* Title and details */}
                  <div>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold block uppercase tracking-wider mb-0.5">
                      {activeSubject.classes[activeClassIndex].title}
                    </span>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                      Unidad: {activeSubject.classes[activeClassIndex].subtitle}
                    </h4>
                    <div className="mt-1 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300 font-medium">
                        Episodio: {activeSubject.classes[activeClassIndex].episode}
                      </span>
                      <span>•</span>
                      <span>Concepto: {activeSubject.classes[activeClassIndex].concept}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-950 p-3 rounded-lg border border-slate-250/40 dark:border-slate-800">
                    {activeSubject.classes[activeClassIndex].challengeDescription}
                  </p>

                  {/* Dynamic Simulators */}
                  <div className="flex-1 flex flex-col justify-center bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-dashed border-slate-200 dark:border-slate-850 gap-4">
                    {activeSubject.classes[activeClassIndex].type === 'cpu' && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ciclo de Instrucción (CPU)</span>
                          <div className="flex gap-2">
                            <button onClick={handleCpuTick} className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold cursor-pointer">
                              Tick del Reloj
                            </button>
                            <button onClick={resetCpu} className="p-1.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-350 rounded-lg text-xs cursor-pointer">
                              <RefreshCw size={14} />
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-4 gap-2 text-center text-xs">
                          <div className={`p-2.5 rounded-lg border transition-all ${cpuStep === 'idle' ? 'bg-blue-900/20 text-blue-400 border-blue-800' : 'bg-slate-800/20 text-slate-500 border-slate-800'}`}>
                            <span className="block font-semibold">Idle</span>
                            <span className="text-[10px] opacity-75">Reposo</span>
                          </div>
                          <div className={`p-2.5 rounded-lg border transition-all ${cpuStep === 'fetch' ? 'bg-blue-900/20 text-blue-400 border-blue-800' : 'bg-slate-800/20 text-slate-500 border-slate-800'}`}>
                            <span className="block font-semibold">Fetch</span>
                            <span className="text-[10px] opacity-75">Lectura</span>
                          </div>
                          <div className={`p-2.5 rounded-lg border transition-all ${cpuStep === 'decode' ? 'bg-blue-900/20 text-blue-400 border-blue-800' : 'bg-slate-800/20 text-slate-500 border-slate-800'}`}>
                            <span className="block font-semibold">Decode</span>
                            <span className="text-[10px] opacity-75">Decodificar</span>
                          </div>
                          <div className={`p-2.5 rounded-lg border transition-all ${cpuStep === 'execute' ? 'bg-blue-900/20 text-blue-400 border-blue-800' : 'bg-slate-800/20 text-slate-500 border-slate-800'}`}>
                            <span className="block font-semibold">Execute</span>
                            <span className="text-[10px] opacity-75">Ejecutar</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
                          <div className="flex flex-col gap-1">
                            <span className="text-slate-400 font-medium">Ciclos de Reloj:</span>
                            <span className="text-lg font-mono font-bold text-blue-600 dark:text-blue-400">{cpuClock} ticks</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-slate-400 font-medium">Estabilidad Mental del Clon:</span>
                            <div className="flex items-center gap-2">
                              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                                <div className={`h-full transition-all duration-300 ${cookieSanity > 50 ? 'bg-emerald-500' : cookieSanity > 20 ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${cookieSanity}%` }}></div>
                              </div>
                              <span className="font-mono font-bold">{cookieSanity}%</span>
                            </div>
                          </div>
                        </div>

                        {cookieSanity <= 30 && (
                          <div className="flex items-center gap-2 p-2 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-xs rounded-lg border border-amber-250">
                            <AlertTriangle size={14} className="shrink-0" />
                            <span>Advertencia: La repetición de ciclos forzada deteriora la estabilidad de la Cookie.</span>
                          </div>
                        )}
                      </div>
                    )}

                    {activeSubject.classes[activeClassIndex].type === 'rating' && (
                      <div className="flex flex-col gap-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Calculadora de Reputación Nosedive</span>
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-col gap-1">
                            <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-400">
                              <span>Puntuación Base en Red Social</span>
                              <span className="text-blue-600 dark:text-blue-400">{socialSlider} Estrellas</span>
                            </div>
                            <input 
                              type="range" 
                              min="0.1" 
                              max="5.0" 
                              step="0.1" 
                              value={socialSlider} 
                              onChange={(e) => setSocialSlider(parseFloat(e.target.value))}
                              className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                          </div>

                          <div className="flex flex-col gap-2 text-xs mt-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" checked={sincereInteraction} onChange={(e) => setSincereInteraction(e.target.checked)} className="rounded text-blue-600 accent-blue-600 cursor-pointer" />
                              <span>Interacción Sincera (-1.2 estrellas si es Falsa)</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" checked={breaksRules} onChange={(e) => setBreaksRules(e.target.checked)} className="rounded text-blue-600 accent-blue-600 cursor-pointer" />
                              <span>Romper Normas / Berrinche Público (-2.0 estrellas)</span>
                            </label>
                          </div>

                          <div className="mt-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center">
                            <span className="text-xs text-slate-400 block mb-1">Clasificación Ponderada Final</span>
                            <div className="text-3xl font-extrabold font-mono text-blue-700 dark:text-blue-400">
                              ★ {calculateFinalRating()}
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                              {calculateFinalRating() >= 4.0 ? 'Acceso Premium habilitado en el Seminario.' : calculateFinalRating() >= 2.0 ? 'Acceso Básico habilitado.' : 'Bloqueado. Excluido del ecosistema del seminario.'}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSubject.classes[activeClassIndex].type === 'security' && (
                      <div className="flex flex-col gap-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Auditoría del Entorno: Tríada CIA</span>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <label className={`p-3 rounded-xl border flex flex-col gap-1 cursor-pointer transition-all ${!confidentialityOff ? 'bg-emerald-950/20 text-emerald-400 border-emerald-900' : 'bg-rose-950/20 text-rose-400 border-rose-900'}`}>
                            <input type="checkbox" checked={confidentialityOff} onChange={(e) => setConfidentialityOff(e.target.checked)} className="sr-only" />
                            <span className="font-bold">Confidencialidad</span>
                            <span className="text-[10px] opacity-75">{!confidentialityOff ? 'Protegida' : 'Vulnerada'}</span>
                          </label>
                          <label className={`p-3 rounded-xl border flex flex-col gap-1 cursor-pointer transition-all ${!integrityOff ? 'bg-emerald-950/20 text-emerald-400 border-emerald-900' : 'bg-rose-950/20 text-rose-400 border-rose-900'}`}>
                            <input type="checkbox" checked={integrityOff} onChange={(e) => setIntegrityOff(e.target.checked)} className="sr-only" />
                            <span className="font-bold">Integridad</span>
                            <span className="text-[10px] opacity-75">{!integrityOff ? 'Protegida' : 'Alterada'}</span>
                          </label>
                          <label className={`p-3 rounded-xl border flex flex-col gap-1 cursor-pointer transition-all ${!availabilityOff ? 'bg-emerald-950/20 text-emerald-400 border-emerald-900' : 'bg-rose-950/20 text-rose-400 border-rose-900'}`}>
                            <input type="checkbox" checked={availabilityOff} onChange={(e) => setAvailabilityOff(e.target.checked)} className="sr-only" />
                            <span className="font-bold">Disponibilidad</span>
                            <span className="text-[10px] opacity-75">{!availabilityOff ? 'Estable' : 'Caída'}</span>
                          </label>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs flex flex-col gap-2">
                          <div className="flex justify-between items-center">
                            <span>Nivel de Riesgo del Sistema:</span>
                            <span className={`font-bold uppercase ${confidentialityOff || integrityOff || availabilityOff ? 'text-rose-500' : 'text-emerald-500'}`}>
                              {confidentialityOff && integrityOff && availabilityOff ? 'Crítico (100%)' : (confidentialityOff || integrityOff || availabilityOff) ? 'Medio' : 'Seguro (0%)'}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed italic">
                            {confidentialityOff ? 'Error "Shut Up and Dance": Archivos privados exfiltrados.' : integrityOff ? 'Fuga de Integridad: Mensajes alterados en tránsito.' : availabilityOff ? 'Servidor inactivo: Estudiantes incomunicados.' : 'Ecosistema de datos completamente protegido.'}
                          </p>
                        </div>
                      </div>
                    )}

                    {activeSubject.classes[activeClassIndex].type === 'tos' && (
                      <div className="flex flex-col gap-4 text-xs">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Configurar Licencia de Usuario</span>
                        <div className="flex flex-col gap-2">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={tosAcceptAll} onChange={(e) => { setTosAcceptAll(e.target.checked); if(e.target.checked){setTosImageRights(true); setTosGenerativeAi(true)} }} className="rounded text-blue-600 accent-blue-600 cursor-pointer" />
                            <span className="font-semibold">Aceptar Términos de Servicio Completo (ToS)</span>
                          </label>
                          <div className="pl-6 flex flex-col gap-2 opacity-80">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" checked={tosImageRights} onChange={(e) => setTosImageRights(e.target.checked)} className="rounded text-blue-600 accent-blue-600 cursor-pointer" />
                              <span>Ceder derechos de imagen e identidad en vivo</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" checked={tosGenerativeAi} onChange={(e) => setTosGenerativeAi(e.target.checked)} className="rounded text-blue-600 accent-blue-600 cursor-pointer" />
                              <span>Permitir clonación con IA Generativa para shows</span>
                            </label>
                          </div>
                        </div>

                        <div className={`p-4 rounded-xl border flex gap-3 items-start ${tosImageRights && tosGenerativeAi ? 'bg-rose-950/20 border-rose-900 text-rose-300' : 'bg-emerald-950/20 border-emerald-900 text-emerald-300'}`}>
                          <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold block text-xs">Estado de Soberanía del Programador</span>
                            <p className="text-[10px] mt-0.5 leading-relaxed">
                              {tosImageRights && tosGenerativeAi 
                                ? 'ALERTA "Joan is Awful": Has cedido el control total de tu persona digital. El sistema generará clases automatizadas con tu avatar sin tu consentimiento.' 
                                : 'Tu identidad y propiedad intelectual están seguras bajo tu control (Soberanía de datos activa).'}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                      Desarrollado para la Cátedra de Modelos de Comunicación.
                    </span>
                  </div>
                </div>
              ) : (
                // Default placeholders view for other tabs
                <div className="p-6 flex-1 flex flex-col gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                      {activeSubject.demoTitle}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {activeSubject.demoDescription}
                    </p>
                  </div>

                  {/* Form fields simulator */}
                  <div className="flex-1 flex flex-col justify-center bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-dashed border-slate-200 dark:border-slate-850 gap-4">
                    <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Simulación de Variables de Entrada
                    </h5>
                    
                    <div className="flex flex-col gap-3">
                      {activeSubject.placeholderProject.inputs.map((inp, idx) => (
                        <div key={idx} className="flex flex-col gap-1">
                          <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                            {inp}
                          </label>
                          <input 
                            type="text" 
                            placeholder="Ingrese valor simulado..." 
                            disabled 
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-400 cursor-not-allowed w-full"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-2 p-3 bg-blue-50/50 dark:bg-slate-900/40 rounded-lg border border-blue-100/50 dark:border-slate-800/80">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-1">
                        Comportamiento Esperado
                      </span>
                      <p className="text-xs text-slate-650 dark:text-slate-400 leading-normal italic text-slate-600 dark:text-slate-400">
                        &ldquo;{activeSubject.placeholderProject.mockResult}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <button 
                      disabled 
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500 cursor-not-allowed border border-slate-200 dark:border-slate-700"
                    >
                      <span>Ejecutar Simulación</span>
                      <ExternalLink size={12} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700 dark:text-slate-300">UTN - ISPT</span>
            <span>·</span>
            <span>Profesorado en Docencia Superior</span>
          </div>
          <div>
            <span>Diseñado con React, Vite y Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
