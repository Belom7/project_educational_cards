import { ComponentPropsWithoutRef, ElementRef, JSX, ReactNode, forwardRef } from 'react'

import { KeyboardArrowDownIcon } from '@/assets'
import { TypographyOption } from '@/common'
import { Typography } from '@/components'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

import { SelectItem } from './select-item'

export type SelectVariant = 'default' | 'pagination'
export type SelectOption = TypographyOption.Body1 | TypographyOption.Body2
export type SelectItemArgs = {
  child: ReactNode
  value: string
}

export type SelectProps = {
  className?: string
  disabled?: boolean
  fullWidth?: boolean
  placeholder?: ReactNode
  selectItems: SelectItemArgs[]
  title?: string
  variant?: SelectVariant
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>(
  (
    {
      className,
      disabled,
      fullWidth = false,
      onValueChange,
      placeholder = 'Select value',
      selectItems,
      title,
      value,
      variant = 'default',
      ...restProps
    },
    ref
  ): JSX.Element => {
    const option = variant === 'default' ? TypographyOption.Body1 : TypographyOption.Body2

    const classNames = {
      title: clsx(s.title, disabled && s.disabled),
      trigger: clsx(
        s[`${variant}Paddings`],
        s[variant],
        s.trigger,
        fullWidth && s.fullWidth,
        className
      ),
    }

    return (
      <SelectRadix.Root
        disabled={disabled}
        {...restProps}
        onValueChange={onValueChange}
        value={value}
      >
        {title && (
          <Typography className={classNames.title} variant={TypographyOption.Body2}>
            {title}
          </Typography>
        )}
        <SelectRadix.Trigger className={classNames.trigger} ref={ref}>
          <Typography variant={option}>
            <SelectRadix.Value placeholder={placeholder} />
          </Typography>
          <SelectRadix.Icon className={s.icon}>
            <KeyboardArrowDownIcon />
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content className={s.content} position={'popper'} ref={ref}>
            <SelectRadix.Viewport>
              {selectItems.map((item, id) => (
                <SelectItem
                  className={s.selectItem}
                  key={id}
                  option={option}
                  value={item.value}
                  variant={variant}
                >
                  {item.child}
                </SelectItem>
              ))}
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    )
  }
)
