import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { TypographyOption } from '@/common/enums'
import { Typography } from '@/components/ui/Typography'
import * as SliderRadix from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from './Slider.module.scss'

export type SliderProps = {
  title: string
} & ComponentPropsWithoutRef<typeof SliderRadix.Root>

export const Slider = forwardRef<ElementRef<typeof SliderRadix.Root>, SliderProps>(
  ({ className, title, ...restProps }, ref): JSX.Element => {
    const classNames = clsx(s.root, className)

    return (
      <div>
        <Typography component={'div'} variant={TypographyOption.Body1}>
          {title}
        </Typography>

        <div className={s.container}>
          <Typography component={'div'} variant={TypographyOption.Body1}>
            {title}
          </Typography>
          <SliderRadix.Root className={classNames} ref={ref} {...restProps}>
            <SliderRadix.Track className={'SliderTrack'}>
              <SliderRadix.Range className={'SliderRange'} />
            </SliderRadix.Track>
            <SliderRadix.Thumb aria-label={'Volume'} className={'SliderThumb'} />
          </SliderRadix.Root>
          <Typography component={'div'} variant={TypographyOption.Body1}>
            {title}
          </Typography>
        </div>
      </div>
    )
  }
)
