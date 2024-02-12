import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { ButtonOption, TypographyOption } from '@/common'
import { Button, Card, Typography } from '@/components'
import { useGetRandomDeckQuery, useRateDeckMutation } from '@/features/deck/api'
import { RateLernCard } from '@/features/deck/ui/rateLearnCard'

import s from './Deck.module.scss'

export const Deck = () => {
  const [isDisplayAnswer, setIsDisplayAnswer] = useState(false)

  const params = useParams()
  const id = params?.id?.substring(1) as string
  const [rateDeck] = useRateDeckMutation()
  const { data } = useGetRandomDeckQuery({ id })

  console.log(data?.id, id)
  const onSubmit = (dat: any) => {
    rateDeck({ cardId: data!.id, deckId: id, grade: Number(dat.grade) })
    setIsDisplayAnswer(false)
  }

  return (
    <Card className={s.root}>
      <Typography className={s.title} variant={TypographyOption.H1}>
        Learn {data?.name}
      </Typography>
      <Typography className={s.question} variant={TypographyOption.Subtitle1}>
        Question: {data?.question}
      </Typography>
      {data?.questionImg && (
        <div className={s.imgWrapper}>
          <img alt={'question'} src={data.questionImg} />
        </div>
      )}
      <Typography className={s.attemptsText} variant={TypographyOption.Subtitle2}>
        Number of attempts: {data?.shots}
      </Typography>
      {isDisplayAnswer ? (
        <>
          <Typography className={s.question} variant={TypographyOption.Subtitle1}>
            Answer: {data?.answer}
          </Typography>
          {data?.answerImg && (
            <div className={s.imgWrapper}>
              <img alt={'answer'} src={data.answerImg} />
            </div>
          )}
          <Typography className={s.rate} variant={TypographyOption.Subtitle1}>
            Rate yourself:
          </Typography>
          <RateLernCard onSubmit={onSubmit} />
        </>
      ) : (
        <Button
          className={s.showButton}
          onClick={setIsDisplayAnswer}
          variant={ButtonOption.Primary}
        >
          <Typography variant={TypographyOption.Subtitle2}>Show Answer</Typography>
        </Button>
      )}
    </Card>
  )
}
