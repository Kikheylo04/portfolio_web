import { FC } from 'react'

type Props = {
  title: string
  scssName: string
}

export const ItemFooterHome: FC<Props> = ({ title, scssName }) => {
  return <p className={scssName}>{title}</p>
}
