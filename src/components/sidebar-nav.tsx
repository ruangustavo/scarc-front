import { cn } from '@/lib/utils'

import { Calendar, LayoutGrid, PlusSquare } from 'lucide-react'
import { Button } from './ui/button'

type SidebarProps = React.HTMLAttributes<HTMLDivElement>

export function SidebarNav({ className }: SidebarProps) {
  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Geral
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <LayoutGrid className="mr-2 h-4 w-4" />
              Início
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Ar-condicionados
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <PlusSquare className="mr-2 h-4 w-4" />
              Adicionar ar-condicionado
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Agendamentos
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Fazer um agendamento
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
