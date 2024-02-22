const columns = [
  {
    key: 'Question',
    sortable: true,
    title: 'Question',
  },
  {
    key: 'Answer',
    sortable: true,
    title: 'Answer',
  },
  {
    key: 'Last Updated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'Grade',
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
