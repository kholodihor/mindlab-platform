import { Route, Routes } from "react-router-dom"
import { ModalProvider } from "./context/ModalContext"
import HeroPage from "./pages/HeroPage"
import HomePage from "./pages/HomePage"
import StudentLayout from "./components/main/studentLayout/StudentLayout"
import SchedulePage from "./pages/SchedulePage"
import SpeakingClubPage from "./pages/SpeakingClubPage"
import EventsPage from "./pages/EventsPage"
import BoardPage from "./pages/BoardPage"
import SupportPage from "./pages/SupportPage"
import StudyingPage from "./pages/StudyingPage"

function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/student" element={<StudentLayout />}>
          <Route path="/student/studying" element={<StudyingPage />} />
          <Route path="/student/schedule" element={<SchedulePage />} />
          <Route path="/student/speaking" element={<SpeakingClubPage />} />
          <Route path="/student/events" element={<EventsPage />} />
          <Route path="/student/board" element={<BoardPage />} />
          <Route path="/student/support" element={<SupportPage />} />
        </Route>
      </Routes>
    </ModalProvider>
  )
}

export default App
