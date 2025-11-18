import Hero from './components/Hero'
import Spots from './components/Spots'
import Plan from './components/Plan'
import Footer from './components/Footer'
import Snow from './components/Snow'

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Aurora gradient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-40 opacity-40 blur-3xl bg-[conic-gradient(from_120deg_at_50%_50%,#10b981_0%,#0ea5e9_30%,#a78bfa_60%,#10b981_100%)]"/>
      </div>

      {/* Snow overlay */}
      <Snow count={120} />

      {/* Content */}
      <header className="relative z-10">
        <nav className="mx-auto max-w-6xl px-6 md:px-10 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/30"/>
            <span className="font-bold tracking-tight">Ёлки Москвы</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#spots" className="hover:text-white">Локации</a>
            <a href="#plan" className="hover:text-white">Маршрут</a>
            <a href="#" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 ring-1 ring-white/20">Купить сувениры</a>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <Spots />
        <Plan />
      </main>

      <Footer />
    </div>
  )
}

export default App
