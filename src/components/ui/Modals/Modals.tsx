import { ComponentPropsWithoutRef, ElementRef, JSX, ReactNode, forwardRef } from 'react'

import * as DialogRadix from '@radix-ui/react-dialog'

export type ModalsProps = {
  trigger: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Modals = forwardRef<ElementRef<typeof DialogRadix.Root>, ModalsProps>(
  ({ trigger }, ref): JSX.Element => {
    return (
      <DialogRadix.Root>
        <DialogRadix.Trigger asChild ref={ref}>
          {trigger}
        </DialogRadix.Trigger>
        <DialogRadix.Portal>
          <DialogRadix.Overlay />
          <DialogRadix.Content>
            <DialogRadix.Title />
            <DialogRadix.Description />
            <DialogRadix.Close />
          </DialogRadix.Content>
        </DialogRadix.Portal>
      </DialogRadix.Root>
    )
  }
)
