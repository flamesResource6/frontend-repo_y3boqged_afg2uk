import { useMemo } from 'react'

export default function Hero() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-700/40 via-emerald-900 to-black"/>

      <div className="absolute inset-0 opacity-20 mix-blend-screen"
           style={{backgroundImage:'url(https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2070&auto=format&fit=crop)', backgroundSize:'cover', backgroundPosition:'center'}}/>

      <div className="relative z-10 px-6 md:px-10 w-full max-w-6xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 ring-1 ring-white/20 text-white/90 text-sm mb-6 backdrop-blur">
            Москва встречает {year}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-[0_10px_30px_rgba(16,185,129,0.5)]">
            Новогодние Ёлки Москвы
          </h1>
          <p className="mt-5 text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto">
            Атмосфера зимней сказки: лучшие площадки, катки, ярмарки и главные ели столицы.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#spots" className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold shadow-lg shadow-emerald-500/30 transition">
              Смотреть локации
            </a>
            <a href="#plan" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold ring-1 ring-white/20 transition">
              Спланировать маршрут
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
