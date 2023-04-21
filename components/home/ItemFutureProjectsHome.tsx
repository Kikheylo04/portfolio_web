import React, { FC } from 'react'
import { ButtonCommon } from '../common'

type Props = {
  image: string
  title: string
  text: string
  scssName: string
}

export const ItemFutureProjectsHome: FC<Props> = ({
  image,
  title,
  text,
  scssName,
}) => {
  return (
    <div className={scssName}>
      <img src={image} alt="No existente" />
      <p>{title}</p>
      <p>{text}</p>
      <ButtonCommon title="View Live" scssName="buttonCommon" />
      <ButtonCommon title="GitHub Repo" scssName="buttonNoActiveCommon" />
    </div>
  )
}
