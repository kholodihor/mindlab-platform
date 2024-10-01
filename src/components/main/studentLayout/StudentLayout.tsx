import { Outlet } from "react-router-dom"
import Sidebar from "../sidebar/Sidebar"

const StudentLayout = () => {
  return (
    <>
      <main>
        <div className="flex min-h-screen bg-background xs:flex-col xl:flex-row">
          <Sidebar />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  )
}

export default StudentLayout
