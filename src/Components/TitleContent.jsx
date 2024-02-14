import React from 'react'
import Styles from "../Styles/OtherContent.module.css"
const TitleContent = ({content}) => {
    const {text,lesson,topic}=content
  return (
    <div className={Styles.content}>
        <a href="#">{text}</a>
        <p>topic:{topic}</p>
        <p>lesson:{lesson}</p>
    </div>
  )
}

export default TitleContent
