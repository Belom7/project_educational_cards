import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const editProfileSchema = z.object({
  name: z.string().min(3).trim(),
})

export type EditProfileValues = z.infer<typeof editProfileSchema>

export const useEditProfile = (initialValues: EditProfileValues = { name: '' }) =>
  useForm<EditProfileValues>({
    defaultValues: initialValues,
    resolver: zodResolver(editProfileSchema),
  })
