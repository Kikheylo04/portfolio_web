import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type Props = {
  link: string
  icon: string
  text: string
  scssName: string
}

export const IconCommon: FC<Props> = ({ link, icon, text, scssName }) => {
  return (
    <Link href={link} target="_blank" className={scssName}>
      <Image src={icon} alt={text} />
    </Link>
  )
}
