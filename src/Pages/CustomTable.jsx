import React, { useContext, useState } from 'react'
import Styles from "../Styles/CustomTable.module.css"
import ColumnList from '../Components/ColumnList'
import { ColumnDatas, Contents } from '../ComponentData/ListMenuData'
import { ColumnVisibilityContext } from '../ContextApi/ColumnVisibilityContext'
import CellBox from '../Components/CellBox'
import TableHeading from '../Components/TableHeading'
const CustomTable = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { columnVisibility } = useContext(ColumnVisibilityContext)
    return (
        <div className={Styles.CustomTableContainer}>
            {/* **************** Table Header Part Start ****************/}
            <div className={Styles.tableHeader}>
                <h1>Table Title</h1>
                <div className={Styles.menuContainer}>
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
                                    Contents.map((content, index) => <ColumnList content={content} key={index} />)
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
                        Contents.map((content, index) => columnVisibility[content.toLocaleLowerCase()] && <TableHeading content={content} key={index}
                        />
                        )
                    }
                </div>
                <hr />
                <div>
                    {
                        ColumnDatas.map((data, index) => (
                            <div key={index} className={Styles.tableRow}>
                                <div className={Styles.tableRowValue}>
                                {
                                    Object.keys(data).map(keyContent =>
                                        columnVisibility[keyContent.toLowerCase()] && <CellBox value={keyContent} key={keyContent} index={index}></CellBox>
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

export default CustomTable
