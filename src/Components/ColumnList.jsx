import { useContext } from "react";
import { ColumnVisibilityContext } from "../ContextApi/ColumnVisibilityContext";
import Styles from "../Styles/ColumnList.module.css"
const ColumnList = ({content}) => {
  const { columnVisibility, setColumnVisibility } = useContext(ColumnVisibilityContext); 
  const handleChanged=()=>{
    setColumnVisibility(prevState=>({
      ...prevState,
      [content.toLowerCase()]:!prevState[content.toLowerCase()]
    })
    )
  }
  return (
    <div className={Styles.columnListContainer}>
      <input 
      type="checkbox" 
      className={Styles.checkBoxInput} 
      checked={columnVisibility[content.toLowerCase()]}
      onChange={handleChanged}
      />
      <p>{content}</p>
    </div>
  )
}

export default ColumnList
