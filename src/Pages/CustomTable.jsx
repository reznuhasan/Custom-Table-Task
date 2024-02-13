import React from 'react'
import Styles from "../Styles/CustomTable.module.css"
const CustomTable = () => {
  return (
    <div>
      <div>
        <h1>Table Title</h1>
        <div>
            <div className={Styles.hamburgerIcon}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CustomTable
