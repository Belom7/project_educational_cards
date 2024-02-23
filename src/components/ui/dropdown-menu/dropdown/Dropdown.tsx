import { ComponentPropsWithoutRef, ElementRef, JSX, forwardRef } from 'react'
import { Link } from 'react-router-dom'

import { ButtonPlayIcon, EditTablePencilIcon, TrashIcon } from '@/assets'
import VerticalDotsIcon from '@/assets/icons/components/VerticalDotsIcon'
import { Routes, TypographyOption } from '@/common'
import { Button, Typography } from '@/components'
import { GetDeckResponse } from '@/features'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './Dropdown.module.scss'

type DropdownProps = {
  deck: GetDeckResponse | undefined
  onDelete: () => void
  onEdit: () => void
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>

export const Dropdown = forwardRef<ElementRef<typeof DropdownMenu.Root>, DropdownProps>(
  ({ deck, onDelete, onEdit, ...restProps }, ref): JSX.Element => {
    return (
      <DropdownMenu.Root {...restProps}>
        <DropdownMenu.Trigger asChild ref={ref}>
          <VerticalDotsIcon />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
            <DropdownMenu.Item className={s.DropdownMenuItem}>
              <Button as={Link} to={`${Routes.Decks}/${deck?.id}/learn`}>
                <ButtonPlayIcon />
                <Typography className={s.typographyItem} variant={TypographyOption.Subtitle2}>
                  Learn
                </Typography>
              </Button>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
            <DropdownMenu.Item className={s.DropdownMenuItem} onClick={onEdit}>
              <EditTablePencilIcon />
              <Typography className={s.typographyItem} variant={TypographyOption.Subtitle2}>
                Edit
              </Typography>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
            <DropdownMenu.Item className={s.DropdownMenuItem} onClick={onDelete}>
              <TrashIcon />
              <Typography className={s.typographyItem} variant={TypographyOption.Subtitle2}>
                Delete
              </Typography>
            </DropdownMenu.Item>
            <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    )
  }
)
