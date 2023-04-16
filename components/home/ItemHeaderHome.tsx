import React, { FC } from 'react'
type Props = {
  title: string
  scssName: string
  runFunction?: React.MouseEventHandler<HTMLAnchorElement>
}
export const ItemHeaderHome: FC<Props> = ({ title, scssName, runFunction }) => {
  return (
    <a href="#" className={scssName} onClick={runFunction}>
      {title}
    </a>
  )
}
