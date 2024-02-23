import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'
import { Link } from 'react-router-dom'

import { LogOutIcon, PersonOutlineIcon } from '@/assets'
import { Routes, TypographyOption } from '@/common'
import { Typography } from '@/components'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from './DropdownMenu.module.scss'

type DropdownMenuPropsType = {
  children: ReactNode
  email?: string
  name?: string
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Content>

export const DropdownMenu = forwardRef<
  ElementRef<typeof DropdownMenuRadix.Content>,
  DropdownMenuPropsType
>(({ children, email, name }, ref) => {
  return (
    <div>
      <DropdownMenuRadix.Root>
        <DropdownMenuRadix.Trigger asChild>{children}</DropdownMenuRadix.Trigger>
        <DropdownMenuRadix.Portal>
          <DropdownMenuRadix.Content className={s.DropdownMenuContent} ref={ref} sideOffset={5}>
            <DropdownMenuRadix.Item className={s.DropdownMenuItem}>
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
            </DropdownMenuRadix.Item>
            <DropdownMenuRadix.Separator className={s.DropdownMenuSeparator} />
            <DropdownMenuRadix.Item className={s.DropdownMenuItem}>
              <PersonOutlineIcon />
              <Link className={s.LinkText} to={Routes.Profile}>
                <Typography className={s.typographyItem} variant={TypographyOption.Subtitle2}>
                  My Profile
                </Typography>
              </Link>
            </DropdownMenuRadix.Item>
            <DropdownMenuRadix.Separator className={s.DropdownMenuSeparator} />
            <DropdownMenuRadix.Item className={s.DropdownMenuItem}>
              <LogOutIcon />
              <Typography className={s.typographyItem} variant={TypographyOption.Subtitle2}>
                Sign Out
              </Typography>
            </DropdownMenuRadix.Item>
            <DropdownMenuRadix.Arrow className={s.DropdownMenuArrow} />
          </DropdownMenuRadix.Content>
        </DropdownMenuRadix.Portal>
      </DropdownMenuRadix.Root>
    </div>
  )
})
