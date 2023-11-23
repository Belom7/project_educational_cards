import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SelectRadix from '@radix-ui/react-select'

export type SelectItemProps = {
  className: string
  value: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const SelectItem = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectItemProps>(
  ({ children, className, ...restProps }, ref): JSX.Element => {
    return (
      <SelectRadix.Item className={className} {...restProps} ref={ref}>
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
