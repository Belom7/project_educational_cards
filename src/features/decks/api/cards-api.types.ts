export type GetCardsParams = {
  answer: string
  currentPage: number
  id: string
  itemsPerPage: number
  orderBy: string
  question: string
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
