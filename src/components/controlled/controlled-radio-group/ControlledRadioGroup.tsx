import { JSX } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '../../ui/radio-group'

type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'onValueChange' | 'value'>

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  name,
  ...restProps
}: ControlledRadioGroupProps<T>): JSX.Element => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  })

  return <RadioGroup onValueChange={onChange} {...restProps} value={value} />
}
