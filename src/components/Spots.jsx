import SpotCard from './SpotCard'

const spots = [
  {
    title: 'Красная площадь',
    image: 'https://images.unsplash.com/photo-1578910330150-e1ab90fc81c1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDAlOUElRDElODAlRDAlQjAlRDElODElRDAlQkQlRDAlQjAlRDElOEYlMjAlRDAlQkYlRDAlQkIlRDAlQkUlRDElODklRDAlQjAlRDAlQjQlRDElOEN8ZW58MHwwfHx8MTc2MzUwODQ5MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tags: ['Главная ёлка', 'Ярмарка'],
    desc: 'Сердце праздника: ярмарочные домики, музыка и огни. Атмосфера настоящего русского Рождества.'
  },
  {
    title: 'ВДНХ',
    image: 'https://images.unsplash.com/photo-1671696564807-d0069fa4349d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDAlOTIlRDAlOTQlRDAlOUQlRDAlQTV8ZW58MHwwfHx8MTc2MzUwODQ5MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tags: ['Каток', 'Салют'],
    desc: 'Один из крупнейших катков Европы, световые инсталляции и праздничные шоу.'
  },
  {
    title: 'Парк Горького',
    image: 'https://images.unsplash.com/photo-1717943271985-a4d4437c3158?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDAlOUYlRDAlQjAlRDElODAlRDAlQkElMjAlRDAlOTMlRDAlQkUlRDElODAlRDElOEMlRDAlQkElRDAlQkUlRDAlQjMlRDAlQkV8ZW58MHwwfHx8MTc2MzUwODQ5Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tags: ['Каток', 'Музыка'],
    desc: 'Стильный каток, уютные огни и горячий глинтвейн. Идеально для прогулки с друзьями.'
  },
  {
    title: 'Зарядье',
    image: 'https://images.unsplash.com/photo-1517152220127-9b5f0b0fc8b0?q=80&w=2069&auto=format&fit=crop',
    tags: ['Панорама', 'Свет'],
    desc: 'Современный парк рядом с Кремлём: панорамные виды и новогодние инсталляции.'
  },
]

export default function Spots(){
  return (
    <section id="spots" className="relative py-16 bg-gradient-to-b from-black to-emerald-950/40">
      <div className="px-6 md:px-10 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white">Лучшие локации</h2>
          <a href="#plan" className="text-emerald-400 hover:text-emerald-300">Смотреть маршрут →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spots.map(s => (
            <SpotCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
