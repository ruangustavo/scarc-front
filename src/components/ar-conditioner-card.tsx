import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PowerIcon } from 'lucide-react'

interface AirConditionerProps {
  name: string
  isToggled: boolean
  location: string
}

export default function AirConditionerCard({
  name,
  isToggled,
  location,
}: AirConditionerProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{name}</CardTitle>
        <PowerIcon width={20} height={20} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {isToggled ? 'Ligado' : 'Desligado'}
        </div>
        <p className="text-xs text-muted-foreground">{location}</p>
      </CardContent>
    </Card>
  )
}
