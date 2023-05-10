import { FC } from 'react'

type Props = {
  type: string
  title?: string
  name: string
  value?: string
  scssName?: string
}

export const InputCommon: FC<Props> = ({
  title,
  scssName,
  type,
  name,
  value,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={title}
      value={value}
      className={scssName}
    />
  )
}
