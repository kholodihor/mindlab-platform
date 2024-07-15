import { Route, Routes } from "react-router-dom"
import HeroPage from "./pages/HeroPage"
import { ModalProvider } from "./context/ModalContext"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </ModalProvider>
  )
}

export default App
