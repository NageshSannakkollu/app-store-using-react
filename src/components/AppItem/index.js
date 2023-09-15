import './index.css'

// Write your code here
const AppItem = props => {
  const {appsDetails} = props
  const {appName, imageUrl} = appsDetails
  return (
    <li className="app-image-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
