import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SelectRadix from '@radix-ui/react-select'

import s from './Select.module.scss'

import { SelectItem } from './SelectItem'

export type SelectProps = {
  className: string
  value: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>(
  ({ className, value, ...restProps }, ref): JSX.Element => {
    return (
      <div>
        <SelectRadix.Root>
          <SelectRadix.Trigger>{'Select-box'}</SelectRadix.Trigger>
          <SelectRadix.Portal>
            <SelectRadix.Content>
              <SelectRadix.Viewport>
                <SelectItem className={s.selectItem} value={'Select-box'}>
                  {'Select-box'}
                </SelectItem>
                <SelectItem className={s.selectItem} value={'Select-box'}>
                  {'Select-box'}
                </SelectItem>
                <SelectItem className={s.selectItem} value={'Select-box'}>
                  {'Select-box'}
                </SelectItem>
              </SelectRadix.Viewport>
            </SelectRadix.Content>
          </SelectRadix.Portal>
        </SelectRadix.Root>
      </div>
    )
  }
)
