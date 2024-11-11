import { Outlet } from "react-router-dom"
import Header from "../components/Header"

export default function Root() {
  return(
    <div className="min-h-screen bg-gray-50">
    <Header />
    <main className="container mx-auto px-4 py-8">
      <Outlet />
    </main>
  </div>
  )
}