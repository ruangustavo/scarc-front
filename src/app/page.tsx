'use client'

import AirConditionerCard from '@/components/ar-conditioner-card'
import { useRooms } from './hooks/use-rooms'

export default function Home() {
  const { rooms } = useRooms()

  return (
    <main>
      {rooms?.map((room) => (
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-2"
          key={room.id}
        >
          {room.air_conditioners.map((airConditioner) => (
            <div key={airConditioner.id}>
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-1">
                {room.name}
              </h2>
              <AirConditionerCard
                key={airConditioner.id}
                isActive={airConditioner.is_active}
                location={room.name}
                name={airConditioner.model ?? airConditioner.brand}
              />
            </div>
          ))}
        </div>
      ))}
    </main>
  )
}
