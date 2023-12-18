import { ComponentPropsWithoutRef, ElementRef, JSX, forwardRef } from 'react'

import { TypographyOption } from '@/common/enums'
import { SelectOption, SelectVariant } from '@/components/ui/Select'
import { Typography } from '@/components/ui/Typography'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from '../Select.module.scss'

export type SelectItemProps = {
  className?: string
  option?: SelectOption
  value: string
  variant: SelectVariant
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const SelectItem = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectItemProps>(
  (
    { children, className, option = TypographyOption.Body1, variant, ...restProps },
    ref
  ): JSX.Element => {
    const classNames = clsx(s[`${variant}Paddings`], s.selectItem, className)

    return (
      <SelectRadix.Item className={classNames} {...restProps} ref={ref}>
        <SelectRadix.ItemText>
          <Typography variant={option}>{children}</Typography>
        </SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
