import useSWR from 'swr'

interface AirConditioner {
  id: string
  brand: string
  model: string
  is_active: boolean
}

interface Room {
  id: string
  name: string
  description: string
  air_conditioners: AirConditioner[]
}

export function useRooms() {
  const { data: rooms, error, isLoading } = useSWR<Room[]>('/rooms')
  return {
    rooms,
    error,
    isLoading,
  }
}
