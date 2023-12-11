'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useRooms } from '@/app/hooks/use-rooms'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { api } from '@/lib/api'
import { Icons } from '@/components/icons'
import { RoomSelector } from '@/components/room-selector'

const formSchema = z.object({
  brand: z.string().min(2, {
    message: 'A marca deve ter pelo menos 2 caracteres',
  }),
  model: z.string().min(2, {
    message: 'O modelo deve ter pelo menos 2 caracteres',
  }),
  roomId: z.coerce.number().min(1, {
    message: 'Selecione uma sala',
  }),
})

export default function AddAirConditionerPage() {
  const [isSaving, setIsSaving] = React.useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brand: '',
      model: '',
      roomId: 0,
    },
  })

  async function handleAddAirConditionerSubmit(
    values: z.infer<typeof formSchema>,
  ) {
    setIsSaving(true)

    const { brand, model, roomId } = values
    await api.post(`rooms/${roomId}/air-conditioners`, {
      brand,
      model,
    })

    setIsSaving(false)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleAddAirConditionerSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marca</FormLabel>
              <FormControl>
                <Input placeholder="Digite a marca..." {...field} />
              </FormControl>
              <FormDescription>
                A marca do ar-condicionado que você deseja adicionar
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Modelo</FormLabel>
              <FormControl>
                <Input placeholder="Digite o modelo..." {...field} />
              </FormControl>
              <FormDescription>
                A marca do ar-condicionado que você deseja adicionar
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="roomId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sala</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={String(field.value)}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma sala" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <RoomSelector />
                </SelectContent>
              </Select>
              <FormDescription>
                Clique para selecionar a sala onde o ar-condicionado está
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSaving}>
          {isSaving && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Adicionar ar-condicionado
        </Button>
      </form>
    </Form>
  )
}
