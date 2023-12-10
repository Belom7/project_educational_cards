import { ReactNode } from 'react'

import { LogOutOutline } from '@/components/assets/icons/componentsFromIcon/LogOutOutline'
import { PersonOutline } from '@/components/assets/icons/componentsFromIcon/PersonOutline'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './DropDownMenu.module.scss'

type DropDownMenuPropsType = {
  children: ReactNode
}
export const DropDownMenu = ({ children }: DropDownMenuPropsType) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={0}>
          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />

          <DropdownMenu.Item className={s.DropdownMenuItem}>
            My Profile <div className={s.RightSlot}>{<PersonOutline />}</div>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />

          <DropdownMenu.Item className={s.DropdownMenuItem}>
            <div className={s.RightSlot}>{<LogOutOutline />}</div> Sign Out
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
