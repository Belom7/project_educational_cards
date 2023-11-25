import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { TypographyOption } from '@/common/enums'
import { Typography } from '@/components/ui/Typography'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './RadioGroup.module.scss'
type ItemsProps = {
  title: string
}
type RadioGroupProps = {
  className?: string
  items: ItemsProps[]
} & ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>
export const RadioGroup = forwardRef<ElementRef<typeof RadixRadioGroup.Root>, RadioGroupProps>(
  ({ className, items }, ref) => {
    const cln = clsx(s.RadioGroupRoot, className)

    return (
      <RadixRadioGroup.Root className={cln} ref={ref}>
        {items.map((el, index) => (
          <RadioItem key={index} title={el.title} value={el.title} />
        ))}
      </RadixRadioGroup.Root>
    )
  }
)
type RadioItemProps = { className?: string; title: string } & ComponentPropsWithoutRef<
  typeof RadixRadioGroup.Item
>
const RadioItem = forwardRef<ElementRef<typeof RadixRadioGroup.Item>, RadioItemProps>(
  ({ className, title }, ref) => {
    const clnItem = clsx(s.RadioGroupItem, className)
    const clnIndicator = clsx(s.button, s.RadioGroupIndicator)

    return (
      <Typography className={s.Label} component={'label'} variant={TypographyOption.Body2}>
        <RadixRadioGroup.Item className={clnItem} ref={ref} value={title}>
          <RadixRadioGroup.Indicator className={clnIndicator} />
        </RadixRadioGroup.Item>
        {title}
      </Typography>
    )
  }
)
