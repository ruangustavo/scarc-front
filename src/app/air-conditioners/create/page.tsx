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

const formSchema = z.object({
  brand: z.string().min(2, {
    message: 'A marca deve ter pelo menos 2 caracteres',
  }),
  model: z.string().min(2, {
    message: 'O modelo deve ter pelo menos 2 caracteres',
  }),
})

export default function AddAirConditionerPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brand: '',
      model: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <Button type="submit">Adicionar ar-condicionado</Button>
      </form>
    </Form>
  )
}
