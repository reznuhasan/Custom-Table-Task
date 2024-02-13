import { ColumnVisibilityProvider } from "./ContextApi/ColumnVisibilityContext"
import CustomTable from "./Pages/CustomTable"
import Styles from "./Styles/App.module.css"

function App() {

  return (
    <div className={Styles.app}>
      <ColumnVisibilityProvider>
        <CustomTable />
      </ColumnVisibilityProvider>
    </div>
  )
}

export default App
