import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { TypographyOption } from '@/common/enums'
import { SelectOption } from '@/components/ui/Select'
import { Typography } from '@/components/ui/Typography'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from '../Select.module.scss'

export type SelectItemProps = {
  className?: string
  option?: SelectOption
  value: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const SelectItem = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectItemProps>(
  ({ children, className, option = 'default', ...restProps }, ref): JSX.Element => {
    const typographyOption = option === 'default' ? TypographyOption.Body1 : TypographyOption.Body2

    const classNames = clsx(s[`${option}Paddings`], s.selectItem, className)

    return (
      <SelectRadix.Item className={classNames} {...restProps} ref={ref}>
        <SelectRadix.ItemText>
          <Typography variant={typographyOption}>{children}</Typography>
        </SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
