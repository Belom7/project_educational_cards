import { ComponentPropsWithoutRef, ElementRef, JSX, ReactNode, forwardRef } from 'react'

import * as DialogRadix from '@radix-ui/react-dialog'

export type ModalProps = {
  trigger: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Modal = forwardRef<ElementRef<typeof DialogRadix.Root>, ModalProps>(
  ({ trigger }, ref): JSX.Element => {
    return (
      <DialogRadix.Root>
        <DialogRadix.Trigger asChild ref={ref}>
          {trigger}
        </DialogRadix.Trigger>
        <DialogRadix.Portal>
          <DialogRadix.Overlay />
          <DialogRadix.Content>
            <DialogRadix.Title>Title</DialogRadix.Title>
            <DialogRadix.Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque facere
              laboriosam nam perspiciatis porro repudiandae saepe ullam. Dignissimos, laboriosam.
            </DialogRadix.Description>
            <DialogRadix.Close>close</DialogRadix.Close>
          </DialogRadix.Content>
        </DialogRadix.Portal>
      </DialogRadix.Root>
    )
  }
)
