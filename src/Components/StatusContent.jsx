import React from 'react'
import Styles from "../Styles/StatusContent.module.css"
const StatusContent = ({content}) => {
  return (
    <div>
        <select>
          <option value="">{content}</option>
        </select>
    </div>
  )
}

export default StatusContent
