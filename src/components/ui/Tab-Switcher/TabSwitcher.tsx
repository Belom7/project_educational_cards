import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { TypographyOption } from '@/common/enums'
import * as Tabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './TabSwitcher.module.scss'
import {Typography} from "@/components";

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

// const TabsContent = forwardRef<
//   ElementRef<typeof Tabs.Content>,
//   ComponentPropsWithoutRef<typeof Tabs.Content>
// >(({ className, ...props }, ref) => {
//   return <Tabs.Content className={clsx(s.content, className)} ref={ref} {...props}></Tabs.Content>
// })

export const TabSwitcher = () => {
  return (
    <div>
      <Typography variant={TypographyOption.Body2}>Show packs cards</Typography>
      <Tabs.Root defaultValue={'tab1'} orientation={'vertical'}>
        <TabsList>
          <TabsTrigger value={'tab1'}>
            <Typography variant={TypographyOption.Body1}>My cards</Typography>
          </TabsTrigger>
          <TabsTrigger value={'tab2'}>
            <Typography variant={TypographyOption.Body1}>All Cards</Typography>
          </TabsTrigger>
        </TabsList>
      </Tabs.Root>

    </div>
  )
}
