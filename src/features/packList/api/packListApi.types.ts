export type BaseDeckResponseType = {
  items: ResponseTypeItems[]
  maxCardsCount: number
  pagination: ResponseTypePagination
}
export type ResponseTypeItemsAuthor = {
  id: string
  name: string
}
export type ResponseTypeItems = {
  author: ResponseTypeItemsAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  shots: number
  updated: string
  userId: string
}
export type ResponseTypePagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type GetDecksParamsType = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}
