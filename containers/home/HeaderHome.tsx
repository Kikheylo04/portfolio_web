import { ItemHeaderHome } from '@/components/home'
import { HearderModel } from '@/models'
import { HeaderService } from '@/services/local/headerService'
import { useState } from 'react'

export const HeaderHome = () => {
  const [selectedItem, setSelectedItem] = useState(1)
  const listHeaders: HearderModel[] = HeaderService.getHeaders()
  const handleItemClick = (index: number): void => {
    setSelectedItem(index)
  }
  return (
    <div className="headerHome">
      <div className="headerHome__title">
        <ItemHeaderHome
          title="Sebastian Chavez"
          scssName="itemHeaderMainHome"
        />
      </div>
      <div className="headerHome__navBar">
        {listHeaders.map((item) => {
          return (
            <ItemHeaderHome
              key={item.id}
              title={item.title}
              scssName={
                selectedItem === item.id
                  ? 'itemHeaderHome'
                  : 'itemHeaderNoActiveHome'
              }
              runFunction={() => handleItemClick(item.id)}
            />
          )
        })}
      </div>
    </div>
  )
}
