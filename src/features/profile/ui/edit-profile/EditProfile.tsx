import { Link } from 'react-router-dom'

import { Routes } from '@/common'
import { Typography } from '@/components'
import { LeftArrow } from '@/components/assets'

import s from './EditProfile.module.scss'
export const EditProfile = () => {
  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <Link className={s.linkMain} to={Routes.Main}>
          <LeftArrow />
          <Typography>Back to Decks List</Typography>
        </Link>
      </div>
    </div>
  )
}
