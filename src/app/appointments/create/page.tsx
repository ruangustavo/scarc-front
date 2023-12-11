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
import React from 'react'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { api } from '@/lib/api'
import { Icons } from '@/components/icons'
import { DaySelector } from '@/components/day-selector'
import { RoomSelector } from '@/components/room-selector'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  start_day_of_week: z
    .number({
      invalid_type_error: 'O dia da semana deve ser um número',
    })
    .min(0)
    .max(6, {
      message: 'O dia da semana deve ser entre segunda-feira e domingo',
    }),
  end_day_of_week: z.number().min(0).max(6).optional(),
  hour: z.coerce
    .number({
      invalid_type_error: 'A hora deve ser um número',
    })
    .min(0)
    .max(23, {
      message: 'A hora deve ser entre 0 e 23',
    }),
  minute: z.coerce
    .number({
      invalid_type_error: 'O minuto deve ser um número',
    })
    .min(0)
    .max(59, {
      message: 'O minuto deve ser entre 0 e 59',
    }),
  state: z.boolean({
    invalid_type_error: 'O estado deve ser um valor verdadeiro ou falso',
  }),
  roomId: z.coerce
    .number({
      invalid_type_error: 'A sala deve ser um número',
    })
    .min(1, {
      message: 'Selecione uma sala',
    }),
})

export default function CreateAppointmentPage() {
  const [isCreating, setIsCreating] = React.useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      start_day_of_week: 0,
      end_day_of_week: 0,
      hour: 0,
      minute: 0,
      state: false,
    },
  })

  async function handleCreateAppointmentSubmit(
    values: z.infer<typeof formSchema>,
  ) {
    setIsCreating(true)

    const { roomId, start_day_of_week, end_day_of_week, hour, minute, state } =
      values
    await api.post(`rooms/${roomId}/appointments`, {
      roomId,
      start_day_of_week,
      end_day_of_week,
      hour,
      minute,
      state,
    })

    setIsCreating(false)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreateAppointmentSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="start_day_of_week"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dia da semana inicial</FormLabel>
              <DaySelector
                value={field.value}
                onSelect={(selectedValue) =>
                  form.setValue('start_day_of_week', selectedValue)
                }
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="end_day_of_week"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dia da semana final</FormLabel>
              <DaySelector
                value={field.value ?? 0}
                onSelect={(selectedValue) =>
                  form.setValue('end_day_of_week', selectedValue)
                }
              />
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
        <FormField
          control={form.control}
          name="hour"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Horas</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o horário em horas da sala..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                O horário em horas da sala que você deseja adicionar
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="minute"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Minutos</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o horário em minutos da sala..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                O horário em minutos da sala que você deseja adicionar
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isCreating}>
          {isCreating && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Criar agendamento
        </Button>
      </form>
    </Form>
  )
}
