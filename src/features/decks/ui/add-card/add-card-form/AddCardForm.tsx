import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { ButtonOption } from '@/common'
import { Button, ControlledTextField } from '@/components'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './AddCardForm.module.scss'

type AddCardFormProps = {
  onCloseModal: () => void
  onSubmit: (data: FormValues) => void
}
type FormValues = {
  answer: string
  question: string
}

const cardSchema = z.object({
  answer: z.string().min(3).max(140),
  question: z.string().min(3).max(140),
})

export const AddCardForm: FC<AddCardFormProps> = ({ onCloseModal, onSubmit }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(cardSchema),
  })

  return (
    <form className={s.root} onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <div className={s.row}>
        <ControlledTextField
          control={control}
          errorMessage={errors.question?.message}
          label={'Question'}
          name={'question'}
        />
      </div>
      <div className={s.row}>
        <ControlledTextField
          control={control}
          errorMessage={errors.answer?.message}
          label={'Answer'}
          name={'answer'}
        />
      </div>
      <div className={s.buttons}>
        <Button onClick={onCloseModal} variant={ButtonOption.Secondary}>
          Cancel
        </Button>
        <Button type={'submit'}>Add new card</Button>
      </div>
    </form>
  )
}
