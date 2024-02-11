import { useForm } from 'react-hook-form'

import { Button, ControlledRadioGroup } from '@/components'
import { rateOptions } from '@/features/deck/ui'

import s from './RateLernCard.module.scss'
export type RateLearnCardValues = {
  grade: string
}
type RateLernCardProps = {
  onSubmit: () => void
}
export const RateLernCard = ({ onSubmit }: RateLernCardProps) => {
  const { control, handleSubmit } = useForm<RateLearnCardValues>({
    defaultValues: { grade: '1' },
  })

  return (
    <form className={s.root} onSubmit={handleSubmit(onSubmit)}>
      <ControlledRadioGroup
        className={s.radioGroup}
        control={control}
        items={rateOptions}
        name={'grade'}
      />
      <Button className={s.buttonNextCard} type={'submit'}>
        Next Question
      </Button>
    </form>
  )
}
