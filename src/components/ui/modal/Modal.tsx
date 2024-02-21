import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { CloseIcon } from '@/assets'
import { ButtonOption, TypographyOption } from '@/common'
import { Button, Card, Typography, modalAnimations } from '@/components'
import * as ModalPrimitive from '@radix-ui/react-dialog'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import s from './Modal.module.scss'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  title: string
  trigger: ReactNode
} & ComponentPropsWithoutRef<'div'>
export const Modal = forwardRef<ElementRef<'div'>, Props>(
  ({ children, className, open, setOpen, title, trigger, ...restProps }, ref) => {
    const classNames = {
      header: s.header,
      overlay: s.overlay,
      root: clsx(s.root, className),
    }

    return (
      <ModalPrimitive.Root onOpenChange={setOpen}>
        <ModalPrimitive.Trigger asChild>{trigger}</ModalPrimitive.Trigger>
        <AnimatePresence>
          {open && (
            <ModalPrimitive.Portal forceMount>
              <motion.div {...modalAnimations.overlay}>
                <ModalPrimitive.Overlay className={classNames.overlay} forceMount />
              </motion.div>
              <div className={classNames.root} ref={ref} {...restProps}>
                <ModalPrimitive.Content asChild forceMount>
                  <motion.div {...modalAnimations.window}>
                    <Card>
                      <header className={classNames.header}>
                        <Typography as={'h2'} variant={TypographyOption.H2}>
                          {title}
                        </Typography>
                        <ModalPrimitive.Close asChild>
                          <Button aria-label={'Close'} variant={ButtonOption.Icon}>
                            <CloseIcon />
                          </Button>
                        </ModalPrimitive.Close>
                      </header>
                      <div>{children}</div>
                    </Card>
                  </motion.div>
                </ModalPrimitive.Content>
              </div>
            </ModalPrimitive.Portal>
          )}
        </AnimatePresence>
      </ModalPrimitive.Root>
    )
  }
)
