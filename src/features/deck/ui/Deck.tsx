import { useState } from 'react'

import { ButtonOption, TypographyOption } from '@/common'
import { Button, Card, Typography } from '@/components'

import s from './Deck.module.scss'

export const Deck = () => {
  const [isDisplayAnswer, setIsDisplayAnswer] = useState(true)
  const card = {
    answer: 'это ответ',
    answerImg: '',
    name: 'sad',
    question: 'asdsad',
    questionImg: null,
    shots: 5,
  }

  return (
    <Card className={s.root}>
      <Typography className={s.title} variant={TypographyOption.H1}>
        Learn {card?.name}
      </Typography>
      <Typography className={s.question} variant={TypographyOption.Subtitle1}>
        Question: {card?.question}
      </Typography>
      {card?.questionImg && (
        <div className={s.imgWrapper}>
          <img alt={'question'} src={card.questionImg} />
        </div>
      )}
      <Typography className={s.attemptsText} variant={TypographyOption.Subtitle2}>
        Number of attempts: {card?.shots}
      </Typography>
      {isDisplayAnswer ? (
        <>
          <Typography className={s.question} variant={TypographyOption.Subtitle1}>
            <b>Answer:</b> {card?.answer}
          </Typography>
          {card?.answerImg && (
            <div className={s.imgWrapper}>
              <img alt={'answer'} src={card.answerImg} />
            </div>
          )}
        </>
      ) : (
        <div></div>
      )}
      <Button className={s.showButton} variant={ButtonOption.Primary}>
        <Typography variant={TypographyOption.Subtitle2}>Show Answer</Typography>
      </Button>
    </Card>
  )
}
