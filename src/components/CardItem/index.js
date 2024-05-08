// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imageUrl, className} = cardDetails
  return (
    <div>
      <h1 className="heading">Learn 4.0 Technologies</h1>
      <p className="para">
        Get trained by alumni of IIIT's and top companies like Amazon,
        Microsoft, intel, Nvidia, Quacomm etc., Learn directly from
        professionals involved in production development.
      </p>
      <div className="card-container">
        <li className={className}>
          <h1 className="header-text">{title}</h1>
          <p className="description">{description}</p>
          <img src="{imageUrl}" className="card-image" alt="{title}" />
        </li>
      </div>
    </div>
  )
}

export default CardItem
