import useSWR from 'swr'

interface AirConditioner {
  id: number
  brand: string
  model: string
  is_active: boolean
}

interface Room {
  id: number
  name: string
  description: string
  air_conditioners: AirConditioner[]
}

export function useRooms() {
  const { data, error, isLoading } = useSWR<{ rooms: Room[] }>('/rooms')
  const rooms = data?.rooms ?? []
  return {
    rooms,
    error,
    isLoading,
  }
}
