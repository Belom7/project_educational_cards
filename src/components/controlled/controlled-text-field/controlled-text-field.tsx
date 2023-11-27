import { JSX } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui/Text-field'

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  ...restProps
}: ControlledInputProps<T>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <TextField {...field} {...restProps} errorMessage={error?.message} />
}
