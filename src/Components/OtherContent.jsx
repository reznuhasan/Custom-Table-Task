import React from 'react'
import Styles from "../Styles/OtherContent.module.css"
const OtherContent = ({content}) => {
  return (
    <div className={Styles.content}>
      <p>{content}</p>
    </div>
  )
}

export default OtherContent
