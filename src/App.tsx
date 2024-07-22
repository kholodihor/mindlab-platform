import { Route, Routes } from "react-router-dom"
import HeroPage from "./pages/HeroPage"
import { ModalProvider } from "./context/ModalContext"
import HomePage from "./pages/HomePage"
import StudyingPage from "./pages/StudyingPage"

function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/studying" element={<StudyingPage />} />
      </Routes>
    </ModalProvider>
  )
}

export default App
