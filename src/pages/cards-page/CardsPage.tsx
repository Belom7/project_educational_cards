import { useParams } from 'react-router-dom'

import { TypographyOption, useAppDispatch, useAppSelector } from '@/common'
import { BackToDecksLink, Button, Typography } from '@/components'
import { CardsTable, cardsActions, useGetCardsQuery, useGetDeckQuery, useMeQuery } from '@/features'

import s from './CardsPage.module.scss'

export const CardsPage = () => {
  const { id = '' } = useParams<{ id: string }>()

  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckQuery(id)
  const { data: deckData } = useGetCardsQuery({ id })

  const isCurrentUser = user?.id === deck?.userId

  return (
    <>
      <div className={s.main}>
        <div className={s.wrapper}>
          <BackToDecksLink className={s.backToDecksList} title={'Back to Decks List'} />

          {deckData ? (
            <div>
              <div className={s.nameDecks}>
                <Typography variant={TypographyOption.H1}>
                  {isCurrentUser ? 'My Deck' : 'Friends Deck'}
                </Typography>
                <Button>
                  <Typography variant={TypographyOption.Subtitle2}>
                    {isCurrentUser ? 'Add New Card' : 'Learn to Deck'}
                  </Typography>
                </Button>
              </div>
              <CardsTable cards={deckData?.items || []} />
            </div>
          ) : (
            <div>
              <div className={s.nameDecks}>
                <Typography variant={TypographyOption.H1}>Name Deck</Typography>
              </div>
              <div className={s.addingCardContentInfo}>
                <Typography className={s.addingCardContentInfo} variant={TypographyOption.Body1}>
                  This deck is empty. Click add new card to fill this deck
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
