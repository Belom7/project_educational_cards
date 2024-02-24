import { FC, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'

import { ButtonOption, CardFormSelectItems } from '@/common'
import { Button, ControlledSelect, ControlledTextField } from '@/components'
import { CardBody, CardForm } from '@/features'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './AddCardForm.module.scss'

import { CardFormPictureField } from './CardFormPictureField'

type AddCardFormProps = {
  cardValues?: CardBody
  imageUrl?: null | string | undefined
  onCloseModal: () => void
  onSubmit: (body: FormData) => void
}

const cardSchema = z.object({
  answer: z.string().min(3).max(140),
  question: z.string().min(3).max(140),
})

const selectItems = [
  { child: 'Text', value: CardFormSelectItems.Text },
  { child: 'Picture', value: CardFormSelectItems.Picture },
]

export const AddCardForm: FC<AddCardFormProps> = ({ cardValues, onCloseModal, onSubmit }) => {
  const [questionCover, setQuestionCover] = useState<File | null>(null)
  const [answerCover, setAnswerCover] = useState<File | null>(null)

  const [_, setQuestionCoverError] = useState<null | string>(null)
  const [__, setAnswerCoverError] = useState<null | string>(null)

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<CardForm>({
    resolver: zodResolver(cardSchema),
  })

  const type = useWatch({ control, name: 'condition' })

  const questionImageUrl = questionCover
    ? URL.createObjectURL(questionCover)
    : cardValues?.questionImg
  const answerImageUrl = answerCover ? URL.createObjectURL(answerCover) : cardValues?.questionImg

  const onSubmitHandler = (data: CardBody) => {
    const formData = new FormData()

    // formData.question = data.question
    // formData.answer = data.answer
    // if (questionCover) {
    //   formData.questionImg = questionCover
    // }
    // if (answerCover) {
    //   formData.answerImg = answerCover
    // }
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
      {type === CardFormSelectItems.Text ? (
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
      ) : (
        <>
          <CardFormPictureField
            imageUrl={questionImageUrl}
            onLoadCover={onLoadQuestionCover}
            onLoadError={onLoadQuestionCoverError}
          />
          <CardFormPictureField
            imageUrl={answerImageUrl}
            onLoadCover={onLoadAnswerCover}
            onLoadError={onLoadAnswerCoverError}
          />
        </>
      )}
      <div className={s.buttons}>
        <Button onClick={onCloseModal} variant={ButtonOption.Secondary}>
          Cancel
        </Button>
        <Button type={'submit'}>Add new card</Button>
      </div>
    </form>
  )
}
