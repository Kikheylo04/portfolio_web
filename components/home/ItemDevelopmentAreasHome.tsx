import React, { FC } from 'react'

type Props = {
  title: string
  icon: string
  scssName: string
}

export const ItemDevelopmentAreasHome: FC<Props> = ({
  title,
  icon,
  scssName,
}) => {
  return (
    <div className={scssName}>
      <img src={icon} alt="No existente" />
      <p>{title}</p>
    </div>
  )
}
