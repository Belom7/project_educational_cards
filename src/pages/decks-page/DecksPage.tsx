import { useParams } from 'react-router-dom'

import { TypographyOption } from '@/common'
import { BackToDecksLink, Button, Typography } from '@/components'
import { DeckTable, useGetCardsQuery } from '@/features'

import s from './DecksPage.module.scss'

const data = [
  {
    answer: 'This is how "This" works in JavaScript',
    question: 'How "This" works in JavaScript?',
    shots: '3',
    updated: '18.03.2021',
  },
  {
    answer: 'This is how "This" works in JavaScript',
    question: 'How "This" works in JavaScript?',
    shots: '2',
    updated: '18.03.2021',
  },
  {
    answer: 'This is how "This" works in JavaScript',
    question: 'How "This" works in JavaScript?',
    shots: '1',
    updated: '18.03.2021',
  },
  {
    answer: 'This is how "This" works in JavaScript',
    question: 'How "This" works in JavaScript?',
    shots: '4',
    updated: '18.03.2021',
  },
  {
    answer: 'This is how "This" works in JavaScript',
    question: 'How "This" works in JavaScript?',
    shots: '6',
    updated: '18.03.2021',
  },
]

export const DecksPage = () => {
  const { id = '' } = useParams<{ id: string }>()

  const { data: deckData } = useGetCardsQuery({ id })

  const user = true

  //const datas = false

  return (
    <>
      <div className={s.main}>
        <div className={s.wrapper}>
          <BackToDecksLink title={'Back to Decks List'} />

          {data ? (
            <div>
              <div className={s.nameDecks}>
                <Typography variant={TypographyOption.H1}>
                  {user ? 'My Pack' : 'Friends Pack'}
                </Typography>
                <Button>
                  <Typography variant={TypographyOption.Subtitle2}>
                    {user ? 'Add New Card' : 'Learn to Pack'}
                  </Typography>
                </Button>
              </div>
              <DeckTable cards={deckData?.items || []} />
            </div>
          ) : (
            <div>
              <div className={s.nameDecks}>
                <Typography variant={TypographyOption.H1}>Name Pack</Typography>
              </div>
              <div className={s.addingCardContentInfo}>
                <Typography className={s.addingCardContentInfo} variant={TypographyOption.Body1}>
                  This pack is empty. Click add new card to fill this pack
                </Typography>
                <Button>
                  <Typography variant={TypographyOption.Subtitle2}>Add New Card</Typography>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
