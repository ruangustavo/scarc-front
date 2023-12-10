import { SidebarNav } from '@/components/sidebar-nav'
import { LayoutGrid } from 'lucide-react'

const sidebarNavItems = [
  {
    icon: <LayoutGrid width={16} height={16} />,
    title: 'Início',
    href: '/',
  },
]

export default function Home() {
  return (
    <div className="flex-1 grid grid-cols-[200px_1fr] gap-12">
      <div className="hidden md:block">
        <aside>
          <SidebarNav items={sidebarNavItems} />
        </aside>
      </div>
      <main>
        <p>Aqui está o conteúdo</p>
      </main>
    </div>
  )
}
