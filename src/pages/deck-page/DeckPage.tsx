import { BackToDecksLink, Page } from '@/components'
import { Deck } from '@/features/deck/ui'

import s from './DeckPage.module.scss'

export const DeckPage = () => {
  return (
    <Page className={s.deckContainer}>
      <BackToDecksLink className={s.backToDecksList} title={'Back to Decks List'} />
      <Deck />
    </Page>
  )
}
