import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { TypographyOption } from '@/common/enums'
import { Typography } from '@/components'
import * as Tabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './TabSwitcher.module.scss'

const TabsList = forwardRef<
  ElementRef<typeof Tabs.List>,
  ComponentPropsWithoutRef<typeof Tabs.List>
>(({ className, ...props }, ref) => {
  return <Tabs.List className={clsx(s.list, className)} ref={ref} {...props}></Tabs.List>
})

type TabsTriggerProps = ComponentPropsWithoutRef<typeof Tabs.Trigger> & { children?: ReactNode }
const TabsTrigger = forwardRef<ElementRef<typeof Tabs.Trigger>, TabsTriggerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Tabs.Trigger className={clsx(s.trigger, className)} ref={ref} {...props}>
        <Typography className={className} variant={TypographyOption.Body1}>
          {children}
        </Typography>
      </Tabs.Trigger>
    )
  }
)

type Props = {
  onChangeSwitcherCardsCallback: (mySwitch: string) => void
}

export const TabSwitcher = ({ onChangeSwitcherCardsCallback }: Props) => {
  const handleSwitched = (mySwitch: string) => {
    onChangeSwitcherCardsCallback(mySwitch)
  }

  return (
    <div>
      <Typography variant={TypographyOption.Body2}>Show packs cards</Typography>
      <Tabs.Root defaultValue={'tab1'} orientation={'vertical'}>
        <TabsList>
          <TabsTrigger onClick={() => handleSwitched('notMy')} value={'tab1'}>
            <Typography variant={TypographyOption.Body1}>All Cards</Typography>
          </TabsTrigger>
          <TabsTrigger onClick={() => handleSwitched('my')} value={'tab2'}>
            <Typography variant={TypographyOption.Body1}>My cards</Typography>
          </TabsTrigger>
        </TabsList>
      </Tabs.Root>
    </div>
  )
}
