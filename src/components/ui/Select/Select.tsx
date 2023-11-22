import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SelectRadix from '@radix-ui/react-select'

export type SelectProps = {
  className: string
  value: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>(
  ({ className, value, ...restProps }, ref): JSX.Element => {
    return (
      <div>
        <SelectRadix.Root>
          <SelectRadix.Trigger>…</SelectRadix.Trigger>
          <SelectRadix.Portal>
            <SelectRadix.Content>
              <SelectRadix.Viewport>
                <SelectRadix.Item>{value}</SelectRadix.Item>
                <SelectRadix.Item>{value}</SelectRadix.Item>
                <SelectRadix.Item>{value}</SelectRadix.Item>
              </SelectRadix.Viewport>
            </SelectRadix.Content>
          </SelectRadix.Portal>
        </SelectRadix.Root>
      </div>
    )
  }
)
