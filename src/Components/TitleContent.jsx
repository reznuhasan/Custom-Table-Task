import React from 'react'

const TitleContent = ({content}) => {
    const {text,lesson,topic}=content
  return (
    <div>
        <a href="#">{text}</a>
        <p>topic:{topic}</p>
        <p>lesson:{lesson}</p>
    </div>
  )
}

export default TitleContent
