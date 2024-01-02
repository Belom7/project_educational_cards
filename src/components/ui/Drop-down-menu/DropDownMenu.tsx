import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { TypographyOption } from '@/common/enums'
import { LogOut, ProfileIcon } from '@/components/assets'
import { Typography } from '@/components/ui/Typography'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './DropDownMenu.module.scss'

type DropDownMenuPropsType = {
  children: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenu.Content>
export const DropDownMenu = forwardRef<
  ElementRef<typeof DropdownMenu.Content>,
  DropDownMenuPropsType
>(({ children }) => {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <div className={s.avatar}>{children}</div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
            <DropdownMenu.Item className={s.DropdownMenuItem}>
              <div className={s.DropDownMenuMailContent}>
                <div className={s.avatar}>{children}</div>
                <div className={s.DropDownMailContents}>
                  <Typography variant={TypographyOption.Subtitle2}>Ivan</Typography>
                  <Typography
                    className={s.DropDownMailContent}
                    variant={TypographyOption.Subtitle2}
                  >
                    j&johnson@gmail.com
                  </Typography>
                </div>
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
            <DropdownMenu.Item className={s.DropdownMenuItem}>
              <ProfileIcon />
              <Typography className={s.typographyItem} variant={TypographyOption.Subtitle2}>
                My Profile
              </Typography>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
            <DropdownMenu.Item className={s.DropdownMenuItem}>
              <LogOut />
              <Typography className={s.typographyItem} variant={TypographyOption.Subtitle2}>
                Sign Out
              </Typography>
            </DropdownMenu.Item>
            <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
})
