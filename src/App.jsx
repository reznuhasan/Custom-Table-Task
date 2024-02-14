import { ColumnVisibilityProvider } from "./ContextApi/ColumnVisibilityContext"
import Table from "./Pages/Table"
import Styles from "./Styles/App.module.css"

function App() {

  return (
    <div className={Styles.app}>
      <ColumnVisibilityProvider>
        <Table />
      </ColumnVisibilityProvider>
    </div>
  )
}

export default App
