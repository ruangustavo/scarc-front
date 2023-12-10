'use client'

import { cn } from '@/lib/utils'
import { Calendar, LayoutGrid, PlusSquare } from 'lucide-react'
import { buttonVariants } from './ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type SidebarProps = React.HTMLAttributes<HTMLDivElement>

const sideBarItems = [
  {
    title: 'Geral',
    items: [
      {
        title: 'Início',
        href: '/',
        icon: LayoutGrid,
      },
    ],
  },
  {
    title: 'Ar-condicionados',
    items: [
      {
        title: 'Adicionar novo',
        href: '/air-conditioners/create',
        icon: PlusSquare,
      },
    ],
  },
  {
    title: 'Agendamentos',
    items: [
      {
        title: 'Fazer um agendamento',
        href: '/schedules/create',
        icon: Calendar,
      },
    ],
  },
]

export function SidebarNav({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        {sideBarItems.map((item) => (
          <div key={item.title} className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              {item.title}
            </h2>
            <div className="space-y-1">
              {item.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: 'secondary' }),
                    'w-full justify-start hover:bg-muted',
                    pathname === item.href ? 'bg-muted' : 'bg-transparent',
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
