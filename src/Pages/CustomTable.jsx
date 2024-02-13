import React, { useState } from 'react'
import Styles from "../Styles/CustomTable.module.css"
import ColumnList from '../Components/ColumnList'
const CustomTable = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div>
            {/* **************** Table Header Part Start ****************/}
            <div className={Styles.tableHeader}>
                <h1>Table Title</h1>
                <div className={Styles.menuContainer}>
                    <div className={Styles.hamburgerIcon} onClick={()=>setShowMenu(true)}>
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
                                <ColumnList content={"Title"} />
                                <ColumnList content={"Categories"} />
                                <ColumnList content={"Price"} />
                                <ColumnList content={"Date"} />
                                <ColumnList content={"Author"} />
                                <ColumnList content={"Status"} />
                                <ColumnList content={"Action"} />
                            </div>
                        </div>
                    }

                </div>
            </div>
            {/* **************** Table Header Part Finish ****************/}
            <div>

            </div>
        </div>
    )
}

export default CustomTable
