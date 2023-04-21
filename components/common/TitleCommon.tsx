import React, { FC } from 'react'

type Props = {
  title: string
  scssName: string
}

export const TitleCommon: FC<Props> = ({ title, scssName }) => {
  return <p className={scssName}>{title}</p>
}
