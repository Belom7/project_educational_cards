import { ComponentPropsWithoutRef, ElementRef, JSX, ReactNode, forwardRef } from 'react'

import { ButtonOption, TypographyOption } from '@/common/enums'
import { Button, Card, Typography } from '@/components'
import { CloseIcon } from '@/components/assets/icons/componentsFromIcon/CloseIcon'
import * as DialogRadix from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './Modal.module.scss'

export type ModalProps = {
  isOpen?: boolean
  onOpen: (open: boolean) => void
  title: string
  trigger?: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Modal = forwardRef<ElementRef<typeof DialogRadix.Root>, ModalProps>(
  (
    {
      children,
      className,
      isOpen = false,
      onOpen,
      title,
      trigger = <Button variant={ButtonOption.Primary}>Open Modal</Button>,
      ...restProps
    },
    ref
  ): JSX.Element => {
    const classNames = {
      content: s.content,
      header: s.header,
      overlay: s.overlay,
      root: clsx(s.root, className),
    }

    return (
      <DialogRadix.Root onOpenChange={onOpen} open={isOpen}>
        <DialogRadix.Trigger asChild ref={ref}>
          <Typography variant={TypographyOption.Subtitle2}>{trigger}</Typography>
        </DialogRadix.Trigger>
        {isOpen && (
          <DialogRadix.Portal forceMount>
            <DialogRadix.Overlay className={classNames.overlay} />
            <DialogRadix.Content {...restProps}>
              <Card className={classNames.root}>
                <div className={classNames.header}>
                  <Typography variant={TypographyOption.H2}>{title}</Typography>
                  <DialogRadix.Close asChild>
                    <Button variant={ButtonOption.Icon}>
                      <CloseIcon />
                    </Button>
                  </DialogRadix.Close>
                </div>
                <div className={classNames.content}>{children}</div>
              </Card>
            </DialogRadix.Content>
          </DialogRadix.Portal>
        )}
      </DialogRadix.Root>
    )
  }
)
