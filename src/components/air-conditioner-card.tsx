import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PowerIcon } from 'lucide-react'
import { Button } from './ui/button'
import { api } from '@/lib/api'
import React from 'react'

interface AirConditionerProps {
  id: number
  name: string
  isActive: boolean
  location: string
}

export default function AirConditionerCard({
  id,
  name,
  isActive,
  location,
}: AirConditionerProps) {
  const [isOn, setIsOn] = React.useState(isActive)

  async function handlePowerButton() {
    const state = await api
      .put(`air-conditioners/${id}/state`, { state: !isOn })
      .then((response) => response.data)
      .then((data) => data.air_conditioner)
      .then((airConditioner) => airConditioner.is_active)

    setIsOn(state)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{name}</CardTitle>
        <Button variant={'ghost'} onClick={handlePowerButton}>
          <PowerIcon width={20} height={20} />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {isOn ? 'Ligado' : 'Desligado'}
        </div>
        <p className="text-xs text-muted-foreground">{location}</p>
      </CardContent>
    </Card>
  )
}
