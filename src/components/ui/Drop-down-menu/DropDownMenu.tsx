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
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            <div style={{ border: '1px solid green', padding: '10px' }}>
              <img
                alt={'img'}
                src={'https://www.blexar.com/avatar.png'}
                style={{ borderRadius: '20px', height: '36px', width: '36px' }}
              />
            </div>
            <div>{'Дикий Ангел'}</div>
            <div>{'@www.ru'}</div>
          </DropdownMenu.Item>

          <div className={s.RightSlot}></div>
          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            <div className={s.RightSlot}>{<PersonOutline />}</div>My Profile
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
