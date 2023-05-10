import React, { FC } from 'react'
type Props = {
  title: string
  scssName: string
  href?: string
  runFunction?: React.MouseEventHandler<HTMLAnchorElement>
}
export const ItemHeaderHome: FC<Props> = ({
  title,
  scssName,
  runFunction,
  href,
}) => {
  return (
    <a href={href} className={scssName} onClick={runFunction}>
      {title}
    </a>
  )
}
