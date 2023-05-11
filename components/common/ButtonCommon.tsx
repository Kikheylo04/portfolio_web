import React, { FC } from 'react'
type Props = {
  title: string
  scssName: string
  link?: string
  download?: string
  runFunction?: React.MouseEventHandler<HTMLButtonElement>
}
export const ButtonCommon: FC<Props> = ({
  title,
  scssName,
  runFunction,
  link,
  download,
}) => {
  return (
    <a href={link} download={download}>
      <button className={scssName} onClick={runFunction}>
        {title}
      </button>
    </a>
  )
}
