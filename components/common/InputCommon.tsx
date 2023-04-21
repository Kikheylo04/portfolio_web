import React, { FC } from 'react'

type Props = {
  type: string
  title: string
  scssName: string
}

export const InputCommon: FC<Props> = ({ title, scssName, type }) => {
  return <input type={type} placeholder={title} className={scssName} />
}
