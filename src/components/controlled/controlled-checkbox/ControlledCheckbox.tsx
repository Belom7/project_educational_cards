import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'onValueChange'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Checkbox
      {...rest}
      checked={value}
      disabled={disabled}
      label={rest.label}
      onValueChange={onChange}
      {...field}
    />
  )
}
