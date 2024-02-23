import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { TypographyOption, useDebounce } from '@/common'
import { BackToDecksLink, Button, Typography, WithoutTable } from '@/components'
import { AddCard, CardsTable, useGetCardsQuery, useGetDeckQuery, useMeQuery } from '@/features'
import { useCardsOptions } from '@/features/decks/hooks/use-cards-options'

import s from './CardsPage.module.scss'

export const CardsPage = () => {
  const { id = '' } = useParams<{ id: string }>()
  const { currentPage, itemsPerPage, onChangeSort, onResetState, orderBy, question, sort } =
    useCardsOptions()

  const queryParams = {
    id,
    params: {
      currentPage,
      itemsPerPage,
      orderBy,
      question: useDebounce(question, 500),
    },
  }

  useEffect(() => {
    return () => onResetState()
  }, [])

  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckQuery(id)
  const { data: deckData } = useGetCardsQuery(queryParams)

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
                  <AddCard />
                </div>
                <CardsTable
                  cards={deckData?.items || []}
                  isCurrentUser
                  onSort={onChangeSort}
                  sort={sort}
                />
              </div>
            ) : (
              <div>
                <div className={s.nameDecks}>
                  <Typography variant={TypographyOption.H1}>{deck?.name}</Typography>
                </div>
                <div className={s.addingCardContentInfo}>
                  <WithoutTable text={'This deck is empty. Click add new card to fill this deck'}>
                    <AddCard />
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
                <CardsTable
                  cards={deckData?.items || []}
                  isCurrentUser={false}
                  onSort={onChangeSort}
                  sort={sort}
                />
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
