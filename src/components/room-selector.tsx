import { useRooms } from '@/app/hooks/use-rooms'
import { SelectItem } from './ui/select'

export function RoomSelector() {
  const { rooms } = useRooms()

  return (
    <>
      {rooms.map((room) => (
        <SelectItem key={room.id} value={String(room.id)}>
          {room.name}
        </SelectItem>
      ))}
    </>
  )
}
