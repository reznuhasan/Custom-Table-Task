import React from 'react'
import Styles from "../Styles/ActionContent.module.css"
const ActionContent = ({content}) => {
  return (
    <div>
      <button className={Styles.btn}>{content}</button>
      <div className={Styles.line}></div>
      <div className={Styles.line}></div>
      <div className={Styles.line}></div>
    </div>
  )
}

export default ActionContent
