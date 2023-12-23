import { TypographyOption } from '@/common/enums'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/ui/Header'
import { TabSwitcher } from '@/components/ui/Tab-Switcher'
import { TextField } from '@/components/ui/Text-field'
import { Typography } from '@/components/ui/Typography'

import s from './packListPage.module.scss'
export const PackListPage = () => {
  return (
    <>
      <Header authorized></Header>
      <div className={s.main}>
        <div className={s.wrapper}>
          <div className={s.packsList}>
            <Typography variant={TypographyOption.H1}>Packs list</Typography>
            <Button>
              <Typography variant={TypographyOption.Subtitle2}>Add New Pack</Typography>
            </Button>
          </div>
          <div>
            <TextField></TextField>
            <TabSwitcher></TabSwitcher>
          </div>
        </div>
      </div>
    </>
  )
}
