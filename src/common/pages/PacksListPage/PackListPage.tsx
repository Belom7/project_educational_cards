import { TypographyOption } from '@/common/enums'
import { LeftArrow } from '@/components/assets'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/ui/Header'
import { TableComponent } from '@/components/ui/Table/TableComponent'
import { Typography } from '@/components/ui/Typography'

import s from './PackListPage.module.scss'
const data = [
  {
    cardsCount: 10,
    createdBy: 'John Doe',
    title: 'Project A',
    updated: '2023-07-07',
  },
  {
    cardsCount: 5,
    createdBy: 'Jane Smith',
    title: 'Project B',
    updated: '2023-07-06',
  },
  {
    cardsCount: 8,
    createdBy: 'Alice Johnson',
    title: 'Project C',
    updated: '2023-07-05',
  },
  {
    cardsCount: 3,
    createdBy: 'Bob Anderson',
    title: 'Project D',
    updated: '2023-07-07',
  },
  {
    cardsCount: 12,
    createdBy: 'Emma Davis',
    title: 'Project E',
    updated: '2023-07-04',
  },
]

export const PackListPage = () => {
  const datas = false

  return (
    <>
      <Header authorized></Header>
      <div className={s.main}>
        <div className={s.wrapper}>
          <div className={s.backContent}>
            <LeftArrow />
            <Typography variant={TypographyOption.Body2}>Back to Packs List</Typography>
          </div>

          {datas ? (
            <div>
              <TableComponent data={data} />
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
