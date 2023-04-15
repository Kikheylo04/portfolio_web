import { HeaderService } from '../services/local/index'

export default function Home() {
  const listHeaders = HeaderService.getHeaders()
  return (
    <div className="home">
      {listHeaders.map((item) => {
        return <p key={item.id}>{item.title}</p>
      })}
      <p>Hola</p>
    </div>
  )
}
