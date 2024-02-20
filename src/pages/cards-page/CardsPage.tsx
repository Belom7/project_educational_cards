import { useParams } from 'react-router-dom'

import { TypographyOption, useAppDispatch, useAppSelector } from '@/common'
import { BackToDecksLink, Button, Typography, WithoutTable } from '@/components'
import { CardsTable, cardsActions, useGetCardsQuery, useGetDeckQuery, useMeQuery } from '@/features'

import s from './CardsPage.module.scss'

export const CardsPage = () => {
  const dispatch = useAppDispatch()
  const { id = '' } = useParams<{ id: string }>()
  const sort = useAppSelector(state => state.cards.sort)
  const onSort = () => {
    dispatch(cardsActions.setOrderBy({ sortParams: sort }))
  }

  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckQuery(id)
  const { data: deckData } = useGetCardsQuery({ id })

  const isCurrentUser = user?.id === deck?.userId
  const isDeckNotEmpty = deckData && deckData.items.length > 0

  return (
    <>
      <div className={s.main}>
        <div className={s.wrapper}>
          <BackToDecksLink className={s.backToDecksList} title={'Back to Decks List'} />
          {isCurrentUser &&
            (isDeckNotEmpty ? (
              <div>
                <div className={s.nameDecks}>
                  <Typography variant={TypographyOption.H1}>{deck?.name}</Typography>
                  <Button>
                    <Typography variant={TypographyOption.Subtitle2}>Add New Card</Typography>
                  </Button>
                </div>
                <CardsTable cards={deckData?.items || []} onSort={onSort} sort={sort} />
              </div>
            ) : (
              <div>
                <div className={s.nameDecks}>
                  <Typography variant={TypographyOption.H1}>{deck?.name}</Typography>
                </div>
                <div className={s.addingCardContentInfo}>
                  <WithoutTable text={'This deck is empty. Click add new card to fill this deck'}>
                    <Button>
                      <Typography variant={TypographyOption.Subtitle2}>Add New Card</Typography>
                    </Button>
                  </WithoutTable>
                </div>
              </div>
            ))}
          {!isCurrentUser &&
            (isDeckNotEmpty ? (
              <div>
                <div className={s.nameDecks}>
                  <Typography variant={TypographyOption.H1}>{deck?.name}</Typography>
                  <Button>
                    <Typography variant={TypographyOption.Subtitle2}>Learn to Deck</Typography>
                  </Button>
                </div>
                <CardsTable cards={deckData?.items || []} onSort={onSort} sort={sort} />
              </div>
            ) : (
              <div>
                <div className={s.nameDecks}>
                  <Typography variant={TypographyOption.H1}>{deck?.name}</Typography>
                </div>
                <div className={s.addingCardContentInfo}>
                  <WithoutTable text={'This deck is empty. Click Back to Decks List'}>
                    <BackToDecksLink
                      className={s.backToDecksList}
                      title={'Back to Decks List'}
                      type={'primary'}
                    />
                  </WithoutTable>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
