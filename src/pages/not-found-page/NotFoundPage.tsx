import { JSX } from 'react'
import { Link } from 'react-router-dom'

import { NotFoundIcon } from '@/assets'
import { Routes, TypographyOption } from '@/common'
import { Button, Page, Typography } from '@/components'

import s from './NotFoundPage.module.scss'

export const NotFoundPage = (): JSX.Element => {
  return (
    <Page className={s.container}>
      <NotFoundIcon />
      <Typography className={s.text}>Sorry! Page not found!</Typography>
      <Button as={Link} className={s.button} to={Routes.Main}>
        <Typography variant={TypographyOption.Subtitle2}>Back to home page</Typography>
      </Button>
    </Page>
  )
}
