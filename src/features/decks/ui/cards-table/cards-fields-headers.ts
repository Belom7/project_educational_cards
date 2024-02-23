const columns = [
  {
    key: 'question',
    sortable: true,
    title: 'Question',
  },
  {
    key: 'answer',
    sortable: true,
    title: 'Answer',
  },
  {
    key: 'updated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'grade',
    sortable: true,
    title: 'Grade',
  },
  {
    key: 'icons',
    title: '',
  },
]

export const getCardsFieldsHeaders = (isCurrentUser: boolean) => {
  return isCurrentUser ? columns : columns.slice(0, columns.length - 1)
}
