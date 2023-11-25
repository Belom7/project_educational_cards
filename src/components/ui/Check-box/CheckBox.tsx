import { ElementRef, forwardRef } from 'react'

import { TypographyOption } from '@/common/enums'
import { Check } from '@/components/assets'
import { Typography } from '@/components/ui/Typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './Check-box.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onValueChange?: (checked: boolean) => void
  position?: 'left'
  required?: boolean
}

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ checked, className, disabled, id, label, onValueChange, position, required }, ref) => {
    const classNames = {
      buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, position === 'left' && s.left),
      container: clsx(s.container, className),
      containerDisabled: clsx(s.containerDizabled, className),
      indicator: s.indicator,
      label: clsx(s.label, disabled && s.disabled),
      root: s.root,
    }

    return (
      <div className={disabled ? classNames.containerDisabled : classNames.container}>
        <LabelRadix.Root asChild>
          <Typography
            className={classNames.label}
            component={'label'}
            variant={TypographyOption.Body2}
          >
            <div className={classNames.buttonWrapper}>
              <CheckboxRadix.Root
                checked={checked}
                className={classNames.root}
                disabled={disabled}
                id={id}
                onCheckedChange={onValueChange}
                ref={ref}
                required={required}
              >
                {checked && (
                  <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
                    <Check />
                  </CheckboxRadix.Indicator>
                )}
              </CheckboxRadix.Root>
            </div>
            {label}
          </Typography>
        </LabelRadix.Root>
      </div>
    )
  }
)
