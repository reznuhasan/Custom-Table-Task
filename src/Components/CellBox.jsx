import React from 'react'
import TitleContent from './TitleContent'
import StatusContent from './StatusContent'
import ActionContent from './ActionContent'
import OtherContent from './OtherContent'
import { ColumnDatas } from '../ComponentData/ListMenuData'
import Styles from "../Styles/CellBox.module.css"

const CellBox = ({value,index}) => {
   const content=ColumnDatas[index][value]
  return (
    <div className={Styles.cellBox}>
      {
        value==="title"?<TitleContent content={content}/>:
        value==="status"?<StatusContent content={content}/>:
        value==='action'?<ActionContent content={content}/>:<OtherContent content={content}/>
      }
    </div>
  )
}

export default CellBox
