import { TypographyOption } from '@/common/enums'
import { ButtonPlay, EditTablePencil, Trash } from '@/components/assets'
import { Typography } from '../../typography'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './Dropdown.module.scss'

export const Dropdown = () => {
  return (
    <div className={s.main}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <img alt={''} className={s.avatar} />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
            <DropdownMenu.Item className={s.DropdownMenuItem}>
              <ButtonPlay />
              <Typography className={s.typographyItem} variant={TypographyOption.Subtitle2}>
                Learn
              </Typography>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
            <DropdownMenu.Item className={s.DropdownMenuItem}>
              <EditTablePencil />
              <Typography className={s.typographyItem} variant={TypographyOption.Subtitle2}>
                Edit
              </Typography>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
            <DropdownMenu.Item className={s.DropdownMenuItem}>
              <Trash />
              <Typography className={s.typographyItem} variant={TypographyOption.Subtitle2}>
                Delete
              </Typography>
            </DropdownMenu.Item>
            <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
