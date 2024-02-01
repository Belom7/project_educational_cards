import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'
import { Link } from 'react-router-dom'

import { Routes, TypographyOption } from '@/common/enums'
import { Typography } from '@/components'
import { LogOut, ProfileIcon } from '@/components/assets'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './DropDownMenu.module.scss'

type DropDownMenuPropsType = {
  children: ReactNode
  email?: string
  name?: string
} & ComponentPropsWithoutRef<typeof DropdownMenu.Content>
export const DropDownMenu = forwardRef<
  ElementRef<typeof DropdownMenu.Content>,
  DropDownMenuPropsType
>(({ children, email, name }) => {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
            <DropdownMenu.Item className={s.DropdownMenuItem}>
              <div className={s.DropDownMenuMailContent}>
                {children}
                <div className={s.DropDownMailContents}>
                  <Typography variant={TypographyOption.Subtitle2}>{name}</Typography>
                  <Typography
                    className={s.DropDownMailContent}
                    variant={TypographyOption.Subtitle2}
                  >
                    {email}
                  </Typography>
                </div>
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
            <DropdownMenu.Item className={s.DropdownMenuItem}>
              <ProfileIcon />
              <Link className={s.LinkText} to={Routes.Profile}>
                <Typography className={s.typographyItem} variant={TypographyOption.Subtitle2}>
                  My Profile
                </Typography>
              </Link>
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
