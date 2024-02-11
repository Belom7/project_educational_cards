export type Deck = {
  answer: string
  answerImg: null | string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: null | string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}
type Author = {
  id: string
  name: string
}
export type DeckType = {
  author: Author
  cardsCount: number
  cover: null | string
  created: string
  id: string
  isBlocked?: boolean | null
  isDeleted?: boolean | null
  isPrivate: boolean
  name: string
  rating: number
  shots: number
  updated: string
  userId: string
}
export type DeckResponse = Omit<Deck, 'userId'>
export type RandomDeckRequest = {
  id: string
  previousCardId?: string
}
export type GetDeckResponseType = Omit<DeckType, 'author'>
