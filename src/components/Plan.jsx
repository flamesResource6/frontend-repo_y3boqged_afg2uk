import { useMemo } from 'react'

export default function Plan(){
  const steps = useMemo(() => ([
    { time: '17:00', title: 'Красная площадь', tip: 'Начните с главной ёлки и горячего какао' },
    { time: '18:30', title: 'Зарядье', tip: 'Фото на панораме у парящего моста' },
    { time: '19:30', title: 'Парк Горького', tip: 'Каток и музыка под открытым небом' },
    { time: '21:30', title: 'ВДНХ', tip: 'Фейерверк и ярмарка с сувенирами' },
  ]), [])

  return (
    <section id="plan" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(16,185,129,0.15),transparent_40%)]"/>
      <div className="relative px-6 md:px-10 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-10">Идеальный вечер в Москве</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur">
              <div className="text-emerald-400 font-mono text-sm">{step.time}</div>
              <div className="text-white font-semibold text-lg mt-1">{step.title}</div>
              <div className="text-white/70 text-sm mt-2">{step.tip}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
