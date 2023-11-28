import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { TypographyOption } from '@/common/enums'
import { Typography } from '@/components/ui/Typography'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from '../Select.module.scss'

export type SelectItemProps = {
  className?: string
  option?: TypographyOption.Body1 | TypographyOption.Body2
  value: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const SelectItem = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectItemProps>(
  ({ children, className, option = TypographyOption.Body1, ...restProps }, ref): JSX.Element => {
    const classNames = clsx(s[`${option}Paddings`], s.selectItem, className)

    return (
      <SelectRadix.Item className={classNames} {...restProps} ref={ref}>
        <SelectRadix.ItemText>
          <Typography variant={option}>{children}</Typography>
        </SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
