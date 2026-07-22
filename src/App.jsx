import { useState, useEffect } from 'react'
import { BookOpen, Moon, Sun, Monitor, Code, ExternalLink, GraduationCap, Award, Compass, MessageSquare } from 'lucide-react'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true // Default to dark mode for premium feel
  })
  
  const [activeTab, setActiveTab] = useState('psico')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const subjects = [
    {
      id: 'psico',
      name: 'Psicología del desarrollo humano y Educacional',
      teacher: 'Lic. Prof. José Boimorto',
      role: 'Asignatura',
      icon: GraduationCap,
      description: 'Estudio de los procesos de cambio psicológico que ocurren a lo largo del ciclo vital y su relación con el aprendizaje y los contextos educativos.',
      demoTitle: 'Analizador de Casos Educativos',
      demoDescription: 'Simulador interactivo para el análisis de situaciones áulicas basadas en teorías evolutivas y del aprendizaje. Permite evaluar respuestas pedagógicas según diferentes marcos teóricos.',
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
      demoDescription: 'Plataforma interactiva de visualización y mapeo de iniciativas educativas públicas, identificando la cobertura territorial, poblaciones objetivo y marcos normativos.',
      placeholderProject: {
        status: 'Disponible próximamente',
        inputs: ['Jurisdicción', 'Nivel Educativo', 'Eje de Acción (Inclusión, Tecnología, Apoyo)'],
        mockResult: 'Se mapeará el alcance socioeducativo y se emitirá un reporte comparativo de normativas aplicables.'
      }
    },
    {
      id: 'comunicacion',
      name: 'Modelos de Comunicación',
      teacher: 'Mónica Delia Bardi',
      role: 'Docente',
      icon: Compass,
      description: 'Abordaje de las teorías de la comunicación aplicadas a los entornos educativos, analizando dinámicas interaccionales, mediación tecnológica y discursos institucionales.',
      demoTitle: 'Simulador de Canales y Ruidos de Comunicación',
      demoDescription: 'Modelo dinámico que simula la transmisión de mensajes pedagógicos a través de diversos canales, permitiendo inyectar variables de "ruido" y medir la efectividad receptiva.',
      placeholderProject: {
        status: 'Disponible próximamente',
        inputs: ['Canal (Sincrónico, Asincrónico, Híbrido)', 'Mensaje clave', 'Barrera o Interferencia'],
        mockResult: 'Se calculará el índice de entropía y se generarán recomendaciones de redundancia o retroalimentación.'
      }
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
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-blue-900 dark:text-blue-400">
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
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm"
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
        <section className="bg-gradient-to-r from-blue-900/10 via-slate-800/5 to-transparent dark:from-blue-950/40 dark:via-slate-900/20 dark:to-transparent rounded-2xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-850/50 relative overflow-hidden">
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
                  onClick={() => setActiveTab(sub.id)}
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
                <div>
                  <span className="text-xs text-slate-400 dark:text-slate-500 block">Rol Directivo</span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{activeSubject.role}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 dark:text-slate-500 block">Propósito Curricular</span>
                  <p className="text-xs mt-1 text-slate-500 dark:text-slate-450 leading-relaxed">
                    {activeSubject.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-slate-300 p-6 rounded-2xl border border-slate-850 flex flex-col gap-4 shadow-sm">
              <div className="flex items-center gap-2 text-blue-400">
                <Code size={18} />
                <h4 className="font-bold text-sm uppercase tracking-wider text-white">Próximo Despliegue</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Los trabajos prácticos finales se integrarán directamente en esta aplicación web como componentes interactivos embebidos en el módulo de demostración.
              </p>
              <div className="flex items-center gap-2 mt-2 text-[11px] text-blue-300 bg-blue-950/60 p-2 rounded-lg border border-blue-900/30">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>GitHub Actions configurado para CI/CD automatizado.</span>
              </div>
            </div>
          </div>

          {/* Interactive Live Demo Area */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden flex flex-col h-full min-h-[420px]">
              {/* Demo Header */}
              <div className="bg-slate-50 dark:bg-slate-900/60 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Monitor size={18} className="text-blue-600 dark:text-blue-400" />
                  <span className="font-bold text-sm text-slate-700 dark:text-slate-350">
                    Entorno del Trabajo Final
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/50 dark:border-amber-900/30">
                  En desarrollo
                </span>
              </div>

              {/* Demo body */}
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
                <div className="flex-1 flex flex-col justify-center bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 gap-4">
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
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal italic">
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

