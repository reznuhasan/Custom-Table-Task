import React from 'react'
import TitleContent from './TitleContent'
import StatusContent from './StatusContent'
import ActionContent from './ActionContent'
import OtherContent from './OtherContent'
import { TableColumnDatas } from '../ComponentData/Datas'
import Styles from "../Styles/TableRow.module.css"

const TableRow = ({value,index}) => {
   const content=TableColumnDatas[index][value]
  return (
    <div className={Styles.TableRow}>
      {
        value==="title"?<TitleContent content={content}/>:
        value==="status"?<StatusContent content={content}/>:
        value==='action'?<ActionContent content={content}/>:<OtherContent content={content}/>
      }
    </div>
  )
}

export default TableRow
