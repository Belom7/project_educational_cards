import { ComponentPropsWithoutRef, ElementRef, JSX, forwardRef } from 'react'

import { FilledStarIcon, UnfilledStarIcon } from '@/assets'
import { clsx } from 'clsx'

import s from './Rating.module.scss'

type Props = {
  className?: string
  rating: number
} & ComponentPropsWithoutRef<'div'>

export const Rating = forwardRef<ElementRef<'div'>, Props>(
  ({ className, rating, ...restProps }, ref): JSX.Element => {
    const classNames = clsx(s.root, className)
    const ratingArr = Array.from({ length: 5 }).map((el, ind) => (rating - 1 >= ind ? 1 : el))

    return (
      <div className={classNames} ref={ref} {...restProps}>
        {ratingArr.map(el => {
          return el ? <FilledStarIcon /> : <UnfilledStarIcon />
        })}
      </div>
    )
  }
)
