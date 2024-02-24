import { FC, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'

import { ButtonOption, CardFormSelectItems } from '@/common'
import { Button, ControlledSelect, ControlledTextField } from '@/components'
import { CardBody, CardFormType } from '@/features'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './CardForm.module.scss'

import { CardFormPictureField } from './CardFormPictureField'

type CardFormProps = {
  buttonTitle?: string
  cardValues?: CardBody
  imageUrl?: null | string | undefined
  onCloseModal: () => void
  onSubmit: (body: FormData) => void
}

const cardSchema = z.object({
  answer: z.string().min(3).max(140),
  question: z.string().min(3).max(140),
})

export const selectItems = [
  { child: 'Text', value: CardFormSelectItems.Text },
  { child: 'Picture', value: CardFormSelectItems.Picture },
]

export const CardForm: FC<CardFormProps> = ({
  buttonTitle = 'Add new card',
  cardValues,
  onCloseModal,
  onSubmit,
}) => {
  const [questionCover, setQuestionCover] = useState<File | null>(null)
  const [answerCover, setAnswerCover] = useState<File | null>(null)

  const [_, setQuestionCoverError] = useState<null | string>(null)
  const [__, setAnswerCoverError] = useState<null | string>(null)

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<CardFormType>({
    resolver: zodResolver(cardSchema),
  })

  const type = useWatch({ control, name: 'condition' })

  const questionImageUrl = questionCover
    ? URL.createObjectURL(questionCover)
    : cardValues?.questionImg
  const answerImageUrl = answerCover ? URL.createObjectURL(answerCover) : cardValues?.questionImg

  const onSubmitHandler = (data: CardBody) => {
    const formData = new FormData()

    formData.append('question', data.question)
    formData.append('answer', data.answer)
    questionCover && formData.append('questionImg', questionCover)
    answerCover && formData.append('answerImg', answerCover)
    onSubmit(formData)
  }

  const onLoadQuestionCover = (data: File) => {
    setQuestionCover(data)
    setQuestionCoverError(null)
  }
  const onLoadQuestionCoverError = (error: string) => {
    setQuestionCoverError(error)
  }

  const onLoadAnswerCover = (data: File) => {
    setAnswerCover(data)
    setAnswerCoverError(null)
  }
  const onLoadAnswerCoverError = (error: string) => {
    setAnswerCoverError(error)
  }

  return (
    <form className={s.root} onSubmit={handleSubmit(onSubmitHandler)}>
      <DevTool control={control} />
      <div className={s.row}>
        <ControlledSelect
          control={control}
          fullWidth
          name={'condition'}
          selectItems={selectItems}
          title={'Choose a question format'}
        />
      </div>
      {type === CardFormSelectItems.Picture ? (
        <>
          <CardFormPictureField
            imageUrl={questionImageUrl}
            onLoadCover={onLoadQuestionCover}
            onLoadError={onLoadQuestionCoverError}
            title={'Question:'}
          />
          <CardFormPictureField
            imageUrl={answerImageUrl}
            onLoadCover={onLoadAnswerCover}
            onLoadError={onLoadAnswerCoverError}
            title={'Answer:'}
          />
        </>
      ) : (
        <>
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
        </>
      )}
      <div className={s.buttons}>
        <Button onClick={onCloseModal} variant={ButtonOption.Secondary}>
          Cancel
        </Button>
        <Button type={'submit'}>{buttonTitle}</Button>
      </div>
    </form>
  )
}
