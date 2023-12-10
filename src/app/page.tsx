import AirConditionerCard from '@/components/ar-conditioner-card'
import { SidebarNav } from '@/components/sidebar-nav'

const airConditioners = [
  {
    id: 1,
    name: 'Ar-condicionado 1',
    isToggled: true,
    location: 'Sala A, bloco anexo',
  },
  {
    id: 2,
    name: 'Ar-condicionado 3',
    isToggled: false,
    location: 'Sala B, bloco principal',
  },
  {
    id: 3,
    name: 'Ar-condicionado 4',
    isToggled: true,
    location: 'Sala C, bloco principal',
  },
  {
    id: 4,
    name: 'Ar-condicionado 5',
    isToggled: false,
    location: 'Sala D, bloco principal',
  },
  {
    id: 5,
    name: 'Ar-condicionado 6',
    isToggled: true,
    location: 'Sala E, bloco principal',
  },
]

export default function Home() {
  return (
    <div className="flex-1 grid md:grid-cols-[250px_1fr] md:gap-12">
      <div className="hidden md:block">
        <aside>
          <SidebarNav />
        </aside>
      </div>
      <main>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {airConditioners.map((airConditioner) => (
            <AirConditionerCard key={airConditioner.id} {...airConditioner} />
          ))}
        </div>
      </main>
    </div>
  )
}
