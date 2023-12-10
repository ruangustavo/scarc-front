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
import { api } from '@/lib/api'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'O nome da sala deve ter pelo menos 2 caracteres',
  }),
  description: z.string().min(2, {
    message: 'A descrição da sala deve ter pelo menos 2 caracteres',
  }),
})

export default function CreateRoomPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  async function handleCreateRoomSubmit(values: z.infer<typeof formSchema>) {
    const { name, description } = values
    const response = await api.post('/rooms', { name, description })
    console.log(response)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreateRoomSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite o nome da sala..." {...field} />
              </FormControl>
              <FormDescription>
                O nome da sala que você deseja adicionar
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input placeholder="Digite a descrição da sala..." {...field} />
              </FormControl>
              <FormDescription>
                A descrição da sala que você deseja adicionar
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Adicionar sala</Button>
      </form>
    </Form>
  )
}
