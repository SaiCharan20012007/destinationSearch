// Write your code here
import './index.css'

const DestinationItem = props => {
  const {name, image} = props
  return (
    <li className="item">
      <img src={image} alt={name} className="locationImage" />
      <p className="locationName">{name}</p>
    </li>
  )
}

export default DestinationItem
