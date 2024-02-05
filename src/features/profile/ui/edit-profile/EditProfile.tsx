import { Link } from 'react-router-dom'

import { LeftArrowIcon } from '@/assets'
import { Routes } from '@/common'
import { Typography } from '@/components'

import s from './EditProfile.module.scss'
export const EditProfile = () => {
  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <Link className={s.linkMain} to={Routes.Main}>
          <LeftArrowIcon />
          <Typography>Back to Decks List</Typography>
        </Link>
      </div>
    </div>
  )
}
