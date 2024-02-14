import React, { useContext, useState } from 'react'
import Styles from "../Styles/Table.module.css"
import {  TableColumnDatas, headingNames } from '../ComponentData/Datas'
import { ColumnVisibilityContext } from '../ContextApi/ColumnVisibilityContext'
import TableHeading from '../Components/TableHeading'
import TableRow from '../Components/TableRow'
import AddRemoveList from '../Components/AddRemoveList'
const Table = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { columnVisibility } = useContext(ColumnVisibilityContext)
    return (
        <div className={Styles.tableContainer}>
            {/* **************** Table Header Part Start ****************/}
            <div className={Styles.tableHeader}>
                <h1>Table Title</h1>
                <div className={Styles.menuContainer}>
                    {/* ******** Make Hamburger Icon ************ */}
                    <div className={Styles.hamburgerIcon} onClick={() => setShowMenu(prevState => (!prevState))}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {showMenu &&
                        <div className={Styles.columnAddRemoveMenu}>
                            <div>
                                <h5>Add Or Remove Columns</h5>
                            </div>
                            <div className={Styles.listMenu}>
                                {
                                    headingNames.map((content, index) => <AddRemoveList content={content} key={index} />)
                                }
                            </div>
                        </div>
                    }

                </div>
            </div>
            {/* **************** Table Header Part Finish ****************/}
            <div className={Styles.columnPart}>
                {/* *************** Column Heading Part ****************** */}
                <div className={Styles.columnHeadingDesign}>
                    {
                        // Call Table Heading
                        headingNames.map((content, index) => columnVisibility[content.toLocaleLowerCase()] && <TableHeading content={content} key={index}
                        />
                        )
                    }
                </div>
                <hr />
                <div>
                    {
                        // Call Table Row Ways
                        TableColumnDatas.map((data, index) => (
                            <div key={index} className={Styles.tableRow}>
                                <div className={Styles.tableRowValue}>
                                {
                                    Object.keys(data).map(keyContent =>
                                        columnVisibility[keyContent.toLowerCase()] && <TableRow value={keyContent} key={keyContent} index={index}></TableRow>
                                    )
                                }
                                </div>
                                
                                <div>
                                <hr />
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Table
