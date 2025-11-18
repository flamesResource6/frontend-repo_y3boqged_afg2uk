export default function SpotCard({ title, image, tags, desc }) {
  return (
    <div className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl overflow-hidden transition shadow-xl shadow-emerald-900/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"/>
        <div className="absolute bottom-3 left-3 flex gap-2">
          {tags?.map(t => (
            <span key={t} className="px-2 py-1 rounded-full text-xs bg-emerald-500/90 text-emerald-950 font-semibold">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-white/70 text-sm mt-1 line-clamp-3">{desc}</p>
      </div>
    </div>
  )
}
