import { TypographyOption } from '@/common/enums'
import { LeftArrow } from '@/components/assets'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/ui/Header'
import { TableComponent } from '@/components/ui/Table/TableComponent'
import { Typography } from '@/components/ui/Typography'

import s from './PackListPage.module.scss'
const data = [
  {
    answer: 'This is how "This" works in JavaScript',
    question: 'How "This" works in JavaScript?',
    shots: '3',
    updated: '18.03.2021',
  },
  {
    answer: 'This is how "This" works in JavaScript',
    question: 'How "This" works in JavaScript?',
    shots: '2',
    updated: '18.03.2021',
  },
  {
    answer: 'This is how "This" works in JavaScript',
    question: 'How "This" works in JavaScript?',
    shots: '1',
    updated: '18.03.2021',
  },
  {
    answer: 'This is how "This" works in JavaScript',
    question: 'How "This" works in JavaScript?',
    shots: '4',
    updated: '18.03.2021',
  },
  {
    answer: 'This is how "This" works in JavaScript',
    question: 'How "This" works in JavaScript?',
    shots: '6',
    updated: '18.03.2021',
  },
]
const columns = [
  {
    key: 'Question',
    title: 'Question',
  },
  {
    key: 'Answer',
    title: 'Answer',
  },
  {
    key: 'Last Updated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'Grade',
    title: 'Grade',
  },
]

export const PackListPage = () => {
  const user = true

  //const datas = false

  return (
    <>
      <Header authorized></Header>
      <div className={s.main}>
        <div className={s.wrapper}>
          <div className={s.backContent}>
            <LeftArrow />
            <Typography variant={TypographyOption.Body2}>Back to Packs List</Typography>
          </div>

          {data ? (
            <div>
              <div className={s.namePacks}>
                <Typography variant={TypographyOption.H1}>
                  {user ? 'My Pack' : 'Friends Pack'}
                </Typography>
                <Button>
                  <Typography variant={TypographyOption.Subtitle2}>
                    {user ? 'Add New Card' : 'Learn to Pack'}
                  </Typography>
                </Button>
              </div>
              <TableComponent data={data} me={user} packList={false} tableHeaderData={columns} />
            </div>
          ) : (
            <div>
              <div className={s.namePacks}>
                <Typography variant={TypographyOption.H1}>Name Pack</Typography>
              </div>
              <div className={s.addingCardContentInfo}>
                <Typography className={s.addingCardContentInfo} variant={TypographyOption.Body1}>
                  This pack is empty. Click add new card to fill this pack
                </Typography>
                <Button>
                  <Typography variant={TypographyOption.Subtitle2}>Add New Card</Typography>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
