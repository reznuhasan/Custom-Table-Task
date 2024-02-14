import Styles from "../Styles/TableHeading.module.css"
const TableHeading = ({content}) => {
  return (
    <div className={Styles.tableHeading}>
      <h3>{content}</h3>
    </div>
  )
}

export default TableHeading
