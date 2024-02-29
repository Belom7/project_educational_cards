import { ComponentPropsWithoutRef, ElementRef, JSX, forwardRef } from 'react'
import { Link } from 'react-router-dom'

import { ButtonPlayIcon, EditTablePencilIcon, TrashIcon } from '@/assets'
import VerticalDotsIcon from '@/assets/icons/components/VerticalDotsIcon'
import { Routes, TypographyOption } from '@/common'
import { Typography } from '@/components'
import { DeletePackModal, EditPackModal, GetDeckResponse } from '@/features'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './Dropdown.module.scss'

type DropdownProps = {
  deck: GetDeckResponse | undefined
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>

export const Dropdown = forwardRef<ElementRef<typeof DropdownMenu.Root>, DropdownProps>(
  ({ deck, ...restProps }, ref): JSX.Element => {
    return (
      <DropdownMenu.Root {...restProps}>
        <DropdownMenu.Trigger asChild ref={ref}>
          <VerticalDotsIcon />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
            <DropdownMenu.Item className={s.DropdownMenuItem}>
              <Link className={s.link} to={`${Routes.Decks}/:${deck?.id}/learn`}>
                <ButtonPlayIcon height={20} width={20} />
                <Typography className={s.typographyItem} variant={TypographyOption.Subtitle2}>
                  Learn
                </Typography>
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
            <EditPackModal
              packId={deck?.id}
              trigger={
                <button className={s.DropdownMenuItem}>
                  <EditTablePencilIcon />
                  <Typography className={s.typographyItem} variant={TypographyOption.Subtitle2}>
                    Edit
                  </Typography>
                </button>
              }
            />
            <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
            <DeletePackModal
              deckId={deck?.id}
              trigger={
                <button className={s.DropdownMenuItem}>
                  <TrashIcon />
                  <Typography className={s.typographyItem} variant={TypographyOption.Subtitle2}>
                    Delete
                  </Typography>
                </button>
              }
            />
            <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    )
  }
)
