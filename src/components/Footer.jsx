export default function Footer(){
  return (
    <footer className="relative py-10 border-t border-white/10 bg-gradient-to-b from-transparent to-black/60">
      <div className="px-6 md:px-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/70 text-sm">© {new Date().getFullYear()} Новогодние Ёлки Москвы</div>
        <div className="flex items-center gap-3 text-white/70 text-sm">
          <a href="#spots" className="hover:text-white">Локации</a>
          <span className="opacity-30">•</span>
          <a href="#plan" className="hover:text-white">Маршрут</a>
        </div>
      </div>
    </footer>
  )
}
