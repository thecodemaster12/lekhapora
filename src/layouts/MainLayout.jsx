import { Link, Outlet } from "react-router-dom"
import { useTranslation } from "react-i18next"
import bdFlag from "../assets/flags/bd-flag.svg"

const MainLayout = () => {
  const { i18n } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex bg-tertiary justify-between items-center h-[80px] shadow-md px-4 sticky top-0">
        <h1 className="logo text-primary text-lg font-bold"> <Link to="/">LekhaPora</Link></h1>
        <div className="flex items-center gap-2">
          <div className="mr-10">
            <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className="outline-none p-2 rounded-md text-sm border border-gray-300"
            >

                <option value="en">
                  🇺🇸 English
                </option>

                <option selected value="bn">
                  🇧🇩 বাংলা
                </option>

            </select>
          </div>
          <button className="btn primary">Sing Up</button>
          <button className="btn outline">Sing In</button>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="flex justify-between items-center bg-tertiary mt-10 py-8 px-6">
        <div className="">
          <h2 className="text-xl font-bold">Lekhapora</h2>
          <p className="text-sm">Empowering the next generation with quality educational resources</p>
        </div>
        <nav>
          <ul className="flex gap-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default MainLayout