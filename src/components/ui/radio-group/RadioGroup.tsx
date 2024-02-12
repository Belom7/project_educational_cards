import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { TypographyOption } from '@/common'
import { Typography } from '@/components'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './RadioGroup.module.scss'
type ItemsProps = {
  title: string
  value: string
}
export type RadioGroupProps = {
  className?: string
  items: ItemsProps[]
} & ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>
export const RadioGroup = forwardRef<ElementRef<typeof RadixRadioGroup.Root>, RadioGroupProps>(
  ({ className, items, ...restProps }, ref) => {
    const cln = clsx(s.RadioGroupRoot, className)


    return (
      <RadixRadioGroup.Root className={cln} ref={ref} {...restProps}>
        {items.map((el, index) => (
          <RadioItem key={index} {...el} />
        ))}
      </RadixRadioGroup.Root>
    )
  }
)
export type RadioItemProps = {
  className?: string
  title: string
  value: string
} & ComponentPropsWithoutRef<typeof RadixRadioGroup.Item>
const RadioItem = forwardRef<ElementRef<typeof RadixRadioGroup.Item>, RadioItemProps>(
  ({ className, title, value }, ref) => {
    const clnItem = clsx(s.RadioGroupItem, className)
    const clnIndicator = clsx(s.button, s.RadioGroupIndicator)

    return (
      <Typography className={s.Label} component={'label'} variant={TypographyOption.Body2}>
        <RadixRadioGroup.Item className={clnItem} ref={ref} value={value}>
          <RadixRadioGroup.Indicator className={clnIndicator} />
        </RadixRadioGroup.Item>
        {title}
      </Typography>
    )
  }
)
