import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components/ui/Typography'
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
        <Typography className={className} variant={'Body1'}>
          {children}
        </Typography>
      </Tabs.Trigger>
    )
  }
)

const TabsContent = forwardRef<
  ElementRef<typeof Tabs.Content>,
  ComponentPropsWithoutRef<typeof Tabs.Content>
>(({ className, ...props }, ref) => {
  return <Tabs.Content className={clsx(s.content, className)} ref={ref} {...props}></Tabs.Content>
})

export const TabSwitcher = () => {
  return (
    <Tabs.Root defaultValue={'tab1'} orientation={'vertical'}>
      <TabsList>
        <TabsTrigger value={'tab1'}>Tab-Switcher</TabsTrigger>
        <TabsTrigger value={'tab2'}>Tab-Switcher</TabsTrigger>
        <TabsTrigger value={'tab3'}>Tab-Switcher</TabsTrigger>
        <TabsTrigger value={'tab4'}>Tab-Switcher</TabsTrigger>
        <TabsTrigger disabled value={'tab5'}>
          Disabled switcher
        </TabsTrigger>
      </TabsList>
      <TabsContent value={'tab1'}>Tab one content</TabsContent>
      <TabsContent value={'tab2'}>Tab two content</TabsContent>
      <TabsContent value={'tab3'}>Tab three content</TabsContent>
    </Tabs.Root>
  )
}
