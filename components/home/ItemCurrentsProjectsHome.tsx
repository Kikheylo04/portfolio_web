import { FC } from 'react'
import { ButtonCommon } from '../common'

type Props = {
  image: string
  title: string
  text: string
  gitHub: string
  viewLive: string
  scssName: string
}

export const ItemCurrentsProjectsHome: FC<Props> = ({
  image,
  title,
  text,
  gitHub,
  viewLive,
  scssName,
}) => {
  return (
    <div className={scssName}>
      <img src={image} alt="No existente" />
      <p>{title}</p>
      <p>{text}</p>
      <ButtonCommon title="View Live" link={viewLive} scssName="buttonCommon" />
      <ButtonCommon
        title="GitHub Repo"
        link={gitHub}
        scssName="buttonNoActiveCommon"
      />
    </div>
  )
}
