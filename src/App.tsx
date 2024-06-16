import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { ModalProvider } from "./context/ModalContext"

function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ModalProvider>
  )
}

export default App
