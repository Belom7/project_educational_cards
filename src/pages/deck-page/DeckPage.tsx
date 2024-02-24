import { Routes } from '@/common'
import { GoBack, Page } from '@/components'
import { Deck } from '@/features/deck/ui'

import s from './DeckPage.module.scss'

export const DeckPage = () => {
  return (
    <Page className={s.deckContainer}>
      <GoBack className={s.buttonBackPosition} title={'Back to Decks List'} to={Routes.Main} />
      <Deck />
    </Page>
  )
}
