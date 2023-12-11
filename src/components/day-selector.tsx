import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const weekDays = [
  { label: 'Domingo', value: 0 },
  { label: 'Segunda-feira', value: 1 },
  { label: 'Terça-feira', value: 2 },
  { label: 'Quarta-feira', value: 3 },
  { label: 'Quinta-feira', value: 4 },
  { label: 'Sexta-feira', value: 5 },
  { label: 'Sábado', value: 6 },
] as const

interface DaySelectorProps {
  value: number
  onSelect: (selectedValue: number) => void
}

export function DaySelector({ value, onSelect }: DaySelectorProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn(
            'w-full justify-between',
            !value && 'text-muted-foreground',
          )}
        >
          {value !== undefined
            ? weekDays.find((day) => day.value === Number(value))?.label
            : 'Escolha um dia da semana...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Escolha um dia da semana..." />
          <CommandEmpty>Nenhum dia encontrado.</CommandEmpty>
          <CommandGroup>
            {weekDays.map((day) => (
              <CommandItem
                value={day.label}
                key={day.value}
                onSelect={() => onSelect(day.value)}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    day.value === value ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {day.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
