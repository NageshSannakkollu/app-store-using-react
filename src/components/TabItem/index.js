// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickOnTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabButton = () => {
    clickOnTabItem(tabId)
  }

  const tabClassName = isActive ? 'active-tab' : ''
  return (
    <li>
      <button
        type="button"
        className={`tab-button ${tabClassName}`}
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
