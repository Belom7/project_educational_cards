import { JSX } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '../../ui/text-field'

type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  ...restProps
}: ControlledTextFieldProps<T>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <TextField {...field} {...restProps} errorMessage={error?.message} />
}
