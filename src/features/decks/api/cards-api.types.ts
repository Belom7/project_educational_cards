// getCards
export type GetCardsParams = {
  answer?: string
  currentPage?: number
  id: string
  itemsPerPage?: number
  orderBy?: string
  question?: string
}
export type PaginationCards = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type ItemCard = {
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
  items: ItemCard[]
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
export type CreateCardParams = {
  body: CardBody // FormData???
  id: string
}
// type ItemCard without 'grade: number'
export type CreateCardResponse = {
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
