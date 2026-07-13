import { Link, Outlet } from "react-router-dom"
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex bg-tertiary justify-between items-center h-[60px] shadow-md px-4 sticky top-0">
        <h1 className="logo text-primary text-lg font-bold"> <Link to="/">LekhaPora</Link></h1>
        <div className="flex gap-2">
          <button className="btn primary">Sing Up</button>
          <button className="btn outline">Sing In</button>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default MainLayout