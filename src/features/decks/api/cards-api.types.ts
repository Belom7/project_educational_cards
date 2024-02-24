// getCards
export type GetCardsParams = {
  id: string
  params: {
    answer?: string
    currentPage?: number
    itemsPerPage?: number
    orderBy?: string
    question?: string
  }
}
export type PaginationCards = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type Card = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}
export type GetCardsResponse = {
  items: Card[]
  pagination: PaginationCards
}

// createCard
export type CardBody = {
  answer: string
  answerImg?: string
  answerVideo?: string
  question: string
  questionImg?: string
  questionVideo?: string
}
export type CardFormType = CardBody & { condition: 'picture' | 'text' }
export type CreateUpdateCardParams = {
  body: FormData
  cardId?: string
  deckId: string
}
// type ItemCard without 'grade: number'
export type CreateUpdateCardResponse = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}
