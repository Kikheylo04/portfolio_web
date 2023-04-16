import React, { FC } from 'react'
type Props = {
  title: string
  scssName: string
  runFunction?: React.MouseEventHandler<HTMLButtonElement>
}
export const ButtonCommon: FC<Props> = ({ title, scssName, runFunction }) => {
  return (
    <button className={scssName} onClick={runFunction}>
      {title}
    </button>
  )
}
