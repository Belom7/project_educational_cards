import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { TypographyOption } from '@/common/enums'
import { KeyboardArrowDown } from '@/components/assets/icons'
import { Typography } from '@/components/ui/Typography'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

import { SelectItem } from './SelectItem'

export type SelectVariant = 'default' | 'pagination'
export type SelectOption = TypographyOption.Body1 | TypographyOption.Body2
export type SelectItemArgs = {
  child: ReactNode
  value: string
}

export type SelectProps = {
  className?: string
  disabled?: boolean
  placeholder: ReactNode
  selectItems: SelectItemArgs[]
  title?: string
  variant: SelectVariant
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>(
  (
    { className, disabled, placeholder, selectItems, title, variant = 'default', ...restProps },
    ref
  ): JSX.Element => {
    const option = variant === 'default' ? TypographyOption.Body1 : TypographyOption.Body2

    const classNames = {
      title: clsx(s.title, disabled && s.disabled),
      trigger: clsx(s[`${variant}Paddings`], s[variant], s.trigger, className),
    }

    return (
      <SelectRadix.Root disabled={disabled} {...restProps}>
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
            <KeyboardArrowDown />
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
